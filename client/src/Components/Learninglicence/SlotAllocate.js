// import UserRegister from "./UserRegister"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import apiList from "../../lib/apiList";


export default function SlotAllocate(){
    let navigate = useNavigate();
    let location = useLocation();
    let [userVerified, setUserVerified] = useState(false)
    let [slotBooked, setslotBooked] = useState(false)
    let [inputData, setInputData] = useState("");
    let [bookSlotDate, setBookSlotDate] = useState("");
    // let options = [{name: "MCWOG", id: 1}, {name: "MCWG", id: 2}, {name: "LMV", id: 3}, {name: "MGV", id: 4}, {name: "HMV", id: 5}, {name: "HTV", id: 6}]

    let [isRejected, setIsRejected] = useState(false);

    let onBooking = async (e) => {
        e.preventDefault();
        let slot;

        if(inputData.slotDate == undefined)
        {
            console.log("Please select slot date");
            return;
        }

        if(inputData.slotTime == "first") slot = "10 am - 12 pm";
        else if(inputData.slotTime == "second") slot = "1 pm - 3 pm";
        else if(inputData.slotTime == "second") slot = "3 pm - 5 pm";
        else if(inputData.slotTime == undefined){
            console.log("Please select slot...")
            return;
        }

              
        if(inputData.licenceType == undefined)
        {
            console.log("Please select licence type")
            return;
        }
        
        axios.post(apiList.bookSlot, {
            docId: location.state._id, 
            userId: location.state.userId,
            slotDate: inputData.slotDate,
            slotTime: slot,
            licenceType: inputData.licenceType
        }).then(function(response){
            if(response.data.code == 0)
            {
                alert("Slot booked successfully...");
                setBookSlotDate(inputData.slotDate);
                setslotBooked(true);
                // navigate("/learninglicence/slottime", {state: location.state});
            }
        }).catch(function(error){
            
        })
    
        
    }

    let onChangeInput = (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }


    useEffect(()=>{
        setUserVerified(location.state.isVerified);
        setIsRejected(location.state.isRejected);
        if(location.state.slotDate)
        {
            setslotBooked(true);
            setBookSlotDate(location.state.slotDate);
        }
    }, [])

    let onChangeDate = function(event){
        var dtToday = new Date();
        
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate() + 2;
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
    
        
    
        document.getElementById('txtDate').setAttribute("min", maxDate)

        if(document.getElementById('txtDate').value < maxDate)
        {
            document.getElementById('txtDate').value = maxDate;
        }
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    };

    let changeDate = (e) => {
        e.preventDefault();
        setslotBooked(false);
    }

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
            
            </> : (slotBooked) ? 
            <> 
                <div className="card container mt-5 w-50 shadow-lg">
                
                <div class="text-center my-5">
                    <strong>Notification</strong>
                    <p>You have already booked your slot</p>
                    <p>Please go to RTO office to complete you test</p>
                    <p>You have booked slot at {bookSlotDate}</p>
                    <button className="btn btn-success" onClick={changeDate}>Change Date</button>
                </div>

            </div>
            </> :
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
                        <from className="">

                        <strong style={{textDecoration:"underline"}}>Book Slote</strong>
                        <br />
                        <label>Choose the Date</label>
                        <br />
                        <input type="Date" name="slotDate" id="txtDate" onChange={onChangeDate}/>
                        <br />
                        <select name="slotTime" className="user" onChange={onChangeInput}  required>
                            <option disabled selected>Select Time</option>
                            <option value="first">10 am - 12 pm</option>
                            <option value="second">1 pm - 3 pm</option>
                            <option value="third">3 pm - 5 pm</option>
                        </select>

                        <select name="licenceType" className="user" onChange={onChangeInput}  required>
                            <option value="None" disabled selected>Select Type</option>
                            <option value="MCWOG">MCWOG</option>
                            <option value="MCWG">MCWG</option>
                            <option value="LMV">LMV</option>
                            <option value="HMV">HMV</option>
                            <option value="HTV">HTV</option>
                        </select>
                        <br />
                        <input type="text" className="my-2" value="Rs. 1500" disabled/>
                           <br /> 
                        <button className="btn btn-success mt-4 mb-4" onClick={onBooking}>submit</button>
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