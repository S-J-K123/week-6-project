import {
  faClapperboard,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { navigate, useNavigate } from "react-router-dom";

const Home = () => {
 let navigate = useNavigate()
const [searchName, setSearchName] = useState("")





function onSearch() {
navigate(`/browse?search=${searchName}`)
  console.log(searchName)
}



  return (
    <div>
      <section className="home-page">
        <nav>
          <a href="/">
            <div className="logo-img">
              <FontAwesomeIcon className="icon" icon={faClapperboard} />
              <h2 className="logo">movies</h2>
            </div>
          </a>
          <ul>
            <li className="lists">
              <a href="/">
                <span className="org-li">Home</span>{" "}
              </a>
            </li>
            <li className="lists">
              <a href="browse">Browse Movies</a>
            </li>
            <li className="lists">
              <a href="favourites">Favourites</a>
            </li>
          </ul>
        </nav>

        <h1 className="big-text">
          Britain's most awarded <br />
          free movie platform
        </h1>

        <h2 className="fav">
          find your Favourite <span className="shows">movies and shows</span>
        </h2>

        <div className="search-container">
          <form action="" onSubmit={onSearch}>
  
            <input className="home-input" onChange={(event) => setSearchName(event.target.value)}
            value={searchName}
              type="text"
              placeholder="Search thousands of movies..."
              name="Search"
            />
            <button  className="button">
              <FontAwesomeIcon className="magnify" icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>

        <div className="footer-img">
          <img
            className="btm-img"
            src="https://movies-au-react.vercel.app/static/media/undraw_explore_re_8l4v.0e6b1c627148e0f0c295c8c3dbfde077.svg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
