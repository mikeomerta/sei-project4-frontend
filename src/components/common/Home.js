/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
      <div className='hero-image'>
        <img src="https://i.imgur.com/KzjsD8w.jpg" alt="books hero"/>
      </div> 
      <div className='section'>
        <div className='home-title'>
          <h1>Tsundoku</h1>
        </div>
        <div className='home-defintion'>
          <h5>
            A portmanteau in the Japanese language that refers to a stockpiling of books that will never be read.
          </h5>
          <h5>It is a combination of the words "tsunde" (meaning "to stack things"), "oku" (meaning "to leave for a while") and "doku" (meaning "to read").
          </h5>  
        </div>
        <div className='button-container'>  
          <Link to="/books/create"><button className="button is-black is-rounded is-outlined">Add Book</button></Link>
          <Link to="/books/favourites"><button className="button is-black is-rounded is-outlined">Favourites</button></Link>
        </div>  
      </div>
    </div>
  )
}

export default Home