// src/screens/WelcomeScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-indigo-600"
      >
        Welcome to Jobify
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/login')}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg mb-4 shadow-md"
      >
        Login
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate('/signup')}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md"
      >
        Sign Up
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
