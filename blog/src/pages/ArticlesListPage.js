import React from 'react';
import { useState, useEffect } from 'react';
import ArticlesList from '../Components/ArticlesList';

const ArticlesListPage = () => {
  const [articleList, setArticleList] = useState([{id: 0}]);
  const staticArticleId = articleList[0].id;

  useEffect(() => {
    fetch('/api/articles')
    .then(response => response.json())
    .then(data => {
      setArticleList(data);
      console.log(articleList);
    })
    .catch(error => console.log(error));
  }, [staticArticleId]);


  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articleList} />
    </>
  )
}

export default ArticlesListPage;
