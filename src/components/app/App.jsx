import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCharacters from '../../container/AllCharacters'
import Header from '../header/Header';
import Detail from '../details/Details';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/character/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

