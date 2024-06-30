import React, { useState } from "react";
import Modal from "./Modal";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <footer className="bg-gray-100 text-gray-500 py-4">
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
    </>
  );
}

export default Footer;
