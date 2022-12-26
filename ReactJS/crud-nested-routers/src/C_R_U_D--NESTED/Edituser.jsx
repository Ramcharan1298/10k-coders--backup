import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams ,useNavigate} from 'react-router-dom';
import Form from './Form';

const Edituser = () => {
    const [user , setUser] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    });

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:3003/form1/'+params.id)
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
    },[])

    const CheckingInput=(e)=>{
        var newone = {...user};
        newone[e.target.name] = e.target.value;
        setUser(newone)
    };

    const updateUser=()=>{
        fetch("http://localhost:3003/form1/"+params.id,{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        }).then(()=>{
            navigate('/')
        })
    }
    return (
        <div className='container'>
             <Form user={user} CheckingInput={CheckingInput} btntext={"updateUser"} handlesubmit={updateUser}/>
        </div>
    );
}

export default Edituser;
