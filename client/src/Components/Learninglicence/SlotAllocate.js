import UserRegister from "./UserRegister"
import { Link } from "react-router-dom"
export default function SlotAllocate(){

    return(
        <>
            <div className="card container" style={{marginTop:"7%"}}>
                <center>

                <div className="data">
                <h4 className="p-3">We have accepted your request</h4>
                <h4 className="p-3">Our officer will verify the details submited by you</h4>
                <h4 className="p-3">Your document will be verified by officer with in 10 working days</h4>
                <h4 className="p-3">After that you can book online test slot</h4>
                </div>
                {/* <div className="payment">
                <Link to="/learninglicence/receipt"><input type="button"value="Proceed to Payment Procedure and Download receipt"/></Link>

                </div> */}
                
                <Link to="/"><input type="button"value="Home" style={{backgroundColor:"#59b565", color:"white"}}/></Link>

                </center>
            </div>
        </>
    )
}