import React from 'react';
import {useNavigate} from 'react-router-dom';

const User = ({chris}) => {
    const navigate = useNavigate();

    const managingEdit=(chris)=>{
        navigate('/Edit/'+chris.id)
    }

    const managingDelete=(chris)=>{
        navigate('/Delete/'+chris.id)
    }

    return (
            <tr>
                <td>{chris.id}</td>
                <td>{chris.street}</td>
                <td>{chris.city}</td>
                <td>{chris.zipcode}</td>
                <td>{chris.country}</td>
                <td><button type='button' className='btn btn-warning' onClick={()=>{managingEdit(chris)}}>EDIT</button></td>
                <td><button type='button' className='btn btn-danger' onClick={()=>{managingDelete(chris)}}>DELETE</button></td>
            </tr>

    );
}

export default User;
