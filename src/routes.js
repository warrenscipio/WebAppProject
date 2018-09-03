import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Home from './components/views/home';
import Contact from './components/views/page2';

const Test = () => (
<Router>
<div>
      <ul>
        <h1><Link to="/">Home</Link></h1>
        <li><Link to="/page2">page2</Link></li>
      </ul>

      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/page2" component={Contact}/>
    </div>
</Router>
)
export default Test