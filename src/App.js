import './App.css';
import APOD from './Components/APOD.js';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <APOD/>
      <Header/>
      <Navbar/>
    </div>
  );
}

export default App;
