import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import apiList from "../../lib/apiList";
 

export default function OfficerView(){

    const navigate = useNavigate();
    let location = useLocation();

    let [users, setUsers] = useState("");

    useEffect(()=>{
        console.log("In context")
        axios.get(apiList.getUnverified).then(function(response){
            setUsers(response.data.userdatas);
            // setUsers((value) => ({...value, "officerId": location.state._id}));
        }).catch(function(error){

        })
    }, [])




    const viewDetail = async (event, user) =>{
        let sendData = {...user, "officerusername": location.state.username}
        console.log(sendData);
        navigate("/officerview/viewdetail", {state: sendData})
    }

    return (

        <>
        
        <div className="container">
            <h3 className="p-3 text-center">User's List</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Apply for</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user._id}>
                            <td>{user.firstname}</td>
                            <td>{user.email}</td>
                            <td>Learning Licence</td>
                            <td><button className="btn btn-primary" onClick={event => viewDetail(event, user)}>View Details</button></td>
                        </tr>
                     )}
                </tbody>
            </table>
        </div>
        </>
    );
}