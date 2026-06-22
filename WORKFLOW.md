# Hitayu CMS — Workflow & Troubleshooting Guide

A reference for working with this project day-to-day: editing content, running database migrations, and fixing the connection issues that come up with Neon's free tier.

---

## 1. The Quick-Reference Rule

Three things in this project are **completely independent** — changing one does NOT change the others:

| What you're touching | Where it's configured |
|---|---|
| `pnpm dev` (your local site) | `.env.development` |
| Your **live** website (`hitayu-cms.vercel.app`) | Vercel dashboard → Settings → Environment Variables |
| A manual command like `pnpm payload migrate` | Whatever `$env:DATABASE_URL` is currently set to in your open PowerShell window |

If something "isn't working" after a change, the first question is always: **which database was that command actually pointed at?**

---

## 2. The Easy Way — `manage.ps1`

Instead of remembering commands and copy-pasting connection strings, run:

```
.\scripts\manage.ps1
```

(If PowerShell blocks it, run once: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`)

It gives you a menu:

```
1) Start local dev server
2) Run migrations on LOCAL db
3) Run migrations on PRODUCTION db
4) Seed Services/Solutions on LOCAL db
5) Seed Services/Solutions on PRODUCTION db
6) Generate a new migration file from local schema changes
```

It reads the correct database URL automatically from `.env.development` or `.env.production` and prints it before doing anything, so you always know what you're about to touch.

**Important:** `.env.production` on your computer is just a *local copy* of what should be in Vercel. If you change the database URL in Vercel's dashboard, update `.env.production` here too (and vice versa) — otherwise option 3/5 above will use stale info.

---

## 3. Editing Website Content (Admin)

Go to `/admin` (locally: `localhost:3000/admin`, live: `hitayu-cms.vercel.app/admin`).

Two kinds of things in the sidebar:

- **Collections** — repeatable lists: Services, Solutions, Testimonials, Pricing Plans, Posts, Media, Contact Submissions. Click "Create New" to add more.
- **Globals** — one-per-page settings: About Us Page, Careers Page, Partners Page, Contact Page, Site Settings. Each is a single document you edit and save.

**To add a new Service or Solution:** Admin → Services (or Solutions) → Create New → fill in title, slug (lowercase-with-hyphens — becomes the URL), category, description, image → Save. It appears on the site immediately, no redeploy needed.

**To edit existing page text/images:** Admin → Globals → pick the page → edit → Save. Changes show up on refresh immediately (pages are server-rendered live from the database).

**Images:** every image field has an "Upload" button and a "URL" text field. **Use the URL field** — go to `/upload` on the site, drop your image, copy the URL it gives you, paste it into the URL field. The native "Upload" button works locally but fails in production (Vercel's filesystem is read-only), so always use the URL method to stay safe in both places.

---

## 4. When You Add New CMS Fields (Developer Workflow)

Every time new fields/collections get added to the code (e.g. a new Service field), the database needs a matching migration before production will work. The order is always:

1. Run `pnpm dev` locally and let it auto-sync the schema (type `yes` if prompted, unless it warns about deleting data you care about — read the warning).
2. Run **option 6** in `manage.ps1` (or `pnpm payload migrate:create`) to generate a migration file describing what changed.
3. Run **option 3** in `manage.ps1` (or `pnpm migrate:retry` with production's `DATABASE_URL` set) to apply it to production.
4. Commit and push the new migration file along with your code changes.

Skipping steps 2–3 is the single most common cause of "admin panel won't load" errors — the code expects database columns/tables that don't exist yet in production.

---

## 5. Common Errors & What They Actually Mean

### `ETIMEDOUT` connecting to Neon
Not a code bug — your connection to Neon timed out. Usually one of:
- Neon's free-tier database was asleep and didn't wake up in time (just retry — `pnpm migrate:retry` does this automatically, 6 attempts with 10s delays)
- A VPN, firewall, or flaky network connection
- Check **console.neon.tech** to confirm the project shows "Active"

### `sslmode=require&channel_binding=require` causing connection problems
Remove these from the `DATABASE_URL`. This project handles SSL itself in `payload.config.ts` (`rejectUnauthorized: false`), so the URL should just be:
```
postgresql://user:pass@host/neondb?connect_timeout=30
```

### `relation "xyz" already exists` or `type "xyz" already exists` when migrating
Means the database already has that table/type from a previous partial run (often caused by running `pnpm dev` once while accidentally pointed at production). All current migrations in this repo have already been made idempotent (they check before creating), so this shouldn't recur — but if a *new* migration hits this, it needs the same treatment: wrap `CREATE TYPE` in a `DO $$ BEGIN ... EXCEPTION WHEN duplicate_object THEN null; END $$;` block, and add `IF NOT EXISTS` to `CREATE TABLE` / `ADD COLUMN` / `CREATE INDEX`.

### Admin shows a blank page with no error anywhere
This is what happened repeatedly with the `@payloadcms/storage-vercel-blob` plugin — it crashes the entire admin UI with zero error output in server or browser logs. **Do not re-add this plugin.** Image uploads go through the custom `/upload` page instead (see Section 3).

### 404 on a page like `/solutions/some-slug`
The page code exists — this means the database has no matching row yet. Run the seed script (`manage.ps1` option 4 or 5) against whichever database that environment is actually using.

---

## 6. Local Database Options

`.env.development` can point to either:

```dotenv
# Option A — Neon (cloud, no Docker needed)
DATABASE_URL=postgresql://...neon.tech/neondb?connect_timeout=30

# Option B — Docker Postgres (fully offline, but a separate empty database)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/hitayu_dev
```

Only one should be uncommented at a time. Docker requires `pnpm db:up` first (starts the container) and is useful when Neon is unreachable — but remember it's a **separate, empty database** with none of your seeded content, so don't be surprised if pages look empty there.

---

## 7. Image Uploads — Why Not the Native Admin Upload?

Payload's built-in "Upload" feature tries to write the image file to the server's local disk. That works fine when running locally, but **fails silently or with a generic error on Vercel**, because Vercel's filesystem is read-only at runtime. Rather than fight that with a storage plugin (which has crashed the entire admin panel three separate times in this project — see Section 5), this project uses:

- `/upload` page → drag an image → uploads directly to Vercel Blob storage via `@vercel/blob`
- Copy the resulting URL → paste into the "Image URL" field on whatever you're editing

This is one extra copy-paste step, but it's reliable everywhere.
