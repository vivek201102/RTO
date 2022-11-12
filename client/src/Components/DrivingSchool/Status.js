// import UserRegister from "./UserRegister"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import apiList from "../../lib/apiList";


export default function SlotAllocate(){
    let navigate = useNavigate();
    let location = useLocation();
    let [userVerified, setUserVerified] = useState(false)
    let [isRejected, setIsRejected] = useState(false);



    useEffect(()=>{
        console.log(location.state);
       setIsRejected(location.state.isRejected)
       setUserVerified(location.state.isVerified)
    }, [])

    return(
        <>
        {(userVerified)?
            (isRejected) ?<> 
                <div className="card container mt-5 w-50 shadow-lg">
                
                <div class="" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <strong>Sorry!!!</strong>
                    <p>Your document has not been approved by our officer</p>
                    <p>Please contact to RTO office near you</p>
                </div>

            </div>
            
            </> :  
            <> 
                <div className="card container mt-5 w-50 shadow-lg">
                
                <div class="text-center my-5">
                    <strong>Notification</strong>
                    <p>Your Driving school request has been approved</p>
                    <p>Please go to RTO office for any query</p>
                </div>

            </div>
            </>
            :
            <div className="card container" style={{marginTop:"7%"}}>
                <center>

                <div className="data">
                <h4 className="p-3">We have accepted your request</h4>
                <h4 className="p-3">Our officer will verify the details submited by you</h4>
                <h4 className="p-3">Your document will be verified by officer with in 10 working days</h4>
                <h4 className="p-3">After that you can book online test slot</h4>
                </div>
                 
                <Link to="/"><input type="button"value="Home" style={{backgroundColor:"#59b565", color:"white"}}/></Link>

                </center>
            </div>
        }
        </>
    )
}