import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Form from './Form';

const Edit = () => {
    const [user, setUser] = useState({
        id: "",
        firstname: "",
        lastname: "",
        dateofbirth: "",
        emailid: "",
        mobilenumber: "",
    });
    const navigate = useNavigate();

    const params = useParams();
    useEffect(()=>{
        fetch("http://localhost:3003/form2/"+params.id)
        .then((res)=>res.json())
        .then((data)=>{
            setUser(data)
        })
    },[])

    const CheckingInput = (e) => {
        var newone = { ...user };
        newone[e.target.name] = e.target.value;
        setUser(newone);
    };

    const UpdaateUser = () => {
        fetch("http://localhost:3003/form2/"+params.id, {
            method: "PUT",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            navigate('/')
        })
    };

    // const clearform = () => {
    //     setUser({
    //         id: "",
    //         firstname: "",
    //         lastname: "",
    //         dateofbirth: "",
    //         emailid: "",
    //         mobilenumber: "",
    //     })
    // }
    return (
        <div>
           <Form CheckingInput={CheckingInput} user={user} btntext={"UPDATE"} managesubmit={UpdaateUser}/>
        </div>
    );
}

export default Edit;
