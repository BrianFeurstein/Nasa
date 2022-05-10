import { useState } from 'react';
import './App.css';
import APOD from './Components/APOD.js';
import Creator from './Components/Creator';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import News from './Components/news.js';
import Weather from './Components/Weather.js';
import SpeedoL from './Components/SpeedoL.js';

function App() {
  const[actualSite,setActualSite] = useState(0);

  const getContent = ()=>{
    if (actualSite==0){
     return (<div><Creator/><APOD/>
     <h1>Speed of Light Calculator</h1>
     <p>Have you ever wanted to calculate how long it takes you to get to every planet in our solar system?</p>
     <p>And have you ever wanted to know how old your wife will be when you get back from your journey?</p>
     <p>If yes, click on our Link below</p>
     <a onClick={()=>setSite(3)} href="#">Distance</a>
     </div>);
     
    } else if(actualSite==1) {
      return(<Weather/>);
    }else if(actualSite==2){
      return(<News setSite={setSite}/>);
    }else if(actualSite==3){
      return(<SpeedoL/>);
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
     
    </div>
  );
  
}

export default App;
