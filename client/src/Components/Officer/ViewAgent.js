import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import apiList from '../../lib/apiList';
import Box from '@mui/material/Box';
import axios from 'axios';

export default function ViewAgent() {

    let navigate = useNavigate();
    let location = useLocation();
    let [agent, setAgent] = useState("");

    useEffect(()=>{
        setAgent(location.state);
        console.log(agent);
    }, [])

    const approveagent = async (e) => {
        e.preventDefault();
        // console.log(user.officerusername)
        // console.log(user._id)
        axios.post(apiList.verifyAgent, {
            agentid:agent.agentId,
            docid: agent._id,
            officerusername:agent.officerusername
        }).then(function(response){
            navigate("/officerview", {state: response.data.officerinfo});
        }).catch(function(error){
            alert(error.message);
        })
        
        
    }
    
    const rejectagent = async (e) => {
        e.preventDefault();
        axios.post(apiList.rejectAgent, {
            userid:agent._id,
            docid: agent._id,
            officerusername:agent.officerusername
        }).then(function(response){
            navigate("/officerview", {state: response.data.officerinfo});
        }).catch(function(error){

        })
    }


  return (
    (agent)?  
    
    <>
    
    <Container maxWidth="md">
      <Box sx={{ bgcolor: 'white',boxShadow:'0 0 60px 30px #c5d1c8',marginTop:'10%', width:'100%', marginBottom:"5%" }} >
      <form style={{paddingLeft:"25%", paddingBottom:"5%"}}>
                  
                  
                  <div className="pt-4">
                      <div className="d-flex align-items-center">
                          <label className="label" name="firstname">Name: </label>
                          <span name="name" className='ms-2'>{agent.name}</span>
                      </div>
                  </div>
                  <br/>
                  <div className="">
                      <div className="input-group">
                          <label className="label" name="agentname">Email:</label>
                         
                          <span name="agentname" className='ms-2'>{agent.email}</span>
                      </div>
                  </div>
                  <br/>
                  {/* <div className="">
                      <div className="input-group">
                          <label className="label" name="age">Age:</label>
                          
                          <span name="age" className="ms-2">{agent.age}</span>
                      </div>
                  </div> */}
                  <br/>
                  <div className="">
                      <div className="input-group">
                          <label className="label" name="email">Address:</label>
                          <span name="address" className="ms-2">{agent.address}</span>
                      </div>
                  </div>
                  <br/>
                  <div className="">
                      <div className="input-group">
                          <label className="label" name="mobile">Mobile No:</label>
                          
                          <span name="mobile" className="ms-2">{agent.mobile}</span>
                      </div>
                  </div>
                  <br/>
                  <div className="text-reset">
                      <div className="input-group">
                          <label className="label" name="document">Documents:</label>
                          
                          <span className="ms-2 " >
                              <a href={`${apiList.serverLink}agent/${agent.aadharcard}`} target="_blank" className='text-decoration-none text-reset'>Aadhar Card</a>
                          </span>
                          
                          <span className="ms-2 ">
                              <a href={`${apiList.serverLink}agent/${agent.photo}`} target="_blank" className='text-decoration-none text-reset'>Photograph</a>
                          </span>
                          
                          

                          <span className="ms-2">
                              <a href={`${apiList.serverLink}agent/${agent.signature}`} className='text-decoration-none text-reset' target="_blank">Signature</a>
                          </span>

                      </div>
                  </div> 
            <br/>
            <br/>
            <div className='row'>
              <div className="col-3">
                  <button className="btn btn-success" onClick={approveagent}>Approved</button>
              </div>
              <div className="col-3">
                  <button className="btn btn-danger" onClick={rejectagent}>Decline</button>
              </div>
            </div>
          </form> 

      </Box>
    </Container>
              </> : null 
  )
}
