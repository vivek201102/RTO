import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
export default function(){
    return(
        <>
         <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white',boxShadow:'0 0 60px 30px #c5d1c8',marginTop:'10%', width:'100%', height: '75vh' }} >
        <form style={{paddingLeft:"25%"}}>
                    <br/>
                    
                    <div className="col-2">
                        <div className="input-group" style={{marginTop:"50%"}}>
                            <label className="label" name="firstname">Name:</label>
                            
                            <span name="Name" className="text-danger"></span>
                        </div>
                    </div>
                    <br/>
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label" name="Username">Username:</label>
                           
                            <span name="Username" className="text-danger"></span>
                        </div>
                    </div>
                    <br/>
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label" name="age">Age:</label>
                            
                            <span name="age" className="text-danger"></span>
                        </div>
                    </div>
                    <br/>
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label" name="Email">Email id:</label>
                            
                            <span name="Email" className="text-danger"></span>
                        </div>
                    </div>
                    <br/>
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label" name="dateregister">Date of Registration:</label>
                            
                            <span name="dateregister" className="text-danger"></span>
                        </div>
                    </div>
                    <br/>
                    <div className="col-2">
                        <div className="input-group">
                            <label className="label" name="Mobile">Mobile Number:</label>
                            
                            <span className="text-danger"></span>
                        </div>
                    </div> 
              <br/>
              <br/>
              <div className='row'>
                <div className="col-3">
                    <button className="btn btn-success" >Approved</button>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" >Decline</button>
                </div>
              </div>
            </form>

        </Box>
      </Container>
        </>
    );
}