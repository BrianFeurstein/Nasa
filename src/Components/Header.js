import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className={styles.header}>
                <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Seal_of_the_United_States_Space_Force.svg/1200px-Seal_of_the_United_States_Space_Force.svg.png" height="130px" width="150px"></img>
            </div>
        );
    }
}
 
export default Header;