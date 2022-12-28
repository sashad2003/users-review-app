import Input from './inputs/inputField';
import TextArea from './inputs/textAreaField';
import {useState} from "react";

const EditForm = ({id, content, userName, editReview, showEditForm, onEdited, editMode}) => {

    const [editName, setEditName] = useState(userName);
    const [editContent, setEditContent] = useState(content);

    // console.log(`showEditForm is ${showEditForm}`);
    // console.log(`editMode for ${userName} is ${editMode}`);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        editReview(editName, editContent, id);
        onEdited();
    }

    const handleChange = (e) => {
        if (e.target.id === 'fName') {
            setEditName(e.target.value);
        } else {
            setEditContent(e.target.value);
        }
    }

    return (
        <form className={`add-review-form add-review-form-edit display-${showEditForm}`} onSubmit={onSubmitHandler}>
            <Input userName={editName} handleChange={handleChange}/>
            <TextArea content={editContent} handleChange={handleChange}/>
            <button className='submit-btn' type="submit" value="Submit">Save</button>
        </form>
    )
}

export default EditForm;