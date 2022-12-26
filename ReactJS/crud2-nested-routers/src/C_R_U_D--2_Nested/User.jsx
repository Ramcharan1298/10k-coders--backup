import React from 'react';
import {useNavigate} from 'react-router-dom';


const User = ({pbs}) => {
    const navigate = useNavigate();

    const managingDelete =(pbs)=>{
        navigate('/Delete/'+pbs.id)
    };

    const managingEdit=()=>{
        navigate('/Edit/'+pbs.id)
    }
    return (
            <tr>
                <td>{pbs.id}</td>
                <td>{pbs.firstname}</td>
                <td>{pbs.lastname}</td>
                <td>{pbs.dateofbirth}</td>
                <td>{pbs.emailid}</td>
                <td>{pbs.mobilenumber}</td>
                <td><button type='button' className='btn btn-success' onClick={()=>{managingEdit(pbs)}}>EDIT</button></td>
                <td><button type='button' className='btn btn-danger'onClick={()=>{managingDelete(pbs)}}>DELETE</button></td>
            </tr>
    );
}

export default User;
