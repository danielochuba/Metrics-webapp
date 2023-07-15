import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MovieCards from '../components/MovieCards';
import store from '../redux/store';

describe('MovieCards component', () => {
  test('renders without errors', () => {
    render(<Provider store={store}><MovieCards /></Provider>);
  });
});

test('matches the snapshot', () => {
  const { container } = render(<MovieCards />);
  expect(container).toMatchSnapshot();
});
