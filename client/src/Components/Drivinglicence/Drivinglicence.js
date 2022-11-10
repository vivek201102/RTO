export default function Drivinglicence(){

    return (
        <>
        <section className="signin">
           
           <div class="alert" id="alert">
               {/* {(msg === '')?<div>
                   <span class="closebtn" id="closebtn">&times;</span> 
                   <strong id="str"></strong>
               </div>:
               <div>
                   <span class="closebtn" id="closebtn">&times;</span> 
                   <strong id="str">{msg}</strong>
               </div>
               } */}
           </div>
           <form className="form" >
            
               <input type="text" placeholder='Enter your Learning licence Number' style={{marginBottom:"5%"}}  name="learning" required/>

               <input type="number" name="mobile" placeholder='Enter your Mobile Number'  style={{marginBottom:"5%"}}  required/>

               <input type="submit" value="Apply Now" style={{ backgroundColor: "#a1eafb" }} />
           </form>
           </section>
        </>
    )
}