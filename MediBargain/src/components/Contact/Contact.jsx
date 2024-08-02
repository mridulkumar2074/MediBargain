import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.jpg'
import mail from '../../assets/mail.jpg'
import message from '../../assets/message.jpg'
import location from '../../assets/location.jpg'

const Contact = () => {
  return (
    <div className='contact' id='002'>
        <div className='contact-col'>
           <h3>Send a message <img src={message} alt="" /></h3> 
           <p>Your feedback, questions, and suggestions are important.
            Feel free to reach out through contact form or find our contact information below:</p>
            <ul>
                <li><img src={mail} alt="" />Contact@MediBargain.com</li>
                <li><img src={contact} alt="" />+91 9876543210</li>
                <li><img src={location} alt="" />Jaypee Institute of Information Technology<br/>Noida 201309, Uttar Pradesh, India</li>

            </ul>
        </div>
    </div>
  )
}

export default Contact
