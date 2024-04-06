import React, { useState } from "react";
import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Favorites from "./Favorites";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

let API_key = "&api_key=9e0dce1c0ed2a93b24f5831757734c2a";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleDeleteFromFavorites = (updatedFavorites) => {
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (movieToRemove) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (movie) => movie.id !== movieToRemove.id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  useEffect(() => {
    fetch(url_set)
      .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
      .then((data) => {
        setData(data.results);
      })
       .catch((error) => {
      console.error("Error fetching movie data:", error);
      // You can handle the error here, e.g., display an error message to the user
    });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
    }
    if (movieType == "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" +
        API_key;
    }
    if (movieType == "Kids") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
    }
    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };

  const navigateToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
        <a className="my-favorites" onClick={navigateToFavorites}>
          Favorites
        </a>
      </div>
      <div className="container">
        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return (
              <Card
                info={res}
                key={pos}
                onAddToFavorites={() => addToFavorites(res)}
                onRemoveFromFavorites={() => removeFromFavorites(res)}
              />
            );
          })
        )}
      </div>
      {/* <div className="favorites-page">
        <h2 className="my-favorites">My Favorites </h2>
        <Favorites favorites={favorites} onDelete={handleDeleteFromFavorites} />
        </div>*/}
    </>
  );
};
export default Main;
