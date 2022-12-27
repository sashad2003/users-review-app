import { useState } from 'react';
import AppForm from './components/form/form';
import ReviewCard from './components/reviewCard/reviewCard';
import imgGen from '@dudadev/random-img';

function App() {

    const [cardsData, setCardsData] = useState([]);
    const [lastId, setLastId] = useState(0);



    const idGenerator = () => {
        setLastId(lastId + 1);
        return lastId;
    }


    const onDeleteHandler = (id) => {
        setCardsData((current) => current.filter((item) => item.id !== id));
    }


const addReview = (name, review) => {

    if (name && review) {
        let nextId = idGenerator();
        imgGen().then(avatarURL => {
            const newItem = { id: nextId, name, review, image: avatarURL };
            setCardsData([...cardsData, newItem]);
        });
        // const newItem = { id: nextId, name, review, image: `https://picsum.photos/100?random=${nextId}` };
        // const newItem = { id: nextId, name, review, image: tempImage };
        // setCardsData([...cardsData, newItem]);
    } else {
        alert('All fields are required')
    }

}

const onSubmitHandler = (e) => {
    e.preventDefault();
    const inputName = document.querySelector("input");
    const inputTextArea = document.querySelector("textarea");
    addReview(inputName.value, inputTextArea.value);
    clearForm();
}

const reviewItems = cardsData.map(({ name, review, image, id }) => {
    return (
        <ReviewCard
            key={id}
            name={name}
            review={review}
            image={image}
            onDelete={() => onDeleteHandler(id)}
            onEdit={() => console.log("Edit")}
        />
    )
})

const [userName, setUserName] = useState('');
const [content, setContent] = useState('');

const handleChange = (e) => {
    if (e.target.id === 'fName') {
        setUserName(e.target.value);
    } else {
        setContent(e.target.value);
    }
}

const clearForm = () => {
    setUserName('');
    setContent('');
}


return (
    <div className="App">
        <h1>User Reviews</h1>
        {reviewItems}
        <AppForm onSubmitHandler={onSubmitHandler} userName={userName} content={content} handleChange={handleChange} />

    </div>
)
}

export default App
