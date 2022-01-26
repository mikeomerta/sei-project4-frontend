import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import { headers, getSingleBook }  from '../../lib/api'
import { getUserId } from '../../lib/auth'

function AddComment({ setBook }) {
  const userId = getUserId()
  const { bookId } = useParams()
  const [commentText, setCommentText] = React.useState({
    content: '',
    book: parseFloat(bookId),
    owner: parseFloat(userId),    
  })

  const refreshPage = () => {
    location.reload()
  }
  
  const handleCommentInput = (e) => {
    setCommentText({ ...commentText, content: e.target.value })
  }
  
  const handleSubmitComment = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/books/${bookId}/comments/`, commentText, headers())
      const newSingleBook = await getSingleBook(bookId)
      setBook(newSingleBook.data)
      setCommentText({ content: '' })
      console.log(res)
      refreshPage()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmitComment} >
      <div className="control">
        <textarea 
          id="comment-text"
          name="comment-text"
          placeholder="Add a comment..."
          value={commentText.content}
          onChange={handleCommentInput} 
          className="textarea is-info"
        >
        </textarea>
        <button 
          type="submit" 
          className="button is-light is-rounded"
        >Add Comment
        </button>
      </div>
    </form>   
  )
}

export default AddComment