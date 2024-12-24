"use client"
import React, { useState } from 'react'
import Link from "next/link"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to control mobile menu toggle

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu open/close
  };

  return (
    <nav className='bg-blue-950 shadow-lg shadow-blue-950'> 
      <div className="max-w-screen-full flex justify-between items-center py-3 px-4 sm:px-8 md:px-16">
        
        {/* Logo */}
        <div>
          <h1 className="text-white font-[800] pt-2 text-[20px]">QAFIX</h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex">
          <ul className="text-white flex gap-[20px] pt-2 font-[500] text-[18px]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="Blog"><li>Blogs</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
          </ul>
        </div>

        {/* Button */}
        
          <div className="bg-green-600 px-3 py-2 rounded-md text-white font-[400] mt-1 hover:bg-blue-900">
           <button><Link href="../login">Login</Link></button>/<button > <Link href="../signin">Signin</Link> </button>
          </div>
      

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-white focus:outline-none">
            {/* Hamburger icon */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center py-4">
          <ul className="text-white flex flex-col gap-4 font-[500] text-[18px]">
            <Link href="/"><li onClick={() => setIsMenuOpen(false)}>Home</li></Link>
            <Link href="/about"><li onClick={() => setIsMenuOpen(false)}>About</li></Link>
            <Link href="Blog"><li onClick={() => setIsMenuOpen(false)}>Blogs</li></Link>
            <Link href="/contact"><li onClick={() => setIsMenuOpen(false)}>Contact</li></Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;