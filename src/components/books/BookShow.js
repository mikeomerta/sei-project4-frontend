import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getSingleBook, deleteBook } from '../../lib/api'
import BookShowCard from './BookShowCard'
import AddComment from '../comments/AddComments'

function BookShow() {
  const { bookId } = useParams()
  const [book, setBook] = React.useState(null)
  const navigate = useNavigate()
  const [isFavourite, setIsFavourite] = React.useState(false)
  
  
  React.useEffect(() => {
    const getData = async () => {
      const res = await getSingleBook(bookId)
      setBook(res.data)
    }
    getData()
  }, [bookId])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(bookId)
        navigate('/books/')
      } catch (err) {
        console.log(err)
      }
    }
  }

  const handleFavourites = async () => {
    setIsFavourite(true)
  }

  const handleRemoveFavourite = () => {
    setIsFavourite(false)
  }

  return ( 
    <section>
      <div>
        <div>
          {book ?
            <div>
              <BookShowCard 
                key={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                blurb={book.blurb}
                bookId={book.id}
                comments={book.comments}
              />
            </div>
            :
            <h1>is loading</h1>
          }
          <h3>Comments</h3>
          <div>
            <AddComment/>
          </div>
          <div>
            <button onClick={!isFavourite ? (handleFavourites) : (handleRemoveFavourite)} className="favouriteImage">
              {isFavourite ? (
                <>
                  <img 
                    src='https://i.imgur.com/tPVPAGN.png' />
                  <p>Remove from Favourites</p> 
                </>
              ) : (
                <>
                  <img src='https://i.imgur.com/bhkwFMx.png'/>
                  <p>Add To Favourites</p>
                </>
              )}
            </button>
          </div>
          <button className="button is-danger is-light is-rounded" onClick={handleDelete}>Delete Book</button>
        </div>
      </div>  
    </section>   
  )
}

export default BookShow