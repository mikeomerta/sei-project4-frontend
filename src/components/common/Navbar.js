import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-brand'>
        <img className='logo' src="https://i.imgur.com/VhlV14t.png" alt="logo"/>
        <Link className='home' to="/">Home</Link>
        <Link className='library' to="/books">Library</Link>
        <Link className='favourites' to="/favourites">Favourites</Link>
      </div>     
      <div className='navbar-end'>
        <Link className='register' to="/register">Register</Link>
        <Link className='login' to="/login">Login</Link>
      </div>
      
    </div>
      
  
  )
}

export default Navbar