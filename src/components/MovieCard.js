import React from 'react';
import { Col, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/movieCard.css';

function MovieCard() {
  const dataItems = useSelector((store) => store.movies.movies);
  const mappedMovies = dataItems.map((movie) => (
    <Col className="movieCard" key={movie.id} xs={6} sm={6} md={4} lg={3}>
      <Link key={movie.id} to={`/details/${movie.id}`}>
        <img className="cardImage" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <Badge className="badge" bg="secondary">{ movie.title }</Badge>
      </Link>
    </Col>
  ));

  return (
    <>
      {mappedMovies}
    </>
  );
}

export default MovieCard;
