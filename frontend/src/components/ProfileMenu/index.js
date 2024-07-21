// ProfileMenu.js
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useAuth } from '../../Context/loginContext';
import LoginPopup from '../LoginPopup';
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";


import './index.css'

const ProfileMenu = ({ isOpen }) => {
    const { currentUser } = useAuth();
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <div className={`profile-menu ${isOpen ? 'open' : ''}`}>
            <div>
                <div>
                    {!currentUser ? (
                        <div>
                            <p style={{fontSize:'20px'}}>To check all available pujas & offers</p>

                            <Popup trigger={<button className='profile-login-button' onClick={togglePopup}>Login / Create an Account</button>} modal>
                                <LoginPopup onClose={togglePopup} />

                            </Popup>



                        </div>
                    ) : (
                        <div>
                            <p>Hello, Sri Mandir Bhakt</p>
                            <p>Welcome to Sri Mandir Puja Seva</p>
                        </div>
                    )}
                </div>

                <hr />
                <p className='sub-heads'>Account Details</p>
                <ul className='profile-menu-con'>
                    <li className='list-items' >
                        <div>
                            <VscAccount />
                            <span> My Profile</span>
                        </div>
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />


                    </li>
                    <li className='list-items' >
                        <div>
                            <RiFileList2Fill />
                            <span><a href='/puja' style={{ 'textDecoration': 'none', 'paddingLeft': '0', 'color': '#4e545f' }}>My Pooja Bookings</a></span>
                        </div>
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />
                    </li>
                    <li className='list-items'>
                        <div>
                            <RiFileList2Fill />
                            <span>My Ramotsav Bookings</span>
                        </div>
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />
                    </li>
                    <li className='list-items' >
                        <div>
                            <GiConfirmed />
                            <span>Book a Puja</span>
                        </div>
                        <MdOutlineKeyboardArrowRight className='arrow-icon' />
                    </li>
                    {/* Add more menu items as needed */}
                </ul>
                <hr />
                <div className='help-and-support'>
                    <p className='sub-heads'>Help & Support for Puja Booking</p>
                    <div className='contact-info'>
                        <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_call.858e9981.svg&w=48&q=75' alt='call us' />
                        <div className='contact-info-sub'>
                            <p>080-711-74417</p>
                            <p>You can call us from 10:30 AM - 7:30 PM</p>
                        </div>
                    </div>
                    <div className='mail-whatsapp'>
                        <div className='contact-info'>
                            <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_mail.adf10861.svg&w=48&q=75' alt='mail' />
                            <p>Email us</p>
                        </div>
                        <div className='contact-info'>
                            <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_action_help_whats_app.97e1ae15.svg&w=48&q=75' alt='whatsapp' />
                            <p>Whatsapp us</p>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default ProfileMenu;
