import { Link } from 'react-router-dom'

function BookCard({ title, author, image, bookId }) {
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <img className="bookImage" src={image} alt={title} />
      </Link>
    </div>
  )
}

export default BookCard


