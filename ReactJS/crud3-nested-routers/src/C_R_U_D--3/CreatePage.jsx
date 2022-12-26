import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const CreatePage = () => {
    const [user, setUser] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        gender1: "",
        gender2: "",
        dob: "",
        dob2: "",
        dob3: "",
        height: "",
        weight: ""
    })

    const CheckingInput=(e)=>{
        var newone = {...user};
        newone[e.target.name] = e.target.value;
        setUser(newone);
    }
    const navigate = useNavigate();

    const clearform = () => {
        setUser({
            id: "",
            username: "",
            password: "",
            email: "",
            gender1: "",
            gender2: "",
            dob: "",
            dob2: "",
            dob3: "",
            height: "",
            weight: ""
        })
    };

    const addUser = ()=>{
        fetch("http://localhost:3003/form4/",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        }).then(()=>{
            navigate('/')
            clearform();
        })
    }
    return (
        <div>
           <Form CheckingInput={CheckingInput} user={user} manageSubmit={addUser} btnname={"CREATE"}/>
        </div>
    );
}

export default CreatePage;
