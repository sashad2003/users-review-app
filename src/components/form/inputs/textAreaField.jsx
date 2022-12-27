import React, { useState } from 'react';
const TextArea = () => {
    const [content, setContent] = useState('');
    const handleChange = (e) => {
        setContent(e.target.value);
    }

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