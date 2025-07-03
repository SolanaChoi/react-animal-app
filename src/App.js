import React from 'react';
import PageTitle from './components/PageTitle/PageTitle';
import AnimalForm from "./components/AnimalForm/AnimalForm";
import MainCard from './components/MainCard/MainCard';
import Favorites from './components/Favorites/Favorites';
import jsonLocalStorage from './utils/jsonLocalStorage';


//Open API
const fetchCat = async (text) => {
  const response = await fetch(`https://cataas.com/cat/says/${text}?json=true&width=400&height=400`);
  const data = await response.json();
  const imgURL = data.url

  return imgURL
};

function App() {
  const [mainAnimal, setMainAnimal] = React.useState("https://cataas.com/cat");
  const [favorites, setFavorites] = React.useState(() => jsonLocalStorage.getItem("favorites") || []);
  const [count, setCount] = React.useState(() => jsonLocalStorage.getItem("count") || 1);

  const choiceFavorite = favorites.includes(mainAnimal);


  function incrementCount() {
    setCount((set) => {
      const nextCount = set + 1;
      localStorage.setItem("count", nextCount);
      return nextCount;
    });
  }

  async function updateMainAnimal(text) {
    const newCat = await fetchCat(text)

    setMainAnimal(newCat);
    incrementCount();
  }

  function handleHeartClick() {

    if(favorites.includes(mainAnimal)){
      alert("이미 추가된 고양이입니다!");
      return
    }

    setFavorites((pre) => {
      const nextFavorites = [...pre, mainAnimal];
      localStorage.setItem("favorites", JSON.stringify(nextFavorites));
      return nextFavorites;
    });
  }

  return (
    <div>
      <h1>CUTE CAT 😼 DICTIONARY</h1>  
      <PageTitle>💨{count}페이지💨</PageTitle>
      <AnimalForm updateMainAnimal={updateMainAnimal} />
      <MainCard
        src={mainAnimal}
        alt="고야미"
        handleHeartClick={handleHeartClick}
        choiceFavorite={choiceFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
