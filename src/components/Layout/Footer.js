import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Vidyathiral Logo"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h3 className="text-xl font-bold">Vidyathiral</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering researchers through professional academic publishing
              services. From editing to open-access publishing, we support your
              research journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  to="/policies#privacy"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/policies#terms"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/policies#ethics"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  Ethical Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@vidyathiral.me"
                  className="text-gray-300 hover:text-secondary transition duration-300 text-sm"
                >
                  contact@vidyathiral.me
                </a>
              </li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition duration-300"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition duration-300"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Vidyathiral. All rights reserved. | Empowering
            Researchers. Publishing Knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
