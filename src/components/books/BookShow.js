import React from 'react'
import { useParams } from 'react-router-dom'

import { getSingleBook } from '../../lib/api'
import BookShowCard from './BookShowCard'
// import AddComment from '../comments/AddComment'

function BookShow() {
  const { bookId } = useParams()
  const [book, setBook] = React.useState(null)
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleBook(bookId)
      setBook(res.data)
    }
    getData()
  }, [bookId])

  console.log(book)
  
  return (    
    <div>
      {book ?
        <div>
          <BookShowCard 
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            bookId={book.id}
            comments={book.comments}
          />
        </div>
        :
        <h1>is loading</h1>
      }
      {/* <div className='comments'>
        <h1>Comments</h1>
        <AddComment 
          project = {book}
          setProject = {setBook}
        />
      </div> */}
    </div>  
  )
}

export default BookShow