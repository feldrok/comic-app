import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div className='logo-div'>
        <img src="./logo.png" alt="logo" className='footer-logo' />
        <p>Comics</p>
      </div>
      <div>
        <p className='copyright-text'>© 2022 Comics App.</p>
      </div>
      <div>
        <h1>Pages</h1>
        <ul className='footer-links'>
          <li><button>Inicio</button></li>
          <li><button>Comics</button></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer