import styles from './AnimalItem.module.css';

const AnimalItem = ({ src, alt }) => {
  return (
    <li className={styles.listItem}>
      <img className={styles.animalImg} src={src} alt={alt} />
    </li>
  );
};
export default AnimalItem;