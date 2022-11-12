import React, { useState } from 'react'
import { Container } from '@mui/system';
import axios from 'axios';
import apiList from '../../lib/apiList';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let [inputData, setInputData] = useState("");
    let navigate = useNavigate();

    let onChangeInput = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        setInputData((values) => ({...values, [name]:val}));
    }

    let checkStatus = (e) => {
        e.preventDefault();
        axios.post(apiList.agentLogin, {
            mobile: inputData.mobile,
            password: inputData.password
        }).then(function(response){
            if(response.data.code == 0)
            {
                console.log(response.data);
                navigate("status", {state:response.data.docData})
            }

            else
            {
                console.log(response.data)
                alert(response.data.message)
            }
        }).catch(function(error){
            console.log(error.message);
        })
    }

  return (
    <div>
        <Container>
                <div class="bg-light mt-5 d-flex flex-column p-5 align-items-center ">
                    <h5 className='mb-3'>Enter your details to check status</h5>
                   
                        <input name="mobile" type="text" placeholder='Enter Mobile No' onChange={onChangeInput} />
                        <br />
                        <input name="password" type="password" className="mt-3" placeholder='Enter Password' onChange={onChangeInput}/>
                        <br />
                        <button className='btn btn-success mt-3' onClick={checkStatus}>Check Status</button>
                    

                </div>
        </Container>
    </div>
  )
}
