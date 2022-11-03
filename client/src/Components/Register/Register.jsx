import { useState } from 'react';
import './Register.css'
import validator from "validator";
import axios from "axios";
import apisList from "../../lib/apiList"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Footer from "../Footer"

function Registeration() {

    let [inputData, setInputData] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [passCheck, setPassCheck] = useState("");
    let [msg, setMsg] = useState("");

    let onChangeInput = (event) =>{
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }



    let onChangePass = (event) =>{
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))

        if(validator.isStrongPassword(val, {
            minLength:8, minLowercase:1, minUppercase:1, minNumbers:1, minSymbols:1
        })){
            document.getElementById("conformpass").disabled = false;
            setErrorMsg("");
        }
        else{
            document.getElementById("conformpass").disabled = true;
            setErrorMsg("Password must contains atleast 1 lowercase, 1 uppercase, 1 number, 1 symbol and minimum length should be 8");
            setPassCheck("");

        }
    }


    let onChangeConPass = () => {
        if(document.getElementById("pass").value != document.getElementById("conformpass").value)
        {
            setPassCheck("Password and Conform Password must match")
        }
        else{
            setPassCheck("")
        }
    }

    
    let RegisterUser = async function(e){
        e.preventDefault();
        if(document.getElementById("pass").value != document.getElementById("conformpass").value)
        {
            setPassCheck("Password and Conform Password must match")
        }
        else{
            setPassCheck("")
            console.log(inputData);
            if(inputData.usertype == "Agent")
            {
                axios.post(
                    apisList.registerAgent,
                    { 
                        name:inputData.name, 
                        email:inputData.email, 
                        mobile: inputData.mobile, 
                        address: inputData.address, 
                        username: inputData.username, 
                        password:inputData.password 
                    }
                    ).then(function(response){
                        setMsg(response.data.message);
                        if(response.data.code == 0)
                        {
                            document.getElementById("alert").style.background = "#04AA6D";
                            console.log("user register successfully");
                        }
                        else{
                            document.getElementById("alert").style.background = "#f44336";
                            console.log("user exist with same username or email");
                        }
                    }).catch(function(error){
                        console.log(error);
                    })
            }
            else{
                // axios.post(apisList.registerOfficer, {inputData})
            }
        }
    }


    return (
        <>

            <div className="signup container">
                
                {(msg === '')?null:
                <div class="alert">
                    <span class="closebtn">&times;</span> 
                    <strong>Danger!</strong> {msg}
                </div>}
                
                <div className="regform">
                    <form className="form">
                        <input type="text" placeholder='Enter your Name' onChange={onChangeInput} name="name" required />

                        <input type="text" placeholder='Enter your Username' onChange={onChangeInput}  name="username" required />

                        <input type="email" placeholder='Enter your Email' onChange={onChangeInput} name="email" required />

                        <input type="number" placeholder='Enter your Mobile no.' onChange={onChangeInput} name="mobile" required />

                        <textarea placeholder='Enter your Address' name='address' onChange={onChangeInput} />

                        <select name="usertype" className='user' onChange={onChangeInput}>
                            <option value={"type"} disabled selected>Type of User</option>
                            <option value={"Officer"}>Officer</option>
                            <option value={"Agent"}>Agent</option>
                        </select>

                        <input id="pass" type="password" placeholder='Password' required onChange={onChangePass} name="password"/>

                        {(errorMsg === '') ?null : <span style={{fontSize:12, color:"white"}}>{errorMsg}</span> }

                        <input id="conformpass" type="password" name="conformPass" onChange={onChangeConPass} placeholder='Confirm Password' required disabled/>

                        {(passCheck === '') ?null : <span style={{fontSize:14, color:"#ba4941"}}>{passCheck}</span> }

                        <input id="subbtn" type={"submit"} value="Register Now" style={{ backgroundColor: "#a1eafb" }}  onClick={RegisterUser} />

                        
                    </form>
                </div>
                
            </div>
          
        </>
    );
}

export default Registeration