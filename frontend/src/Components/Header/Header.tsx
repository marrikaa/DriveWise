import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import './Header.css'

// import { AppContext } from '../../context/AppContext';

const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='header'>
            <div className='left-header'>
                <div className='logo' onClick={() => navigate('/')}>DW</div>
                <div className='left-header-item' onClick={() => navigate('/')}>Home</div>
                <div className='left-header-item' onClick={() => navigate('/signIn')}>Cars</div>
            </div>
            <div className='header-item' onClick={() => navigate('/signIn')}>Sign In</div>
        </div>
    )
}
export default Header;