import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';


const Main = () => {

    const [user , setUser] = useState([]);
    useEffect(()=>{
        takingUsers();
    },[])

    const takingUsers = async ()=>{
        const recieving =await  (await fetch("http://localhost:3003/form2")).json();
        setUser(recieving);
        console.log(recieving);
    }
    return (
        <div >
                <br /><br /><table className='table' border={'5'}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last name</th>
                            <th>Date of Birth</th>
                            <th>Email id</th>
                            <th>Mobile Number</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((ram , i)=><User pbs={ram} key={i}/>)}
                    </tbody>
                </table>
            </div>
    );
}

export default Main;
