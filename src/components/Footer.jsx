import React, { useState } from "react";
import Modal from "./Modal";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <footer className="bg-gray-100 text-gray-500 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-0 mb-4 md:mb-0 \space-y-4 ">
            <a href="#" className="hover:text-sky-700" onClick={() => setIsModalOpen(true)}>About</a>
            <a href="#" className="hover:text-sky-700 pl-5 pr-5">Contact</a>
            <a href="#" className="hover:text-sky-700">Privacy</a>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          </div>
          <div className="text-center mb-4 md:mb-0">
            &copy; 2024 News Hub. All rights reserved.
          </div>
          <div className="mt-4 flex space-x-6 m-4">
              <a href="#" className="duration-300 hover:text-[#1877F2]">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="duration-300 hover:text-[#1DA1F2]">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="duration-300 hover:text-[#E4405F]">
                  <FaInstagram className="h-6 w-6" />
                </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
