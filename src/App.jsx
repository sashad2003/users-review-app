import {useState} from 'react';
import AppForm from './components/form/form';
import ReviewCard from './components/reviewCard/reviewCard';

function App() {

    const [cardsData, setCardsData] = useState([
        {id: 1, name: "Alex", review: "bla bla bla 123", image: "https://picsum.photos/100?random=1"},
        {
            id: 2,
            name: "John",
            review: "Lorem Ipsum or something like that",
            image: "https://picsum.photos/100?random=2"
        },
        {id: 3, name: "Michael", review: "Don't know what to say", image: "https://picsum.photos/100?random=3"}
    ]);


    const idGenerator = () => {
        return cardsData.length + 1;
    }


    const onDeleteHandler = (id) => {
        setCardsData((current) => current.filter((item) => item.id !== id));
    }

    const clearForm = (input, textarea) => {
        input.value = '';
        textarea.value = '';
    }

    const addReview = (name, review) => {

        if (name && review) {
            let nextId = idGenerator();
            const newItem = {id: nextId, name, review, image: `https://picsum.photos/100?random=${nextId}`};
            setCardsData([...cardsData, newItem])
        }

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const inputName = document.querySelector("input");
        const inputTextArea = document.querySelector("textarea");
        addReview(inputName.value, inputTextArea.value);
    }

    const reviewItems = cardsData.map(({name, review, image, id}) => {
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


    return (
        <div className="App">
            <h1>User Reviews</h1>

            {reviewItems}
            <AppForm onSubmitHandler={onSubmitHandler}/>

        </div>
    )
}

export default App
