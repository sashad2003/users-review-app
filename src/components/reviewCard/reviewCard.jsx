import AppForm from "../form/form";
import { IconEdit } from "../icons/editIcon";
import { IconTrash } from "../icons/trashIcon";

const ReviewCard = ({ image, name, review, onDelete, onEdit }) => {
    return (
        <div className="card review scale-up-center">
            <div className="review-wrapper">
                <img src={image} alt="" />
                <div className="review-content">
                    <h2>{name}</h2>
                    <p>{review}</p>
                </div>
                <div className="review-buttons">
                    <button onClick={onDelete}><IconTrash /></button>
                    <button onClick={onEdit}><IconEdit /></button>
                </div>
            </div>
            <AppForm userName={name} content={review} />
        </div>
    )
}

export default ReviewCard;