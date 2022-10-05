import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
       <>
       <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    FLWRS 
                </Link>
                <div className="menu-icon" onClick={handClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onCLick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/services' className='nav-links' onCLick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onCLick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onCLick={closeMobileMenu}>
                      Sign up
                    </Link>
                  </li>
                </ul>
            </div>
       </nav>
       </>              
  )
}

export default Navbar