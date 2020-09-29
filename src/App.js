
import React from 'react';
import Nav from './components/Nav/Nav';

import { hot } from 'react-hot-loader/root';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <>
      <Nav />
      </>
    );
  }
}

export default hot(App);
