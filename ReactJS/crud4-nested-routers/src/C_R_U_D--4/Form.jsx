import React from 'react';

const Create = ({CheckingInput , user , manageSubmit , btntype}) => {
    return (
        
        <div className="Container">
            <fieldset>
                <legend>Registration Details</legend>
                <form>
                    <div className="University">
                        <label htmlFor="University">ID :</label>
                        <input type="text" name="id" id="Uname" disabled value={user.id} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>
                    <div className="University">
                        <label htmlFor="University">University :</label>
                        <input type="text" name="university" id="Uname" value={user.university} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="Institute">
                        <label htmlFor="Institute">Institute :</label>
                        <input type="text" name="institute" id="Iname" value={user.institute} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="Branch">
                        <label htmlFor="Branch">Branch :</label>
                        <select name="branch" id="branch" value={user.branch} onChange={(e) => { CheckingInput(e) }}>
                            <option>---Select---</option>
                            <option>CSE</option>
                            <option>EEE</option>
                            <option>ECE</option>
                            <option>CIVIL</option>
                            <option>MECHANICAL</option>
                        </select><br /><br />
                    </div>

                    <div className="degree">
                        <label htmlFor="Degree">Degree :</label>
                        <select name="degree" id="deg" value={user.degree} onChange={(e) => { CheckingInput(e) }}>
                            <option>---Select---</option>
                            <option>BTECH</option>
                            <option>M.TECH</option>
                            <option>MBA</option>
                            <option>MSC</option>
                        </select><br /><br />
                    </div>

                    <div className="Status">
                        <label htmlFor="Status">Status :</label>
                        <input type="radio" name="status" value={"Pursuing"} checked={user.status == "Pursuing"} onChange={(e) => { CheckingInput(e) }} />Pursuing
                        <input type="radio" name="status" value={"Completed"} checked={user.status == "Completed"} onChange={(e) => { CheckingInput(e) }} />Completed
                    </div><br />

                    <div className="average">
                        <label htmlFor="Average CPI" id="avg">Average CPI:</label>
                        <input type="text" name="average" id="average" min="1" max="80" value={user.average} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="experience">
                        <label htmlFor="Experience" id="ex">Experience :</label>
                        <input type="text" name="experience" id="exp" min="1" max="10" value={user.experience} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                    <div className="website">
                        <label htmlFor="Website or Blog" id="we">Website or Blog :</label>
                        <input type="text" name="website" id="web" min="1" max="10" value={user.website} onChange={(e) => { CheckingInput(e) }} /><br /><br />
                    </div>

                     <button type='button' className='btn btn-warning' onClick={manageSubmit}>{btntype}</button>
                </form>
            </fieldset>    
        </div>
    );
}

export default Create;
