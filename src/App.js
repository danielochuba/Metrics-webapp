import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MovieCards from './components/MovieCards';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MovieCards />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
