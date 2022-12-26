import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const CreatePage = () => {
    const [user, setUser] = useState({
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        average: "",
        experience: "",
        website: "",
    })

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    };

    const navigate = useNavigate();

    const clearform = () => {
        setUser({
            id: "",
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            average: "",
            experience: "",
            website: "",
        })
    };

    const addUser = () => {
        fetch("http://localhost:3003/form5/", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            navigate('/')
            clearform();
        })
    }
    return (
        <div>
            <Form CheckingInput={CheckingInput} user={user} manageSubmit={addUser} btntype={"CREATE"} />
        </div>
    );
}

export default CreatePage;
