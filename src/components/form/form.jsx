import HTMLFormElement from 'react';
import Input from './inputs/inputField';
import TextArea from './inputs/textAreaField';
const AppForm = (props) => {
    return (
        <form className="card add-review-form" onSubmit={props.onSubmitHandler} >
            <Input />
            <TextArea />
            <button className='submit-btn' type="submit" value="Submit">Add</button>
        </form>
    )
}

export default AppForm;