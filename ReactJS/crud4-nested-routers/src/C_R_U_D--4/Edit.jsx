import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from './Form';

const Editpage = () => {
    const [user, setUser] = useState({
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        // subjects:[],
        average: "",
        experience: "",
        website: "",
    });

    useEffect(() => {
        fetch("http://localhost:3003/form5/" + params.id)
            .then((res) => res.json())
            .then((data) => setUser(data))
    }, []);

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    }

    const navigate = useNavigate();
    const params = useParams();

    const UpdateUser = () => {
        fetch("http://localhost:3003/form5/" + params.id, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div>
            <Form CheckingInput={CheckingInput} user={user} manageSubmit={UpdateUser} btntype={"UPDATE"} />
        </div>
    );
}

export default Editpage;

