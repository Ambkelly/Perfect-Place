import React from 'react';
import { Home, Users, Heart, Shield, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      name: 'Extensive Listings',
      description: 'Access thousands of verified rental properties across multiple cities and neighborhoods.',
      icon: Home,
    },
    {
      name: 'Community Focused',
      description: 'We prioritize building relationships between landlords and tenants for long-term satisfaction.',
      icon: Users,
    },
    {
      name: 'Passionate Team',
      description: 'Our team is dedicated to making your rental experience smooth and stress-free.',
      icon: Heart,
    },
    {
      name: 'Secure Platform',
      description: 'Your data and transactions are protected with industry-leading security measures.',
      icon: Shield,
    },
    {
      name: 'Nationwide Coverage',
      description: 'Find properties in major cities and growing communities across the country.',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About RentalHub
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            We're revolutionizing the way people find and rent properties by combining technology with personalized service.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Founded in 2020, RentalHub began as a small team of real estate professionals and technologists who saw an opportunity to improve the rental experience for both tenants and property owners.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              What started as a local service in New York has grown into a nationwide platform serving thousands of happy customers every month.
            </p>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
              alt="Our team working together"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose RentalHub?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're more than just a listing platform - we're your partner in finding the perfect home.
            </p>
          </div>
          
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The passionate people behind Perfect place's success.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Alex Ikenna',
              role: 'Founder & CEO',
              image: 'https://img.freepik.com/free-photo/handsome-adult-male-posing_23-2148729713.jpg?uid=R158760462&ga=GA1.1.1304501097.1721386545&semt=ais_hybrid&w=740',
            },
            {
              name: 'Maria Chioma',
              role: 'Chief Technology Officer',
              image: 'https://img.freepik.com/free-photo/smiley-african-woman-with-golden-earrings_23-2148747979.jpg?uid=R158760462&ga=GA1.1.1304501097.1721386545&semt=ais_hybrid&w=740',
            },
            {
              name: 'James Almad',
              role: 'Head of Operations',
              image: 'https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg?uid=R158760462&ga=GA1.1.1304501097.1721386545&semt=ais_hybrid&w=740',
            },
          ].map((person) => (
            <div key={person.name} className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src={person.image}
                alt={person.name}
              />
              <h3 className="mt-6 text-lg font-medium text-gray-900">{person.name}</h3>
              <p className="mt-1 text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;