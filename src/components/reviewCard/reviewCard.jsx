import { useState } from "react";
import { IconEdit } from "../icons/editIcon";
import { IconTrash } from "../icons/trashIcon";
import EditForm from "../form/editForm.jsx";

const ReviewCard = ({ id, image, name, review, onDelete, editReview, hideMainForm, showMainForm }) => {

    const [showEditForm, setShowEditForm] = useState(false);
    const onShowEdit = (e) => {

        setShowEditForm(true);
        hideMainForm(id);
    }

    const onEdited = () => {
        setShowEditForm(false);
        showMainForm();
    }



    return (
        <div className="card review scale-up-center">
            <div className={`review-wrapper display-${!showEditForm}`}>
                <img src={image} alt="" />
                <div className="review-content">
                    <h2>{name}</h2>
                    <p>{review}</p>
                </div>
                <div className="review-buttons">
                    <button onClick={onDelete}><IconTrash /></button>
                    <button onClick={onShowEdit}><IconEdit /></button>
                </div>
            </div>
            <EditForm
                id={id}
                userName={name}
                content={review}
                editReview={editReview}
                setShowEditForm={setShowEditForm}
                showEditForm={showEditForm}
                onEdited={onEdited}
            />
        </div>
    )
}

export default ReviewCard;