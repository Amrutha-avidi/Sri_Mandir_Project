// Home.js
import React from 'react';
import './index.css'
import HomeContent1 from '../HomeContent1';
import HomeContent2 from '../HomeContent2';
const Home = () => {
    return (
        <div className='sub-home-con'>
            <HomeContent1 />
            <HomeContent2/>
        </div>

    );
};

export default Home;
