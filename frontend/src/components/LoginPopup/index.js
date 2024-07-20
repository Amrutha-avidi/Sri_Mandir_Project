import React, { useState } from 'react';
import { useAuth } from '../../Context/loginContext';
import { AiFillCloseCircle } from "react-icons/ai";
import './index.css'

function LoginPopup({ onClose }) {
  const { login } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(phoneNumber);
    onClose();
  };
  // const handleLogin = () => {
  //   // Perform login actions
  //   // After successful login, call onClose to close the popup
  //   onClose();
  // };


  return (
    <div className="login-main-con">
      <div className='login-sub-con'>
        <h1>Login</h1>
        <p>Get access to all
          Sri Mandir services, 1000+ devotional music and other items</p>
      </div>
      <div className="login-inner">
        <div className="close-container"><button onClick={onClose}><AiFillCloseCircle className='close-button' /></button></div>
        <div className='login-content'>
          <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsrimandir_logo.14067ea8.svg&w=96&q=75' alt='logo' />
          <h2>Login to check your booking</h2>
          <p className='login-content-para'> Please login with the same number that you have used for booking.</p>
          <form onSubmit={handleLogin}>
            <input className='login-input'
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <p>By proceeding you agree to the <br />
              <span>Terms & Conditions</span> and <span>Privacy Policy</span> of Sri Mandir</p>
            <button className='login-button' type="submit">Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default LoginPopup;
