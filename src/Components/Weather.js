import React, { useState, useEffect } from "react";
import styles from './Weather.module.css';

export default function Weather() {
  let [weatherDataTemperaturAndPressure, setWeatherDataTemperaturAndPressure] = useState({});
  let [weatherDataSpeed,setWeatherDataSpeed] = useState({});
  
 

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=47.3333&lon=13.3333&appid=983ba03cf09e5e61766c6a6f72359f56"
      //https://api.openweathermap.org/data/2.5/onecall?lat=47.3333&lon=13.3333&exclude=current,minutely,daily,alerts&appid=983ba03cf09e5e61766c6a6f72359f56 <-- link für tägliche temperaturen
      );
    const data = await response.json();
    setWeatherDataTemperaturAndPressure(data.main);
    setWeatherDataSpeed(data.wind);
    
   
    
  };


  function getOutput() {
    return (   
      <div className={styles.outputAllData}>
        <h2>HEUTE</h2>
        <p>Temperatur<div className={styles.outputWeatherDataTemp}>{Math.round(weatherDataTemperaturAndPressure.temp-273.15) + " °C"}</div></p>
        <p>Luftdruck<div className={styles.outputWeatherDataPressure}>{weatherDataTemperaturAndPressure.pressure + " hPa"}</div></p>
        <p>Windgeschwindigkeit<div className={styles.outputWeatherDataSpeed}>{weatherDataSpeed.speed + " km/h"}</div></p>
      </div>
    );
  }

  return (
    <div>
      <h1>Wetter</h1>
      <div className={styles.outputWeatherData}>
        {getOutput()}
        <div className={styles.graph}></div>
      </div>
    </div>
  );
}
