import React from 'react';
import { MapPin } from 'lucide-react';

const HouseCard = ({ house }) => {
  const { id, name, price, location, image, bedrooms, bathrooms, area } = house;
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <img 
          src={image || "/api/placeholder/400/300"} 
          alt={name} 
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow text-sm font-bold text-gray-800">
          ${price}/month
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <p className="text-sm">{location}</p>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <span className="font-medium">{bedrooms}</span>
            <span className="mx-1">bed</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{bathrooms}</span>
            <span className="mx-1">bath</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium">{area}</span>
            <span className="mx-1">sq.ft</span>
          </div>
        </div>
        
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-colors duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default HouseCard;