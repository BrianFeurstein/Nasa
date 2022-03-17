import './App.css';
import AccessToApi_weather from './Components/AccessToApi_weather';
import AccessToApi_earth from './Components/AccessToApi_earth';
import APOD from './Components/APOD.js';

function App() {
  return (
    <div className="App">
      <AccessToApi_weather/>
      <AccessToApi_earth/>
      <APOD/>
      
    </div>
  );
}

export default App;
