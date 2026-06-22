import dotenv from 'dotenv'
import { getPayload } from 'payload'
import config from '../src/payload.config'

dotenv.config({ path: '.env.development' })

async function main() {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'solutions' as any,
    where: {
      slug: {
        equals: 'smb-in-a-box',
      },
    },
    limit: 1,
  })

  const doc = result.docs[0]
  if (!doc) {
    throw new Error('Payload could not find solution slug: smb-in-a-box')
  }

  console.log(`Payload solution lookup ok: ${doc.slug}`)
}

main()
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    process.exit()
  })
