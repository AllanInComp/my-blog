import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Component } from 'react';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component{
  render(){
    return (
      <Router> 
        <div className="App">
          <NavBar></NavBar>
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/articles-list" component={ArticlesListPage}/>
              <Route path="/article/:name" component={ArticlePage}/>
              {/* Default for no matching path at the end*/}
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );

  }
}

export default App;


