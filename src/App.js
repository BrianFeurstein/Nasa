import './App.css';
import AccessToApi_weather from './Components/AccessToApi_weather';
import APOD from './Components/APOD.js';

function App() {
  return (
    <div className="App">
      <AccessToApi_weather/>
      <APOD/>
    </div>
  );
}

export default App;
