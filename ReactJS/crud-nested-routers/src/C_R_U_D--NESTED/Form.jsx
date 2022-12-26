import React from 'react';

const Form = ({CheckingInput, user,handlesubmit,btntext}) => {
    return (

        <div className='container'>
            <h4>Bootstrap Form Validation </h4><hr />
            <div className='Name'>
                <label htmlFor="ID">ID</label><br />
                <input type="text" className="form-control" name='id' id="id" placeholder='ID' disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Name'>
                <label htmlFor="Name">Name</label><br />
                <input type="text" className="form-control" name='name' id="name" placeholder='Name' value={user.name} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Username'>
                <label htmlFor="Username">Username</label><br />
                <input type="text" className="form-control" name='username' id="username" placeholder='Username' value={user.username} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Email'>
                <label htmlFor="Email">Email</label><br />
                <input type="text" className="form-control" name='email' id="email" placeholder='Email' value={user.email} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Password'>
                <label htmlFor="Password">Password</label><br />
                <input type="password" className="form-control" name='password' id="password" placeholder='Password' value={user.password} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Confirmpassword'>
                <label htmlFor="Confirmpassword">Confirm Password</label><br />
                <input type="password" className="form-control" name='confirmpassword' id="confirmpassword" placeholder='Confirm Password' value={user.confirmpassword} onChange={(e) => { CheckingInput(e) }} /><br />
            </div>

            <div className='Message'>
                <label htmlFor="Message">Message</label><br />
                <textarea type="text" className="form-control" name="message" id="message" placeholder='Message' cols="24" rows="3" value={user.message} onChange={(e) => { CheckingInput(e) }}></textarea><br /><br />
            </div>
            <button type='button' className='btn btn-primary' onClick={handlesubmit}>{btntext}</button>
        </div>

    );
}

export default Form;
