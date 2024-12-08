import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Contact = () => {
  return (
    <> 
    <div className="container" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon">
      <a  href="https://www.facebook.com/"  target="_blank" className="items"  data-aos="zoom-in" data-aos-delay="20"><FaFacebookSquare  className='icons'  /></a>
      <a  href="mailto:shailendrapratap0506@gmail.com" target= "_black" className="items" data-aos="zoom-in" data-aos-delay="20"><SiGmail  className='icons'  /></a>
      <a href='https://x.com/i/flow/login'target="_blank" className="items"  data-aos="zoom-in" data-aos-delay="20"><FaSquareXTwitter  className='icons' /></a>
      <a  href="https://linkedin.com/in/shailendra-pratap-singh-dev"   target="_blank"   className="items" data-aos="zoom-in" data-aos-delay="20"> <FaLinkedin  className='icons' /></a>
      <a href="https://github.com/shailendrapratapsing" target="_blank" className="items" data-aos="zoom-in" data-aos-delay="20" ><FaGithub className='icons'  />
      </a>
      </div>
    </div>
      
    </>
  )
}

export default Contact
