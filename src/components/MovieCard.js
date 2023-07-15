import React from 'react';
import { Col, Badge } from 'react-bootstrap';
import { PiArrowCircleRightLight } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/movieCard.css';

function MovieCard() {
  const dataItems = useSelector((store) => store.movies.movies);
  const mappedMovies = dataItems.map((movie) => (
    <Col className="movieCard" key={movie.id} xs={6} sm={6} md={4} lg={3}>
      <Link alt="arrow" className="navigator absolute z-10 " to={`/details/${movie.id}`}><PiArrowCircleRightLight alt="arrow" className="absolute text-3xl text-gray-200" /></Link>
      <img className="cardImage" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Badge className="badge" bg="secondary">{ movie.title }</Badge>
    </Col>
  ));

  return (
    <>
      {mappedMovies}
    </>
  );
}

export default MovieCard;
