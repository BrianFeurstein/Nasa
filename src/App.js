import './App.css';
import APOD from './Components/APOD.js';
import Creator from './Components/Creator';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <APOD/>
      <Header/>
      <Creator/>

    </div>
  );
}

export default App;
