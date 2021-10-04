import React from 'react';
import { useState, useEffect } from 'react';

const CommentSection = ({ name }) => {
  const [commentsList, setCommentsList] = useState([{"username": "", "text": ""}]);


  useEffect(() => {
    fetch(`/api/articles/${name}`)
    .then(response => response.json())
    .then(data => {
      setCommentsList(data.comments);
    })
    .catch(error => console.log(error));
  }, [name]);


  return (
    <section>

      <div className="comments mb4 ">

        { commentsList.map((comment, key) => (
          <div key={key}>
            <h4>{ comment.username }</h4>
            <span>{ comment.text }</span>
          </div>
        ))}

      </div>

      <div className="comment-box">
        <form action="">
          <textarea name="comments" id="comment-textarea" cols="30" rows="10" placeholder="Enter comment here..."></textarea>
        </form>
      </div>
      
    </section>
  )
}

export default CommentSection;
