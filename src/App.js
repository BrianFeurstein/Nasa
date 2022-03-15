import logo from './logo.svg';
import './App.css';
import AccessToApi_weather from './Components/AccessToApi_weather';
import AccessToApi_earth from './Components/AccessToApi_earth';

function App() {
  return (
    <div className="App">
      <AccessToApi_weather/>
      <AccessToApi_earth/>
      
    </div>
  );
}

export default App;
