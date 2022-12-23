import React from 'react';
import {Link} from 'react-router-dom'

const User = ({usr}) => {
    return (
        <tr>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.confirmpassword}</td>
            <td>{usr.message}</td>
            <td><Link to="/Edituser"><button type='button' className='btn btn-warning'>EDIT</button></Link></td>
            <td><Link to="/Deleteuser"><button type='button' className='btn btn-danger' >DELETE</button></Link></td>
        </tr>
    );
}

export default User;
