import Post from './Post'
import type { Post as PostType } from '../types/Post'

const posts: PostType[] = [
    
    {
        id:1,
        title: 'Understanding OOP.',
        author: 'Keza Grace',
        content: 'OOP is one of most fundamental software engineering paradigm that every Software Engineer must grasp when entering the Software Engineering world as a Java Programmer.',
        date: '2026-09-16',
    },
    {
        id:2,
        title: '7 Design Patterns Python Devs Should Know',
        author: 'Lisa Kami',
        content: 'Simple and practical explanation of 7 common design patterns in Python with clear runnable examples and trade-offs for real projects.',
        date: '2026-09-17',
    },
    {
        id:3,
        title: 'Interview Mistakes That Can Cost You the Job',
        author: 'Spike Lee',
        content: 'Interviews can be nerve-wracking, but proper preparation helps candidates avoid common mistakes.',
        date: '2026-09-18',
    },
    
]

export default function PostList() {
    return (
        <main>
            <h2>Latest Posts</h2>

            <section className='post-list'>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              )
            )}
            </section>
        </main>
    )
}