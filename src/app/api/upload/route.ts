import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(req: NextRequest) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Blob storage not configured.' },
        { status: 500 },
      )
    }

    const form = await req.formData()
    const file = form.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 })
    }

    // Only allow images
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, error: 'Only image files are allowed.' },
        { status: 400 },
      )
    }

    // 10 MB limit
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File too large. Max 10 MB.' },
        { status: 400 },
      )
    }

    const blob = await put(`uploads/${Date.now()}-${file.name}`, file, {
      access: 'public',
      token,
    })

    return NextResponse.json({ success: true, url: blob.url })
  } catch (err) {
    console.error('[blob-upload]', err)
    return NextResponse.json(
      { success: false, error: 'Upload failed. Please try again.' },
      { status: 500 },
    )
  }
}
