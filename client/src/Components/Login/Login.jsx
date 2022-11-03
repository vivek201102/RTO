import React from 'react';
import {useState} from 'react';

function Login() {
    const [disable,setdisable]=useState(false);
    
    return (
        <>
           <section className="signin">
                
                <form className="form">
                 
                    <input type="email" placeholder='Enter your Email'required/>
                    <input type="password" placeholder='Password' required/>
                    <select name="usertype" className='user'>
                            <option value={"type"}>Type of User</option>
                            <option value={"Normal user"}>Officer</option>
                            <option value={"Agent"}>Agent</option>
                        </select>
                    <input type="submit" disabled={disable}  value="Login" style={{ backgroundColor: "#a1eafb" }} />
                </form>
                </section>
                
        </>
    )
}

export default Login;