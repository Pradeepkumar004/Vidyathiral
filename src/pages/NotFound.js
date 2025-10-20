import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | Vidyathiral"
        description="The page you are looking for does not exist. Return to Vidyathiral homepage for academic publishing services."
        url="https://vidyathiral.me/404"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-blue-900 px-4">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Icon */}
          <div className="mb-8">
            <svg 
              className="w-32 h-32 mx-auto text-secondary opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>

          {/* 404 Text */}
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 opacity-90">
            404
          </h1>
          
          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have disappeared into the research archives.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition duration-300 shadow-lg inline-block w-full sm:w-auto"
            >
              Go to Homepage
            </Link>
            
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg inline-block w-full sm:w-auto"
            >
              Contact Support
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-gray-300 mb-4 font-medium">
              Popular Pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/services" className="text-gray-200 hover:text-secondary transition duration-200">
                Services
              </Link>
              <Link to="/how-it-works" className="text-gray-200 hover:text-secondary transition duration-200">
                How It Works
              </Link>
              <Link to="/about" className="text-gray-200 hover:text-secondary transition duration-200">
                About Us
              </Link>
              <Link to="/faq" className="text-gray-200 hover:text-secondary transition duration-200">
                FAQ
              </Link>
              <Link to="/blog" className="text-gray-200 hover:text-secondary transition duration-200">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
