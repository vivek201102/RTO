import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import apiList from '../../lib/apiList';
import "./Login.css"

function Login() {

    const navigate = useNavigate();
    let [inputData, setInputData] = useState("")
    let [msg, setMsg] = useState("")

    let onChangeInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }

    let onLogin = async (e) => {
        e.preventDefault();
        if(inputData.usertype === "Agent")
        {
            axios.post(apiList.loginAgent, {
                username:inputData.email,
                password: inputData.password
            }).then(function(response){
                setMsg(response.data.message);
                if(response.data.code === 0)
                {
                    console.log(msg);
                    document.getElementById("alert").style.display = "block";
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";
                    navigate("/");

                }
                else{
                    document.getElementById("alert").style.display = "block";
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                }

            }).catch(function(error){
                setMsg(error.message);
            
            })
        }
        else if(inputData.usertype === "Officer"){
            axios.post(apiList.loginOfficer, {
                username:inputData.email,
                password: inputData.password
            }).then(function(response){
                setMsg(response.data.message);
                if(response.data.code === 0)
                {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";
                    navigate("/officerview" , {state: response.data.officerInfo});

                }
                else{
                    document.getElementById("alert").style.display = "block";
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                }
                
            }).catch(function(error){
                setMsg(error.message);
            })
        }
        else{
            document.getElementById("alert").style.backgroundColor = "#f44336";
            document.getElementById("alert").style.display = "block";
            setMsg("Please select user type...")

        }

        document.getElementById("closebtn").addEventListener("click",   ()=>{
            document.getElementById("alert").style.display = "none";
        })
    }

    
    return (
        <>
           <section className="signin">
           
                <div class="alert" id="alert">
                    {(msg === '')?<div>
                        <span class="closebtn" id="closebtn">&times;</span> 
                        <strong id="str"></strong>
                    </div>:
                    <div>
                        <span class="closebtn" id="closebtn">&times;</span> 
                        <strong id="str">{msg}</strong>
                    </div>
                    }
                </div>
                <form className="form" onSubmit={onLogin}>
                 
                    <input type="text" placeholder='Enter your Email / Username' onChange={onChangeInput} name="email" required/>

                    <input type="password" name="password" placeholder='Password' onChange={onChangeInput} required/>

                    <select name="usertype" className='user' onChange={onChangeInput} required>
                        <option  selected disabled>Type of User</option>
                        <option value={"Officer"}>Officer</option>
                        <option value={"Agent"}>Agent</option>
                    </select>

                    <input type="submit" value="Login" style={{ backgroundColor: "#a1eafb" }} />
                </form>
                </section>
                
        </>
    )
}

export default Login;