import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div>
  <footer className="ftco-footer ftco-section">
    <div className="container">
     
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">VS Mart</h2>
            <img className='image' src="http://vsmart.ajspire.com/images/logo1.png" alt="" srcset="" />
            <p>Vishwakarma Super Mart Private Limited, is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-5">
            <h2 className="ftco-heading-2">Menu</h2>
            <ul className="list-unstyled">
              <li> <Link className='text-center' to='/about'> About</Link></li>
             
              <li><a href="#" className="py-2 d-block">Journal</a></li>
              <li><a href="#" className="py-2 d-block">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Help</h2>
            <div className="d-flex">
              <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                <li><a href="#" className="py-2 d-block">Shipping Information</a></li>
                <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy Policy</a></li>
              </ul>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">FAQs</a></li>
                <li><a href="#" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain
                    View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929
                      210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright ©
            All rights reserved | This template
            is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/* loader */}
 
</div>

  )
}

export default Footer