import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const DeletePage = () => {
    const [user, setUser] =useState({});
    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(()=>{
        fetch("http://localhost:3003/form4/"+params.id)
        .then((res)=>res.json())
        .then((data)=>{setUser(data)})
    },[])
    const ConfirmDelete=()=>{
        fetch("http://localhost:3003/form4/"+params.id , {
            method:"DELETE",
        }).then(()=>{
            navigate('/')
        })
        
    }
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.username}</li>
                <li>{user.password}</li>
                <li>{user.email}</li>
                <li>{user.gender1}</li>
                <li>{user.gender1}</li>
                <li>{user.dob}-{user.dob2}-{user.dob3}</li>
                <li>{user.height}-{user.weight}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={ConfirmDelete}>Confirm Delete</button>
        </div>
    );
}

export default DeletePage;
