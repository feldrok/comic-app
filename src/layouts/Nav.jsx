import React from 'react'
import '../styles/Nav.css'
import Button from '../components/Button'

function Nav() {
  return (
    <nav>
      <div className='nav-item'>
        <img className='nav-logo' src="./logo.png" alt="logo" />
      </div>
      <div className='nav-item'>
        <h1>Comics</h1>
      </div>
      <div className='nav-item'>
        <Button buttonType='login-btn' text='Iniciar Sesión' />
      </div>
    </nav>
  )
}

export default Nav