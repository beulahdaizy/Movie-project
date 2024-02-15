import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ info, onAddToFavorites, onRemoveFromFavorites }) => {
  const { title, rating, overview } = info;
  const [isFavorite, setIsFavorite] = useState(false);

  let img_path = "https://image.tmdb.org/t/p/w500";

  const handleAddToFavorites = () => {
    onAddToFavorites(info);
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    // Implement the logic to remove from favorites (not shown here)
    onRemoveFromFavorites(info);
    setIsFavorite(false);
  };

  return (
    <>
      <div className="movie image-container">
        <img src={img_path + info.poster_path} className="poster"></img>

        <div className="movie-details">
          <div className="box">
            <h4 className="title">{info.title}</h4>
            <p className="rating">{info.vote_average}</p>
          </div>

          <div className="overview">
            {isFavorite ? (
              <button onClick={handleRemoveFromFavorites}>
                Remove from Favorites
              </button>
            ) : (
              <button onClick={handleAddToFavorites}>
                <FontAwesomeIcon icon={faHeart} /> Add to Favorites
              </button>
            )}
            <h1>overview</h1>
            {info.overview}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
