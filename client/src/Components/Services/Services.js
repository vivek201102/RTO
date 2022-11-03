import "bootstrap/dist/css/bootstrap.css"
import './Services.css'
import { Link } from "react-router-dom"
import Dropdown from 'react-dropdown';

export default function Services() {
    return (
        <>
            <div className="container whole">
                <div className="head container">Services we provide...</div><br />
                <div class="row">
                    <div class="col-sm-3 width">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-learners-license-services.png" alt="Driving School" />
                                <p class="card-text"><h5>Driving/Learning License:</h5></p>
                                <p class="card-text">Apply for License</p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Apply Now
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 width">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-school-license.png" alt="Driving School" />
                                <p class="card-text"><h5>Driving School:</h5></p>
                                <p class="card-text">Registering for Driving School</p>
                                <center><Link to="/drivingschool" class="btn btn-primary">Apply Now</Link></center>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 width">
                        <div class="card">
                            <div class="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-fancy-number-allocation.png" alt="Driving School" />
                                <p class="card-text"><h5>Special Number:</h5></p>
                                <p class="card-text">Apply for Special No. of your Vehicle</p>
                                <center><Link to="/specialnumber" class="btn btn-primary">Apply Now</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//demo

{/* <div class="service-sec center-position">
                        <p class="center-position"> 
                        <a href="https://sarathi.parivahan.gov.in/sarathiservice/" target="_blank">
                        <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-school-license.png" alt="Driving School"> 
                        </a>
                        </p>
                        <h5 class="center-position">Driving School</h5>
                        <p class="left-position">One place for application of Driving School License</p>    
                        <a href="https://sarathi.parivahan.gov.in/sarathiservice/" target="_blank" class="bttn-more">More</a>
 </div> */}