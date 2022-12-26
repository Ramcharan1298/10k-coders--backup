import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate , useParams} from 'react-router-dom';

const Delete = () => {
    const [user, setUser] = useState({});
    const navigate =useNavigate();
    const params = useParams();

    useEffect(()=>{
        fetch("http://localhost:3003/form5/"+params.id)
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    },[])

    const conformDelete=()=>{
        fetch("http://localhost:3003/form5/"+params.id,{
            method:"DELETE",
        }).then(()=>{
            navigate('/')
        })
    }

    return (
        <div>
            <ul>
                <li>{user.id}</li>
                <li>{user.university}</li>
                <li>{user.institute}</li>
                <li>{user.branch}</li>
                <li>{user.degree}</li>
                <li>{user.status}</li>
                <li>{user.average}</li>
                <li>{user.experience}</li>
                <li>{user.website}</li>
            </ul>
            <button type='button' className='btn btn-danger' onClick={conformDelete}>Confirm Delete</button>
        </div>
    );
}

export default Delete;
