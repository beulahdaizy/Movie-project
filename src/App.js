import React from "react";
import Main from "./Components/Main";
import "./App.css";
import "./Components/Style.css";
import Favorites from "./Components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
