import React, { useState } from 'react';
import HouseCard from './HouseCard';

const HouseList = ({ houses = [] }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  if (houses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
        <p className="text-gray-500 text-center">Try adjusting your search filters to find more properties.</p>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {houses.length} {houses.length === 1 ? 'Property' : 'Properties'} Available
        </h2>
        
        <div className="flex gap-2">
          <button 
            className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </button>
          <button 
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setViewMode('list')}
          >
            List
          </button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {houses.map((house) => (
            <div key={house.id} className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
              <div className="sm:w-1/3 h-48 sm:h-auto">
                <img 
                  src={house.image || "/api/placeholder/400/300"} 
                  alt={house.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 sm:w-2/3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{house.name}</h3>
                  <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-bold">
                    ${house.price}/month
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{house.location}</p>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="mr-3">{house.bedrooms} beds</span>
                  <span className="mr-3">{house.bathrooms} baths</span>
                  <span>{house.area} sq.ft</span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-2">{house.description}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HouseList;