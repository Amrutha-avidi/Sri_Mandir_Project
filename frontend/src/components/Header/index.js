// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

// import { useState } from 'react'
import ProfileMenu from '../ProfileMenu';

import { MdAccountCircle } from "react-icons/md";
import './index.css'


const Header = () => {
  
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
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Popup
                            trigger=
                            {
                                <button className='profile-button'  >
                                    <MdAccountCircle className='profile-logo' />
                                </button>
                            } closeOnDocumentClick={true}
                            // modal
                            nested
                            position="bottom right" contentStyle={{ width: "360px", padding: '10px 20px' }}>
                            {/* <ProfileMenu onClose={toggleMenu} /> */}
                            {(close) => (
                                <ProfileMenu onClose={close}/>
                            )}



                        </Popup>

                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;