const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcon = choiceFavorite ? '💝' : '💜';

  return (
    <div className="main-card">
      <img className="main-img" src={src} alt={alt}/>
      <button onClick={handleHeartClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;