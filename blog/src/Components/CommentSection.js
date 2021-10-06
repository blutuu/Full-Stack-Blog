import React from 'react';

const CommentSection = ({ comments }) => {

  return (
    <section>
      <h3>Comments</h3>
      <div className="comment-box ml3 ">
        <form action="">
          <textarea name="comments" 
            className="br2 b--gray"
            id="comment-textarea" 
            cols="60" rows="4" 
            placeholder="Leave a comment here..."></textarea>
        </form>
      </div>
      
      <div className="comments mv4 tl ml3">

        { comments.map((comment, key) => (
          <div className="mv3 flex items-start" key={key}>
            <h4 className="pr2 ma0">{ comment.username }:</h4>
            <p className="pa0 ma0 ">{ comment.text }</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default CommentSection;
