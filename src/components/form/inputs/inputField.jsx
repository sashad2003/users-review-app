import React, { useState } from 'react';
const Input = ({userName, handleChange}) => {
    

    return (
        <div className='field-wrapper'>
            <label htmlFor='fname'>Your Name</label>
            <input type="text" id="fName" name="fName" placeholder="Please enter your full name" value={userName} onChange={handleChange} />
        </div>
    )
}

export default Input;