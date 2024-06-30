import React, { useState } from "react";
import Modal from "./Modal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <footer className="bg-gray-100 text-gray-500 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#about" onClick={() => setIsModalOpen(true)}>About</a>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <a href="/contact" className="hover:text-sky-700">
              Contact       
            </a>
            <a href="/privacy" className="hover:text-sky-700">
              Privacy
            </a>
          </div>
          <div className="text-center mb-4 md:mb-0">
            &copy; 2024 News Hub. All rights reserved.
          </div>
          <div className="mt-4 flex space-x-6">
            <a>
              <img
                src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=210"
                alt="Facebook"
                className="h-6 w-6"
              />
            </a>
            <a>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlg_jM9FuLfEnjTvQcvYC5XGbLkEm5pKE-Ng&s"
                alt="X"
                className="h-6 w-6"
              />
            </a>
            <a>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
