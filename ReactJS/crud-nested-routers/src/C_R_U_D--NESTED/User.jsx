import React from 'react';
import {useNavigate} from 'react-router-dom'

const User = ({usr}) => {
    const navigate = useNavigate();

    const managingDelete =(usr)=>{
        console.log(usr)
        navigate('/Deleteuser/' + usr.id)
    };

    const managingEdit=(usr)=>{
        navigate('/Edituser/' + usr.id)
    };

    return (
        <tr>
            <td>{usr.id}</td>
            <td>{usr.name}</td>
            <td>{usr.username}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td>{usr.confirmpassword}</td>
            <td>{usr.message}</td>
            <td><button type='button' className='btn btn-warning' onClick={()=>managingEdit(usr)}>EDIT</button></td>
            <td><button type='button' className='btn btn-danger' onClick={()=>managingDelete(usr)}>DELETE</button></td>
        </tr>
    );
}

export default User;
