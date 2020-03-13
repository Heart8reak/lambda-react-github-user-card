import React from 'react';
import './App.css';

import Search from './components/Search'
import Home from './components/Home'
import Header from './components/Header'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
<Route extact path="/" component={Home} />
<Route path="/search" component={Search} />
    </div>
  );
}

export default App;
