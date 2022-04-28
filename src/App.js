import './App.css';
import APOD from './Components/APOD.js';
import Creator from './Components/Creator';
import Header from './Components/Header';
import Weather from './Components/Weather.js';

function App() {
  return (
    <div className="App">
      <APOD/>
      <Header/>
      <Creator/>
      <Weather/>
      
    </div>
  );
  
}

export default App;
