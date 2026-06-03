import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import '../../styles.css'

export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const posts = await payload.find({
      collection: 'posts',
      limit: 100,
    })

    return posts.docs.map((post: any) => ({
      id: String(post.id),
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const post = await payload.findByID({
      collection: 'posts',
      id: params.id,
    })

    return {
      title: `${post.title} - Blog`,
      description: post.content?.substring(0, 150) || 'Read this post',
    }
  } catch (error) {
    return {
      title: 'Post Not Found',
      description: 'This post does not exist',
    }
  }
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let post = null
  let error = null

  try {
    post = await payload.findByID({
      collection: 'posts',
      id: params.id,
    })
  } catch (err) {
    error = 'Post not found'
    console.error('Error fetching post:', err)
  }

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-content">
          <h1>Your Website</h1>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/posts">Blog</Link>
            <Link href="/admin">Admin Panel</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {error ? (
          <div className="empty-state">
            <h2>Post Not Found</h2>
            <p>The post you're looking for doesn't exist.</p>
            <Link href="/posts">← Back to Posts</Link>
          </div>
        ) : post ? (
          <article className="post-full">
            <Link href="/posts" className="back-link">
              ← Back to Posts
            </Link>
            <h1>{post.title}</h1>
            <div className="post-content">
              {post.content}
            </div>
          </article>
        ) : (
          <div className="empty-state">
            <p>Loading...</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Website. Powered by Payload CMS.</p>
      </footer>
    </div>
  )
}
