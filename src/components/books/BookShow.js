import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BookShow() {
  const { bookId } = useParams()
  const [book, setBook] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:3000/api/books/${bookId}`)
      setBook(res.data)
    }
    getData()
  }, [bookId])

  console.log(book)




  return (    
    <div>
      {book ?
        <div>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <img className="bookImage" src={book.image} alt={book.title} />
        </div>
        :
        <h1>is loading</h1>
      }
    </div>  
  )
}

export default BookShow