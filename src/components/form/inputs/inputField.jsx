import React, { useState } from 'react';
const Input = () => {
    const [userName, setUserName] = useState('');
    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div className='field-wrapper'>
            <label htmlFor='fname'>Your Name</label>
            <input type="text" id="fName" name="fName" placeholder="name" value={userName} onChange={handleChange} />
        </div>
    )
}

export default Input;