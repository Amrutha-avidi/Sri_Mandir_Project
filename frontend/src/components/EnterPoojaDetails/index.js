import React from 'react'
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './index.css'



const EnterPoojaDetails = () => {
  const { pujaName, pujaPrice, pujaHead } = useParams();
  console.log(pujaHead)


  return (
    <div>
      <div>
        <h2>Your WhatsApp Number</h2>
        <p>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.
        </p>
        <div className="input-container">
          <label className="input-label" htmlFor="mobilenumber">Your WhatsApp Number</label>
          <input className="input-box" type="text" id="mobilenumber" name="mobilenumber" />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="mobilenumber">Your WhatsApp Number</label>
          <input className="input-box" type="text" id="mobilenumber" name="mobilenumber" />
        </div>

      </div>
      <div className='sankalp-page-head-con1'>
        <p className='sankalp-page-head'>{pujaName}</p>
        <p className='sankalp-page-para'>{pujaHead}</p>
        <div className='sankalp-page-price-con'>
          <p > <LiaRupeeSignSolid />{pujaPrice}</p>
          <MdOutlineKeyboardArrowDown className='icon' />
        </div>

      </div>
    </div>
  )
}

export default EnterPoojaDetails