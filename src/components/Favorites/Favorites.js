import AnimalItem from "./AnimalItem"; //리액트는 확장자 생략돼도 ㅇㅋ
import styles from './Favorites.module.css'

const Favorites = ({ favorites }) => {
  return (
    <ul className={styles.favorites}>
      {favorites.map((animal, index) => <AnimalItem src={animal} key={index} />)}
    </ul>
  );
}

export default Favorites;