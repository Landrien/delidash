import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [msg, setMsg] = useState('');
  const handleState = async () => {
    const data = await window.fetch('/auth');
    const json = await data;
    const msg = json.role;
    setMsg(msg)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleState}>Click here</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
