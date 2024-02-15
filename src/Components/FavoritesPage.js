// FavoritesPage.js
import React from "react";
import Favorites from "./Favorites";

const FavoritesPage = () => {
  return (
    <div className="favorites-page">
      <h2 className="my-favorites">My Favorites</h2>
      <Favorites />
    </div>
  );
};

export default FavoritesPage;
