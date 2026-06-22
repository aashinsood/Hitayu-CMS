require('dotenv').config({ path: '.env.development' })

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

async function run(sql) {
  await pool.query(sql)
}

async function main() {
  await run(`
    create table if not exists "solutions" (
      "id" serial primary key not null,
      "icon" varchar default 'fas fa-box-open',
      "tag" varchar,
      "title" varchar not null,
      "slug" varchar not null,
      "tagline" varchar,
      "description" varchar not null,
      "full_description" varchar,
      "image_url" varchar,
      "solution_image_id" integer,
      "order" numeric default 0,
      "updated_at" timestamp(3) with time zone default now() not null,
      "created_at" timestamp(3) with time zone default now() not null
    );

    create table if not exists "solutions_features" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "title" varchar not null,
      "description" varchar
    );

    create table if not exists "careers_page" (
      "id" serial primary key not null,
      "eyebrow" varchar,
      "title_line1" varchar,
      "title_highlight" varchar,
      "title_line2" varchar,
      "description" varchar,
      "image_url" varchar,
      "image_id" integer,
      "benefits_eyebrow" varchar,
      "benefits_title" varchar,
      "traits_eyebrow" varchar,
      "traits_title" varchar,
      "cta_title" varchar,
      "cta_description" varchar,
      "cta_button_text" varchar,
      "cta_button_url" varchar,
      "careers_email" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    create table if not exists "about_page_features" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "icon" varchar default 'fas fa-rocket',
      "title" varchar not null
    );

    create table if not exists "careers_page_benefits" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "icon" varchar default 'fas fa-star',
      "title" varchar not null,
      "description" varchar
    );

    create table if not exists "careers_page_traits" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "text" varchar not null
    );

    create table if not exists "partners_page" (
      "id" serial primary key not null,
      "eyebrow" varchar,
      "title_line1" varchar,
      "title_highlight" varchar,
      "title_line2" varchar,
      "description" varchar,
      "image_url" varchar,
      "image_id" integer,
      "logos_eyebrow" varchar,
      "logos_title" varchar,
      "logos_description" varchar,
      "tagline" varchar,
      "cta_button_text" varchar,
      "cta_button_url" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    create table if not exists "partners_page_logos" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "icon" varchar default 'fas fa-cloud',
      "label" varchar not null
    );

    create table if not exists "contact_page" (
      "id" serial primary key not null,
      "page_eyebrow" varchar,
      "page_title" varchar,
      "offices_eyebrow" varchar,
      "offices_title" varchar,
      "business_hours" varchar,
      "emergency_support" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    create table if not exists "contact_page_locations" (
      "_order" integer not null,
      "_parent_id" integer not null,
      "id" varchar primary key not null,
      "title" varchar not null,
      "address" varchar not null,
      "phone" varchar,
      "image_id" integer,
      "image_url" varchar,
      "icon" varchar default 'fas fa-map-marker-alt'
    );

    alter table "payload_locked_documents_rels"
      add column if not exists "solutions_id" integer;

    create unique index if not exists "solutions_slug_idx"
      on "solutions" using btree ("slug");
    create index if not exists "solutions_solution_image_idx"
      on "solutions" using btree ("solution_image_id");
    create index if not exists "solutions_updated_at_idx"
      on "solutions" using btree ("updated_at");
    create index if not exists "solutions_created_at_idx"
      on "solutions" using btree ("created_at");
    create index if not exists "solutions_features_order_idx"
      on "solutions_features" using btree ("_order");
    create index if not exists "solutions_features_parent_id_idx"
      on "solutions_features" using btree ("_parent_id");

    create index if not exists "careers_page_image_idx"
      on "careers_page" using btree ("image_id");
    create index if not exists "about_page_features_order_idx"
      on "about_page_features" using btree ("_order");
    create index if not exists "about_page_features_parent_id_idx"
      on "about_page_features" using btree ("_parent_id");
    create index if not exists "careers_page_benefits_order_idx"
      on "careers_page_benefits" using btree ("_order");
    create index if not exists "careers_page_benefits_parent_id_idx"
      on "careers_page_benefits" using btree ("_parent_id");
    create index if not exists "careers_page_traits_order_idx"
      on "careers_page_traits" using btree ("_order");
    create index if not exists "careers_page_traits_parent_id_idx"
      on "careers_page_traits" using btree ("_parent_id");

    create index if not exists "partners_page_image_idx"
      on "partners_page" using btree ("image_id");
    create index if not exists "partners_page_logos_order_idx"
      on "partners_page_logos" using btree ("_order");
    create index if not exists "partners_page_logos_parent_id_idx"
      on "partners_page_logos" using btree ("_parent_id");

    create index if not exists "contact_page_locations_order_idx"
      on "contact_page_locations" using btree ("_order");
    create index if not exists "contact_page_locations_parent_id_idx"
      on "contact_page_locations" using btree ("_parent_id");
    create index if not exists "contact_page_locations_image_idx"
      on "contact_page_locations" using btree ("image_id");

    create index if not exists "payload_locked_documents_rels_solutions_id_idx"
      on "payload_locked_documents_rels" using btree ("solutions_id");
  `)

  const constraintStatements = [
    `alter table "solutions_features" add constraint "solutions_features_parent_id_fk" foreign key ("_parent_id") references "public"."solutions"("id") on delete cascade on update no action`,
    `alter table "solutions" add constraint "solutions_solution_image_id_media_id_fk" foreign key ("solution_image_id") references "public"."media"("id") on delete set null on update no action`,
    `alter table "payload_locked_documents_rels" add constraint "payload_locked_documents_rels_solutions_fk" foreign key ("solutions_id") references "public"."solutions"("id") on delete cascade on update no action`,
    `alter table "about_page_features" add constraint "about_page_features_parent_id_fk" foreign key ("_parent_id") references "public"."about_page"("id") on delete cascade on update no action`,
    `alter table "careers_page_benefits" add constraint "careers_page_benefits_parent_id_fk" foreign key ("_parent_id") references "public"."careers_page"("id") on delete cascade on update no action`,
    `alter table "careers_page_traits" add constraint "careers_page_traits_parent_id_fk" foreign key ("_parent_id") references "public"."careers_page"("id") on delete cascade on update no action`,
    `alter table "careers_page" add constraint "careers_page_image_id_media_id_fk" foreign key ("image_id") references "public"."media"("id") on delete set null on update no action`,
    `alter table "partners_page_logos" add constraint "partners_page_logos_parent_id_fk" foreign key ("_parent_id") references "public"."partners_page"("id") on delete cascade on update no action`,
    `alter table "partners_page" add constraint "partners_page_image_id_media_id_fk" foreign key ("image_id") references "public"."media"("id") on delete set null on update no action`,
    `alter table "contact_page_locations" add constraint "contact_page_locations_parent_id_fk" foreign key ("_parent_id") references "public"."contact_page"("id") on delete cascade on update no action`,
    `alter table "contact_page_locations" add constraint "contact_page_locations_image_id_media_id_fk" foreign key ("image_id") references "public"."media"("id") on delete set null on update no action`,
  ]

  for (const statement of constraintStatements) {
    await run(`
      do $$
      begin
        ${statement};
      exception
        when duplicate_object then null;
        when undefined_table then null;
      end $$;
    `)
  }

  const result = await pool.query(`
    select column_name
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'payload_locked_documents_rels'
      and column_name = 'solutions_id'
  `)

  if (result.rowCount !== 1) {
    throw new Error('Failed to add payload_locked_documents_rels.solutions_id')
  }

  console.log('Payload schema repair complete.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await pool.end()
  })
