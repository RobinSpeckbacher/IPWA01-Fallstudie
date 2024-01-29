import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="flexContainer header flexAlignment">
     <div className='Logo flexContainer'>
     <img src="/Logo.png" alt="Logo" className='logoImg' />
      <div className='headerText'>
        <h1>Kleiderspenden</h1>
        <p>gutes tun und Spenden</p>
      </div>
     </div>
     <div className='Navbar'>
    <h1 className='text'>We are Clothing Donation</h1>
        <ul className="flexContainer nav">
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Spenden</a>
          </li>
          <li>
            <a href='#'>Kontakt</a>
          </li>
        </ul>
     </div>
    </div>
  )
}

export default Header