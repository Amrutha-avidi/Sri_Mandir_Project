// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import ProfileMenu from '../ProfileMenu';

import { MdAccountCircle } from "react-icons/md";
import './index.css'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className='nav-bar'>
                <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_sm_logo_en_dark.749d0244.svg&w=256&q=75' alt='logo' />

                <ul className='nav-bar-list-con '>
                    <li className='nav-bar-list-items '><Link to="/" style={{ 'textDecoration': 'none', 'color': 'black' }}>Home</Link></li>
                    <li className='nav-bar-list-items '><Link to="/puja" style={{ 'textDecoration': 'none', 'color': 'black' }}>Puja</Link></li>
                    <li className='nav-bar-list-items '>Panchang</li>
                    <li className='nav-bar-list-items '>Temples</li>
                    <li className='nav-bar-list-items '>Library</li>

                </ul>
                <div className='language-profile-con'>
                    <select name="langugae" id="languages">
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>

                    </select>
                    <div>
                        <button className='profile-button' onClick={toggleMenu} ><MdAccountCircle className='profile-logo' /></button>
                        <ProfileMenu isOpen={isMenuOpen} />
                    </div>
                </div>
            </nav>
            
        </header>
    );
};

export default Header;
