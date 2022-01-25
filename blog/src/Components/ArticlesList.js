import React from 'react';
import { Link } from 'react-router-dom'; 

const ArticlesList = ({ articles, listType }) => {

  let list = "";

  switch (listType) {

    case 'small':
      list = 
        <ul>
          {
            articles.map((article, key) => (
              <li className="" key={key}>
                <Link to={`/article/${article.name}`}>
                  <span>{article.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      break;

    case 'large':
      list = 
        articles.map((article, key) => (
          <div className="article-list-item" key={key}>
            <Link to={`/article/${article.name}`}>
              <h3 >{article.name}</h3>
            </Link>
          </div>
      ))
      break;

    case 'card':
      list = 
        articles.map((article, key) => (
          <div className="article-square ph3" key={key}>
            <Link to={`/article/${article.name}`}>
              <span className="b ma0 mb3">{article.name}</span>
            </Link>
            <small className="f7" >2 hours ago</small>
            <p className="f7 mt2 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Proin sit quis ultricies.
            </p>
          </div>
        ));
      break;

    default:
      list = <span>Invalid card display</span>
      break;
  }

  return (
    <>
      {
        !articles 
        ? <h1>Loading...</h1>
        : list
      }
    </>
  )
};

export default ArticlesList;
