import React from 'react'
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



const EnterPoojaDetails = () => {
    const { pujaName, pujaPrice, pujaHead } = useParams();
    console.log(pujaHead)
    

  return (
    <div>
        <div className='booking-page-head-con1'>
        <p className='booking-page-head'>{pujaName}</p>
        <p className='booking-page-para'>{pujaHead}</p>
        <div className='booking-page-price-con'>
          <p > <LiaRupeeSignSolid />{pujaPrice}</p>
          <MdOutlineKeyboardArrowDown className='icon' />
        </div>

      </div>
    </div>
  )
}

export default EnterPoojaDetails