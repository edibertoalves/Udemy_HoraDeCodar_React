import logo from './logo.svg';
import './App.css';

const time = new Date().toLocaleTimeString();

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <br />
      <h2>Hora: {time} </h2>      
    </div>
  );
}

export default App;
