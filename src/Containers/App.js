import './App.css';
import '../Sass/Styles.scss';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/About';
import ArticlesList from '../pages/ArticlesList';
import ArticlePage from '../pages/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} />
          <Route path="/articles-list" component={ArticlesList} />
          <Route path="/article/:id" component={ArticlePage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
