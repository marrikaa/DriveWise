import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getExternalUser } from '../../Client/User';
import RegistrationForm from '../RegistartionForm/RegistrationForm';
import './LoginForm.css'


// import { AppContext } from '../../context/AppContext';

const LoginForm = () => {
    // const { setUser } = useContext(AppContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const formSubmitted = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { emailInput, passwordInput } = event.currentTarget;
        let currentUser = await getExternalUser(emailInput.value, passwordInput.value);
        if (currentUser!.username) {
            // setUser(currentUser);
            navigate(-1);
        }
        else {
            setError(currentUser!.message.split('Error ')[1].replaceAll(/[()]/g, ""));
        }
    }
    return (
        <div className='login-form'>
            <form onSubmit={formSubmitted} className='form-input' method='get'>
                <h1 className='font-style'>Log In</h1>
                <input name="emailInput" placeholder='Your email adress' type="email" className='font-style' />
                <input name="passwordInput" placeholder='Your password' type="password" className='font-style' />
                <button className='create-account-button' type='submit'>Log In</button>
            </form>
            {error && <label style={{ marginTop: '1em' }}>{error}</label>}
        </div>
    )
}

export default LoginForm;
