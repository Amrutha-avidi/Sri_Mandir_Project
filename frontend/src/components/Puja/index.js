// Puja.js
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PoojaContent1 from '../PoojaContent1';

import './index.css'


const Puja = () => {
    const [isVisibile, setIsVisibile] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);
    const interval = 5000


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [interval]);

    const totalSlides = 3; // Update with the total number of slides
    const handleChange = (index) => {
        setCurrentSlide(index);
    };
    const handleVisible = () => setIsVisibile(true)
    return (

        <div className='pooja-con'>
            {isVisibile ? (
                <div className='carousel-con'>
                    <h1 className='puja-head'>Perform your Puja as per Vedic rituals at Famous Hindu Temples in India with Sri Mandir</h1>
                    <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={true} onChange={handleChange} selectedItem={currentSlide}>
                        <div>
                            <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_review.c0435a90.webp&w=3840&q=75" alt=" 1" />
                        </div>
                        <div>
                            <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_devotees.0a33e17d.webp&w=3840&q=75" alt=" 2" />
                        </div>
                        <div>
                            <img src="https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_desktop_banner_puja.f8a35e8a.webp&w=3840&q=75" alt=" 3" />
                        </div>
                        {/* Add more images and legends as needed */}
                    </Carousel>
                    <PoojaContent1 />
                </div>
            ) : (
                <div className='book-puja-con'>
                    <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fempty_stack.d683b244.svg&w=128&q=75' alt='no bookings' />
                    <h2>No Puja has been booked yet</h2>
                    <p className='book-puja-para'>Book your Puja online at Popular Temples of India. Panditji will take sankalp with your name and gotra during the Puja</p>
                    <button className='book-puja-button' onClick={handleVisible}>Book Puja now</button>
                </div>
            )}
        </div>



    );
};

export default Puja;
