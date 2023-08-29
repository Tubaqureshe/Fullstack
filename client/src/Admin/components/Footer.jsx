import React from 'react';
import { IoLogoWhatsapp } from  'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
   <>
   <style>
    {`
     .footer {
      background-color:black;
      padding: 20px 0;
    }
    
    .footer .container {
      max-width: 960px;
      margin: 0 auto;
    }
    
    .footer h3 {
      font-size: 20px;
      margin-bottom: 10px;
      color: rgb(233, 222, 222); 
    }
    
    .footer p {
      margin-bottom: 5px;
      color:rgb(233, 222, 222); 
    }
    
    .social-list {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 10px;
      color: rgb(233, 222, 222);
    }
    
    .social-list li {
      display: inline-block;
    }
    
    .social-list li a {
      color: #000;
      font-size: 20px;
    }
    `}
   </style>
    <footer className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae convallis velit. Suspendisse potenti. Proin fermentum nibh vitae nibh tincidunt dapibus.
            </p>
          </div>
          <div className="col-md-3">
            <h3>Contact</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 123 456 7890</p>
          </div>
          <div className="col-md-3">
            <h3>Follow Us</h3>
            <ul className="social-list">
              <li><IoLogoWhatsapp/></li>
              <li><FaFacebook /></li>
              <li><FaTwitter /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
   </>
  );
};

export default Footer;

