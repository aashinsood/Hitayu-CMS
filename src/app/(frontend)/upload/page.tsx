'use client'

import { useState, useRef } from 'react'

export default function UploadPage() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    if (!file) return
    setStatus('uploading')
    setError('')
    setUrl('')
    setCopied(false)

    const form = new FormData()
    form.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: form })
      const json = await res.json()
      if (res.ok && json.success) {
        setUrl(json.url)
        setStatus('done')
      } else {
        setError(json.error || 'Upload failed.')
        setStatus('error')
      }
    } catch {
      setError('Network error. Try again.')
      setStatus('error')
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  function copy() {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f6f9fd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 8px 40px rgba(0,0,0,.10)',
          padding: 48,
          maxWidth: 540,
          width: '100%',
        }}
      >
        <h1 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#252b6e', marginBottom: 6 }}>
          Image Uploader
        </h1>
        <p style={{ color: '#4a5568', fontSize: '0.9rem', marginBottom: 32 }}>
          Upload an image → copy the URL → paste it in the admin panel (Hero Slides → Image URL
          field).
        </p>

        {/* Drop zone */}
        <div
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          style={{
            border: '2px dashed #dde6f0',
            borderRadius: 14,
            padding: '48px 24px',
            textAlign: 'center',
            cursor: 'pointer',
            background: status === 'uploading' ? '#f0faff' : '#f6f9fd',
            transition: 'all .2s',
            marginBottom: 24,
          }}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
          {status === 'uploading' ? (
            <>
              <div style={{ fontSize: '2rem', marginBottom: 12 }}>⏳</div>
              <p style={{ color: '#009bb5', fontWeight: 700 }}>Uploading…</p>
            </>
          ) : (
            <>
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📁</div>
              <p style={{ fontWeight: 700, color: '#252b6e' }}>Click or drag an image here</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: 6 }}>
                PNG, JPG, WebP — max 10 MB
              </p>
            </>
          )}
        </div>

        {/* Error */}
        {status === 'error' && (
          <div
            style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              color: '#B91C1C',
              borderRadius: 10,
              padding: '12px 16px',
              marginBottom: 20,
              fontSize: '0.9rem',
            }}
          >
            ❌ {error}
          </div>
        )}

        {/* Success — URL */}
        {status === 'done' && url && (
          <div>
            <p style={{ fontWeight: 700, color: '#252b6e', marginBottom: 10 }}>
              ✅ Uploaded! Copy this URL:
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <input
                readOnly
                value={url}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  border: '1.5px solid #dde6f0',
                  borderRadius: 10,
                  fontSize: '0.8rem',
                  color: '#252b6e',
                  background: '#f6f9fd',
                  outline: 'none',
                }}
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                onClick={copy}
                style={{
                  padding: '10px 20px',
                  background: copied ? '#10b981' : '#252b6e',
                  color: '#fff',
                  borderRadius: 10,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background .2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy URL'}
              </button>
            </div>

            {/* Preview */}
            <div
              style={{
                marginTop: 20,
                borderRadius: 12,
                overflow: 'hidden',
                border: '1.5px solid #dde6f0',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt="Uploaded"
                style={{ width: '100%', maxHeight: 240, objectFit: 'cover', display: 'block' }}
              />
            </div>

            <button
              onClick={() => {
                setStatus('idle')
                setUrl('')
              }}
              style={{
                marginTop: 16,
                color: '#009bb5',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
              }}
            >
              Upload another image →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
