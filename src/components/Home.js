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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nisi nisl, gravida eu scelerisque in, rhoncus ac nulla. Proin a ultricies ante. Etiam pellentesque nec sem in bibendum. Vestibulum gravida auctor nibh vel commodo. Suspendisse imperdiet vitae ex non viverra. Donec leo dui, aliquet eu lorem at, molestie imperdiet diam. Nulla eu hendrerit dolor.
  </div>
)

export default Home;