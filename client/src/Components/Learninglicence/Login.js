import { Container } from '@mui/system'
import axios from 'axios';
import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import apiList from '../../lib/apiList';

export default function Login() {

    let navigate = useNavigate();
    let [inputData, setInputData] = useState("");
    let onChangeInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }

    let checkStatus = async (e) => {
        e.preventDefault();
        
        axios.post(apiList.authuser, {
            mobile:inputData.mobile,
            password:inputData.password
        }).then(function(response){
            if(response.data.code == 0)
            {
                console.log(response.data.userdata);
                navigate("slottime", {state: {...response.data.documentData, learningno: response.data.userdata.learningno}})
            }
            else if(response.data.code == 1)
            {
                console.log(response.data.message);
            }
            else{

            }
        }).catch(function(error){
            console.log(error.message)
        })
    }


  return (
    <>
    
        <div className=''>
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
    </>
  )
}
