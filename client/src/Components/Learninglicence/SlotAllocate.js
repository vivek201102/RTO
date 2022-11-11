// import UserRegister from "./UserRegister"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function SlotAllocate(){

    let [userVerified, setUserVerified] = useState(true )
    let options = [{name: "MCWOG", id: 1}, {name: "MCWG", id: 2}, {name: "LMV", id: 3}, {name: "MGV", id: 4}, {name: "HMV", id: 5}, {name: "HTV", id: 6}]

    

    let onChangeDate = function(){
        var dtToday = new Date();
        
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate() + 2;
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
    
        // or instead:
        // var maxDate = dtToday.toISOString().substr(0, 10);
    
        document.getElementById('txtDate').setAttribute("min", maxDate)

        if(document.getElementById('txtDate').value < maxDate)
        {
            document.getElementById('txtDate').value = maxDate;
        }
    };

    return(
        <>
        {(userVerified)?
            <center>
                <div className="card container mt-5 w-50 shadow-lg">
                
                    <div class="">
                        <strong>Congratulations!!!</strong>
                        <p>Your document has been verified successfully</p>
                        <p>Now you can book slot for online Test</p>
                    </div>

                </div>
                    <div class="card container mt-5 w-50 shadow-lg">
                    <div class="">
                        <from>

                        <strong style={{textDecoration:"underline"}}>Book Slote</strong>
                        <br />
                        <label>Choose the Date</label>
                        <br />
                        <input type="date" id="txtDate" onChange={onChangeDate}/>
                        <br />
                        <select name="timeslote" className="user"  required>
                            <option disabled selected>Select Time</option>
                            <option value="first">10 am - 12 pm</option>
                            <option value="second">1 pm - 3 pm</option>
                            <option value="third">3 pm - 5 pm</option>
                        </select>
                        
                            
                        </from>
                    </div>

                    </div>

            </center>
            :
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
        }
        </>
    )
}