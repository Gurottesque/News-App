import React, { useState } from "react";
import Modal from "./Modal";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from "./ThemeContext";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();
  return (
    <div className={`${ isDarkMode ? "text-slate-200 bg-slate-800 transition duration-200" : "bg-white  text-slate-850 transition duration-200"
    } py-4 px-2`}>
      <footer className= {`${
          isDarkMode ? "text-slate-200 bg-slate-850 transition duration-200" : "bg-stale-200 text-slate-850 transition duration-200"
        } py-4 px-2 rounded-lg items-center`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" onClick={() => setIsModalOpen(true)}>About</a>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <a className="hover:text-sky-700">Contact</a>
            <a className="hover:text-sky-700">Privacy</a>
          </div>
          <div className="text-center mb-4 md:mb-0">
            &copy; 2024 News Hub. All rights reserved.
          </div>
          <div className="mt-4 flex space-x-6">
              <a href="#" className="hover:text-gray-700">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-700">
                  <FaInstagram className="h-6 w-6" />
                </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
