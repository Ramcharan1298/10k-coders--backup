import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const MainUser = () => {
    const [user , setUser]= useState([]);
    useEffect(()=>{
        bringingUsers();
    },[]);

    const bringingUsers= async ()=>{
        const bringing = await(await fetch("http://localhost:3003/form5")).json()
        setUser(bringing);
        console.log(bringing);
    }
    return (
        <div id="userTable">
                <br /><table className='table' border={6} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Status</th>
                            {/* <th>Subjects</th> */}
                            <th>AverageCPI</th>
                            <th>Experience</th>
                            <th>Website</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                         {user.map((ram , i)=><User charan={ram} key={i}/>)}
                    </tbody>
                </table>
            </div>
    );
}

export default MainUser;
