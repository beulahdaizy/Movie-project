// Favorites.js
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
