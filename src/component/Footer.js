import React from 'react'

const Footer = () => {
   
  return (
    <>
      <div className='footer'>
        <div className='footer-row'>
            <div className='footer-col'>
                <h2>Quick <span style={{color:"#ff9310"}}>Link</span> </h2>
              <ul>
                <li><i class="fa-light fa-greater-than"></i><a href="">Home</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">About Us</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Our Gallery</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Contact Us</a></li>
              </ul>
            </div>
            <div className='footer-col'>
                <h2>Our <span style={{color:"#ff9310"}}>Services</span>  </h2>
                <ul>
                <li> <i class="fa-light fa-greater-than"></i><a href="">Manual Therapy</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Sports Rehab</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Elderly care</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Exercise Therapy</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Weight Management</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Dry Needling</a></li>
                <li><i class="fa-light fa-greater-than"></i><a href="">Taping Therapy</a></li>
              </ul>
            </div>
            <div className='footer-col footer-col-1'>
                <h2>Location <span style={{color:"#ff9310"}}>Map</span>  </h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7330.31473317533!2d77.347209!3d23.273731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8d39d37fc7189ff!2sMaitretech!5e0!3m2!1sen!2sin!4v1672035316422!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>

      <div className="policy" id="footer-policy">
        <div className="policy-row">
          <div className="policy-col">
            <p>Copyright © Dr. Shefali Bansal</p>
          </div>
          <div className="policy-col">
            <p>
              Design with <i class="fa-sharp fa-solid fa-heart"></i> by{" "}
              <a href="https://maitretech.com/">maitretech.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
