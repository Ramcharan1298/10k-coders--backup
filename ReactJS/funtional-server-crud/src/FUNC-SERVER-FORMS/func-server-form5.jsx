import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

var ServerCrud5 = () => {
    const [user, setUser] = useState({
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        // subjects:[],
        average: "",
        experience: "",
        website: "",
    });

    const [clients, setClients] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        gettingusers();
    }, [])

    const checkingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone)
    };

    const adduser = () => {
        axios.post("http://localhost:3003/form5", user).then((res) => {
            gettingusers();
            clearform();
        })
    }

    const gettingusers = () => {
        axios.get("http://localhost:3003/form5").then((res) => {
            setClients(res.data);
            clearform();
        })
    }

    const clearform = () => {
        setUser({
            id: "",
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            // subjects:[],
            average: "",
            experience: "",
            website: ""
        })
    };

    const edituser = (usr) => {
        setEdit(true);
        setUser(usr)
    }

    const updateusers = () => {
        axios.put("http://localhost:3003/form5/" + user.id, user).then(() => {
            gettingusers();
            clearform();
            setEdit(true);
        })
    }

    const deleteusers = (ram) => {
        axios.delete("http://localhost:3003/form5/" + ram.id).then(() => {
            gettingusers();
        })
    }
    return (
        <div className="Container">
            <fieldset>
                <legend>Registration Details</legend>
                <form>
                    <div className="University">
                        <label htmlFor="University">ID :</label>
                        <input type="text" name="id" id="Uname" disabled value={user.id} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>
                    <div className="University">
                        <label htmlFor="University">University :</label>
                        <input type="text" name="university" id="Uname" value={user.university} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>

                    <div className="Institute">
                        <label htmlFor="Institute">Institute :</label>
                        <input type="text" name="institute" id="Iname" value={user.institute} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>

                    <div className="Branch">
                        <label htmlFor="Branch">Branch :</label>
                        <select name="branch" id="branch" value={user.branch} onChange={(e) => { checkingInput(e) }}>
                            <option>---Select---</option>
                            <option>CSE</option>
                            <option>EEE</option>
                            <option>ECE</option>
                            <option>CIVIL</option>
                            <option>MECHANICAL</option>
                        </select><br /><br />
                    </div>

                    <div className="degree">
                        <label htmlFor="Degree">Degree :</label>
                        <select name="degree" id="deg" value={user.degree} onChange={(e) => { checkingInput(e) }}>
                            <option>---Select---</option>
                            <option>BTECH</option>
                            <option>M.TECH</option>
                            <option>MBA</option>
                            <option>MSC</option>
                        </select><br /><br />
                    </div>

                    <div className="Status">
                        <label htmlFor="Status">Status :</label>
                        <input type="radio" name="status" value={"Pursuing"} checked={user.status == "Pursuing"} onChange={(e) => { checkingInput(e) }} />Pursuing
                        <input type="radio" name="status" value={"Completed"} checked={user.status == "Completed"} onChange={(e) => { checkingInput(e) }} />Completed
                    </div><br />

                    {/* <div className="Subjects" >
                            <label htmlFor="Subject">Subjects :</label>
                            <input type="checkbox"  value="HTML" onChange={(e)=>{checkingInput(e)}} checked={user.subjects.indexOf("HTML")> -1}/>HTML &nbsp;
                            <input type="checkbox"  value="CSS" onChange={(e)=>{checkingInput(e)}} checked={user.subjects.indexOf("CSS")>-1}/>CSS &nbsp;
                            <input type="checkbox"  value="JAVASCRIPT" onChange={(e)=>{checkingInput(e)}} checked={user.subjects.indexOf("JAVASCRIPT")>-1}/>JAVASCRIPT &nbsp;
                            <input type="checkbox"  value="REACT JS" onChange={(e)=>{checkingInput(e)}} checked={user.subjects.indexOf("REACT JS")>-1}/>REACT JS 
                         </div><br /> */}

                    <div className="average">
                        <label htmlFor="Average CPI" id="avg">Average CPI:</label>
                        <input type="text" name="average" id="average" min="1" max="80" value={user.average} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>

                    <div className="experience">
                        <label htmlFor="Experience" id="ex">Experience :</label>
                        <input type="text" name="experience" id="exp" min="1" max="10" value={user.experience} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>

                    <div className="website">
                        <label htmlFor="Website or Blog" id="we">Website or Blog :</label>
                        <input type="text" name="website" id="web" min="1" max="10" value={user.website} onChange={(e) => { checkingInput(e) }} /><br /><br />
                    </div>

                    {edit?<button type="button" className="btn btn-danger" onClick={updateusers}>UPDATE USER</button> : <button type="button" className="btn btn-warning" onClick={adduser}>ADD DETAILS</button>}
                </form>
            </fieldset><br /><br />


            <div id="userTable">
                <table border="2" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Status</th>
                            {/* <th>Subjects</th> */}
                            <th>AverageCPI</th>
                            <th>Experience</th>
                            <th>Website</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((usr, i) => (
                            <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.university}</td>
                                <td>{usr.institute}</td>
                                <td>{usr.branch}</td>
                                <td>{usr.degree}</td>
                                <td>{usr.status}</td>
                                {/* <td>{usr.subjects}</td> */}
                                <td>{usr.average}</td>
                                <td>{usr.experience}</td>
                                <td>{usr.website}</td>
                                <td>
                                    <button type="button" className="btn1" onClick={() => { edituser(usr, i) }}>EDIT</button>
                                </td>
                                <td>
                                    <button type="button" className="btn2" onClick={() => { deleteusers(usr, i) }}>DELETE</button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default ServerCrud5;