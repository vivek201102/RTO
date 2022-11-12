import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
// import { Dropdown } from "bootstrap-4-react/lib/components"
import './Services.css'
import { Link, useNavigate } from "react-router-dom"
// import Dropdown from 'react-dropdown';

export default function Services() {
    let navigate = useNavigate();
    
    let onCheckStatus = async () => {
        navigate("/learninglicence");
    }

    return (
        <>
            <div className="container whole">
                <div className="head container">Services we provide...</div><br />
                <div className="row">
                    <div className="col-sm-3 width">
                        <div className="card">
                            <div className="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-learners-license-services.png" alt="Driving School" />
                                <h5><p className="card-text">Driving/Learning License:</p></h5>
                                <p className="card-text">Apply for License</p>
                                <center>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-primary"  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Apply Now   
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/learninglicence">Apply for Learning license</Link>
                                        <div className="dropdown-item hov" onClick={onCheckStatus}>Status of Learning license</div>
                                        <Link className="dropdown-item" to="/drivinglicence">Apply for Driving licence</Link>
                                    </div>
                                </div>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 width">
                        <div className="card">
                            <div className="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-driving-school-license.png" alt="Driving School" />
                                <h5><p className="card-text">Driving School:</p></h5>
                                <p className="card-text">Registering for Driving School</p>
                                <center><Link to="/drivingschool" className="btn btn-primary">Apply Now</Link></center>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 width">
                        <div className="card">
                            <div className="card-body">
                                <img src="https://parivahan.gov.in/parivahan//sites/default/files/images/v-fancy-number-allocation.png" alt="Driving School" />
                                <h5><p className="card-text">Special Number:</p></h5>
                                <p className="card-text">Apply for Special No. of your Vehicle</p>
                                <center><Link to="/specialnumber" className="btn btn-primary">Apply Now</Link></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

