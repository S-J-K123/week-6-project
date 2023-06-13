import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Switch from "../components/Switch";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Browse = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const [searchName, setSearchName] = useState(id);

  function onSearch() {
    fetchUsers(searchName);
  }

  async function fetchUsers(movieName) {
    const { data } = await axios.get(
      // "https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=fast"
      `https://www.omdbapi.com/?i=tt3896198&apikey=8e3ddd4c&s=${
        movieName || id
      }`
    );
    setUsers(data.Search);
    console.log(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <section className="bg-orange">
        <nav className="bg-orange">
          <a href="/">
            <div className="logo-img-browse bg-orange ">
              <FontAwesomeIcon
                className="icon-browse bg-orange"
                icon={faClapperboard}
              />
              <h2 className="logo-browse bg-orange">movies</h2>
            </div>
          </a>
          <ul>
            <li className="lists-browse bg-orange">
              <a className="bg-orange-list" href="/">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="lists-browse bg-orange">
              <a className="bg-orange-list" href="browse">
                Browse Movies
              </a>
            </li>
            <li className="lists-browse bg-orange">
              <a className="bg-orange-list" href="favourites">
                Favourites
              </a>
            </li>
          </ul>
        </nav>

        <h1 className="bm bg-orange">Browse Our Movies</h1>

        <div className="search-container-browse bg-orange">
          <form action="" className="bg-orange">
            <input
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
              className="browse-input"
              type="text"
              placeholder="Search thousands of movies..."
              name="Search"
            />
            <button onClick={() => onSearch()} className="button-browse">
              <FontAwesomeIcon
                className="magnify-browse"
                icon={faMagnifyingGlass}
              />
            </button>
          </form>
        </div>
      </section>

      <section className="btm-half">
        <h2 className="search-results">Search results</h2>
        <h2 className="filter">Filter by year</h2>
        <button className="switch-btn" onClick={() => setShowModal(!showModal)}>
          {" "}
          <Switch />{" "}
        </button>
      </section>

      {showModal ? <Modal /> : null}

      {users.map((user, id) => {
        return (
          <div className="row" key={id}>
            <div className="user-list">
              <div className="user">
                <div className="user-card">
                  <div className="user-card__container">
                    <img className="images" src={user.Poster} alt="" />{" "}
                    <p>
                      Title: <b>{user.Title}</b>{" "}
                    </p>
                    <p>
                      Type: <b>{user.Type}</b>
                    </p>
                    <p>
                      Year: <b>{user.Year}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Browse;
