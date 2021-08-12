import './App.css';
import Blog from '../Components/Blog';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Blog} exact/>
      </div>
    </Router>
  );
}

export default App;
