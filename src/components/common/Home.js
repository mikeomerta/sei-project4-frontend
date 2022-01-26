import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Tsundoku</h1>
      <Link to="/books/create"><button className="button is-link is-light is-rounded">Add Book</button></Link>
    </div>
  
  )
}

export default Home