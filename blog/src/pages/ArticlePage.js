import React from 'react';
import { useState, useEffect } from 'react';
import ArticlesList from '../Components/ArticlesList';
import CommentSection from '../Components/CommentSection';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const [article, setArticle] = useState({ upvotes: 0, comments: [] });
  const [articleList, setArticleList] = useState([{id: 0}]);

  useEffect(() => {
    fetch(`/api/articles/`)
    .then(response => response.json())
    .then(data => {
      const filteredData = data.find(item => item.name === name);
      console.log(filteredData)
      
      setArticle(filteredData);
      setArticleList(data);
    })
    .catch(error => console.log(error));
  }, [name]);

  const otherArticles = article ? articleList.filter(item => item.name !== article.name) : null;

  return (
    <>
      {
        !article
        ? <NotFoundPage />
        : <>
            <section>
              <h1 className="mt5">{ article.name }</h1>
              <p className="tl">This post has been upvoted { article.upvotes } times</p>
              <p className="mb5">{ article.body }</p>
              <CommentSection comments={ article.comments } />
            </section>

            <section className="mt5 pt3">
              <hr className="hr-text" data-content="Other Articles"/>
              <ArticlesList articles={ otherArticles } />
            </section>
            
          </>
      }
    </>
  )
}

export default ArticlePage;
