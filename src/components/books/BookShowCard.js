import React from 'react'

function BookShowCard({ title, author, image, blurb, comments }) {
  
  return (
    <div>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <img className="bookImage" src={image} alt={title} />
      <h6>{blurb}</h6>
      {comments ?
        comments.map(comment => {
          return (
            <div key={comment.id}>
              <h3>{comment.content}</h3>
              <h5>{comment.owner.username}</h5>
              <h6>{comment.createdAt.slice(0, 10).split('-').reverse().join('/')}</h6>
            </div>
          )
        })
        :
        <p>{null}</p>
      } 
    </div>
  )
}

export default BookShowCard


