import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import Comment from './components/Comment/Comment';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  



  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch> 

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/post/:postId">
              <PostDetail/>
            </Route>

            <Route path="/comment/:commentId">
              <Comment/>
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <NoMatch/>
            </Route>

          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
