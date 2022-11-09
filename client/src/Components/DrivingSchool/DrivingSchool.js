export default function DrivingSchool(){

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
            
               <input type="text" placeholder='Enter your Email / Username'  name="email" required/>

               <input type="password" name="password" placeholder='Password'  required/>

               <select name="usertype" className='user' required>
                   <option  selected disabled>Type of User</option>
                   <option value={"Officer"}>Officer</option>
                   <option value={"Agent"}>Agent</option>
               </select>

               <input type="submit" value="Login" style={{ backgroundColor: "#a1eafb" }} />
           </form>
           </section>
        </>
    )
}