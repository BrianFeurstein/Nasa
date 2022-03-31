import React, { useState } from 'react';
import styles from './APOD.module.css';


export default function Get_APOD() {
    let [apod_pic1, apod_pic] = useState([]);
    fetch(
        "https://api.nasa.gov/planetary/apod?api_key=H1yMn7ARi7z1463muFCk6FqTa5gZhWiIdNYBcIMy"
    )
        .then((response) => response.json())
        .then(function (data) {
            apod_pic(data.hdurl);       
            
        });

        function getOutput() {
            let output = [];
              output.push(<div ><img className={styles.apodpic} src={apod_pic1} height="100%" width="65%"></img></div>)
            return output;
          }
        
        return (
                <div>
                    {getOutput()}
                </div>
            );
    }
    
        
        
