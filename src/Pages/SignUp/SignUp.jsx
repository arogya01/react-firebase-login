import React from 'react';
import './signup.css';
import arrow from '../../Assets/Arrow.svg';
import { GoogleBtn } from '../../Components/GoogleBtn/GoogleBtn';

const SignUp = () => {
    return (
        <section className="signup-wrapper">
            <h2 className="title">
                Sign Up
            </h2>
            <div className="inputItem">
            <label htmlFor="input-email">Enter Your Email</label>
            <input type='email' name='email' class='input-text' id='input-email' placeholder='Enter Your Email' />
            </div>
            <div className="inputItem">
            <label htmlFor="input-pass">Enter Password</label>
            <input class='input-text' type="password" id='input-pass' placeholder='Enter Your Password' />
            </div>
            <div className="inputItem">
            <label htmlFor="input-re-pass">Re-Enter Your Password</label>
            <input class='input-text' type="password" id='input-re-pass' placeholder='Enter Your Password' />
            </div>
            <div className="checkbox-wrapper">
            <input type="checkbox" id='input-checkbox' />
            <label htmlFor="input-checkbox" >Agree to the terms & Services </label>
            </div>
            <button type='submit' className="submit-btn-wrapper">
                    <span>Sign Up</span>
                    <img src={arrow} alt='arrow' className='submit-icon' />
            </button>
            <div className="or-line">
                <span className='or'>OR</span>
            </div>
           <GoogleBtn/>
        </section>
    )
}

export default SignUp
