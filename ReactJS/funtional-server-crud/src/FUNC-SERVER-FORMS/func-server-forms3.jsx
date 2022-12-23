import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

var ServerCrud3 = () => {
    const [user, setUser] = useState({
        id: "",
        street: "",
        city: "",
        zipcode: "",
        country: "",
    });

    const [clients, setClients] = useState([]);
    const [edit , setEdit] = useState(false);

    useEffect(()=>{
        gettingusers();
    },[])

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone)
    };

    const adduser = () => {
        axios.post("http://localhost:3003/form3",user).then((res) => {
            gettingusers();
            clearform();
        })
    }

    const gettingusers = () => {
        axios.get("http://localhost:3003/form3").then((res) => {
            setClients(res.data);
            clearform();
        })
    }

    const clearform = () => {
        setUser({
            id: "",
            street: "",
            city: "",
            zipcode: "",
            country: ""
        })
    };

    const edituser=(usr)=>{
        setEdit(true);
        setUser(usr)
    }

    const updateusers=()=>{
        axios.put("http://localhost:3003/form3/"+user.id, user).then(()=>{
            gettingusers();
            clearform();
            setEdit(true);
        })
    }

    const deleteusers=(ram)=>{
        axios.delete("http://localhost:3003/form3/"+ram.id).then(()=>{
            gettingusers();
        })
    }
    return (
        <div className="container">
            <fieldset>
                <form>
                    <h2>Address</h2>
                    <hr />
                    <div className="Street">
                        <label htmlFor="Street:">ID:</label>
                        <input type="text" id="id" name="id" disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /> <br /><br /><br />
                    </div>
                    <div className="Street">
                        <label htmlFor="Street:">Street:</label>
                        <input type="text" id="street" name="street" value={user.street} onChange={(e) => { CheckingInput(e) }} /> <br />
                        <input type="text" id="add" name="add" /><br /><br />
                    </div>

                    <div className="city">
                        <label htmlFor="City State:">City State:</label>
                        <input type="text" id="city" name="city" value={user.city} onChange={(e) => { CheckingInput(e) }} />&nbsp;
                        <input type="text" id="state" /><br /><br />
                    </div>

                    <div className="zip">
                        <label htmlFor="Zip code:">Zip code:</label>
                        <input type="text" id="Zip" name="zipcode" value={user.zipcode} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="country">
                        <label htmlFor="Country:">Country:</label>
                        <input type="text" id="country" name="country" value={user.country} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    {edit?<button type="button" className="btn btn-primary" onClick={updateusers}>UPDATE</button>:<button type="button" className="btn btn-warning" onClick={adduser}>OK</button>}
                </form>
            </fieldset><br /><br /><br />

            <div id="userTable">
                <table border="1">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Street</td>
                            <td>City,State</td>
                            <td>Zip Code</td>
                            <td>Country</td>
                            <td>EDIT</td>
                            <td>DELETE</td>

                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((usr, i) =>
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.street}</td>
                                <td>{usr.city}</td>
                                <td>{usr.zipcode}</td>
                                <td>{usr.country}</td>
                                <td>
                                    <button type="button" className="btn1" onClick={() => { edituser(usr, i) }}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className="btn2" onClick={() => { deleteusers(usr, i) }}>DELETE</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default ServerCrud3;