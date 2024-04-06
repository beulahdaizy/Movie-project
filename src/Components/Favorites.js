import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const navigate = useNavigate();
  const removeFromFavorites = (movieToRemove) => {
    const newFavorites = favorites.filter(
      (movie) => movie.id !== movieToRemove.id
    );
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="favorites-page-container">
      <h2 className="my-favorites"> Favorites</h2>
      <div className="favorites-container">
        {favorites.map((movie, index) => (
          <div key={index} className="favorite-card">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="favorite-card-image"
            />
            <div className="favorite-card-content">
              <h3 className="favorite-card-title">{movie.title}</h3>
              <p className="favorite-card-description">{movie.overview}</p>
              <button
                className="remove-button"
                onClick={() => removeFromFavorites(movie)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {favorites.length === 0 && <p>No favorite movies yet!</p>}
      </div>
      <button className="back-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default Favorites;

{
  /*// Favorites.js
import React from "react";

const Favorites = ({ favorites, onDelete }) => {
  const handleDelete = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    // Notify the parent component about the deletion
    if (onDelete) {
      onDelete(newFavorites);
    }
  };
  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <p className="no-favorite">No favorite movies added yet.</p>
      ) : (
        favorites.map((favorite, index) => (
          <div key={index} className="favorite-item">
            <p>{favorite.title}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
 */
}
