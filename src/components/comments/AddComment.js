// import axios from 'axios'
// import React from 'react'
// import { useParams } from 'react-router'
// import { headers }  from '../lib/api'

// function AddComment ({ book, setBook }) {

//   const [commentText, setCommentText] = React.useState({
//     text: '',
//   })
//   const [refresh, setRefresh] = React.useState()

//   const { bookId } = useParams()


//   if (refresh) {
//     setRefresh(false)
//   }

//   const handleCommentInput = (e) => {
//     setCommentText({ ...commentText, text: e.target.value })
//   }
  
//   const handleSubmitComment = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await axios.post(`/api/projects/${bookId}/comments`, commentText, headers())
//       setBook(res.data)
//       setCommentText({ text: '' })
//       console.log(res)
//     } catch (err) {
//       console.log(err)
//     }
//   }


//   return (
//     <section>
//       <div>
//         <div>
//           <div>
//             <form onSubmit={handleSubmitComment}>
//               <div>
//                 <label htmlFor="comment-text"></label>
//                 <textarea id="comment-text"
//                   name="comment-text"
//                   placeholder="Add a comment..."
//                   value={commentText.text}
//                   onChange={handleCommentInput}
//                 />
//               </div>
//               <button
//                 type="submit"
//               >Submit comment</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div>
//         {book ? (book.comments.map(data => (
//           <div key={data._id} className='index-info'>
//             <div className='user-and-time-comments'>
//               <p className='user-comments'>{data.addedBy.username}</p>
//               <p className='date-comments'>{data.createdAt.slice(0, 10).split('-').reverse().join('-')}</p>
//             </div>
//             <p className='gallery-title comment-text'>{data.text}</p>
//           </div>
//         )).reverse())
//           :
//           ('')
//         }
//       </div>
//     </section>
//   )

// }

// export default AddComment