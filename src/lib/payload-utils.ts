import { getPayload } from 'payload'
import config from '@/payload.config'

let cached: any = null

async function getPayloadInstance() {
  if (cached) {
    return cached
  }
  cached = await getPayload({ config })
  return cached
}

export async function getServices() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'services',
    sort: 'order',
  })
  return docs
}

export async function getPricingPlans() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'pricing-plans',
    sort: 'order',
  })
  return docs
}

export async function getTestimonials() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'testimonials',
    sort: 'order',
  })
  return docs
}

export async function getAboutItems() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'about-items',
    sort: 'order',
  })
  return docs
}

export async function getSiteSettings() {
  const payload = await getPayloadInstance()
  const { docs } = await payload.find({
    collection: 'site-settings',
    limit: 1,
  })
  return docs[0] || null
}
