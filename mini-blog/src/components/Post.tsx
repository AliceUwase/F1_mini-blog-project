import type { Post as PostType } from '../types/Post'

type PostProps = {
    post: PostType
}

export default function Post({ post }: PostProps) {
    // Check if the author is a featured author
    const isFeaturedAuthor = post.author === 'Keza Grace'

    return (
        // apply a different class name based on whether the author is featured or not
        <article className={isFeaturedAuthor ? 'post featured' : 'post'}>
            <h2>{post.title}</h2>

            <p>
                By {post.author} | {post.date}
            </p>

            <p>{post.content}</p>

          {/* display a different label based on whether the author is featured or not */}
            <span
             style={{
                color: isFeaturedAuthor ? '#b35309' : '#67418b',
                fontWeight: isFeaturedAuthor ? 'bold' : 'normal',
             }}
            >
               {isFeaturedAuthor ? 'Featured author' : 'Community post'} 
            </span>
        </article>
    )
}