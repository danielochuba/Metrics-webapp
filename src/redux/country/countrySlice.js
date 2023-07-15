import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page=1');
    const data = await response.json();
    return data.results;
  },
);

const initialState = {
  movies: [],
  selectedMovie: null,
  isLoading: false,
  status: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    filterSearch: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.title
          .toLowerCase().includes(payload.toLowerCase())),
      };
    },
  },
  clearMovies: (state) => ({
    ...state,
    countries: [],
  }),
  extraReducers: {
    [fetchMovies.pending]: (state) => ({
      ...state,
      isLoading: true,
      status: 'loading... Please wait',
    }),
    [fetchMovies.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      status: 'data Loaded!',
      movies: [
        ...state.movies,
        ...action.payload.map((movie) => ({
          id: movie.id,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          title: movie.title,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          overview: movie.overview,
        })),
      ],
    }),
    [fetchMovies.rejected]: (state) => ({
      ...state,
      isLoading: false,
      status: 'failed',
    }),

  },

});

export const { setMovies, filterSearch, clearMovies } = movieSlice.actions;
export default movieSlice.reducer;
