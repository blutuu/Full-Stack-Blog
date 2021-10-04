import React from 'react';
import { Link } from 'react-router-dom'; 

const ArticlesList = ({ articles }) => {
  return (
    <div>
      {
        !articles 
        ? <h1>Loading...</h1>
        : articles.map((article, key) => (
            <div className="article-list-item" key={key}>
              <Link to={`/article/${article.name}`}>
                <h3 >{article.name}</h3>
              </Link>
              {/* <p>{article.body && article.body.substring(0, 75)}...</p> */}
            </div>
        ))
      }
    </div>
  )
};

export default ArticlesList;
