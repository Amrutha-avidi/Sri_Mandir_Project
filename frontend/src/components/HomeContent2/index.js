import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './index.css'

const HomeContent2 = () => {
    const [exploreData, setExploreData] = useState(null)
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3300/getallexplore');
          setExploreData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); // Call the async function immediately
    }, []);

  return (
    <div className='home-content2'>
        <h1 className='home-content2-head'>Explore Sri Mandir</h1>
        <div className='home-content2-list-con'>{exploreData?.map(each=>(
            <div className='home-content2-item-con' key={each._id}>
                <img src={each.image} alt={each.description} />
                <p>{each.description}</p>
            </div>
        ))}</div>
    </div>
  )
}

export default HomeContent2