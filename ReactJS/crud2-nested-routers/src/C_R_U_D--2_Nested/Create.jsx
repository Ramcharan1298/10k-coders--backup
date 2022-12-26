import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from './Form';

const Create = () => {
    const [user, setUser] = useState({
        id: "",
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
    })
    const navigate = useNavigate();

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    }

    const addingUser = () => {
        fetch('http://localhost:3003/form2/', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': "application/json" }
        }).then(() => {
            navigate('/')
            clearform()
        })
    };

    const clearform = () => {
        setUser({
            id: "",
            firstname: "",
            lastname: "",
            dateofbirth: "",
            emailid: "",
            mobilenumber: "",
        })
    };

    return (
        <div className='container'>
           <Form CheckingInput={CheckingInput} user={user} managesubmit={addingUser} btntext={"CREATE USER"}/>
        </div>
    );
}

export default Create;
