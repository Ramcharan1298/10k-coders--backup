import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({charan}) => {
    const navigate = useNavigate();

    const balancingdelete=(charan)=>{
        navigate('/Delete/'+charan.id)
    }

    const balancingedit =(charan)=>{
        navigate('/Edit/'+charan.id)
    }

     return (
            <tr>
                <td>{charan.id}</td>
                <td>{charan.university}</td>
                <td>{charan.institute}</td>
                <td>{charan.branch}</td>
                <td>{charan.degree}</td>
                <td>{charan.status}</td>
                <td>{charan.average}</td>
                <td>{charan.experience}</td>
                <td>{charan.website}</td>
                <td><button type='button' className='btn btn-success' onClick={()=>{balancingedit(charan)}}>EDIT</button></td>
                <td><button type='button' className='btn btn-danger' onClick={()=>{balancingdelete(charan)}}>DELETE</button></td>
            </tr>
    );
}

export default User;
