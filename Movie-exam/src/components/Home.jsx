import React, { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  // Search Movies
  const searchMovies = async (e) => {
    e.preventDefault();

    if (search === "") {
      alert("Please enter movie name");
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?s=${search}&apikey=6d28e8b2`
    );

    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setMovieDetails(null);
    } else {
      setMovies([]);
      alert("Movie not found");
    }
  };

  // Get Movie Details
  const movieDetailsData = async (id) => {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=6d28e8b2`
    );

    const data = await response.json();

    if (data.Response === "True") {
      setMovieDetails(data);
    }
  };

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container">
          <h3 className="text-white"> CYRRO.SE</h3>

          <form onSubmit={searchMovies} className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Enter movie name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn btn-warning">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Movie Details */}
      {movieDetails && (
        <div className="container mt-4">
          <div className="card p-3">
            <div className="row">

              <div className="col-md-4">
                <img
                  src={
                    movieDetails.Poster !== "N/A"
                      ? movieDetails.Poster
                      : "https://via.placeholder.com/300x400"
                  }
                  className="img-fluid"
                  alt={movieDetails.Title}
                />
              </div>

              <div className="col-md-8">
                <h2>{movieDetails.Title}</h2>

                <p>
                  <b>Year:</b> {movieDetails.Year}
                </p>

                <p>
                  <b>Genre:</b> {movieDetails.Genre}
                </p>

                <p>
                  <b>Director:</b> {movieDetails.Director}
                </p>

                <p>
                  <b>Actors:</b> {movieDetails.Actors}
                </p>

                <p>
                  <b>Rating:</b>  {movieDetails.imdbRating}
                </p>

                <p>
                  <b>Story:</b> {movieDetails.Plot}
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => setMovieDetails(null)}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Movie List */}
      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Search Movies
        </h2>

        <div className="row">

          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.imdbID}>

              <div className="card h-100 shadow">

                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x400"
                  }
                  className="card-img-top"
                  alt={movie.Title}
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {movie.Title}
                  </h5>

                  <p>
                    Year: {movie.Year}
                  </p>

                  <p>
                    Type: {movie.Type}
                  </p>

                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      movieDetailsData(movie.imdbID)
                    }
                  >
                    View Details
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}