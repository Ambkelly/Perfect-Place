import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // In a real app, you would clear authentication tokens/user data here
      console.log('User logged out');
      navigate('/');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
          <LogOut className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Logging out...
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          You're being securely logged out of your account.
        </p>
      </div>
    </div>
  );
};

export default Logout;