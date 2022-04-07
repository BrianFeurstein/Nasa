import React, { Component } from 'react';
import styles from './Navbar.module.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <div>
            <nav className={styles.navMenu}>
              <a href="#">Home</a>
              <a href="#">Wetter</a>
              <a href="#">News</a>
              <a href="#">About test</a>
              <div className={styles.dot}></div>
            </nav>
         </div>
        );
    }
}
 
export default Navbar;