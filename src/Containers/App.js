import './App.css';
import '../Sass/Styles.scss';
import 'tachyons';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/About';
import ArticlesListPage from '../pages/ArticlesListPage';
import ArticlePage from '../pages/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
