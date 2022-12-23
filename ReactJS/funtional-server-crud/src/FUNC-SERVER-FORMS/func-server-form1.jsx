import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'

var ServerCrud = () => {
    //  const [age, setAge] = useState(62);
    const [user, setUser] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    });

    const [clients, setClients] = useState([]);
    const [edit , setEdit]  = useState(false)
    useEffect(() => {
        takingusers();
    }, []);

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    };

    const submit = () => {
        axios.post("http://localhost:3003/form1", user).then(() => {
            // console.log("user is added")
            takingusers();
            clearform();
        })
    };

    const takingusers = () => {
        axios.get("http://localhost:3003/form1").then((response) => {
            setClients(response.data);
            console.log(response.data)
        })
    };

    const deletingusers=(ram)=>{
        axios.delete("http://localhost:3003/form1/"+ram.id).then((response)=>{
            takingusers();
        })
    }

    const editusers=(ram)=>{
        setEdit(true)
        setUser(ram)
    }

    const updateusers=()=>{
       axios.put("http://localhost:3003/form1/"+user.id,user).then(()=>{
        takingusers();
        clearform();
        setEdit(false)
       })
    }

    const clearform=()=>{
      setUser({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      })
    }
    return (
        <div className='container'>
            <h4>Bootstrap Form Validation </h4><hr />
            <div className='Name'>
                <label htmlFor="ID">ID</label><br />
                <input type="text" className="form-control" name='id' id="id" placeholder='ID' disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Name'>
                <label htmlFor="Name">Name</label><br />
                <input type="text" className="form-control" name='name' id="name" placeholder='Name' value={user.name} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Username'>
                <label htmlFor="Username">Username</label><br />
                <input type="text" className="form-control" name='username' id="username" placeholder='Username' value={user.username} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Email'>
                <label htmlFor="Email">Email</label><br />
                <input type="text" className="form-control" name='email' id="email" placeholder='Email' value={user.email} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Password'>
                <label htmlFor="Password">Password</label><br />
                <input type="password" className="form-control" name='password' id="password" placeholder='Password' value={user.password} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Confirmpassword'>
                <label htmlFor="Confirmpassword">Confirm Password</label><br />
                <input type="password" className="form-control" name='confirmpassword' id="confirmpassword" placeholder='Confirm Password' value={user.confirmpassword} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Message'>
                <label htmlFor="Message">Message</label><br />
                <textarea type="text" className="form-control" name="message" id="message" placeholder='Message' cols="24" rows="3" value={user.message} onChange={(e) => { CheckingInput(e) }}></textarea><br /><br />
            </div>

            {edit? <button type="button" className="btn btn-primary" onClick={updateusers}>UPDATE</button> : <button type="button" className="btn btn-secondary" onClick={submit}>SUBMIT</button>}




            <br /><div className='table'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                            <th>Message</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((ram, i) => 
                            <tr key={i}>
                                <td>{ram.id}</td>
                                <td>{ram.name}</td>
                                <td>{ram.username}</td>
                                <td>{ram.email}</td>
                                <td>{ram.password}</td>
                                <td>{ram.confirmpassword}</td>
                                <td>{ram.message}</td>
                                <td><button type="button" className="btn btn-success" onClick={()=>{editusers(ram ,i)}}>EDIT</button></td>
                                <td><button type="button" className="btn btn-danger" onClick={()=>{deletingusers(ram , i)}}>DELETE</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ServerCrud