import React from 'react';
import { useState } from 'react';
import Anime from 'react-anime';

const CommentSection = ({ articleName, comments, setArticle }) => {
  const [ username, setUsername ] = useState('');
  const [ comment, setComment ]= useState('');

  const submitComment = () => {
    fetch(`/api/articles/${articleName}/add-comment`,{
      method: 'post',
      body: JSON.stringify({ username, text: comment }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setArticle(data);
      setUsername('');
      setComment('');
    })
    .catch(error => console.log(error));
  };


  return (
    <section id='comment-section'>
      <h3>Comments</h3>
      <div id="comment-form">

          <label>
            Name:
            <input type="text" 
            className="db mt2 mb3 br2 ba " 
            value={username}
            onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label className="mt4">
            Comment:
            <textarea name="comments" 
              className="br2 b--gray db mt2 mb4"
              id="comment-textarea" 
              cols="50" rows="6" 
              placeholder="Leave a comment here..."
              value={comment}
              onChange={(event) => setComment(event.target.value)}></textarea>
          </label>
          <button className="bg-black ba br2 white ph3 pv2 pointer" id="add-comment" onClick={submitComment}>Add Comment</button>
        
      </div>
      
      <div className="comments mv4 tl ml3">

        <Anime >
          { comments.map((comment, key) => (
            <div className="mv3 flex items-start" key={key}>
              <h4 className="pr2 ma0">{ comment.username }:</h4>
              <p className="pa0 ma0 ">{ comment.text }</p>
            </div>
          ))}
        </Anime>

      </div>
    </section>
  )
}

export default CommentSection;