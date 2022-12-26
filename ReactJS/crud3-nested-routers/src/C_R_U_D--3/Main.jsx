import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const Main = () => {
    const [user , setUser] = useState([]);
    useEffect(()=>{
        gettingUsers();
    },[])
    
    const gettingUsers = async ()=>{
        const getting = await (await fetch("http://localhost:3003/form4")).json();
        setUser(getting);
        console.log(getting);
    }
    
    return (
        <div className='usertable'>
                <table className='table' border={7}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Email Address</th>
                            <th>Gender-1</th>
                            <th>Gender-2</th>
                            <th>Date of Birth</th>
                            <th>Height / Weight</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((ram , i)=><User chris={ram} key={i}/>)}
                    </tbody>
                </table>
            </div>
    );
}

export default Main;
