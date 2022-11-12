import axios from "axios";
import { useState } from "react";
import apisList from "../../lib/apiList"


export default function Drivinglicence(){
    const [driving,setdriving]=useState({
        learning :""
    });
    let [msg, setMsg] = useState("");
    const onchange=(e)=>{
        const {name,value}=e.target;
        setdriving({...driving,[name]:value});
    }
    const checklicencenumber=async (e)=>{
        e.preventDefault();
        const {learning}=driving;
        console.log(learning);
        axios.post(
            apisList.authdrive,
            { 
                learning
            }
            ).then(function(response){
                // console.log(response)
               setMsg(response.data.message);
                if(response.data.code == 0)
                {
                    document.getElementById("alert").style.backgroundColor = "#04AA6D";
                    console.log("Driving Licence Application successfully");
                }
                else{
                    document.getElementById("alert").style.backgroundColor = "#f44336";
                    console.log("Learning number does not Exist");
                }
            }).catch(function(error){
                console.log(error);
            })
    }
    return (
        <>
        <section className="signin">
           
        <div class="alert" id="alert">
                {(msg === '')?null:
                <div>
                    <span class="closebtn">&times;</span> 
                    <strong>{msg}</strong>
                </div>
                }
                </div>
           <form className="form" onSubmit={checklicencenumber} >
            
               <input type="text" placeholder='Enter your Learning licence Number' onChange={onchange} style={{marginBottom:"5%"}}  name="learning" required/>

               {/* <input type="number" name="mobile" placeholder='Enter your Mobile Number'  style={{marginBottom:"5%"}}  required/> */}

               <input type="submit" value="Apply Now" style={{ backgroundColor: "#a1eafb" }} />
           </form>
           
           </section>
        </>
    )
}