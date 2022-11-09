import { useState }  from "react";
import { Link } from "react-router-dom";
export default function OfficerView(){
    const [users, setUsers] = useState([
        { id: 1, Name: 'Frank',  email: 'frank.murphy@test.com', apply: 'Learning Licenece' },
       
    
    ]);

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
                        <tr key={user.id}>
                            <td>{user.Name}</td>
                            <td>{user.email}</td>
                            <td>{user.apply}</td>
                            <td><Link to="/officerview/viewdetail"><button className="btn btn-primary"> ViewDetails</button></Link></td>
                        </tr>
                    )}
                </tbody>
                
            </table>
        </div>
        
        </>
    );

}