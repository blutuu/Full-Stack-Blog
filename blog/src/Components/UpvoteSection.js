import React from 'react';
import { BiUpvote } from 'react-icons/bi';

const UpvoteSection = ({ articleName, upvotes, setArticle }) => {

  const upvoteArticle = () => {
    fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post'
    })
    .then(response => response.json())
    .then(data => {
        setArticle(data);
    })
    .catch(error => console.log(error));
  }

  return (
    <div id="upvote-section">
      <button onClick={upvoteArticle} className="tl orange pointer">
        <BiUpvote />{ upvotes }
      </button>
    </div>
  )
};

export default UpvoteSection;
