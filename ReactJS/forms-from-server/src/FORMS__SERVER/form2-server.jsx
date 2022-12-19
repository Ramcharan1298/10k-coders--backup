import { Component } from "react";
import axios  from "axios";

export default class Form2server extends Component {
    constructor() {
        super()
        this.state = {
            person: {
                id:"",
                firstname: "",
                lastname: "",
                dateofbirth: "",
                emailid: "",
                mobilenumber: ""
            },
            allusers : [],

            editindex : null,
        }
    }

    
    CheckingInput=(e)=>{
        console.log(e.target)
        var newperson = {...this.state.person};
        newperson[e.target.name] = e.target.value;
        this.setState({person:newperson})
    }
    
    submit=()=>{
        console.log("adding user");
        axios({
            method:'post',
            url:'http://localhost:3003/form2/',
            data:this.state.person,
            headers:{
                "Content-Type":"application/json"
            }
        })
        var neweachusers = [...this.state.allusers];
        neweachusers.push(this.state.person);
        this.setState({allusers : neweachusers})
        this.ClearForm()
    }

    ClearForm=()=>{
        var Freshform = {
                id:"",
                firstname: "",
                lastname: "",
                dateofbirth: "",
                emailid: "",
                mobilenumber: ""
    }
    this.setState({person: Freshform})
    }

    EditUser=(usr ,i)=>{
        this.setState({person : usr , editindex : i})
    }

    updateUser=()=>{
        var number = this.state.editindex +1;
        axios({
            method:'put',
            url:'http://localhost:3003/form2/' + number,
            data:this.state.person
        })
        var latestUpdates =[...this.state.allusers];
        latestUpdates[this.state.editindex] = this.state.person;
        this.setState({allusers:latestUpdates , editindex:null})
        this.ClearForm()
    }

    deleteUser=(user , id)=>{
        var number =id +1
        console.log(number)
        // console.log(id);
        console.log(user , id);
        axios.delete("http://localhost:3003/form2/" +number).then((res)=>{
            this.componentDidMount()
        })
    }
    render() {
        return (
            <div id="userDetails">
                <div className="container">
                    <fieldset>
                        <form>
                            <h1>HTML Form</h1>
                            <div className="ID">
                                <label htmlFor="ID">ID:</label>
                                <input type="number" name="id" id="id" disabled value={this.state.person.id} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="Fname">
                                <label htmlFor="fname">First Name:</label>
                                <input type="text" name="firstname" id="fname" value={this.state.person.firstname} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="Lname">
                                <label htmlFor="lname">Last name:</label>
                                <input type="text" name="lastname" id="lname" value={this.state.person.lastname} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="date">
                                <label htmlFor="date">Date of Birth:</label>
                                <input type="text" name="dateofbirth" id="date" value={this.state.person.dateofbirth} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Email id:</label>
                                <input type="text" name="emailid" id="email" value={this.state.person.emailid} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br />
                            </div>

                            <div className="mobile">
                                <label htmlFor="mobile">Mobile Number:</label>
                                <input type="text" name="mobilenumber" id="mobile"  value={this.state.person.mobilenumber} onChange={(e)=>{this.CheckingInput(e)}}/><br /><br /><br />
                            </div>

                            {this.state.editindex !== null ? <button type="button" className="swap" onClick={this.updateUser}>UPDATE</button> : <button type="button" onClick={this.submit}>SUBMIT</button>}
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
                            {this.state.allusers.map((usr , i)=>
                               <tr key={i}>
                                <td>{usr.id}</td>
                                <td>{usr.firstname}</td>
                                <td>{usr.lastname}</td>
                                <td>{usr.dateofbirth}</td>
                                <td>{usr.emailid}</td>
                                <td>{usr.mobilenumber}</td>
                                <td><button type="button" className="btn1" onClick={()=>{this.EditUser(usr , i)}}>EDIT</button></td>
                                <td><button type="button" className="btn2" onClick={()=>{this.deleteUser(usr , i)}}>DELETE</button></td>
                               </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        let response =await axios.get("http://localhost:3003/form2")
        this.setState({allusers: response.data})
    }
}
 
