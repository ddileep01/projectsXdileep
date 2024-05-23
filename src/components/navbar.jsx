import React, { useState, useEffect, useRef } from 'react';
import '../styles.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center h-screen bg-gradient-img">
      <div className="w-full lg:w-2/5 max-w-6xl pt-6 px-4 lg:px-0">
        <div className="flex justify-between items-center bg-slate-900 bg-opacity-50 p-2 px-4 rounded-lg backdrop-blur-sm">
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src="https://cdn-images-1.medium.com/max/600/1*YHkjVAcA4fc5iBDIpPDDIA@2x.png"
                className="w-8 h-8"
                alt="Logo"
              />
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-6 items-center text-white">
            <a href="#timeline" className="text-lg bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              timeline
            </a>
            <a href="#work" className="hover:text-gray-300">
              work
            </a>
            <a href="#about" className="hover:text-gray-300">
              about
            </a>
            <a href="#links" className="hover:text-gray-300">
              stack
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center justify-between py-2 px-3 text-white hover:text-gray-300"
                onClick={toggleDropdown}
              >
                more
                <svg
                  className={`w-4 h-4 ml-2 transform transition-transform ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-4 w-44 divide-y bg-slate-900 bg-opacity-50 backdrop-blur-sm divide-gray-100 rounded-lg shadow-lg dark:divide-gray-600 ${
                  dropdownOpen ? 'block' : 'hidden'
                }`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <a href="#" className="block px-4 py-2 dark:hover:text-white">
                      story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 dark:hover:text-white">
                      photos
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 dark:hover:text-white">
                      contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 dark:hover:text-white">
                      links
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex space-x-4 items-center text-white">
            <a href="#instagram" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </a>
            <a href="#twitter" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                />
              </svg>
            </a>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-900 bg-opacity-50 p-4 rounded-lg backdrop-blur-sm">
            <ul className="space-y-4 text-white">
              <li>
                <a href="#timeline" className="block text-lg bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  timeline
                </a>
              </li>
              <li>
                <a href="#work" className="block hover:text-gray-300">
                  work
                </a>
              </li>
              <li>
                <a href="#about" className="block hover:text-gray-300">
                  about
                </a>
              </li>
              <li>
                <a href="#links" className="block hover:text-gray-300">
                  stack
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-300">
                  story
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-300">
                  photos
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-300">
                  contact
                </a>
              </li>
              <li>
                <a href="#" className="block hover:text-gray-300">
                  links
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 items-center text-white mt-4">
              <a href="#instagram" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a href="#twitter" className="hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
