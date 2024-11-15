import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
function navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} />
        <div className='hiddenLinks'>
        <Link to='/'> Home </Link>
        <Link to='/charities'> Charities </Link>
        <Link to='/donation'> Donation </Link>
        <Link to='/transactionhistory'> Transaction History </Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/charities'> Charities </Link>
        <Link to='/donation'> Donation </Link>
        <Link to='/transactionhistory'> Transaction History </Link>
        <button onClick={toggleNavbar}>
            
        </button>
      </div>
    </div>
  );
}

export default navbar;
