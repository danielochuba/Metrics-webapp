import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import MovieCards from './components/MovieCards';
import CountryDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import store from './redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
      </Provider>
      <Routes>
        <Route exact path="/" element={<MovieCards />} />
        <Route path="/details/:id" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
