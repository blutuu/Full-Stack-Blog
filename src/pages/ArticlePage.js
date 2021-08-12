import React from 'react';
import { useState } from 'react';

const ArticlePage = ({ match }) => {
  const id = match.params.id;
  const [article, setArticle] = useState([]);

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setArticle(data.filter(item => item.id === id));
    });


  return (
    <>
      <h1>This is the {article.title} article</h1>
    </>
  )
}

export default ArticlePage;
