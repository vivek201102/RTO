import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
function Uploaddoc() {

    //   const [file, setFile] = useState("")

    //   function handleChange(event) {
    //     setFile(event.target.files[0])
    //   }

    return (
        <center>
            <div className="container" >
                <form className='card border-success' style={{ marginTop: "5%" }}>
                    <div className="col-md-12 padding0px bg-success rounded-top">
                        <h4 className="text" style={{paddingTop:"1%",color:"white"}}>Required Documents to Upload:</h4>
                    </div>
                    <div className='upload' style={{ marginTop: "3%" }}>

                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFile" className="form-label">Addhar Card Proof:</label>
                            <input className="form-control" type="file" name='aadhar' id="formFile" />
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple" className="form-label">Passport Size Photo:</label>
                            <input className="form-control" type="file" name='photo' id="formFileMultiple" multiple />
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple" className="form-label">Address Proof:</label>
                            <input className="form-control" type="file" name='address' id="formFileMultiple" multiple />
                        </div>
                        <div className="mb-3" style={{ width: "40%" }}>
                            <label for="formFileMultiple" className="form-label">Signature:</label>
                            <input className="form-control" type="file" name='sign' id="formFileMultiple" multiple />
                        </div>
                    </div>
                    
                    <Link to="/learninglicence/slottime"><input type="button" value="Continue" style={{backgroundColor:"#a1eafb"}}  className="btn top-space" /></Link>

                </form>
            </div>
        </center>
    );
}

export default Uploaddoc;