import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class Footer extends Component{
  render(){
    const styles ={
      container:{
        paddingTop: "20px",
      },
      footer:{
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        height: "60px",
        width: "50%",
        fontSize: "0.8em",
        margin: "0 auto",
      }
    }

    return(
      <div style={styles.container}>
        <div style={styles.footer}>
          this is a sticky footer
        </div>
      </div>
    )
  }
}

export default Footer
