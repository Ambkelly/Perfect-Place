import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import HouseList from './components/ListHouse';
import HouseCard from './components/HouseCard';
import ListingForm from './components/Listing';
import MapView from './components/Mapview';
import SearchFilter from './components/Search';
import Rentals from './components/Rentals';
import SignUp from './components/Signup';
import Login from './components/Logout';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/properties" element={<HouseList />} />
            <Route path="/properties/:id" element={<HouseCard />} />
            <Route path="/add-listing" element={<ListingForm />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/search" element={<SearchFilter />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;