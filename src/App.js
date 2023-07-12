import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MovieCards from './components/MovieCards';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieCards />} />
      </Routes>
    </Router>
  );
}

export default App;
