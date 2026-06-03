import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import '../styles.css'

export const metadata = {
  title: 'Blog - Headless CMS',
  description: 'Read our latest blog posts',
}

export default async function PostsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  let posts: any[] = []
  try {
    const postsData = await payload.find({
      collection: 'posts',
      limit: 50,
    })
    posts = postsData.docs || []
  } catch (error) {
    console.error('Error fetching posts:', error)
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
        <h2>All Posts</h2>

        {posts.length > 0 ? (
          <div className="posts-grid">
            {posts.map((post: any) => (
              <article key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p className="excerpt">{post.content?.substring(0, 100)}...</p>
                <Link href={`/posts/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No posts yet. <Link href="/admin">Create some content</Link> in the admin panel.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Website. Powered by Payload CMS.</p>
      </footer>
    </div>
  )
}
