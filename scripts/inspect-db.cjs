require('dotenv').config({ path: '.env.development' })

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

async function main() {
  const cols = await pool.query(
    `
      select column_name
      from information_schema.columns
      where table_schema = $1
        and table_name = $2
        and column_name = any($3)
      order by column_name
    `,
    ['public', 'payload_locked_documents_rels', ['solutions_id', 'hero_slides_id', 'contact_submissions_id']],
  )

  console.log('columns:', cols.rows.map((row) => row.column_name).join(', ') || '(none)')

  const activity = await pool.query(
    `
      select pid, state, wait_event_type, wait_event, left(query, 120) as query
      from pg_stat_activity
      where datname = current_database()
        and pid != pg_backend_pid()
        and (state != $1 or wait_event_type is not null)
      order by pid
    `,
    ['idle'],
  )

  console.table(activity.rows)

  const migrations = await pool.query(
    `
      select name, batch, updated_at
      from payload_migrations
      order by updated_at
    `,
  )

  console.table(migrations.rows)

  const tables = await pool.query(
    `
      select table_name
      from information_schema.tables
      where table_schema = $1
        and table_name = any($2)
      order by table_name
    `,
    [
      'public',
      [
        'solutions',
        'solutions_features',
        'about_page',
        'about_page_features',
        'careers_page',
        'careers_page_benefits',
        'careers_page_traits',
        'partners_page',
        'partners_page_logos',
        'contact_page',
        'contact_page_locations',
      ],
    ],
  )

  console.log('tables:', tables.rows.map((row) => row.table_name).join(', ') || '(none)')

  await pool.query(`
    select
      "payload_locked_documents"."id",
      "payload_locked_documents"."global_slug",
      "payload_locked_documents_rels"."data" as "_rels"
    from "payload_locked_documents" "payload_locked_documents"
    left join lateral (
      select coalesce(json_agg(json_build_array(
        "payload_locked_documentsrels"."order",
        "payload_locked_documentsrels"."path",
        "payload_locked_documentsrels"."solutions_id"
      ) order by "payload_locked_documentsrels"."order" asc), '[]'::json) as "data"
      from (
        select *
        from "payload_locked_documents_rels" "payload_locked_documentsrels"
        where "payload_locked_documentsrels"."parent_id" = "payload_locked_documents"."id"
        order by "payload_locked_documentsrels"."order" asc
      ) "payload_locked_documentsrels"
    ) "payload_locked_documents_rels" on true
    where "payload_locked_documents"."global_slug" is not null
    order by "payload_locked_documents"."created_at" desc
    limit 1
  `)

  console.log('locked-documents relation query: ok')

  const solutions = await pool.query(`
    select id, slug, title
    from solutions
    order by "order" nulls last, id
    limit 20
  `)

  console.log('solutions:')
  console.table(solutions.rows)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await pool.end()
  })
