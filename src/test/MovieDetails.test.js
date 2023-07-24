import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MovieDetails from '../components/MovieDetails';
import store from '../redux/store';

describe('MovieCards component', () => {
  test('renders without errors', () => {
    render(<Provider store={store}><MovieDetails /></Provider>);
  });
});
