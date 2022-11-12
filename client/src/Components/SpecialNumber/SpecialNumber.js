import { useState } from "react"
import "./SpecialNumber.css"
import axios from "axios"
import apiList from "../../lib/apiList";

 export default function Specialnumber(){

    let [status, setStatus] = useState("Not Available");
    let [inputData, setInputData] = useState("");
    let [inputDisable, setInputDisable] = useState(false);

    let checkStaus = async (e) => {
        e.preventDefault();
        console.log(inputData);
        setStatus("Checking...");
        document.getElementById("status").className = "";
        document.getElementById("status").classList.add("loading");
        setTimeout(()=>{

            axios.post(apiList.checkNumber, {
                district: inputData.district,
                number: inputData.number,
                series: inputData.series
            }).then(function(response){
                if(response.data.code === 1)
                {
                    document.getElementById("status").className = "";
                    document.getElementById("status").classList.add("notAvailable");
                    setStatus("Not Available");
                }
                else{
                    document.getElementById("status").className = "";
                    document.getElementById("status").classList.add("available");
                    setStatus("Available");
                    var element = document.getElementsByClassName("status-available");
                    element[0].style.display = "block";
                    element[1].style.display = "block";
                    document.getElementById("submit-btn").style.display = "none";
                    setInputDisable(true);
                }
                console.log(response.data);
            })

              
        }, 2000)
        
    }

    let bookNumber = async (e) => {
        e.preventDefault();
        console.log("booking")
        axios.post(apiList.addNumber, {
            mobile:inputData.mobile,
            district:inputData.district,
            series:inputData.series,
            number:inputData.number
        }).then(
            function(response){
                if(response.data.code === 0)
                {
                    alert("Number Plate has been booked for you")
                    console.log("Number Plate added successfully")
                }
                else{
                    alert("Server error....");
                    console.log("Server error")
                }
            })
        
    }

    let rejectNumber = async (e) => {
        e.preventDefault();
        console.log("reject")
    }

    let onChangeInput = async (event) => {
        const name = event.target.name;
        const val = event.target.value;
        setInputData(values => ({...values, [name]: val}))
    }

    return (
        <>
        <section className="specialno">
                
                <form className="form" onSubmit={checkStaus}>
                    
                    <input type="number" className="mb-4" placeholder='Enter your Mobile No' style={{textAlign:"center", backgroundColor:"white"}} name="mobile" onChange={onChangeInput} disabled={inputDisable} required/>
                    <div class="input-group justify-content-center w-100 mb-4" >
                    
                    
                    <input type="text" placeholder="GJ"  size="2" style={{backgroundColor:"white"}} disabled/>
                    <input type="text"  placeholder="District Code" size="8" onChange={onChangeInput} style={{backgroundColor:"white"}} name="district" disabled={inputDisable} />
                    <input type="text" placeholder="Series" size="3"  onChange={onChangeInput}  name="series" style={{backgroundColor:"white"}} disabled={inputDisable} />
                
                    <input type="text"  placeholder="Number" size="5" onChange={onChangeInput} name="number" style={{backgroundColor:"white"}} disabled={inputDisable} />
                    </div>
                    
                    <div id="status" class="notAvailable mb-4">
                        <input type="text"  placeholder={status} style={{width:"98%", textAlign:"center", backgroundColor:"white"}} disabled/>
                    </div>

                    <div class="status-available">
                        <label style={{color:"white"}}>Price for number</label>
                        <input type="text" value="Rs. 5000" style={{width:"98%", textAlign:"center", backgroundColor:"white"}} disabled/>
                        <label style={{color:"white"}}>You have to pay this much of amount on site</label>
                    </div>

                    <input id="submit-btn"  type="submit"   value="Check Availability" style={{ backgroundColor: "#a1eafb" }} />
                    
                    <div class="input-group justify-content-center status-available" >
                        <input type="button" class="btn p-3 px-5 me-4"  value="Book" style={{backgroundColor:"#a1eafb"}} size="5" onClick={bookNumber}/>
                    
                        <input type="button" class="btn p-3 px-5" value="Reject" style={{backgroundColor:"#a1eafb"}} size="5" onClick={rejectNumber} />
                    </div>
                </form>
                </section>
        </>
    )
}