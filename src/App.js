import { useState } from 'react';
import './App.css';
import APOD from './Components/APOD.js';
import Creator from './Components/Creator';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import News from './Components/news.js';
import Weather from './Components/Weather.js';

function App() {
  const[actualSite,setActualSite] = useState(0);

  const getContent = ()=>{
    if (actualSite==0){
     return (<div><Creator/><APOD/></div>); 
     
    } else if(actualSite==1) {
      return("Wetter");
    }else{
      return(<News/>);
    }
  }

  const setSite = (number)=>{
    setActualSite(number);
  }

  return (
    <div className="App">
      <Header/>
      <Navbar setSite={setSite}/>
      {getContent()}

    
      <Creator/>
      <Weather/>
      
    </div>
  );
  
}

export default App;
