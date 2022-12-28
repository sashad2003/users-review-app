import HTMLFormElement from 'react';
import Input from './inputs/inputField';
import TextArea from './inputs/textAreaField';
const AppForm = ({content, userName, onSubmitHandler, handleChange, mainFormVisible}) => {
    return (
        <form className={`card add-review-form display-${mainFormVisible}`} onSubmit={onSubmitHandler} >
            <Input userName={userName} handleChange={handleChange} />
            <TextArea content={content} handleChange={handleChange}  />
            <button className='submit-btn' type="submit" value="Submit">Add</button>
        </form>
    )
}

export default AppForm;