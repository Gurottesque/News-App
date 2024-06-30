<<<<<<< HEAD
import React, { useState } from "react";
<<<<<<< HEAD
import Modal from "./Modal";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
=======
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Modal from "./Modal";
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <footer className="bg-gray-100 text-gray-500 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
<<<<<<< HEAD
          <a href="#" onClick={() => setIsModalOpen(true)}>About</a>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <a className="hover:text-sky-700">Contact</a>
            <a className="hover:text-sky-700">Privacy</a>
=======
            <a href="#about" onClick={() => setIsModalOpen(true)}>About</a>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <a href="/contact" className="hover:text-sky-700">
              Contact       
            </a>
            <a href="/privacy" className="hover:text-sky-700">
              Privacy
            </a>
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
          </div>
          <div className="text-center mb-4 md:mb-0">
            &copy; 2024 News Hub. All rights reserved.
          </div>
<<<<<<< HEAD
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
=======
          <div class="mb-2 flex space-x-6">
            <a href="#" className="hover:text-gray-700">
            <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaInstagram className="h-6 w-6" />
            </a>
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
          </div>
        </div>
      </footer>
    </>
  );
}

<<<<<<< HEAD
=======
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

>>>>>>> 9ded50788140697f07ac207ee1c774ffadf3b9c2
export default Footer;
=======
export default Footer;
>>>>>>> ea1b2b21334f3f2cd1fadf184d7e199ab2c86eab
