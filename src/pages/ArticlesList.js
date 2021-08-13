import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const ArticlesList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setArticleList(data);
      console.log(articleList);
    })
    .catch(error => console.log(error));
  }, [articleList[0].id]);

  return (
    <>
      <h1>Articles</h1>
      {
        articleList.map((article, key) => (
          <h3>{article.title}</h3>
        ))
      }
    </>
  )
}

export default ArticlesList
