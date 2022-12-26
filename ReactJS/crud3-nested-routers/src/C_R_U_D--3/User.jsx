import React from 'react';
import {useNavigate} from 'react-router-dom';

const User = ({chris}) => {
    const navigate = useNavigate();

    const managingEdit=(chris)=>{
        navigate('/Editpage/'+chris.id)
    }

    const managingDelete=(chris)=>{
        navigate('/DeletePage/'+chris.id)
    }

    return (

            <tr>
                <td>{chris.id}</td>
                <td>{chris.username}</td>
                <td>{chris.password}</td>
                <td>{chris.email}</td>
                <td>{chris.gender1}</td>
                <td>{chris.gender1}</td>
                <td>{chris.dob}-{chris.dob2}-{chris.dob3}</td>
                <td>{chris.height}-{chris.weight}</td>
                <td><button type='button' className='btn btn-warning' onClick={()=>{managingEdit(chris)}}>EDIT</button></td>
                <td><button type='button' className='btn btn-danger' onClick={()=>{managingDelete(chris)}}>DELETE</button></td>
            </tr>

    );
}

export default User;
