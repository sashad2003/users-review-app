import { useState } from 'react';
import AppForm from './components/form/form';
import ReviewCard from './components/reviewCard/reviewCard';
import imgGen from '@dudadev/random-img';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

    const [cardsData, setCardsData] = useLocalStorage('reviews', []);
    const [lastId, setLastId] = useLocalStorage('lastId', 0);
    const [mainFormVisible, setMainFormVisible] = useState(true);
    const [editMode, setEditMode] = useState(false);


    const editModeToggle = () => {
        setEditMode(!editMode);
    }

    const hideMainForm = () => {
        setMainFormVisible(false);
    }

    const showMainForm = () => {
        setMainFormVisible(true);
    }

    const idGenerator = () => {
        setLastId(lastId + 1);
    }

    const onDeleteHandler = (id) => {
        setCardsData((current) => current.filter((item) => item.id !== id));
    }


    const addReview = (name, review) => {
        if (name && review) {
            imgGen().then(avatarURL => {
                idGenerator();
                const newItem = { id: lastId, name, review, image: avatarURL };
                setCardsData([...cardsData, newItem]);
            });
        } else {
            alert('All fields are required')
        }
    }

    const editReview = (name, review, id) => {
        console.log(`Edit name: ${name} review: ${review} id: ${id} `);
        const newState = cardsData.map(obj => {
            if (obj.id === id) {
                const edit = setEditMode(true);
                return { ...obj, name, review, edit  }
            }
            const edit = setEditMode(false);
            return { ...obj, edit};
        });

        editModeToggle();
        setCardsData(newState);
    }


    const reviewItems = cardsData.map(({ name, review, image, id }) => {
        return (
            <ReviewCard
                key={id}
                id={id}
                name={name}
                review={review}
                image={image}
                onDelete={() => onDeleteHandler(id)}
                editReview={editReview}
                hideMainForm={hideMainForm}
                showMainForm={showMainForm}
                editModeToggle={editModeToggle}
            />
        )
    })

    const [userName, setUserName] = useState('');
    const [content, setContent] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addReview(userName, content);
        clearForm();
    }

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
            <AppForm
                mainFormVisible={mainFormVisible}
                userName={userName}
                content={content}
                onSubmitHandler={onSubmitHandler}
                handleChange={handleChange}
            />
        </div>
    )
}

export default App
