import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import apiList from '../../lib/apiList';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import "./view.css"
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


export default function(){
    let location = useLocation();
    let [user, setUser] = useState("");
    let navigate = useNavigate();

    const approveUser = async (e) => {
        e.preventDefault();
        console.log(user.officerusername)
        console.log(user._id)
        axios.post(apiList.verifyUser, {
            userid:user._id,
            officerusername:user.officerusername
        }).then(function(response){
            navigate("/officerview", {state: response.data.officerinfo});
        }).catch(function(error){
            alert(error.message);
        })


    }

    const rejectUser = async (e) => {
        
    }

    
    React.useEffect(()=>{
        setTimeout(()=>{
            setUser(location.state);
            console.log(user)
        }, 2000)
    }, [user])
    
    return(
        <>
        {
            (user) ? 
                <>
    
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white',boxShadow:'0 0 60px 30px #c5d1c8',marginTop:'10%', width:'100%', marginBottom:"5%" }} >
        <form style={{paddingLeft:"25%", paddingBottom:"5%"}}>
                    
                    
                    <div className="pt-4">
                        <div className="d-flex align-items-center">
                            <label className="label" name="firstname">Name: </label>
                            <span name="name" className='ms-2'>{user.firstname} {user.middlename} {user.lastname}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="">
                        <div className="input-group">
                            <label className="label" name="Username">DOB:</label>
                           
                            <span name="username" className='ms-2'>{user.dob}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="">
                        <div className="input-group">
                            <label className="label" name="age">Age:</label>
                            
                            <span name="age" className="ms-2">{user.age}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="">
                        <div className="input-group">
                            <label className="label" name="email">Address:</label>
                            <span name="address" className="ms-2">{user.address}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="">
                        <div className="input-group">
                            <label className="label" name="mobile">Mobile No:</label>
                            
                            <span name="mobile" className="ms-2">{user.mobile}</span>
                        </div>
                    </div>
                    <br/>
                    <div className="text-reset">
                        <div className="input-group">
                            <label className="label" name="document">Documents:</label>
                            
                            <span className="ms-2 " >
                                <a href={`${apiList.serverLink}${user.aadharcard}`} target="_blank" className='text-decoration-none text-reset'>Aadhar Card</a>
                            </span>
                            
                            <span className="ms-2 ">
                                <a href={`${apiList.serverLink}${user.photo}`} target="_blank" className='text-decoration-none text-reset'>Photograph</a>
                            </span>
                            
                            <span className="ms-2"><a href={`${apiList.serverLink}${user.addressproof}`} className='text-decoration-none text-reset' target="_blank">Address Proof</a>
                            </span>

                            <span className="ms-2">
                                <a href={`${apiList.serverLink}${user.signature}`} className='text-decoration-none text-reset' target="_blank">Signature</a>
                            </span>

                            <span className="ms-2"><a href=""></a></span>
                        </div>
                    </div> 
              <br/>
              <br/>
              <div className='row'>
                <div className="col-3">
                    <button className="btn btn-success" onClick={approveUser}>Approved</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" >Decline</button>
                </div>
              </div>
            </form>

        </Box>
      </Container>
                </>
            : 
            <div className="loader">
                <div className='spinner'>

                </div>
            </div>
        }
    
        </>
    );
}