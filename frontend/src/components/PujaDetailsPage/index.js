import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import { useParams } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";
import PujaPackages from '../PujaPackages';
import './index.css'


const PujaDetailsPage = () => {

  const [pujaDetails, setPujaDetails] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3300/puja/${id}`);

        setPujaDetails(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the async function immediately
  }, [id]);




  return (
    <div className='puja-details-main-con'>
      {pujaDetails ? (

        <div>
          <div className='pujas-details-con'>
            <img className='pujas-details-image' src={pujaDetails.puja_details_image} alt={pujaDetails.sub_head} />
            <div>
              <p className='pujas-details-sub-head' >{pujaDetails.sub_head}</p>
              <h2 >{pujaDetails.heading}</h2>
              <p className='pujas-details-para'>{pujaDetails.para}</p>
              <div className='icons-details'>
                <div className='icons-con'>
                  <AiFillHome className='icons' />
                  <SlCalender className='icons' />
                </div>
                <ul className='puja-details-list-con' >
                  {pujaDetails.details.map((str, index) => (
                    <li className='puja-details-list-items' key={index}>{str}</li>
                  ))}
                </ul>

              </div>
              <p className='puja-details-list-para'>Till now <span>2,00,000+ Devotees</span> have participated in Pujas conducted by Sri Mandir Puja Seva.</p>
              <Link to="packages" smooth={true} duration={500} className='puja-participate-button' style={{ textDecoration: 'none', cursor: 'pointer' }}>Select puja package <FaArrowRightLong /></Link>


            </div>

          </div>


          <PujaPackages pujaDetails={pujaDetails} />

        </div>
      ) : (<h1>Loading...!!</h1>)
      }

    </div>
  )
}

export default PujaDetailsPage