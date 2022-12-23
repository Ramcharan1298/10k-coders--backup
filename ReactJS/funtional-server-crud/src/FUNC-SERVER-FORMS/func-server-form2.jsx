import axios from "axios";
import { useEffect ,useState } from "react";
import React from "react";
// import React ,{useState} from 'react'


var ServerCrud2 = () => {
    const [user, setUser] = useState({
        id: "",
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: ""
    });

    const [clients, setClients] = useState([])
    const [edit , setEdit] = useState(false)

    useEffect(()=>{
        gettingusers();
    },[])

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    }

    const gettingusers = () => {
        axios.get("http://localhost:3003/form2").then((res) => {
            console.log(res.data);
            setClients(res.data)
        })
    };

    const Clicktosubmit = () => {
        axios.post("http://localhost:3003/form2",user).then((res) => {
            gettingusers();
            clearform();
        })
    };

    const editusers=(ram)=>{
        setEdit(true);
        setUser(ram)
    }

    const clearform = () => {
        setUser({
            id: "",
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailid: "",
            mobilenumber: ""
        })
    }

    const updateusers=()=>{
        axios.put("http://localhost:3003/form2/"+user.id , user).then(()=>{
            gettingusers();
            clearform();
            setEdit(true)
        })
    }
 
    const deleteusers =(ram)=>{
        axios.delete("http://localhost:3003/form2/"+ram.id).then(()=>{
            gettingusers();
        }) 
    }

    return (
        <div id="userDetails">
            <div className="container">
                <fieldset>
                    <form>
                        <h1>HTML Form</h1>
                        <div className="ID">
                            <label htmlFor="ID">ID:</label>
                            <input type="number" name="id" id="id" disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="Fname">
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" name="firstname" id="fname" value={user.firstname} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="Lname">
                            <label htmlFor="lname">Last name:</label>
                            <input type="text" name="lastname" id="lname" value={user.lastname} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="date">
                            <label htmlFor="date">Date of Birth:</label>
                            <input type="text" name="dateofbirth" id="date" value={user.dateofbirth} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="email">
                            <label htmlFor="email">Email id:</label>
                            <input type="text" name="emailid" id="email" value={user.emailid} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="mobile">
                            <label htmlFor="mobile">Mobile Number:</label>
                            <input type="text" name="mobilenumber" id="mobile" value={user.mobilenumber} onChange={(e) => { CheckingInput(e) }} /><br /><br /><br />
                        </div>

                        {edit?<button type="button" className="btn btn-warning" onClick={updateusers}>UPDATE</button>:<button type="button" onClick={Clicktosubmit}>SUBMIT</button>}
                    </form>
                </fieldset>
            </div><br /><br /><br />


            <div id="userTable">
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last name</th>
                            <th>Date of Birth</th>
                            <th>Email id</th>
                            <th>Mobile Number</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {clients.map((usr, i) =>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.firstname}</td>
                                <td>{usr.lastname}</td>
                                <td>{usr.dateofbirth}</td>
                                <td>{usr.emailid}</td>
                                <td>{usr.mobilenumber}</td>
                                <td><button type="button" className="btn1" onClick={() => { editusers(usr, i) }}>EDIT</button></td>
                                <td><button type="button" className="btn2" onClick={() => { deleteusers(usr, i) }}>DELETE</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ServerCrud2;