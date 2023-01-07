import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHeroAction } from './STORE__REDUX/CRUD-Actions';

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
                id: "",
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: "",
            };
            console.log(this.props);
    }

    CheckingInput =(e)=>{
        let newHero = {...this.state}
        newHero[e.target.name] = e.target.value;
        this.setState(newHero)
    }
 
    addHero=()=>{
       console.log(this.state);
       this.props.addHero(this.state)
    }

    render() {
        return (
            <div>
                <div className='container'>
                <h4>Bootstrap Form Validation </h4><hr />
                <div className='ID'>
                    <label >ID</label><br />
                    <input type="number" className="form-control" name='id'  placeholder='id' disabled value={this.state.id} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Name'>
                    <label >Name</label><br />
                    <input type="text" className="form-control" name='name'  placeholder='Name' value={this.state.name} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Username'>
                    <label >Username</label><br />
                    <input type="text" className="form-control" name='username'  placeholder='Username' value={this.state.username} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Email'>
                    <label >Email</label><br />
                    <input type="text" className="form-control" name='email'  placeholder='Email' value={this.state.email} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Password'>
                    <label >Password</label><br />
                    <input type="password" className="form-control" name='password'  placeholder='Password' value={this.state.password} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Confirmpassword'>
                    <label >Confirm Password</label><br />
                    <input type="password" className="form-control" name='confirmpassword'  placeholder='Confirm Password' value={this.state.confirmpassword} onChange={(e)=>{this.CheckingInput(e)}} /><br />
                </div>

                <div className='Message'>
                    <label >Message</label><br />
                    <textarea type="text" className="form-control" name="message"  placeholder='Message' cols="24" rows="3" value={this.state.message} onChange={(e)=>{this.CheckingInput(e)}}></textarea><br /><br />
                </div>
                
                <button onClick={this.addHero}>ADD HERO</button>
                {/* <br /><br /><div className='container-fluid'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Confirmpassword</th>
                                <th>Message</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.everyuser.map((usr, i) =>
                                <tr key={i}>
                                    <td>{usr.id}</td>
                                    <td>{usr.name}</td>
                                    <td>{usr.username}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.password}</td>
                                    <td>{usr.confirmpassword}</td>
                                    <td>{usr.message}</td>
                                    <td><button type='button' onClick={()=>{this.editUser(usr , i)}}>EDIT</button></td>
                                    <td><button type='button' onClick={()=>{this.deleteuser(usr, i)}}>DELETE</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div> */}
            </div>
            </div>
        );
    }
}

function mapStateToProps(state){
   return {
    allHeroes : state.Heroes
   }
}

function mapDispatchToProps(dispatch){
   return {
     addHero:(Hero)=>dispatch(addHeroAction(Hero))
   }
}

export default connect(mapDispatchToProps , mapStateToProps)(Person)
