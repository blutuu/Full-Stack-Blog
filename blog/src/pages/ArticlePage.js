import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticlesList from '../Components/ArticlesList';
import CommentSection from '../Components/CommentSection';
import UpvoteSection from '../Components/UpvoteSection';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
  const { name } = useParams();
  const [article, setArticle] = useState({ upvotes: 0, comments: [] });
  const [articleList, setArticleList] = useState([]);

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
      <div className="banner"></div>
      {
        !article
        ? <NotFoundPage />
        : <>
            <section>
              <h1 className="mt5">{ article.name }</h1>
              <UpvoteSection 
                articleName={ article.name } 
                upvotes={ article.upvotes }
                setArticle={ setArticle }/>
              <p className="mb5">{ article.content }</p>
              <CommentSection 
                articleName={ article.name } 
                comments={ article.comments } 
                setArticle={ setArticle }/>
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
