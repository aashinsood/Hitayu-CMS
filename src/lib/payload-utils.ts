import { getPayload } from 'payload'
import config from '@/payload.config'

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null
let initFailed = false

async function getPayloadInstance() {
  if (initFailed) return null
  if (cachedPayload) return cachedPayload
  try {
    cachedPayload = await getPayload({ config })
    return cachedPayload
  } catch {
    initFailed = true
    return null
  }
}

export async function getServices() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'services', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getPricingPlans() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'pricing-plans', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getTestimonials() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'testimonials', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getAboutItems() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'about-items', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getFAQs() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'faqs', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getHeroSlides() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({
      collection: 'hero-slides',
      sort: 'order',
      depth: 1, // populate the image relationship
    })
    // Return only what the slider needs — filter guarantees url is string (not null)
    return docs
      .map((doc: any) => ({
        url: (doc.image as any)?.url as string | undefined,
        alt: doc.alt as string,
      }))
      .filter((s): s is { url: string; alt: string } => typeof s.url === 'string')
  } catch {
    return []
  }
}

export async function getSiteSettings() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    const { docs } = await payload.find({ collection: 'site-settings', limit: 1 })
    return docs[0] || null
  } catch {
    return null
  }
}
