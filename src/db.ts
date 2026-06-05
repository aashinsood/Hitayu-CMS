import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  console.error(
    'DATABASE_URL is not defined in the environment. Add it to .env or your deployment environment.',
  )
  process.exit(1)
}

let pool: Pool

try {
  pool = new Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  })
} catch (error) {
  console.error('Failed to create database pool:', error)
  process.exit(1)
}

export default pool
