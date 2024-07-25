import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

import axios from 'axios'
import './index.css'

const PoojaContent1 = () => {
    const [poojaData, setPoojaData] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3300/getallpooja');
                setPoojaData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the async function immediately
    }, []);
    return (
        <div>
            <h1 className='puja-head'>Upcoming Pujas on Sri Mandir.</h1>
            <p className='puja-para'>Book online puja with Sri Mandir in more than 500+ temples across India. Receive video of the puja along with the Prasad and receive blessings from the divine for prosperity and well-being of you and your family</p>
            <div className='pujas-list-con'>
                {poojaData?.map(each => (
                    <div key={each._id} className='pujas-list-items'>
                        <img className='pujas-list-image' src={each.pooja_image} alt={each.sub_head} />
                        <p className='puja-sub-head'>{each.sub_head}</p>
                        <h2>{each.heading}</h2>
                        <p className='puja-sub-para'>{each.para}</p>
                        <div className='puja-details'>
                            <div className='puja-icons'>
                                <AiFillHome />
                                <SlCalender />
                            </div>
                            <ul className='puja-details-con'>
                                {each.details.map((str, index) => (
                                    <li className='puja-details-list-item' key={index}>{str}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{marginTop:'auto'}}>
                        <Link to={`/puja/${each._id}`} style={{textDecoration:'none' }} className='puja-participate-button'>Participate <FaArrowRightLong/></Link> 

                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}


export default PoojaContent1