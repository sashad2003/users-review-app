import React, { useState } from 'react';
const TextArea = ({ content, handleChange }) => {
    
    

    return (
        <div className='field-wrapper'>
            <label htmlFor='fComment'>Your review</label>
            <textarea
                type="text"
                rows="4"
                id="fComment"
                name="fComment"
                placeholder="Please enter your opinion about our product"
                value={content}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextArea;