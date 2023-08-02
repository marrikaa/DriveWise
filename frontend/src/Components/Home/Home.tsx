import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getExternalUser } from '../../Client/User'; 
import './Home.css' 

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='home'>  
           <div className='font-style welcome-text'>Discover the freedom of exploring the world at your own pace.
            <br />Get ready to embark on a remarkable journey, 
            <br />where every destination is within your reach. 
            <br />Travel the world with us and let your explorations begin.
            <div className='reservation-button' onClick={() => navigate('/search')} >Book your ride</div>
            <div className='reservation-button' onClick={() => navigate('/signIn')} >Sign in</div>
            </div>
        </div>
    )
}

export default Home;
