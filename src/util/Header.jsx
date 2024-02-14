// import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <nav className='flex items-center justify-between bg-blue-600 p-4' >
        {/* Logo */}
        <div>
          <Link to="#">
            <img src='/src/Image/flipkart-logo-1.png' alt="logo" width='150px' height='100px' />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className='relative flex items-center justify-evenly border-none text-xl'>
          <input
            type="text"
            placeholder="  Search for Product,categaries,etc"
            className="rounded-md h-10 min-w-96 "
          />
          <button className="absolute inset-y-0 right-0 px-4 bg-black text-white rounded-md">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        
        {/* Login */}
        <div>
          <Link to="#" className='text-slate-50 hover:bg-white hover:text-black px-3 py-2 rounded-md'>
          <i className="fa-solid fa-user"></i>
            Login
          </Link>
        </div>

         {/* cart */}
         <div>
          <Link to="#" className='text-slate-50 hover:bg-white hover:text-black px-3 py-2 rounded-md'>
          <i className="fa-solid fa-cart-shopping "></i>
            Cart
          </Link>
        </div>

        {/* Become Seller Option */}
        <div>
          <Link to="#" className='text-slate-50 hover:bg-white hover:text-black px-3 py-2 rounded-md'>
          <i className="fa-solid fa-store"></i>
            Become a Seller
          </Link>
        </div>
    
      </nav>
    </header>
  );
};

export default Header;



