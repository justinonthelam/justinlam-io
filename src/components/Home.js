import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Body />
      </div>
    )
  }
}

const Body = () => (
  <div className="container">
    Hello
  </div>
)

export default Home;