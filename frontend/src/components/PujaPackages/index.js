import React, { useState } from 'react'
import { Link } from 'react-scroll';


import Popup from 'reactjs-popup';
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css'



const PujaPackages = ({ pujaDetails }) => {
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    return (
        <div className='second-nav'>
            <div style={{
                "display": "flex",
                "flexDirection": "row",
                "gap": "100px",
                "alignItems": "center",
                "cursor": "pointer"
            }}>
                <li className='sub-nav-links'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='sub-nav-links'>
                    <Link to="benefits" smooth={true} duration={500}>
                        Benefits
                    </Link>
                </li>
                <li className='sub-nav-links'>
                    <Link to="templeDetails" smooth={true} duration={500}>
                        Temple Details
                    </Link>
                </li>
                <li className='sub-nav-links'>
                    <Link to="packages" smooth={true} duration={500}>
                        Packages
                    </Link>
                </li>
                <li className='sub-nav-links'>
                    Completed Poojas
                </li>
                <li className='sub-nav-links'>
                    Reviews
                </li>
                <li className='sub-nav-links'>
                    FAQs
                </li>
            </div>
            <hr style={{ color: 'black' }} />


            <div className='sections'>
                <section id="about">
                    <h1 className='about-head'>{pujaDetails.heading + " " + pujaDetails.para}</h1>
                    <p className='about-para'>{pujaDetails.description}</p>
                </section>

                <section id="benefits">
                    <h1 className='about-head'>Puja Benefits</h1>
                    <div className='benefits-con'>{pujaDetails.benefits.map(each => (
                        <div className='benefits-items'>
                            <img className='benefits-image' src={each.benefit_image} alt={each.benefit_head} />
                            <div className='benefits-content'>
                                <h3 className='benefits-content-head'>{each.benefit_head}</h3>
                                <p className='benefits-content-para'>{each.benefit_para}</p>
                            </div>
                        </div>
                    ))}</div>
                </section>

                <section id="templeDetails">
                    <h1 className='about-head'>{pujaDetails.temple_details_head}</h1>
                    <div className='temple-con'>
                        <img className='temple-con-image' src={pujaDetails.temple_details_image} alt={pujaDetails.temple_details_head} />
                        <p className='benefits-content-para'>{pujaDetails.temple_details_description}</p>
                    </div>

                </section>
                <section id="packages">
                    <h1 className='about-head'>Select Pooja Package</h1>
                    <div className='packages-con'>{pujaDetails.packages.map(each => (
                        <div className='packages-con-items' key={each._id}>
                            <h1>{each.price}</h1>
                            <p>{each.package_head}</p>
                            <p>{each.package_count}</p>
                            <div>{each.package_details.map((str, index) => (
                                <li className='packages-con-items-con' key={index}>{str}</li>
                            ))}</div>
                            <Popup trigger={<button className=" puja-participate-button button"> PARTICIPATE <FaArrowRightLong /> </button>} modal>
                                <form className='pop-up-con'>
                                    <div className='pop-up-content'>
                                        <p className='pop-up-head1'>Fill your details</p>
                                        <div className='line'><hr /></div>
                                        <p className='pop-up-head2'>Enter Your Whatsapp Mobile Number</p>
                                        <p className='pop-up-para'>Your Puja booking updates like Puja Photos, Videos and other details will be sent on WhatsApp on below number.</p>
                                        <label for="mobilenumber">Your mobile Number</label>
                                        <input id='mobilenumber'
                                            placeholder='+91'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)} />

                                        <p className='pop-up-head2'>Enter Your Name</p>
                                        <label for="yourname">Your Full Name</label>
                                        <input id="yourname"
                                            placeholder='Your Full Name'
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)} />
                                        <div>
                                            <button className='pop-up-next'>
                                                <a href={`/pujaDetails/${pujaDetails.sub_head}/${each.price}`}>Next</a>
                                            </button>
                                        </div>
                                    </div>


                                </form>

                            </Popup>
                        </div>
                    ))}</div>
                </section>
            </div>
        </div>

    )
}

export default PujaPackages