import React from 'react'
import Picture_Brian from './Creators_pictures/Creator_Brian_homepage.png';
import Picture_Samuel from './Creators_pictures/Creator_Samuel_homepage.png';
import Creator_styles from './Creator.module.css';


function Creator() {
  return (
    <div className={Creator_styles.wrapper}>
        <h1>Creators</h1>
        <table className={Creator_styles.table}>
            <tr className={Creator_styles.tr}>
                <th>
                    <img src={Picture_Brian} width="65%" height="85%" alt="Brian"></img>
                    <p>Brian Armstrong</p>
                </th>
                <th>
                    <img src={Picture_Samuel} width="50%" height="70%" alt="Samuel"></img>
                    <p>Samuel Aldrin</p>
                </th>
                    
                
            </tr>
        </table>
       
        
    </div>
  )
}

export default Creator