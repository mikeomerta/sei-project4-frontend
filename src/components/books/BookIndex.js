import React from 'react'
import axios from 'axios' 

import BookCard from './BookCard'



function BookIndex() {
  const [books, setBooks] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:3000/api/books')
      setBooks(res.data)
    }
    getData()
  }, [])

  console.log('books', books)


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