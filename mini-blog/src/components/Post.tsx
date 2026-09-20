import { memo } from 'react'
import './Post.css'
import type { Post as PostType } from '../types/Post'

type PostProps = {
  post: PostType
}

function Post({ post }: PostProps) {
  const isFeaturedAuthor = post.author === 'Keza Grace'

  return (
    <article className={isFeaturedAuthor ? 'post featured' : 'post'}>
      <div className="post-top">
        <span className="post-tag">
          {isFeaturedAuthor ? 'OOP' : 'Design Patterns'}
        </span>

        {isFeaturedAuthor && (
          <span className="featured-status">• Featured</span>
        )}

        <time dateTime={post.date}>▣ {post.date}</time>
      </div>

      <h3>{post.title}</h3>

      <p className="post-content">{post.content}</p>

      <p className="post-author">Posted by {post.author}</p>
    </article>
  )
}

export default memo(Post)