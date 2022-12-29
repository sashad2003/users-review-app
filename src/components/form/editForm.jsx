import Input from './inputs/inputField';
import TextArea from './inputs/textAreaField';
import {useState} from "react";

const EditForm = ({id, content, userName, editReview, showEditForm, onEdited}) => {

    const [editName, setEditName] = useState(userName);
    const [editContent, setEditContent] = useState(content);

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
            <h2>Edit review</h2>
            <Input userName={editName} handleChange={handleChange}/>
            <TextArea content={editContent} handleChange={handleChange}/>
            <button className='submit-btn' type="submit" value="Submit">Save</button>
        </form>
    )
}

export default EditForm;