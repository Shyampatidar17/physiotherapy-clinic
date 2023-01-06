import React, {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [show, setShow] = useState(false);
  const[down,setDown] = useState(false);
  const[downt,setDownt] = useState(false);
  const[downth,setDownth] = useState(false);

  return (
    <>
      <div className="topnav">
        <div className="topnav-row">
          <div className="topnav-col">
            <p>
              Book Online <i style={{color:"#f49322"}}class="fas fa-long-arrow-alt-right globalcolor"></i> You can request appointment in 24 hours
            </p>
          </div>
          <div className="topnav-col topnav-col-1">
            <div className="topnav-contact">
              <i class="fa-solid fa-envelope"></i>
              <span>fisioheal10@gmail.com</span>
            </div>
            <div className="topnav-contact">
              <i class="fa-solid fa-phone-volume"></i>
              <span>011 42233988</span>
            </div>
            <div className="topnav-contact">
              <i class="fa-solid fa-phone-volume"></i>
              <span>+91 9873881267</span>
            </div>
            <div className="topnav-icon">
              <a href="">
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-square-twitter"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


       {/* ---------------------------Menu-bar---------------------------- */}

       <div className="menu-bar pc-menubar">
        <div className="menubar-row">
          <div className="menubar-col-1">
            <img src="./img/flogo.png" alt="" />
          </div>
         
          <div className="menubar-col-1">
            <ul>
              <li><Link to="/">Home</Link></li>

              <li><a href="#">About Us </a>
             
            {/* {
              down?<div className="drop-link" onClick={()=>setDown(!down)}>
              <li><Link to="/aboutdoctor"> Dr. Shubham Jaiswal</Link></li>
             <li><a href="#">Gallery</a></li>
              </div>:""
            } */}

              </li>
              <li><a href="#">Services<button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i>:<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li><Link to="/nervoussystem">Head / Brain & Nervous System</Link></li>
               <li><Link to="/respiration">Respiratory System </Link></li>
               <li><Link to="/urinary">Urinary system</Link></li>
               <li><Link to="/heart">Heart & Blood Circulation </Link></li>
               <li><Link to="/liver">Liver & Gallbladder</Link></li>
               <li><Link to="/eyesight">Eyes/ Sight</Link></li>
               <li><Link to="/mouth">Mouth, Tongue & Throat</Link></li>
              </div>:""
            }
              </li>

              {/* <li><Link to="/treatment">Treatments<button onClick={()=>setDownth(!downth)} className="drop-icon">{downth?<i class=" drop-icon fa-solid fa-minus"></i> :<i class=" drop-icon fa-solid fa-plus"></i>}</button></Link>
              {
              downth?<div className="drop-link" onClick={()=>setDownth(!downth)}>
              <li><a to="/rootcanal">Root Canal Treatment</a></li>
               <li><a href="#">Crown & Bridges</a></li>
               <li><a href="#">Dentures</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Wisdom Teeth</a></li>
               <li><a href="#">Dental Implant</a></li>
               <li><a href="#">Smile Makeover</a></li>
               <li><a href="#">Braces & Aligners</a></li>
               <li><a href="#">Kids Dentistry</a></li>
              </div>:""
            }
              </li> */}

              <li><Link to="/treatment">Our Gallery</Link></li>
              <li><Link to="/gallery">Contact Us</Link></li>
              <li  className="appointment" ><Link to="/contactus">Appointment</Link></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="menu-bar mobile-menubar">
        <div className="menubar-row">
        <div className="menubar-col-1">
            <img src="./img/flogo.png" alt="" />
          </div>
         
          <div className={show?"menubar-mobile":"menubar-col-1"}>
            <ul>
            <button className="close-menu" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-xmark"></i>:null}</button>
              <li  onClick={()=>setShow(!show)}><Link to="/">Home</Link></li>
              <li><a href="#">About Us</a>
             
            {/* {
              down?<div className="drop-link" onClick={()=>setDown(!down)}>
              <li  onClick={()=>setShow(!show)}><Link to="/aboutdoctor"> Dr. Shubham Jaiswal</Link></li>
              </div>:""
            } */}

              </li>
              <li><a href="#">Services<button onClick={()=>setDownt(!downt)
              } className="drop-icon">{downt?<i class=" drop-icon fa-solid fa-minus"></i>:<i class=" drop-icon fa-solid fa-plus"></i>}</button></a>
              {
              downt?<div className="drop-link" onClick={()=>setDownt(!downt)}>
              <li  onClick={()=>setShow(!show)}><a href="/nervoussystem">Head / Brain & Nervous System </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/respiration">Respiratory System </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/urinary">Urinary system</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/heart">Heart & Blood Circulation </a></li>
               <li  onClick={()=>setShow(!show)}><a to="/liver">Liver & Gallbladder</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/eyesight">Eyes/ Sight</a></li>
               <li  onClick={()=>setShow(!show)}><a to="/mouth">Mouth, Tongue & Throat</a></li>
              </div>:""
            }
              </li>


              <li  onClick={()=>setShow(!show)}><Link to="/treatment">Our Gallery</Link></li>
              <li  onClick={()=>setShow(!show)}><Link to="/gallery">Contact Us</Link></li>
              <li className="appointment"  onClick={()=>setShow(!show)}><Link to="/contactus">Appointment</Link></li>
            </ul>
          </div>
          <button className="menu-icon" onClick={()=>setShow(!show)}>{show?<i class="fa-solid fa-bars"></i>:<i class="fa-solid fa-bars"></i>}</button>
        </div>
      </div>
     
    </>
  );
};

export default Header;
