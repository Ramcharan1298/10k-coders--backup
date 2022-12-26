import React from 'react';

const UserForm = ({CheckingInput , user , btnname , manageSubmit} ) => {
    return (

        <div className="container">
            <fieldset>
                <form>
                    <h2>Address</h2>
                    <hr />
                    <div className="Street">
                        <label htmlFor="Street:">ID:</label>
                        <input type="text" id="id" name="id" disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /> <br /><br /><br />
                    </div>
                    <div className="Street">
                        <label htmlFor="Street:">Street:</label>
                        <input type="text" id="street" name="street" value={user.street} onChange={(e) => { CheckingInput(e) }} /> <br />
                        <input type="text" id="add" name="add" /><br /><br />
                    </div>

                    <div className="city">
                        <label htmlFor="City State:">City State:</label>
                        <input type="text" id="city" name="city" value={user.city} onChange={(e) => { CheckingInput(e) }} />&nbsp;
                        <input type="text" id="state" /><br /><br />
                    </div>

                    <div className="zip">
                        <label htmlFor="Zip code:">Zip code:</label>
                        <input type="text" id="Zip" name="zipcode" value={user.zipcode} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="country">
                        <label htmlFor="Country:">Country:</label>
                        <input type="text" id="country" name="country" value={user.country} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>
                    
                    <button type='button' className='btn btn-warning'  onClick={manageSubmit}>{btnname}</button>
                </form>
            </fieldset>
        </div>
    );
}

export default UserForm;
