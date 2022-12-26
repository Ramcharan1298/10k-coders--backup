import React, { useState } from 'react';

const Form = ({CheckingInput , btntext ,user, managesubmit}) => {

    return (
        <div id="userDetails">
            <div className="container">
                <fieldset>
                    <form>
                        <h1>HTML Form</h1>
                        <div className="ID">
                            <label htmlFor="ID">ID:</label>
                            <input type="number" name="id" id="id" disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="Fname">
                            <label htmlFor="fname">First Name:</label>
                            <input type="text" name="firstname" id="fname" value={user.firstname} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="Lname">
                            <label htmlFor="lname">Last name:</label>
                            <input type="text" name="lastname" id="lname" value={user.lastname} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="date">
                            <label htmlFor="date">Date of Birth:</label>
                            <input type="text" name="dateofbirth" id="date" value={user.dateofbirth} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="email">
                            <label htmlFor="email">Email id:</label>
                            <input type="text" name="emailid" id="email" value={user.emailid} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                        </div>

                        <div className="mobile">
                            <label htmlFor="mobile">Mobile Number:</label>
                            <input type="text" name="mobilenumber" id="mobile" value={user.mobilenumber} onChange={(e) => { CheckingInput(e) }} /><br /><br /><br />
                        </div>
 
                         <button type='button' className='btn btn-success' onClick={managesubmit}>{btntext}</button>
                    </form>
                </fieldset>
            </div>
            </div>
    );
}

export default Form;
