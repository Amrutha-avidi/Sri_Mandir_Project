import React from 'react'
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useAuth } from '../../Context/loginContext';

// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './index.css'



const EnterPoojaDetails = () => {
  // const {currentUser} = useContext(AuthContext)
  const { currentUser } = useAuth();

  const { pujaName, pujaPrice, pujaHead } = useParams();
  console.log(currentUser)


  return (
    <div>
      <h1 className='main-head'>Enter details for you Puja</h1>
      <div className='enter-details-con'>

        <div className='enter-details-content'>
          <div className='enter-details-sub-content'>
            <h2 className='enter-details-sub-content-head'>Your WhatsApp Number</h2>
            <p className='enter-details-sub-content-para'>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
            </p>
            <input className="enter-input-box" type="text"  value={currentUser.phoneNumber}  placeholder='Your WhatsApp Number' readOnly />
          </div>

          <div className='enter-details-sub-content'>
            <h2 className='enter-details-sub-content-head'>Name of members participating in Puja</h2>
            <p className='enter-details-sub-content-para'>Panditji will take this name along with gotra during the puja.

            </p>
            <input className="enter-input-box" type="text" id="membername" name="membername" placeholder='First Member Name' />



          </div>
          <div className='enter-details-sub-content'>
            <h2 className='enter-details-sub-content-head'>Fill participant's gotra</h2>
            <p className='enter-details-sub-content-para'>Gotra will be recited during the puja</p>
            <input className="enter-input-box" type="text" id="gotra" name="gotra" placeholder='Gotra' />



          </div>
          <div className='enter-details-sub-content'>
            <div className='pooja-prasad-con'>
              <h2 className='enter-details-sub-content-head'>Do you want to get puja prasad?</h2>
              <div className='pooja-prasad-buttons-con'>
                <button className='pooja-prasad-buttons'>YES</button>
                <button className='pooja-prasad-buttons'>NO</button>
              </div>
            </div>
            <p className='enter-details-sub-content-para'>Prasad of workship will be sent within 8-10 days after completion of puja</p>


          </div>
          <button className='proceed-button'>Procced to Book</button>
        </div>
        <div className='sankalp-page-head-con1'>
          <p className='sankalp-page-head'>{pujaName}</p>
          <p className='sankalp-page-para'>{pujaHead}</p>
          <div className='sankalp-page-price-con'>
            <p className='sankalp-page-price-con' > <LiaRupeeSignSolid />{pujaPrice}</p>
            <MdOutlineKeyboardArrowDown className='icon' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default EnterPoojaDetails