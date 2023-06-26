import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./movie-details.css";
import Nav from "../components/Nav";
import Skeleton from "../UI/Skeleton";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const searchTerm = localStorage.getItem("searchTerm");

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=${id}&apikey=8e3ddd4c`
        );
        console.log(data);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieDetails();
  }, [id]);



  function previousPage() {
    navigate(`/browse?search=${searchTerm}`);
  }

  return (
    <div>
      <Nav />
      <button
        className="back-btn"
        onClick={() => {
          const words = movie.Title.split(" ").slice(0, 3).join(" ");
          navigate(`/browse?search=${words}`);
        }}
      >
        Go Back
      </button>

      {loading ? (
       <Skeleton width={'250px'} height={'300px'}/>
      ) : (
        <div className="movie-card">
          <div className="movie-card__container">
            <img className="movie-img" src={movie.Poster} alt={movie.Title} />
            <div className="movie-details-container">
              <div className="movie-details">
                <h1 className="movie-title">
                  <b>{movie.Title}</b>
                </h1>
                <p>
                  <b className="pg">{movie.Rated}</b>{" "}
                  <b className="movie-year">{movie.Year}</b>{" "}
                  <b className="movie-genre">{movie.Genre}</b>{" "}
                  <b>{movie.Runtime}</b>
                </p>
                <p className="metascore-title">
                  Metascore: <b className="metascore">{movie.Metascore}</b>
                </p>
                <p className="plot-title">
                  <b className="overview">Overview:</b>{" "}
                  <b className="plot">{movie.Plot}</b>
                </p>
                <p className="released-title">
                  Released: <b className="released">{movie.Released}</b>
                </p>
                <p className="boxOffice-title">
                  Box Office: <b className="boxOffice">{movie.BoxOffice}</b>
                </p>
                <p className="actors-title">
                  Actors: <b className="actors">{movie.Actors}</b>
                </p>
                <p className="director-title">
                  Director: <b className="director">{movie.Director}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
