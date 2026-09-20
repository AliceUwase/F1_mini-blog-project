import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Dev Insights</h1>

      <a className="new-post-button" href="#new-post">
        <span>+</span> New Post
      </a>
    </header>
  )
}