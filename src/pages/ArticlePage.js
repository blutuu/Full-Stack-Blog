import React from 'react';
import { useState, useEffect } from 'react';

const ArticlePage = ({ match }) => {
  const articleId = parseInt(match.params.id);
  const [article, setArticle] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.find(item => item.id === articleId);
      setArticle(filteredData);
      console.log(article);
    })
    .catch(error => console.log(error));
  }, [article.id]);


  return (
    <>
      <h1>This is the {article.title} article</h1>
    </>
  )
}

export default ArticlePage;
