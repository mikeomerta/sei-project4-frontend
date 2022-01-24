import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Library</Link>
      <Link to="/books/:bookId">Show</Link>
      <Link to="/favourites">Favourites</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar