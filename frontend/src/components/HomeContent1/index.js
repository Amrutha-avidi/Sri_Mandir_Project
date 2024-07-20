import React from 'react'

import './index.css'

const HomeContent1 = () => {
    

    return (
        <div className='home-content-1'>
            <div className='sub-home-content-1'>
                <p className='sub-head'>WORLD’S LARGEST APP FOR HINDU DEVOTEES</p>
                <h1>Pray daily with <span>Sri Mandir.</span><br />
                    One App for all your <br />
                    devotional needs.</h1>
                <div className='store-con'>
                    <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_playstore_logo.bb4d1aa2.svg&w=256&q=75' alt='play-store' />
                    <img src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_appstore_logo.cab7778b.svg&w=256&q=75' alt='app-store' />
                </div>
            </div>
            <img className='main-image' src='https://www.srimandir.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg_hero_artwork_en.ecfc0911.webp&w=1080&q=75' alt='home-image' />
        </div >
    )
}


export default HomeContent1