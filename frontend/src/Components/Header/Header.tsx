import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// import { AppContext } from '../../context/AppContext';

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='login-form'>
           <div className='header-link-div' onClick={() => navigate('/login')}>Login</div>
           <div className='header-link-div' onClick={() => navigate('/register')}>Register</div>
        </div>
    )
}
export default Header;