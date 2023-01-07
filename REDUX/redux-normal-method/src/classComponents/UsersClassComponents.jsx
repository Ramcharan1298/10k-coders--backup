import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserAction } from '../actions/usersAction';

class UsersClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "",
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: "",
            }
        }
    }

    CheckingInput = (e) => {
        let newUsers = { ...this.state.user };
        newUsers[e.target.name] = e.target.value;
        this.setState({ user: newUsers })
    };

    addingUser = () => {
        console.log(this.state.user);
        this.props.addUser(this.state.user)
    }

    render() {
        const { id, name, username, email, password, confirmpassword, message } = this.state.user;
        const { users } = this.props.everyusers
        console.log(this.props);
        // const this.props.users.users
        return (
            <div>
                <div className='container'>
                    <h4>Bootstrap Form Validation </h4><hr />
                    <div className='ID'>
                        <label >ID</label><br />
                        <input type="number" className="form-control" name='id' placeholder='id' disabled value={id} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Name'>
                        <label >Name</label><br />
                        <input type="text" className="form-control" name='name' placeholder='Name' value={name} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Username'>
                        <label >Username</label><br />
                        <input type="text" className="form-control" name='username' placeholder='Username' value={username} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Email'>
                        <label >Email</label><br />
                        <input type="text" className="form-control" name='email' placeholder='Email' value={email} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Password'>
                        <label >Password</label><br />
                        <input type="password" className="form-control" name='password' placeholder='Password' value={password} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Confirmpassword'>
                        <label >Confirm Password</label><br />
                        <input type="password" className="form-control" name='confirmpassword' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => { this.CheckingInput(e) }} /><br />
                    </div>

                    <div className='Message'>
                        <label >Message</label><br />
                        <textarea type="text" className="form-control" name="message" placeholder='Message' cols="24" rows="3" value={message} onChange={(e) => { this.CheckingInput(e) }}></textarea><br /><br />
                    </div>

                    <button className='btn btn-success' onClick={this.addingUser}>ADD HERO</button>
                    <br /><br /><div className='container'>
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
                                {users.map((user , i) => <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.confirmpassword}</td>
                                    <td>{user.message}</td>
                                    <td><button type='button' className='btn btn-warning' onClick={()=>{this.editUser(user , i)}}>EDIT</button></td>
                                    <td><button type='button' className='btn btn-danger' onClick={()=>{this.deleteuser(user, i)}}>DELETE</button></td>
                                </tr>)}
                                {/* {this.props.users.map((usr, i) =>
                                <tr key={i}>
                                    

                                </tr>
                            )} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        everyusers: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUserAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponents)