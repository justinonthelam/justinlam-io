import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Footer extends Component{
  render(){
    var style = {
      // borderTop: "1px solid #E7E7E7",
      textAlign: "center",
      padding: "20px",
      position: "fixed",
      left: "0",
      bottom: "0",
      height: "60px",
      width: "100%",
    }

    var phantom = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
    return(
      <div>
        <div style={phantom} />
          <div style={style}>
            This is a sticky footer.
        </div>
      </div>
    )
  }
}

export default Footer
