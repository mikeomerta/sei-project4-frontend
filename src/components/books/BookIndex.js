import React from 'react'

import BookCard from './BookCard'
import { getAllBooks } from '../../lib/api'

function BookIndex() {
  const [books, setBooks] = React.useState([])

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

  return (
    <section>
      <div>
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
    </section>    
  )
}

export default BookIndex