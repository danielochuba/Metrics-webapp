import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { BsFillMicFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/country/countrySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <nav className="flex px-6 text-white justify-between items-center pt-2  bg-blue-800">
      <div>
        <Link to="/"><IoIosArrowBack className="text-xl  mr-5" /></Link>
      </div>
      <h1 className="text-lg text-lato-300 text-center text-white">
        Movies Hub
      </h1>
      <div className="flex gap-4">
        <BsFillMicFill className="text-xl  ml-1" />
        <IoMdSettings className="text-xl " />
      </div>
    </nav>
  );
};

export default Navbar;
