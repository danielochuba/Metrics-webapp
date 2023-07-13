import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './movie/movieSlice';

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
