import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Header extends Component{
  render(){
    return(
      <div>
        <Nav />
      </div>
    )
  }
}

const Nav = () => (
  <nav>
    <div className="container">
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <NavLinks />
      </div>
    </div>
  </nav>
)

class Logo extends Component{
  render(){
    return(
      <Link to="/">
        <div className="logo">
          Justin Lam
        </div>
      </Link>
    )
  }
}

class NavLinks extends Component{
  render(){
    return(
      <div className="links">
        <Link to="/about">About</Link>
        <a href="#" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Blog</a>
      </div>
    )
  }
}

export default Header