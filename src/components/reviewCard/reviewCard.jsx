import { IconEdit } from "../icons/editIcon";
import { IconTrash } from "../icons/trashIcon";

const ReviewCard = ({ image, name, review }) => {
    return (
        <div className="card review">
            <img src="https://api.lorem.space/image/face?w=100&h=100" alt="" />
            <div className="review-content">
                <h2>{name}</h2>
                <p>{review}</p>
            </div>
            <div className="review-buttons">
                <button><IconTrash/></button>
                <button><IconEdit/></button>
            </div>
        </div>
    )
}

export default ReviewCard;