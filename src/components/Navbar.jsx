import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex items-center px-6 py-4 md:px-20 md:py-10 justify-between font-bold text-white bg-[#2c3e50] fixed top-0 w-full z-50'>
      <Link to='/'>
        <span className='uppercase tracking-wide text-2xl'>
          start framework
        </span>
      </Link>

      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none'>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      <ul
        className={`md:flex md:space-x-10 md:mr-6 ${
          isOpen ? 'block' : 'hidden'
        } absolute md:static top-14 left-0 w-full md:w-auto bg-[#2c3e50] md:bg-transparent`}
      >
        <li className='uppercase p-4 md:p-0'>
          <NavLink to='about' onClick={() => setIsOpen(false)}>
            about
          </NavLink>
        </li>
        <li className='uppercase p-4 md:p-0'>
          <NavLink to='portfolio' onClick={() => setIsOpen(false)}>
            portfolio
          </NavLink>
        </li>
        <li className='uppercase p-4 md:p-0'>
          <NavLink to='contact' onClick={() => setIsOpen(false)}>
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
