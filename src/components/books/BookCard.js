import { Link } from 'react-router-dom'

function BookCard({ title, author, image, bookId }) {
  return (
    <div className='book-card'>
      <Link to={`/books/${bookId}`}>
        <div className="card-content">
          <h3><em>{title}</em></h3>
          <h4>{author}</h4>
          <div className='card-image'>
            <img className="bookImage" src={image} alt={title} />
          </div>
          
        </div>   
      </Link>
    </div>
  )
}

export default BookCard
