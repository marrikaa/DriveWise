import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import './SignIn.css'

const SignIn = () => {
    const navigate = useNavigate()

    return (
            <div className='Sign-in'> 
                <LoginForm />
                <h1 className="font-style">Don't you have account?</h1>
                <div className='create-account-button' 
                    onClick={() => navigate('/register')}>Sign up</div>   
            </div>  
    )
}
export default SignIn;