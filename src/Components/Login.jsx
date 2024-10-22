import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [corporateName, setCorporateName] = useState('Test'); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (corporateName === 'Test') {
      if (username === 'test' && password === 'password') {
        
        alert('Login successful');
        navigate('/layout'); 
      } else {
        alert('Invalid credentials for Test corporate');
      }
    } else {
      
      alert(`Corporate login for ${corporateName} not yet implemented.`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
       
        <div className="flex justify-center mb-6">
          <img
            src="data:image/jpeg;base64,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" 
            alt="Company Logo"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>

        {/* Corporate Login Text */}
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
          Corporate Login
        </h2>

        {/* Welcome Text */}
        <h3 className="text-lg text-center text-gray-500 mb-6">
          Hi, Welcome Back
        </h3>

        {/* Corporate Name Dropdown */}
        <div className="mb-6">
          <label htmlFor="corporate-name" className="block text-sm font-medium text-gray-700">
            Corporate Name
          </label>
          <select
            id="corporate-name"
            value={corporateName}
            onChange={(e) => setCorporateName(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Test">Test</option>
            <option value="Corporate 1">Corporate 1</option>
            <option value="Corporate 2">Corporate 2</option>
            <option value="Corporate 3">Corporate 3</option>
          </select>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
