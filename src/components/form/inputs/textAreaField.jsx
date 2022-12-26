import React, { useState } from 'react';
const TextArea = () => {
    const [userName, setUserName] = useState('');
    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    return (
        <div className='field-wrapper'>
            <label htmlFor='tComment'>Your comment</label>
            <textarea type="text" rows="4" id="tComment" name="tComment" placeholder="Your comment" value={userName} onChange={handleChange} />
        </div>
    )
}

export default TextArea;