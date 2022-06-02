import React, { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import Chart from "chart.js/auto";
import CountryCode from "./GetCityNames/cities.json";
import Picture_ClearWeather from './WeatherSymbole/clearWeather.png';
import Picture_cloudsWeather from './WeatherSymbole/cloudsWeather.png';
import Picture_rainWeather from './WeatherSymbole/rainWeather.png';



export default function Weather() {
  const [currentWeatherDataTemperaturAndPressure, setCurrentWeatherDataTemperaturAndPressure] = useState({});
  const [weatherDataSpeed, setWeatherDataSpeed] = useState({});
  const [DataEveryThreeHours, setDataEveryThreeHours] = useState([]);
  const [unixTimestamp, setUnixTimestamp] = useState([]);
  const [TimeEveryThreeHours, setTemperaturEveryThreeHours] = useState([]);
  const [DataIn24Hours, setDataIn24Hours] = useState([]);
  const [DataIn48Hours, setDataIn48Hours] = useState([]);
  const [DataIn72Hours, setDataIn72Hours] = useState([]);
  const [DataIn96Hours, setDataIn96Hours] = useState([]);
  const [DataIn120Hours, setDataIn120Hours] = useState([]);
  const [weatherSymbole, setweatherSymbole] = useState([]);
  const [ProbabilityofprecipitationNow, setProbabilityofprecipitationNow] = useState([]);
  const [Probabilityofprecipitation1, setProbabilityofprecipitation1] = useState([]);
  const [Probabilityofprecipitation2, setProbabilityofprecipitation2] = useState([]);
  const [Probabilityofprecipitation3, setProbabilityofprecipitation3] = useState([]);
  const [Probabilityofprecipitation4, setProbabilityofprecipitation4] = useState([]);
  const [Probabilityofprecipitation5, setProbabilityofprecipitation5] = useState([]);


  const UnixTimestampFromAPI = []; //hier werden die Unix Timestamp Zeiten hineingeschrieben
  const convertUnixTimestampInHours = []; //Hier werden die genauen Stunden hineingeschrieben, die als X-Werte für den Graphen verwendet werden
  const TemperaturTimestampFromAPI = [];
  let InputCity = localStorage.getItem('setInputCity');
  
  useEffect(() => {
   
    startLoading();
    

  }, []);

  const startLoading = () => {
    if(localStorage.getItem('setInputCity') == null){
      InputCity = "Dornbirn"
    }
    checkIfCountryExists();
  }

  useEffect(() => {
    SetAndEditDataForGraph();
    setForcastDays();
  }, [DataEveryThreeHours]);

  useEffect(()=>{
    drawGraph();
  },[TimeEveryThreeHours])
  
  
  const searchInputCity = () =>{
    const getInputCity = document.getElementById("InputFieldCityName").value;
    localStorage.setItem('setInputCity', getInputCity);
    startLoading();
    document.getElementById('InputFieldCityName').value = '';
  }
  
  const checkIfCountryExists = () =>{  
   for(let i = 0; i <= CountryCode.length; i++){    
    if(localStorage.getItem('setInputCity') == CountryCode[i].name){  
      loadData();
      break;}
    
     else if(i == 128765){
      localStorage.setItem('setInputCity', "London");
      alert("Dieses Land ist nicht verfügbar");
      document.getElementById('InputFieldCityName').value = '';
      startLoading();
    }
  }   
}
   

  const loadData = async () => {
    document.getElementById('Cityname').innerHTML = localStorage.getItem('setInputCity'); //hier wird der Stadtname ausgegeben
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="+localStorage.getItem('setInputCity')+"&appid=08b39d6e01bf02e42039db607bab4c1d"
    )
      .then((response) => response.json())
      .then(data => {
        setCurrentWeatherDataTemperaturAndPressure(data.main);
        setWeatherDataSpeed(data.wind);
        
      });


    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+localStorage.getItem('setInputCity')+"&appid=08b39d6e01bf02e42039db607bab4c1d")
      .then((response) => response.json())
      .then(data => {
        setDataEveryThreeHours(data.list);
        setweatherSymbole(data.list[0].weather[0].main);  
        setProbabilityofprecipitationNow(data.list[0].pop);
        setProbabilityofprecipitation1(data.list[6].pop);
        setProbabilityofprecipitation2(data.list[12].pop);
        setProbabilityofprecipitation3(data.list[18].pop);
        setProbabilityofprecipitation4(data.list[24].pop);
        setProbabilityofprecipitation5(data.list[30].pop);
      
      });    
  };

 
  const setWeatherSymbole =()=>{
    if(weatherSymbole == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="50px" height="50px" alt="clearWeather"></img>
      )
    }
    else if(weatherSymbole == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="50px" height="50px" alt="cloudsWeather"></img>
      )
    }
    else if(weatherSymbole == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyleToday} src={Picture_rainWeather} width="50px" height="50px" alt="rainWeather"></img>
      )
    }
  }



  const setWeatherSymboleForForecast24Hours = () =>{
    if(DataIn24Hours[3] == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="60px" height="60px" alt="clearWeather"></img>
      )
    }
    else if(DataIn24Hours[3] == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="60px" height="60px" alt="cloudsWeather"></img>
      )
    }
    else if(DataIn24Hours[3] == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyle} src={Picture_rainWeather} width="50px" height="50px"  alt="rainWeather"></img>
      )
    }
  }


  const setWeatherSymboleForForecast48Hours = () =>{
    if(DataIn48Hours[3] == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="60px" height="60px" alt="clearWeather"></img>
      )
    }
    else if(DataIn48Hours[3] == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="60px" height="60px" alt="cloudsWeather"></img>
      )
    }
    else if(DataIn48Hours[3] == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyle} src={Picture_rainWeather} width="50px" height="50px" alt="rainWeather"></img>
      )
    }
  }



  const setWeatherSymboleForForecast72Hours = () =>{
    if(DataIn72Hours[3] == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="60px" height="60px" alt="clearWeather"></img>
      )
    }
    else if(DataIn72Hours[3] == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="60px" height="60px" alt="cloudsWeather"></img>
      )
    }
    else if(DataIn72Hours[3] == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyle}  src={Picture_rainWeather} width="50px" height="50px" alt="rainWeather"></img>
      )
    }
  }





  const setWeatherSymboleForForecast96Hours = () =>{
    if(DataIn96Hours[3] == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="60px" height="60px" alt="clearWeather"></img>
      )
    }
    else if(DataIn96Hours[3] == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="60px" height="60px" alt="cloudsWeather"></img>
      )
    }
    else if(DataIn96Hours[3] == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyle}  src={Picture_rainWeather} width="50px" height="50px" alt="rainWeather"></img>
      )
    }
  }




  const setWeatherSymboleForForecast120Hours = () =>{
    if(DataIn120Hours[3] == "Clear"){
      return(
        <img src={Picture_ClearWeather} width="60px" height="60px" alt="clearWeather"></img>
      )
    }
    else if(DataIn120Hours[3] == "Clouds"){
      return(
        <img src={Picture_cloudsWeather} width="60px" height="60px" alt="cloudsWeather"></img>
      )
    }
    else if(DataIn120Hours[3] == "Rain"){
      return(
        <img className={styles.weatherSymboleRainStyle}  src={Picture_rainWeather} width="50px" height="50px" alt="rainWeather"></img>
      )
    }
  }
 

  const SetAndEditDataForGraph = () => {
    //Unix Timestamp-Werte herauslesen und gepusht
    for (let i = 0; i < DataEveryThreeHours.length; i++) {
      const UnixTimestampDataFromAPI = DataEveryThreeHours[i].dt;
      const TemperaturDataFromAPI = Math.round((DataEveryThreeHours[i].main.temp - 273.15));
      UnixTimestampFromAPI.push(UnixTimestampDataFromAPI);
      TemperaturTimestampFromAPI.push(TemperaturDataFromAPI);
    }
    
    //Unix timestamp in Stunden berechnen
    for (let i = 0; i < UnixTimestampFromAPI.length; i++) {
      const date = new Date(UnixTimestampFromAPI[i]);
      const hours = Math.round(date.getHours() * i);
      setForecastTime(hours);
    }

    setUnixTimestamp(convertUnixTimestampInHours);
    setTemperaturEveryThreeHours(TemperaturTimestampFromAPI);
    
  };

  const setForcastDays = async() => {
    
     let TemperaturIn24Hours = TemperaturTimestampFromAPI[(24/4)];
     let WindSpeedIn24Hours =DataEveryThreeHours[(24/4)].wind.speed;
     let PressureIn24Hours =DataEveryThreeHours[(24/4)].main.pressure;
     let WeatherSymboleIn24Hours = DataEveryThreeHours[(24/4)].weather[0].main;

     let TemperaturIn48Hours = TemperaturTimestampFromAPI[(48/4)];
     let WindSpeedIn48Hours =DataEveryThreeHours[(48/4)].wind.speed;
     let PressureIn48Hours =DataEveryThreeHours[(48/4)].main.pressure;
     let WeatherSymboleIn48Hours = DataEveryThreeHours[(48/4)].weather[0].main;

     
     let TemperaturIn72Hours = TemperaturTimestampFromAPI[(72/4)];
     let WindSpeedIn72Hours =DataEveryThreeHours[(72/4)].wind.speed;
     let PressureIn72Hours =DataEveryThreeHours[(72/4)].main.pressure;
     let WeatherSymboleIn72Hours = DataEveryThreeHours[(72/4)].weather[0].main;

     let TemperaturIn96Hours = TemperaturTimestampFromAPI[(96/4)];
     let WindSpeedIn96Hours =DataEveryThreeHours[(96/4)].wind.speed;
     let PressureIn96Hours =DataEveryThreeHours[(96/4)].main.pressure;
     let WeatherSymboleIn96Hours = DataEveryThreeHours[(96/4)].weather[0].main;

     let TemperaturIn120Hours = TemperaturTimestampFromAPI[(120/4)];
     let WindSpeedIn120Hours =DataEveryThreeHours[(120/4)].wind.speed;
     let PressureIn120Hours =DataEveryThreeHours[(120/4)].main.pressure;
     let WeatherSymboleIn120Hours = DataEveryThreeHours[(120/4)].weather[0].main;


     setDataIn24Hours([TemperaturIn24Hours,WindSpeedIn24Hours,PressureIn24Hours,WeatherSymboleIn24Hours]);
     setDataIn48Hours([TemperaturIn48Hours,WindSpeedIn48Hours,PressureIn48Hours,WeatherSymboleIn48Hours]);
     setDataIn72Hours([TemperaturIn72Hours,WindSpeedIn72Hours,PressureIn72Hours,WeatherSymboleIn72Hours]);
     setDataIn96Hours([TemperaturIn96Hours,WindSpeedIn96Hours,PressureIn96Hours,WeatherSymboleIn96Hours]);
     setDataIn120Hours([TemperaturIn120Hours,WindSpeedIn120Hours,PressureIn120Hours,WeatherSymboleIn120Hours]);
  }

  const setForecastTime = (hours) => {
    const newDate = new Date();
    const getCurrentHour = newDate.getHours();
    const getForecastHours = getCurrentHour + hours; //Uhrzeiten, bei denen die daten ausgegeben werden
    convertUnixTimestampInHours.push(getForecastHours);
  };
  
  function OffsetForGraph() {
    for (let i = 0; i < unixTimestamp.length; i++) {
      while (unixTimestamp[i] > 24) {
        if (unixTimestamp[i] >= 48 && unixTimestamp[i] < 72) {
          unixTimestamp[i] -= 48;
        } else if (unixTimestamp[i] >= 72 && unixTimestamp[i] < 96) {
          unixTimestamp[i] -= 72;
        } else if (unixTimestamp[i] >= 96 && unixTimestamp[i] < 120) {
          unixTimestamp[i] -= 96;
        } else if (unixTimestamp[i] >= 120) {
          unixTimestamp[i] -= 120;
        } else {
          unixTimestamp[i] -= 24;
        }
      }
    }
    return unixTimestamp.slice(0, 7);
  }


  const drawGraph = () => {
    const ctx = document.getElementById("chart").getContext('2d');
    let chartStatus = Chart.getChart("chart");
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    //die Stunden müssen für die X-Achse ausgelesen werden --> link zum video: https://www.youtube.com/watch?v=5-ptp9tRApM
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: OffsetForGraph(),
        datasets: [{
          label: "Temperatur",
          data: TimeEveryThreeHours,
          borderColor: "red",
          tension: 0.4,
        },],
      },
      options: {
        scales: {
          yAxis: {
            beginAtZero: true,
            title:{
              display:true,
              text: "Temperatur"
            }
          },
          xAxis:{
            title:{
              display:true,
              text:"Uhrzeit"
            }
          }
        },
        /*
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeOutBounce',
            from: 1,
            to: 0,
            loop: true
          },
          
        }*/
      },
    });
  };

 
  return (
    
    <div className={styles.wrapper}>
       <div className={styles.left}>
         <div className={styles.top}>
           <div className={styles.IconWithData}>
              <div className={styles.Icon}>
                {setWeatherSymbole()}
              </div>
              <div className={styles.Data}>
                <h2>{Math.round(currentWeatherDataTemperaturAndPressure.temp - 273.15) + " °C"}</h2>
                <p>Luftdruck: {currentWeatherDataTemperaturAndPressure.pressure + " hPa"} </p>
                <p>Wind: {weatherDataSpeed.speed + " km/h"}</p>
                <p>Regen: {ProbabilityofprecipitationNow*100 + " %"}</p>
              </div>
            </div>
            <div>
              <h1 id="Cityname" className={styles.CityName}></h1> 
            </div>
         </div>
         <div className={styles.bottom}>
           <div className={styles.Graph}>
            <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js"></script>
            <canvas id="chart"></canvas>
           </div>
         </div>
       </div>


       <div className={styles.right}>
          <div className={styles.Search}>
            <input type="textbox" id="InputFieldCityName" className={styles.placeholder} placeholder="Cityname"></input>
            <button id="buttonGetInputFieldCityName" className={styles.buttonGetInputFieldCityName} onClick={searchInputCity}>Search</button>
          </div>
          <div className={styles.OutputForecastData}>
             <div className={styles.WeatherInFollowingdays}>
                  <h3>Wetter MORGEN</h3>
                  <p>Temperatur: {DataIn24Hours[0]} °C</p>
                  <p>Regen: {Math.round(Probabilityofprecipitation1* 100)} %</p>
                  <p>Wind: {DataIn24Hours[1]} km/h</p>
                  <p>Druck: {DataIn24Hours[2]} hPa</p>
                  {setWeatherSymboleForForecast24Hours()}
              </div>
              <div className={styles.WeatherInFollowingdays}>
                  <h3>Wetter in 2 Tagen</h3>
                  <p>Temperatur: {DataIn48Hours[0]} °C</p>
                  <p>Regen: {Math.round(Probabilityofprecipitation2* 100)} %</p>
                  <p>Wind: {DataIn48Hours[1]} km/h</p>
                  <p>Druck: {DataIn48Hours[2]} hPa</p>
                  {setWeatherSymboleForForecast48Hours()}
              </div>
              <div className={styles.WeatherInFollowingdays}>
                <h3>Wetter in 3 Tagen</h3>
                <p>Temperatur: {DataIn72Hours[0]} °C</p>
                <p>Regen: {Math.round(Probabilityofprecipitation3* 100)} %</p>
                <p>Wind: {DataIn72Hours[1]} km/h</p>
                <p>Druck: {DataIn72Hours[2]} hPa</p>
                {setWeatherSymboleForForecast72Hours()}
              </div>
              <div className={styles.WeatherInFollowingdays}>
                <h3>Wetter in 4 Tagen</h3>
                <p>Temperatur: {DataIn96Hours[0]} °C</p>
                <p>Regen: {Math.round(Probabilityofprecipitation4*100)} %</p>
                <p>Wind: {DataIn96Hours[1]} km/h</p>
                <p>Druck: {DataIn96Hours[2]} hPa</p>
                {setWeatherSymboleForForecast96Hours()}
              </div>              
              <div className={styles.WeatherInFollowingdays}>
                <h3>Wetter in 5 Tagen</h3>
                <p>Temperatur: {DataIn120Hours[0]} °C</p>
                <p>Regen: {Math.round(Probabilityofprecipitation5 * 100)} %</p>
                <p>Wind: {DataIn120Hours[1]} km/h</p>
                <p>Druck: {DataIn120Hours[2]} hPa</p>
                {setWeatherSymboleForForecast120Hours()}
              </div>
            </div>
       </div>
    </div>
  );
}