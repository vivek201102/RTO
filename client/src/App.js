import { useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let changeUsername = (e) => {
    setUsername(e.target.value)
  }

  let changePassword = (e) => {
    setPassword(e.target.value)
  }

  let login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8082/api/officer/login", {
      "username": username,
      "password": password
    }).then(function(response) {
      document.getElementById("msg").innerHTML = response.message;
    }, function(error) {
      console.log(error);
    })
  }

  return (
    <div className="App">
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <label id="msg"></label>
      <form onSubmit={login}>
        <div>
          <label>Username: </label>
          <input type="text" name="email" onChange={changeUsername} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" onChange={changePassword} />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
