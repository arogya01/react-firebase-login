import React from 'react'
import google from '../../Assets/google-icon.svg';
import './GoogleBtn.css';

export const GoogleBtn = () => {
    return (
        
             <button type='submit' className="google-signin-wrapper">
                    <img src={google} alt="google" className="google-icon" />
                    <span>Sign Up Using Google</span>    
            </button>
    )
}
