import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import apiList from '../../lib/apiList';
function Uploaddoc() {
    
    let [files, setFile] = useState("");
    const location = useLocation();
    let navigate = useNavigate();

    let onChangeFiles = (e) => {
        // setFile(e.target.files[0]);
        setFile(values => ({...values, [e.target.name]:e.target.files[0]}));
        console.log(e.target.files[0], " My file")
    }

    const submitDoc = async (event) =>{
        event.preventDefault();
        var formData = new FormData();
        console.log(files);
        formData.append("files", files.aadhar);
        formData.append("files", files.photo);
        formData.append("files", files.address);
        formData.append("files", files.sign);
        formData.append("userid", location.state._id);
        formData.append("files", files);
        
        axios.post(apiList.uploadDoc, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
              },
        }).then(function(response){
            if(response.data.code == 0)
            {
                navigate("/learninglicence/slottime", {state: response.data.docdata})
            }
            else{

            }

        })
    }

    return (
        <center>
            <div className="container" >
                <div className='card border-success' style={{ marginTop: "5%" }} >
                    <div className="col-md-12 padding0px bg-success rounded-top">
                        
                            <h4 className="text" style={{paddingTop:"1%",color:"white"}}>Required Documents to Upload:</h4>
                        
                    </div>
                    <div className='upload' style={{ marginTop: "3%" }}>

                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFile" className="form-label">Addhar Card Proof:</label>
                            <input className="form-control" type="file" name='aadhar' id="formFile adhar" onChange={onChangeFiles}  required/>
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple" className="form-label">Passport Size Photo:</label>
                            <input className="form-control" type="file" name='photo' id="formFileMultiple photo" onChange={onChangeFiles} />
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple " className="form-label">Address Proof:</label>
                            <input className="form-control" type="file" name='address' id="formFileMultiple addProof" onChange={onChangeFiles} />
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple" className="form-label">Signature:</label>
                            <input className="form-control" type="file" name='sign' id="formFileMultiple sign" onChange={onChangeFiles} />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                    <Link style={{backgroundColor:"#a1eafb"}} onClick={submitDoc} class="btn">Upload Document</Link>
                    
                    </div>

                </div>
            </div>
        </center>
    );
}

export default Uploaddoc;