import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import '../css/movieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const dataItems = useSelector((store) => store.movies.movies);
  const loading = useSelector((store) => store.movies.isLoading);

  if (dataItems) {
    const movie = dataItems.find((movie) => movie.id === Number(id));
    if (loading) {
      return (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          Loading...
        </div>
      );
    }
    if (movie) {
      return (
        <section className="detailsSection">
          <img className="image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="textDetails">
            <h1 className="title">{movie.title}</h1>
            <p className="description">{movie.overview}</p>
            <div className="feeds">
              <span className="rating">
                Vote average :
                {' '}
                {movie.vote_average}
              </span>
              <span className="release">
                Release date :
                {' '}
                {movie.release_date}
              </span>
              <span className="count">
                Vote Count :
                {' '}
                {movie.vote_count}
              </span>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default MovieDetails;
