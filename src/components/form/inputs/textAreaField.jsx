import React, { useState } from 'react';
const TextArea = ({ content, handleChange }) => {
    
    

    return (
        <div className='field-wrapper'>
            <label htmlFor='fComment'>Your comment</label>
            <textarea
                type="text"
                rows="4"
                id="fComment"
                name="fComment"
                placeholder="Your comment"
                value={content}
                onChange={handleChange}
            />
        </div>
    )
}

export default TextArea;