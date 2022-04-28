import React, { Component } from 'react';
import styles from './Navbar.module.css';
import News from './News.js';

function Navbar({setSite}) {
  const onClick = (number) => {
    setSite(number);
  }
        return (
        <div>
            <nav className={styles.navMenu}>
              <a onClick={()=>{onClick(0)}} href="#">Home</a>
              <a onClick={()=>{onClick(1)}}href="#">Wetter</a>
              <a onClick={()=>{onClick(2)}} href="#">News</a>
              <a href="#">About</a>
              <div className={styles.dot}></div>
            </nav>
         </div>
        );
    }

 
export default Navbar;