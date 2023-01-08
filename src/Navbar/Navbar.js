
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/home">Home</Link></li>
            <li tabindex="0">
              <Link to="/about">
                About Me
              </Link>
              <Link to="/research">
                Research
              </Link>
              <Link to="/projects">
                Projects
              </Link>
              <Link to="/gallery">
                Gallery
              </Link>
              <Link to="/contact">
                Contact
              </Link>
              
            </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-2xl font-serif ">Akash Ghosh</a>
          {/* <img  src="https://placeimg.com/400/225/arch"/> */}
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><Link to="/home">Home</Link></li>
            <li tabindex="0">
              <Link to="/about">
                About Me
              </Link>
              <Link to="/research">
                Research
              </Link>
              <Link to="/projects">
                Projects
              </Link>
              <Link to="/gallery">
                Gallery
              </Link>
              <Link to="/contact">
                Contact
              </Link>
              
            </li>
            
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;