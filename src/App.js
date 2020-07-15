import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Details, NotFound } from './pages';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pokedex Test</h1>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/pokemon/:string" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
