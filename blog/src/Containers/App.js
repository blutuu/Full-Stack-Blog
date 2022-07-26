import { useState, useEffect } from "react";
import "./App.css";
import "../Sass/Styles.scss";
import "tachyons";
import loadable from "@loadable/component";
import ScrollToTop from "../Components/ScrollToTop";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ArticlePage = loadable(() => import("../pages/ArticlePage"));
const ArticlesListPage = loadable(() => import("../pages/ArticlesListPage"));
const AboutPage = loadable(() => import("../pages/About"));
const NotFoundPage = loadable(() => import("../pages/NotFoundPage"));

function App() {
  const [articleList, setArticleList] = useState([{ id: 0 }]);
  const staticArticleId = articleList[0].id;

  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticleList(data);
        console.log(articleList);
      })
      .catch((error) => console.log(error));
  }, [staticArticleId]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <section id="page-body">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<HomePage articles={articleList} />}
              exact
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles-list" element={<ArticlesListPage />} />
            <Route path="/article/:name" element={<ArticlePage />} />
            <Route element={<NotFoundPage />} />
          </Routes>
        </section>

        <Footer articles={articleList} />
      </div>
    </Router>
  );
}

export default App;
