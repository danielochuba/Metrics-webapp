import React from 'react';
import {
  Container, Row,
} from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieCards() {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Row>
        <MovieCard />
      </Row>
    </Container>
  );
}

export default MovieCards;
