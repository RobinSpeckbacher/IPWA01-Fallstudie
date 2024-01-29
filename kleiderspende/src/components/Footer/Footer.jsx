import React from 'react'
import "./footer.css"

const Footer = () => {  
  return (
  <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
        {/*Linke Seitn*/}
        <div className="flexColStart f-left">
            <img src="/Logo.png" alt="" className='Logo' />
            <span className="secondaryText">
                Our vision is your Video Idee, Only one Button click away
            </span>
        </div>
            {/*right Seitn*/}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Lorem Text</span>

                <div className=" f-menu">
                    <a href='#' className='navbottom'>Services</a>
                    <a href='#' className='navbottom'>Pricing</a>
                    <a href='#' className='navbottom'>Video Generation</a>
                    <a href='#' className='navbottom'>About us</a>
                </div>
            </div>
    </div>
  </section>
  )
}

export default Footer