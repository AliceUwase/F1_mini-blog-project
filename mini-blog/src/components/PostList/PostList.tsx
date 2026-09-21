import './PostList.css'
import Post from '../Post/Post'
import type { Post as PostType } from '../../types/Post'
import withLogger from '../../hoc/withLogger'


const posts: PostType[] = [
    
    {
        id:1,
        title: 'Understanding OOP.',
        author: 'Alice Uwase',
        content: 'OOP is one of most fundamental software engineering paradigm that every Software Engineer must grasp when entering the Software Engineering world as a Java Programmer.',
        date: '2026-09-16',
        featured: true,
    },
    {
        id:2,
        title: '7 Design Patterns Python Devs Should Know',
        author: 'Lisa Kami',
        content: 'Simple and practical explanation of 7 common design patterns in Python with clear runnable examples and trade-offs for real projects.',
        date: '2026-09-17',
        featured: false,
    },
    {
        id:3,
        title: 'Interview Mistakes That Can Cost You the Job',
        author: 'Spike Lee',
        content: 'Interviews can be nerve-wracking, but proper preparation helps candidates avoid common mistakes.',
        date: '2026-09-18',
        featured: false,
    },
    
]

function PostList() {
  return (
    <main className="post-page">
      <p className="section-label">PUBLICATIONS</p>
      <h2 className="page-title">Latest Posts</h2>

      <section className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}

export default withLogger(PostList, 'PostList')  