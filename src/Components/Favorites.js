// Favorites.js
import React from "react";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <p>No favorite movies added yet.</p>
      ) : (
        favorites.map((favorite, index) => (
          <div key={index} className="favorite-item">
            <p className="favorite-title">{favorite.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
