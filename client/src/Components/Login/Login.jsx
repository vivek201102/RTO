import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import apiList from '../../lib/apiList';
import "./Login.css"

function Login() {
    let [inputData, setInputData] = useState("")
    let [msg, setMsg] = useState("")

    let onChangeInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }

    let onLogin = async (e) => {
        e.preventDefault();
        if(inputData.usertype == "Agent")
        {
            axios.post(apiList.loginAgent, {
                username:inputData.email,
                password: inputData.password
            }).then(function(response){
                setMsg(response.data.message);
                if(response.data.code == 0)
                {
                    console.log(msg);
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";

                }
                else{
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                }

            }).catch(function(error){
                setMsg(error.message);
            
            })
        }
        else{
            axios.post(apiList.loginOfficer, {
                username:inputData.email,
                password: inputData.password
            }).then(function(response){
                setMsg(response.data.message);
                if(response.data.code == 0)
                {
                    console.log(msg);
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";

                }
                else{
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                }

            }).catch(function(error){
                setMsg(error.message);
            })
        }
    }

    return (
        <>
           <section className="signin">
           
                <div class="alert" id="alert">
                    {(msg === '')?null:
                    <div>
                        <span class="closebtn">&times;</span> 
                        <strong>{msg}</strong>
                    </div>
                    }
                </div>
                <form className="form">
                 
                    <input type="text" placeholder='Enter your Email / Username' onChange={onChangeInput} name="email" required/>

                    <input type="password" name="password" placeholder='Password' onChange={onChangeInput} required/>

                    <select name="usertype" className='user' onChange={onChangeInput}>
                        <option value={"type"}>Type of User</option>
                        <option value={"Normal user"}>Officer</option>
                        <option value={"Agent"}>Agent</option>
                    </select>

                    <input type="submit" onClick={onLogin}  value="Login" style={{ backgroundColor: "#a1eafb" }} />
                </form>
                </section>
                
        </>
    )
}

export default Login;