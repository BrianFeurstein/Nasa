import './App.css';
import APOD from './Components/APOD.js';
import Creator from './Components/Creator';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <APOD/>
      <Header/>
      <Creator/>
      <Navbar/>
    </div>
  );
}

export default App;
