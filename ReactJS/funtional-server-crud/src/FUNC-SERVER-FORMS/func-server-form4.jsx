import axios from "axios";
import { useState } from "react"

var ServerCrud4 = () => {
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        gender1: "",
        gender2: "",
        dob: "",
        dob2: "",
        dob3: "",
        height: "",
        weight: ""
    });

    const [clients, setClients] = useState([]);
    const [edit , setEdit] = useState(false);

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone)
    }

    const submit = () => {
        axios.post("http://localhost:3003/form4", user).then(() => {
            gettingusers();
            clearform();
        })
    }

    const gettingusers = () => {
        axios.get("http://localhost:3003/form4").then((res) => {
            setClients(res.data)
        })
    }

    const clearform = () => {
        setUser({
            id: "",
            username: "",
            password: "",
            email: "",
            gender1: "",
            gender2: "",
            dob: "",
            dob2: "",
            dob3: "",
            height: "",
            weight: ""
        })
    }

    const edituser=(usr)=>{
        setEdit(true)
        setUser(usr)
    }

    const deleteusers=(ram)=>{
        axios.delete("http://localhost:3003/form4/"+ram.id).then(()=>{
            gettingusers();
        })
    }

    const updateuser=()=>{
        axios.put('http://localhost:3003/form4/'+user.id , user).then(()=>{
            gettingusers();
            clearform();
            setEdit(true)
        })
    }
    return (
        <div className='container'>
            <div className='Username'>
                <label htmlFor="Username">ID</label><br />
                <input type="text" id='uname' className='form-control' name='username' placeholder='id' value={user.id} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Username'>
                <label htmlFor="Username">Username</label><br />
                <input type="text" id='uname' className='form-control' name='username' placeholder='Username' value={user.username} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Password'>
                <label htmlFor="Password">Password</label><br />
                <input type="password" id='password' className='form-control' name='password' placeholder='Password' value={user.password} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Email'>
                <label htmlFor="Email">Email Address</label><br />
                <input type="Email" id='email' className='form-control' name='email' placeholder='Email' value={user.email} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='man'>
                <select name="gender1" id="man" className='form-control' value={user.gender1} onChange={(e) => { CheckingInput(e) }}>
                    <option>I am a man</option>
                    <option>I am a women</option>
                    <option>I am a others</option>
                </select><br />
            </div>

            <div className='women'>
                <select name="gender2" id="women" className='form-control' value={user.gender2} onChange={(e) => { CheckingInput(e) }}>
                    <option>I want to find women</option>
                    <option>I want to find man</option>
                    <option>I want to find others</option>
                </select><br />
            </div>

            <div className='dob'>
                <label htmlFor="">Date of Birth</label><br />
                <select name="dob" id="year" value={user.dob} onChange={(e) => { CheckingInput(e) }}>
                    <option>year</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                </select>
                <select id="month" name="dob2" value={user.dob2} onChange={(e) => { CheckingInput(e) }}>
                    <option>month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <select name="dob3" id="day" value={user.dob3} onChange={(e) => { CheckingInput(e) }}>
                    <option>day</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>

                </select><br /><br /><br />
            </div>

            <div className='height'>
                <label htmlFor="hieght">Height / Weight</label><br />
                <select name="height" id="Height" value={user.height} onChange={(e) => { CheckingInput(e) }}>
                    <option>Height</option>
                    <option>5.1</option>
                    <option>5.2</option>
                    <option>5.3</option>
                    <option>5.4</option>
                    <option>5.5</option>
                    <option>5.6</option>
                    <option>5.9</option>
                    <option>6.0</option>
                    <option>6.2</option>
                </select>
                <select name="weight" id="weight" value={user.weight} onChange={(e) => { CheckingInput(e) }}>
                    <option>Weight</option>
                    <option>70kg</option>
                    <option>75kg</option>
                    <option>80kg</option>
                    <option>85kg</option>
                    <option>90kg</option>
                    <option>95kg</option>
                    <option>100kg</option>
                </select>
            </div><br /><br /><br />
            { edit ? <button type='button' className='btn btn-secondary' onClick={updateuser}>UPDATE</button> : <button type='button' className='btn btn-primary' onClick={submit}>SUBMIT</button>}

            <br /><br /><br /><div className='usertable'>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email Address</th>
                            <th>Gender-1</th>
                            <th>Gender-2</th>
                            <th>Date of Birth</th>
                            <th>Height / Weight</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((usr, i) =>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.username}</td>
                                <td>{usr.password}</td>
                                <td>{usr.email}</td>
                                <td>{usr.gender1}</td>
                                <td>{usr.gender2}</td>
                                <td>{usr.dob}-{usr.dob2}-{usr.dob3}</td>
                                <td>{usr.height}-{usr.weight}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => { edituser(usr, i) }}>EDIT</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => { deleteusers(usr, i) }}>DELETE</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
export default ServerCrud4;