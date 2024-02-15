import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ info, onAddToFavorites }) => {
  const { title, rating, overview } = info;
  let img_path = "https://image.tmdb.org/t/p/w500";

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
            <button onClick={onAddToFavorites}>
              <FontAwesomeIcon icon={faHeart} /> Add to Favorites
            </button>
            <h1>overview</h1>
            {info.overview}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
