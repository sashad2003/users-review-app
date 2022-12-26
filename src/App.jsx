import { useState } from 'react';
import AppForm from './components/form/form';
import ReviewCard from './components/reviewCard/reviewCard';

function App() {

  const [cardsData, setCardData] = useState([
    { name: "Alex", content: "bla bla bla 123" },
    { name: "John", content: "Lorem Ipsum or something like that " },
    { name: "Michael", content: "Don't know what to say" }
  ]);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <div className="App">
      <h1>User Reviews</h1>

      {
        cardsData.map((card, i) => {
          return (
            <ReviewCard name={card.name} review={card.review} key={i} />
          )
        })
      }

      <AppForm onSubmitHandler={onSubmitHandler} />
    </div>
  )
}

export default App
