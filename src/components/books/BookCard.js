import { Link } from 'react-router-dom'

function BookCard({ title, author, image, bookId }) {
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="block">
          <h3>{title}</h3>
          <h4><strong>{author}</strong></h4>
        </div>
        
        <img className="bookImage" src={image} alt={title} />
      </Link>
    </div>
  )
}

export default BookCard
