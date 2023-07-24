import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MovieCard from '../components/MovieCard';
import store from '../redux/store';

describe('MovieCards component', () => {
  test('renders without errors', () => {
    render(<Provider store={store}><MovieCard /></Provider>);
  });
});

describe('MovieCard component', () => {
  test('matches the snapshot', () => {
    const { container } = render(<Provider store={store}><MovieCard /></Provider>);
    expect(container).toMatchSnapshot();
  });
});

describe('MovieCard component', () => {
  test('matches the snapshot', () => {
    const movies = [
      { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg' },
      { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg' },
    ];

    const { container } = render(<Provider store={store}><MovieCard movies={movies} /></Provider>);
    expect(container).toMatchSnapshot();
  });
});
