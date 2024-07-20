import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import './index.css'


const PoojaBookingPage = () => {
  const { pujaName, pujaPrice } = useParams();
  let pujaHead = ''
  if (pujaPrice === '1251') {
    pujaHead = 'Partner Puja'
  }
  else if (pujaPrice === '851') {
    pujaHead = 'Individual Puja'
  }
  else if (pujaPrice === '2001') {
    pujaHead = 'Family + Bhog'
  }
  else {
    pujaHead = 'Joint Family + Bhog + Flower Basket'
  }

  return (
    <div className='booking-page-con'>
      <h2>Review Booking</h2>
      <div className='booking-page-head-con1'>
        <p className='booking-page-head'>{pujaName}</p>
        <p className='booking-page-para'>{pujaHead}</p>
        <div className='booking-page-price-con'>
          <p > <LiaRupeeSignSolid />{pujaPrice}</p>
          <MdOutlineKeyboardArrowDown className='icon' />
        </div>

      </div>
      <div className='booking-page-head-con2'>
        <p>Apply Coupon</p>
        <MdOutlineKeyboardArrowRight className='icon'/>

      </div>
      <p className='booking-page-head'>Bill details</p>
      <div className='booking-page-sub-con'>
        <p>{pujaHead}</p>
        <p><LiaRupeeSignSolid />{pujaPrice}</p>
      </div>
      <div className='booking-page-sub-con'>
        <p>Total Amount</p>
        <p><LiaRupeeSignSolid />{pujaPrice}</p>
      </div>
      <Link className='puja-booking-button' to = {`/sankalp/${pujaHead}/${pujaName}/${pujaPrice}`} style={{textDecoration:'none', cursor: 'pointer'}}>
        <div>
          <p><LiaRupeeSignSolid />{pujaPrice}</p>
          <p>{pujaHead}</p>
        </div>
        <p>Continue <MdOutlineKeyboardArrowRight className='icon2'/></p>
      </Link>
    </div>
  )
}

export default PoojaBookingPage

