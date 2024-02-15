import React from "react";
import Main from "./Components/Main";
import "./App.css";
import "./Components/Style.css";
import FavoritesPage from "./Components/FavoritesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
