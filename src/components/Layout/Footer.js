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
                    href="https://linkedin.com/company/vidyathiral"
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
                    href="https://x.com/vidyathiral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-secondary transition duration-300"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
