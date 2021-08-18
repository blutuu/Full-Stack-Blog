import React from 'react';
import { useState, useEffect } from 'react';
import ArticlesList from '../Components/ArticlesList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const articleId = parseInt(match.params.id);
  const [article, setArticle] = useState({id: 0});
  const [articleList, setArticleList] = useState([{id: 0}]);
  const staticArticleId = articleId;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.find(item => item.id === articleId);
      setArticle(filteredData);
      setArticleList(data);
    })
    .catch(error => console.log(error));
  }, [staticArticleId, articleList[0].id]);

  const otherArticles = article ? articleList.filter(item => item.title !== article.title) : null;

  return (
    <>
      {
        !article
        ? <NotFoundPage />
        : <>
            <h1 className="mt5">{article.title}</h1>
            <p className="mb5">{article.body}</p>
            <h2>Other Articles</h2>
            <ArticlesList articles={otherArticles} />
          </>
      }
    </>
  )
}

export default ArticlePage;
