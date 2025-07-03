import styles from './MainCard.module.css'


const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcon = choiceFavorite ? '💝' : '💜';

  return (
    <div className="main-card">
      <img className={styles.mainImg} src={src} alt={alt}/>
      <button className={styles.heartButton} onClick={handleHeartClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;