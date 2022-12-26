import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const Createuser = () => {
    const [user, setUser] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
    });

    const navigate = useNavigate();

    const CheckingInput = (e) => {
        var newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    };

    const addusers = () => {
        console.log(user)
        fetch("http://localhost:3003/form1", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
           console.log("user is adding")
           clearform()
           navigate('/')
        })
    }

    const clearform = () => {
        setUser({
            id: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: "",
        })
    }

    return (
        <div className='container'>
            <Form CheckingInput={CheckingInput} user={user} handlesubmit={addusers} btntext="Createuser" />
        </div>
    );
}

export default Createuser;
