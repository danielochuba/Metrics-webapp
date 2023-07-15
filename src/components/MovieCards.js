import React from 'react';

import {
  Container, Row,
} from 'react-bootstrap';
import { Provider } from 'react-redux';
import MovieCard from './MovieCard';
import '../css/navbar.css';
import store from '../redux/store';

function MovieCards() {
  return (
    <Container style={{ marginTop: '1rem' }}>
      <Row>
        <Provider store={store}>
          <MovieCard />
        </Provider>
      </Row>
    </Container>
  );
}

export default MovieCards;
