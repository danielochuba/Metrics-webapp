import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './country/countrySlice';

const store = configureStore({
  reducer: {
    movies: countrySlice,
  },
});

export default store;
