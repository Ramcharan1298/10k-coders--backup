import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const Delete = () => {
    const [user , setUser] =useState({});
    const navigate = useNavigate();
    const params = useParams();
 
    useEffect(()=>{
        fetch("http://localhost:3003/form2/"+params.id)
        .then((res)=>res.json())
        .then((data)=>{setUser(data)})
    },[])
    
    const ConformDelete =()=>{
        fetch("http://localhost:3003/form2/"+params.id,{
           method:"DELETE",
        }).then(()=>{
            navigate('/')
        })
    }

    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.firstname}</li>
                <li>{user.lastnname}</li>
                <li>{user.dateofbirth}</li>
                <li>{user.emailid}</li>
                <li>{user.mobilenumber}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={ConformDelete}>Confirm Delete</button>
        </div>
    );
}

export default Delete;
