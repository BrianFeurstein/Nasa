import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.header}>
                <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" height="130px" width="150px"></img>
            </div>
        );
    }
}
 
export default Header;