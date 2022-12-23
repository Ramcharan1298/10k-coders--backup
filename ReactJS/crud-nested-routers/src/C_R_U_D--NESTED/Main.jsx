import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const Main = () => {
    const [users , setUsers] = useState([]);
     useEffect(()=>{
        gettingusers();
     },[])

    const gettingusers= async () =>{
        const response =await (await fetch("http://localhost:3003/form1")).json();
        setUsers(response)
        console.log(response)
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((ram , i)=> <User usr={ram} key={i}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
