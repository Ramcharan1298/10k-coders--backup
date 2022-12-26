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
        fetch("http://localhost:3003/form3/"+params.id)
        .then((res)=>res.json())
        .then((data)=>{setUser(data)})
    },[])
    const ConfirmDelete=()=>{
        fetch("http://localhost:3003/form3/"+params.id , {
            method:"DELETE",
        }).then(()=>{
            navigate('/')
        })
        
    }
    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.street}</li>
                <li>{user.city}</li>
                <li>{user.zipcode}</li>
                <li>{user.country}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={ConfirmDelete}>Confirm Delete</button>
        </div>
    );
}

export default DeletePage;
