import { Component } from "react";

export default class Form3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                street: "",
                city: "",
                zipcode: "",
                country: ""
            },
            everyuser:[],

            indexofedit:null,
        }

    }

    CheckingInput=(e)=>{
        console.log(e.target)
        var newperson = {...this.state.person};
        newperson[e.target.name] = e.target.value;
        this.setState({person:newperson})
    }

    render() {
        return (
            <div className="container">
                <fieldset>
                    <form>
                        <h2>Address</h2>
                        <hr />
                        <div className="Street">
                            <label htmlFor="Street">Street:</label>
                            <input type="text" name="street" id="street" value={this.state.person.street} onChange={(e)=>{CheckingInput(e)}}/><br />
                            {/* <input type="text" name="street" id="add"  /><br /><br /> */}
                        </div>

                        <div className="city">
                            <label htmlFor="City">City State:</label>
                            <input type="text" name="city" id="city" value={this.state.person.city} onChange={(e)=>{CheckingInput(e)}}/>&nbsp;
                            {/* <input type="text" name="city" id="state"  /><br /><br /> */}
                        </div>

                        <div className="zip">
                            <label htmlFor="Zip code">Zip code:</label>
                            <input type="text" name="zipcode" id="Zip" value={this.state.person.zipcode} onChange={(e)=>{CheckingInput(e)}}/><br /><br />
                        </div>

                        <div className="country">
                            <label htmlFor="Country">Country:</label>
                            <input type="text" name="country" id="country" value={this.state.person.country} onChange={(e)=>{CheckingInput(e)}}/><br /><br />
                        </div>

                        <button type="button">OK</button>
                    </form>
                </fieldset><br /><br /><br />

                <div id="userTable">
                 <table border="1">
                    <thead>
                        <tr>
                            <th>Street</th>
                            <th>City,State</th>
                            <th>Zip Code</th>
                            <th>Country</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.everyuser.map((usr)=>
                          <tr>
                            <td>{usr.street}</td>
                            <td>{usr.city}</td>
                            <td>{usr.zipcode}</td>
                            <td>{usr.country}</td>
                          </tr>
                        )}
                    </tbody>
                 </table>
            </div>
            </div>

            
        )
    }
}