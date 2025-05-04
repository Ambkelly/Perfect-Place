import React, { useState, useEffect } from 'react';
import { Search, MapPin, Sliders, ChevronDown, Heart, Star } from 'lucide-react';
// import SearchFilter from './SearchFilter';
// import HouseList from './HouseList';
import MapView from './MapView';

const Rentals = () => {
  // State for filters
  const [filters, setFilters] = useState({
    location: '',
    priceRange: { min: '', max: '' },
    bedrooms: '',
    bathrooms: '',
  });
  
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'map'
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [favorites, setFavorites] = useState([]);
  
  // Mock data - in a real app, this would come from an API
  const MOCK_HOUSES = [
    {
      id: 1,
      name: 'Modern Downtown Apartment',
      description: 'Stylish apartment in the heart of downtown with great amenities and city views.',
      location: 'Downtown, New York',
      price: 2500,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      rating: 4.8,
      reviews: 24,
      amenities: ['Air Conditioning', 'Washer', 'Dryer', 'Dishwasher', 'Parking'],
      image: '/api/placeholder/800/500',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    {
      id: 2,
      name: 'Cozy Studio in Brooklyn',
      description: 'Charming studio apartment in a quiet Brooklyn neighborhood with easy subway access.',
      location: 'Brooklyn, New York',
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      rating: 4.5,
      reviews: 18,
      amenities: ['Air Conditioning', 'Heating', 'Pets Allowed'],
      image: '/api/placeholder/800/500',
      latitude: 40.6782,
      longitude: -73.9442,
    },
    // Add more properties as needed
  ];

  // Apply filters to properties
  useEffect(() => {
    let results = MOCK_HOUSES;
    
    // Filter by location
    if (filters.location) {
      results = results.filter(house => 
        house.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    // Filter by price range
    if (filters.priceRange.min) {
      results = results.filter(house => house.price >= parseInt(filters.priceRange.min));
    }
    if (filters.priceRange.max) {
      results = results.filter(house => house.price <= parseInt(filters.priceRange.max));
    }
    
    // Filter by bedrooms
    if (filters.bedrooms) {
      results = results.filter(house => house.bedrooms >= parseInt(filters.bedrooms));
    }
    
    // Filter by bathrooms
    if (filters.bathrooms) {
      results = results.filter(house => house.bathrooms >= parseInt(filters.bathrooms));
    }
    
    setFilteredHouses(results);
  }, [filters]);

  // Toggle favorite status for a property
  const toggleFavorite = (houseId) => {
    if (favorites.includes(houseId)) {
      setFavorites(favorites.filter(id => id !== houseId));
    } else {
      setFavorites([...favorites, houseId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filters Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Rental</h1>
          
          <SearchFilter onFilterChange={setFilters} />
          
          {/* View Toggle */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              Showing {filteredHouses.length} {filteredHouses.length === 1 ? 'property' : 'properties'}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-md ${viewMode === 'map' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Map View
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {viewMode === 'list' ? (
          <HouseList 
            houses={filteredHouses} 
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onSelectHouse={setSelectedHouse}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MapView 
                houses={filteredHouses} 
                selectedHouse={selectedHouse}
                onHouseSelect={setSelectedHouse}
              />
            </div>
            <div className="lg:col-span-1">
              {selectedHouse ? (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={selectedHouse.image} 
                    alt={selectedHouse.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-900">{selectedHouse.name}</h3>
                      <button 
                        onClick={() => toggleFavorite(selectedHouse.id)}
                        className="p-1"
                      >
                        <Heart 
                          className={`h-5 w-5 ${favorites.includes(selectedHouse.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`}
                        />
                      </button>
                    </div>
                    <p className="text-gray-600 mt-1">{selectedHouse.location}</p>
                    <p className="text-xl font-bold text-blue-600 mt-2">${selectedHouse.price}/mo</p>
                    
                    <div className="flex items-center mt-4 text-sm text-gray-500">
                      <div className="mr-4">{selectedHouse.bedrooms} beds</div>
                      <div className="mr-4">{selectedHouse.bathrooms} baths</div>
                      <div>{selectedHouse.area} sq.ft</div>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-gray-700">{selectedHouse.description}</p>
                    </div>
                    
                    <div className="mt-4 flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 font-medium">{selectedHouse.rating}</span>
                      <span className="ml-1 text-gray-500">({selectedHouse.reviews} reviews)</span>
                    </div>
                    
                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <p className="text-gray-500">Select a property on the map to see details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rentals;