import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  var [msg, setMsg] = useState('');
  const handleState = async () => {
    const requestOption = {
      method : 'POST'
    }
    const data = await window.fetch('/create', requestOption);
    const json = await data
    const text = data.json().
    then((body) => { msg = body.username});
    // const msg = json.role;
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
