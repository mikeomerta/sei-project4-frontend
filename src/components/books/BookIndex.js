import React from 'react'
import { Link } from 'react-router-dom'

import BookCard from './BookCard'
import { getAllBooks } from '../../lib/api'

function BookIndex() {
  const [books, setBooks] = React.useState([])
  const [keyword, setKeyword] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllBooks()
        setBooks(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <section>
      <div className='library-header'>
        <div className='search-bar'>
          <input 
            className="input is-rounded is-hovered"
            placeholder='Search...' 
            type='text'
            id='input'
            onChange={handleSearch}
            value={keyword}
          />
        </div>
        <div className='book-button'>
          <Link to="/books/create"><button className="button is-black is-rounded is-outlined">Add Book</button></Link>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-centered">
            {books ?
              books.map(book => (
                <BookCard 
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  bookId={book.id}
                />
              ))
              :
              <h3>...loading</h3>
            }
          </div>            
        </div>
      </section>   
    </section>          
  )
}

export default BookIndex