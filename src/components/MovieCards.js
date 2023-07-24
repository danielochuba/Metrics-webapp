import React from 'react';

import {
  Container, Row,
} from 'react-bootstrap';
import { Provider } from 'react-redux';
import MovieCard from './MovieCard';
import '../css/navbar.css';
import store from '../redux/store';
import image from '../images/image.jpg';

function MovieCards() {
  return (
    <Container>
      <img className="logo w-full" src={image} alt="logo" />
      <Row>
        <Provider store={store}>
          <MovieCard />
        </Provider>
      </Row>
    </Container>
  );
}

export default MovieCards;
