/**
 * Runs `payload migrate` and automatically retries on connection failures
 * (Neon free-tier cold starts and transient network blips cause occasional
 * ETIMEDOUT errors that usually succeed if you just try again a few seconds
 * later). This wraps that retry loop so you don't have to do it by hand.
 *
 * Usage (PowerShell):
 *   $env:DATABASE_URL="..."
 *   $env:PAYLOAD_SECRET="..."
 *   pnpm migrate:retry
 */
import { spawnSync } from 'child_process'

const MAX_ATTEMPTS = 6
const DELAY_MS = 10000

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function run() {
  if (!process.env.DATABASE_URL) {
    console.error('\n❌ DATABASE_URL is not set in this terminal session.')
    console.error('Set it first, e.g.:')
    console.error('  $env:DATABASE_URL="postgresql://...your Neon URL..."')
    console.error('  $env:PAYLOAD_SECRET="your-secret"')
    process.exit(1)
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    console.log(`\n=== Migration attempt ${attempt}/${MAX_ATTEMPTS} ===`)
    const result = spawnSync('pnpm', ['payload', 'migrate'], {
      stdio: 'inherit',
      shell: true,
      env: process.env,
    })

    if (result.status === 0) {
      console.log('\n✅ Migration succeeded.')
      process.exit(0)
    }

    console.log(`\n⚠️  Attempt ${attempt} failed (exit code ${result.status}).`)
    if (attempt < MAX_ATTEMPTS) {
      console.log(`Waiting ${DELAY_MS / 1000}s before retrying (letting Neon wake up / network recover)...`)
      await sleep(DELAY_MS)
    }
  }

  console.error(
    '\n❌ All ' +
      MAX_ATTEMPTS +
      ' attempts failed. This is no longer a transient blip — check:\n' +
      '  1. https://console.neon.tech — is your project Active (not suspended/deleted)?\n' +
      '  2. Your internet connection / VPN / firewall.\n' +
      '  3. Run: Test-NetConnection -ComputerName ep-withered-truth-apc8a2r3-pooler.c-7.us-east-1.aws.neon.tech -Port 5432',
  )
  process.exit(1)
}

run()
