import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import User from './User';

const Main = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        gettingUsers();
    }, [])

    const gettingUsers = async () => {
        const getting = await (await fetch("http://localhost:3003/form3")).json();
        setUser(getting);
        console.log(getting);
    }

    return (
        <div className='usertable'>
            <table className='table' border={7}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Street</td>
                        <td>City,State</td>
                        <td>Zip Code</td>
                        <td>Country</td>
                        <td>EDIT</td>
                        <td>DELETE</td>
                    </tr>
                </thead>
                <tbody>
                    {user.map((ram, i) => <User chris={ram} key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Main;

