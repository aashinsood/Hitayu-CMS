require('dotenv').config({ path: '.env.development' })

const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

const solutions = [
  {
    slug: 'smb-in-a-box',
    icon: 'fas fa-box-open',
    tag: 'All-in-One',
    title: 'SMB-in-a-Box',
    tagline: 'From setup to success - everything SMBs need in one place',
    description:
      'A comprehensive, all-in-one offering designed to equip small and medium businesses with everything they need to operate, grow, and scale.',
    fullDescription:
      'Our SMB-in-a-Box solution combines essential business tools, cloud infrastructure, digital presence, implementation support, and one year of dedicated assistance into a single managed package. It gives small and medium businesses a scalable foundation to run operations while focusing on growth.',
    order: 1,
  },
  {
    slug: 'web-hosting-launch-kit',
    icon: 'fas fa-globe',
    tag: 'Hosting',
    title: 'Web Hosting Launch Kit',
    tagline: 'From zero to online - made simple',
    description:
      'A secure, scalable, and fully managed hosting environment designed specifically for new and growing businesses.',
    fullDescription:
      'Launch your digital presence with a managed hosting environment built for performance, security, database support, email support, and flexible cloud provider choice. We handle the infrastructure so your team can focus on building the business.',
    order: 2,
  },
  {
    slug: 'dr-jumpstart-bundle',
    icon: 'fas fa-life-ring',
    tag: 'Resilience',
    title: 'DR Jumpstart Bundle',
    tagline: 'Your safety net in a digital world',
    description:
      'A reliable, fully managed recovery environment with a guaranteed RTO of 30 minutes and RPO of 15 minutes.',
    fullDescription:
      'The DR Jumpstart Bundle helps protect critical systems and data with replication, monitoring alerts, audit logging, managed infrastructure, and fast recovery targets designed to keep operations resilient during disruptions.',
    order: 3,
  },
  {
    slug: 'backup-solution-kit',
    icon: 'fas fa-archive',
    tag: 'Backup',
    title: 'Backup Solution Kit',
    tagline: 'Protect what matters, effortlessly',
    description:
      'Secure, scalable, and fully managed backup services replacing the limitations of physical tape libraries.',
    fullDescription:
      'Modernize your backup strategy with managed cloud backup and archival storage. The solution supports secure backup workflows, flexible retention options, and ongoing monitoring and optimization by our team.',
    order: 4,
  },
  {
    slug: 'database-starter-kit',
    icon: 'fas fa-database',
    tag: 'Data',
    title: 'Database Starter Kit',
    tagline: 'Databases made simple - we handle the rest',
    description:
      'Seamless Greenfield cloud database deployment with minimal downtime and zero disruption to your operations.',
    fullDescription:
      'Build a strong data foundation with cloud database deployment, high availability, automated volume backups, fast data transfer, audit logging, and managed support from deployment through optimization.',
    order: 5,
  },
  {
    slug: 'storage-kit-for-smbs',
    icon: 'fas fa-hdd',
    tag: 'Storage',
    title: 'Storage Kit for SMBs',
    tagline: 'Secure, scalable, fully managed cloud storage for growing businesses',
    description:
      'A reliable platform for storing and managing your static files in the cloud, with easy access, high availability, and seamless scalability.',
    fullDescription:
      'The Storage Kit for SMBs provides managed cloud storage with scalable capacity, secure access, high availability, monitoring, and security controls so growing teams can store and manage files with confidence.',
    order: 6,
  },
  {
    slug: 'bi-solution-kit',
    icon: 'fas fa-chart-pie',
    tag: 'Analytics',
    title: 'Business Intelligence (BI) Solution Kit',
    tagline: 'Unlock the full potential of your data',
    description:
      'Scalable, subscription-based analytics that let you visualize data, generate actionable insights, and collaborate seamlessly.',
    fullDescription:
      'The BI Solution Kit helps teams connect data sources, build reporting pipelines, visualize performance, and turn business data into actionable insights through scalable cloud analytics.',
    order: 7,
  },
]

async function main() {
  for (const solution of solutions) {
    await pool.query(
      `
        insert into solutions (
          slug,
          icon,
          tag,
          title,
          tagline,
          description,
          full_description,
          "order",
          created_at,
          updated_at
        )
        values ($1, $2, $3, $4, $5, $6, $7, $8, now(), now())
        on conflict (slug) do update set
          icon = excluded.icon,
          tag = excluded.tag,
          title = excluded.title,
          tagline = excluded.tagline,
          description = excluded.description,
          full_description = excluded.full_description,
          "order" = excluded."order",
          updated_at = now()
      `,
      [
        solution.slug,
        solution.icon,
        solution.tag,
        solution.title,
        solution.tagline,
        solution.description,
        solution.fullDescription,
        solution.order,
      ],
    )
  }

  console.log(`Seeded ${solutions.length} solutions.`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(async () => {
    await pool.end()
  })
