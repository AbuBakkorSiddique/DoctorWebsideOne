import { useState } from 'react';

import BrandName from '../Images/BrandName.png'




function NavigationBar() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };




  return (
<>

<div>



 <nav className="bg-white shadow-md pt-2">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Name */}
        <div className="text-2xl font-bold text-blue-600">
        <a href="/" className="text-gray-800 hover:text-blue-600 no-underline">
          <img src={BrandName} alt="BrandName" />
        </a>
        </div>

        {/* Nav Items - Hidden on small/medium screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="text-gray-800 hover:text-blue-600 no-underline">Home</a>
          <a href="/Services" className="text-gray-800 hover:text-blue-600 no-underline">Services</a>
          <a href="/Benifit" className="text-gray-800 hover:text-blue-600 no-underline">Benefits</a>
          <a href="/ABoutPage" className="text-gray-800 hover:text-blue-600 no-underline">About us</a>
        </div>

        {/* Search Button - Hidden on small/medium screens */}
        <div className="hidden lg:flex">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <a href="/contactUs" className="block  hover:text-blue-600 no-underline text-white">contact us </a>
          </button>
        </div>

        {/* Toggle Icon - Visible on small/medium screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide Down on Toggle */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block text-gray-800 hover:text-blue-600 no-underline">Home</a>
            <a href="/Services" className="block text-gray-800 hover:text-blue-600 no-underline">Services</a>
            <a href="/Benifit" className="block text-gray-800 hover:text-blue-600 no-underline">Benefits</a>
            <a href="/ABoutPage" className="block text-gray-800 hover:text-blue-600 no-underline">About us</a>
            <button className="block bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
            <a href="/contactUs" className="block  hover:text-blue-600 no-underline text-white">contact us </a>
            </button>
          </div>
        </div>
      )}
    </nav>






</div>


</>
  )
}

export default NavigationBar