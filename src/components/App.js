import SearchArtist from './SearchArtist';
import Home from './Home';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search/:artist" component={SearchArtist} />
          </Switch>
      </div>
    </Router>
  );
}
export default App;