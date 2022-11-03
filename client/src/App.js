import { useState } from 'react';
import axios from "axios";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import apiList from './lib/apiList';


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
    
    axios.post(apiList.login, {
      "username":username,
      "password":password
    }).then(function(response) {
     
      document.getElementById("msg").style.display = "block";
      document.getElementById("msg").innerHTML = "";
      
      var alert = document.createElement("span");
      
      alert.innerHTML = response.data.message;
      alert.classList.add("alert");
      alert.classList.add("alert-primary");

      var clsbtn = document.createElement("button");
      clsbtn.classList.add("btn-close");
      clsbtn.addEventListener("click", function(){
        document.getElementById("msg").style.display = "none";
      });
      alert.append(clsbtn);
      document.getElementById("msg").appendChild(alert);

    }, function(error) {
      console.log(error);
    })
  }




  return (
    <div className="App">
    
      <form onSubmit={login}>
        <div>
          <label>Username: </label>
          <br />
          <input type="text" name="email" onChange={changeUsername} />
        </div>
        <div>
          <label>Password: </label>
          <br />
          <input type="password" name="password" onChange={changePassword} />
        </div>
          <br />
        <button type="submit" className='btn btn-primary mb-4'>Submit</button>
      </form>

    <div id ='msg' className='mt-4'>

    </div>

    </div>
  );
}

export default App;
