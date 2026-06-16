import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <main id="main-content" className="empty-state"><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><Link className="button" to="/">Return home</Link></main>
}
