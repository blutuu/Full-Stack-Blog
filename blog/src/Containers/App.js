import { useState, useEffect } from 'react';
import './App.css';
import '../Sass/Styles.scss';
import 'tachyons';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/About';
import ArticlesListPage from '../pages/ArticlesListPage';
import ArticlePage from '../pages/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
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
    <Router>
      <div className="App">
        <section id="page_body">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>} exact/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/articles-list" element={<ArticlesListPage/>} />
            <Route path="/article/:name" element={<ArticlePage/>} />
            <Route element={<NotFoundPage/>} />
          </Routes>
        </section>

        <Footer articles={articleList}/>
      </div>
    </Router>
  );
}

export default App;
