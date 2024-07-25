import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Context/loginContext';
import { AiFillCloseCircle } from "react-icons/ai";
import './index.css'

function LoginPopup({ onClose }) {
  const { login } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loginError, setLoginError] = useState(null);


  const handleLoginFormSubmit = async (e) => {
    if (!phoneNumber) {
      setLoginError('Please enter a phone number.');
      return;
    }
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3300/login', { phoneNumber });

      if (response.status === 200) {
        // Handle successful login
        console.log('Login successful:', response.data);
        onClose(); // Close the popup after successful login
      } else {
        // Handle failed login
        setLoginError(response.data.message || 'Login failed');

        console.log('Login failed');
      }
    } catch (error) {
      setLoginError('Failed to connect to server. Please try again later.');

      console.error('Error during login:', error);
    }
  };

  const handlePhoneNumber = (e) => {
    e.preventDefault()
    setPhoneNumber(e.target.value);

    if (e.target.value.length === 10) {
      login(e.target.value); // Update phone number in context
      setLoginError(null);
    }

    // onClose();
  };


  return (
    <div className="login-main-con">
      <div className='login-sub-con'>
        <h1>Login</h1>
        <p>Get access to all
          Sri Mandir services, 1000+ devotional music and other items</p>
      </div>
      <div className="login-inner">
        <div className="close-container">
          <button onClick={onClose}><AiFillCloseCircle className='close-button' /></button>
        </div>
        <div className='login-content'>
          <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsrimandir_logo.14067ea8.svg&w=96&q=75' alt='logo' />
          <h2>Login to check your booking</h2>
          <p className='login-content-para'> Please login with the same number that you have used for booking.</p>
          <form >
            <input className='login-input'
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumber} required
            />
            <p>By proceeding you agree to the <br />
              <span>Terms & Conditions</span> and <span>Privacy Policy</span> of Sri Mandir</p>
            <button type='button' className='login-button' onClick={handleLoginFormSubmit}>Login</button>
          </form>
          {loginError && <p className="error-message">{loginError}</p>}
        </div>
      </div>

    </div>
  );
}

export default LoginPopup;
