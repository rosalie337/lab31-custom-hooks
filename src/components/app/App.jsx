import React from 'react'
import { Router, Router } from 'react-router-dom';
import AllCharacters from '../../container/AllCharacters'
import Header from '../header/Header';
import Detail from '../details/Details';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Header} />

      <Route exact path="/" component={AllCharacters} />

      <Route path="/:character" component={Detail} />
    </Router>
  )
}

