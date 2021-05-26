import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import React, {useState} from 'react'

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Pizza",
    date: "25 May 2021, Tuesday",
    image: food,
    description:"Neapolitan-inspired pizzas prepared in our wood-burning Pavesi ovens topped with fresh local ingredients share the menu with dessert tacos, craft beers and original cocktails."
      
  };
  let setLike = () => {
    setisLiked(true)
    setLikeCount(likeCount+1)

  }

  const [likeCount,setLikeCount] = useState(0)
  const [isLiked,setisLiked] = useState(false);
  let {title,date,image,description} = recipeItem;
  return (
    <div className="App">
      <header className="App-header">
        <Card
          title={title}
          author={recipeAuthor}
          description={description}
          likeCount={likeCount}
          date={date}
          liked={isLiked}
          setLike={setLike}
        />
      </header>
    </div>
  );
}

export default App;
