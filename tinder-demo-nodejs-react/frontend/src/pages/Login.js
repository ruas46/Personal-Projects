import React from 'react'
import './Login.css'

import logo from '../assets/logo.svg'

export default function Login() {
    return (
        <div className='login-container'>
            <form>
                <img src={logo} alt='Tindev' />
                <input placeholder='Insert you Github user' />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}
