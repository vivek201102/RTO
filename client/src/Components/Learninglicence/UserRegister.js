import { useState } from 'react';
// import './Register.css'
import validator from "validator";
import axios from "axios";
import apisList from "../../lib/apiList"
import { Link } from "react-router-dom";


function UserRegister() {

    let [inputData, setInputData] = useState("");
    let [errorMsg, setErrorMsg] = useState("");
    let [passCheck, setPassCheck] = useState("");
    let [checkAge, setcheckAge] = useState("");
    let [msg, setMsg] = useState("");


    let onChangeInput = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({ ...values, [name]: val }))
    }
    console.log("before axios");
    console.log(inputData);


    let onChangePass = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({ ...values, [name]: val }))

        if (validator.isStrongPassword(val, {
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            document.getElementById("conformpass").disabled = false;
            setErrorMsg("");
        }
        else {
            document.getElementById("conformpass").disabled = true;
            setErrorMsg("Password must contains atleast 1 lowercase, 1 uppercase, 1 number, 1 symbol and minimum length should be 8");
            setPassCheck("");

        }
    }

    let onChangeAge = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({ ...values, [name]: val }))
        if (document.getElementById("age").value < 16) {
            setcheckAge("You are not applicable for applying Learning Licence")
        }
        else {
            setcheckAge("")
        }
    }

    let onChangeConPass = () => {
        if (document.getElementById("pass").value != document.getElementById("conformpass").value) {
            setPassCheck("Password and Conform Password must match")
        }
        else {
            setPassCheck("")
        }
    }



    let RegisterUser = async function (e) {
        e.preventDefault();
        if (document.getElementById("pass").value != document.getElementById("conformpass").value) {
            setPassCheck("Password and Conform Password must match")
        }
        else {
            setPassCheck("")
            console.log(inputData);

            axios.post(
                apisList.registerUser,
                {
                    firstname: inputData.firstname,
                    middlename:inputData.middlename,
                    lastname:inputData.lastname,
                    dob:inputData.dob,
                    age:inputData.age,
                    dateregister:inputData.dateregister,
                    email: inputData.email,
                    mobile: inputData.mobile,
                    address: inputData.address,
                    password: inputData.password
                }
            ).then(function (response) {
                setMsg(response.data.message);
                if (response.data.code == 0) {
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";
                    console.log("user register successfully");
                }
                else {
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                    console.log("user exist with same username or email");
                }
            }).catch(function (error) {
                console.log(error);
            })


        }
    }


    return (
        <>

            <div className="signup container">

                <div class="alert" id="alert">
                    {(msg === '') ? null :
                        <div>
                            <span class="closebtn">&times;</span>
                            <strong>{msg}</strong>
                        </div>
                    }
                </div>

                <div className="regform">
                    <form className="form">
                        <input type="text" placeholder='Enter your First Name' onChange={onChangeInput} name="firstname" required />

                        <input type="text" placeholder='Enter your Middle Name' onChange={onChangeInput} name="middlename" required />

                        <input type="text" placeholder='Enter your Last Name' onChange={onChangeInput} name="lastname" required />
                        <span style={{fontSize:"18px",color:"white"}}>Date of Birth:</span>
                        <input type="date" required name='dob' onChange={onChangeInput} />

                        <input type="number" id='age' placeholder='Age' onChange={onChangeAge} name="age" required />

                        {(checkAge === '') ? null : <span style={{ fontSize: 12, color: "white" }}>{checkAge}</span>}

                        <span style={{fontSize:"18px",color:"white"}}>Date of Registeration:</span>
                        <input type="date" name="dateregister" required onChange={onChangeInput}/>

                        <input type="email" placeholder='Enter your Email' onChange={onChangeInput} name="email" required />

                        <input type="number" placeholder='Enter your Mobile no.' onChange={onChangeInput} name="mobile" required />

                        <textarea placeholder='Enter your Address' name='address' onChange={onChangeInput} />

                        <input id="pass" type="password" placeholder='Password' required onChange={onChangePass} name="password" />

                        {(errorMsg === '') ? null : <span style={{ fontSize: 12, color: "white" }}>{errorMsg}</span>}

                        <input id="conformpass" type="password" name="conformPass" onChange={onChangeConPass} placeholder='Confirm Password' required disabled />

                        {(passCheck === '') ? null : <span style={{ fontSize: 14, color: "#ba4941" }}>{passCheck}</span>}

                        <input id="subbtn" type={"submit"} value="Register Now" style={{ backgroundColor: "#a1eafb" }} onClick={RegisterUser} />

                        <Link to="/learninglicence/uploaddoc"><input type="button" value="Continue" style={{ backgroundColor: "#a1eafb" }} className="btn top-space" /></Link>
                    </form>
                </div>

            </div>

        </>
    );
}

export default UserRegister