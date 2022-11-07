import UserRegister from "./UserRegister"
import { Link } from "react-router-dom"
export default function SlotAllocate(){

    return(
        <>
            <div className="card container" style={{marginTop:"7%"}}>
                <center>

                <div className="data">
                Dynamnic data

                </div>
                <div className="payment">
                <Link to="/learninglicence/receipt"><input type="button"value="Proceed to Payment Procedure and Download receipt"/></Link>

                </div>

                </center>
            </div>
        </>
    )
}