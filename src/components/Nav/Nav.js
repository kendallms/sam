import React from 'react';
// import Portfolio from './../Portfolio/Portfolio';
import Career from './../Career/Career';
import Home from './../Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

return (
    <Router>
    <div>
      <nav>
        <ul className='navlist'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/career'>Career</Link>
          </li>
          {/* <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li> */}
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/career'>
          <Career />
        </Route>
        {/* <Route path='/portfolio'>
          <Portfolio />
        </Route> */}
        <Route path='/'>
          <Home name='Sam'/>
        </Route>
      </Switch>
    </div>
  </Router>
)
}
export default Nav;