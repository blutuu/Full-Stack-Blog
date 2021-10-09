import React from 'react';

const CommentSection = ({ comments }) => {
  const submitComment = () => {
    
  };

  return (
    <section>
      <h3>Comments</h3>
      <div className="comment-form ml3 ">
        <form onSubmit={ submitComment }>
          <label>
            Name:
            <input type="text" className="db" />
          </label>
          <label>
            Comment:
            <textarea name="comments" 
              className="br2 b--gray db"
              id="comment-textarea" 
              cols="60" rows="4" 
              placeholder="Leave a comment here..."></textarea>
          </label>
          <input type="submit" value="Submit" />
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
