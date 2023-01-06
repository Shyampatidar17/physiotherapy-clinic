import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="./img/slide1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./img/slide2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./img/slide3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div className="progresh">
        <div className="progresh-row">
          <div className="progresh-col">
            <img src="./img/icon1.png" alt="" />
            <p>
              Credible physiotherapy treatment at the comfort and convenience of
              your home
            </p>
          </div>
          <div className="progresh-col">
            <img src="./img/icon2.png" alt="" />
            <p>
              Competent healthcare professionals use high-end imported
              physiotherapy modalities
            </p>
          </div>
          <div className="progresh-col">
            <img src="./img/icon3.png" alt="" />
            <p>
              Team of highly trained specialists ensure clinical quality and
              outcomes at its best
            </p>
          </div>
          <div className="progresh-col progresh-col-1">
            <img src="./img/icon4.png" alt="" />
            <p>
              Treatment progress shared electronically with electronic home
              visit records
            </p>
            <div className="wsixty"></div>
          </div>
        </div>
      </div>

      {/*------------------------------------------------------------------ */}

      <div className="welcome">
        <div className="wel-row">
          <div className="wel-col">
            <img src="./img/doctor.jpg" />
          </div>
          <div className="wel-col">
            <h2>
              About <span style={{ color: "#ff9310" }}>Fisio Heal</span>
            </h2>
            <p>
              Dr. Shefali Bansal has an experience of 15 years in the field of
              physiotherapy specialized in spine care. She has dealt with PIVD
              cases, spondylolisthesis, ankylosing spondylitis, etc. also dealt
              with ortho and neuro conditions, soft tissue injury, sports injury
              prevention and treatment, obesity management, and diet
              consultation.
            </p>
            <p>
              Fisioheal Clinic is the best physiotherapist in Delhi. We try to
              print in our sessions the utmost professionalism and possible
              humanely. We are fortunate to enjoy our work and try to solve your
              problems in the most effective way. If you have any pain or
              discomfort, do not hesitate to ask if we can help. We offer
              complete physiotherapy solutions.
            </p>

            <Link to="/aboutdoctor">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}

      <div className="choosus">
        <h2>
          Why Choose <span style={{ color: "#ff9301" }}> us?</span>
        </h2>
        <div className="choosus-row">
          <div className="choosus-col">
            <i class="fa-solid fa-user-doctor"></i>
            <p>Expert Physiotherapist</p>
          </div>
          <div className="choosus-col">
            <i class="fa-solid fa-hand-holding-heart"></i>
            <p>Personalized Care</p>
          </div>
          <div className="choosus-col">
            <i class="fa-sharp fa-solid fa-dollar-sign"></i>
            <p>Convenience & Cost Effectiveness</p>
          </div>
          <div className="choosus-col">
            <i class="fa-regular fa-clock"></i>
            <p>Faster Healing Process</p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}

      <div className="ourservices">
        <h2>
          Our <span style={{ color: "#ff9301" }}>Services</span>
        </h2>
        <div className="service-row">
          <div className="service-col">
            <img src="./img/s1.jpg" alt="" />
            <p>Advance Physiotherapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s2.jpg" alt="" />
            <p>Home Physiotherapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s3.jpg" alt="" />
            <p>Neuro Physiotherapy</p>
          </div>
          <div className="service-col service-col-1">
            <img src="./img/s4.jpg" alt="" />
            <p>Sports Physiotherapy</p>
          </div>
        </div>
        <div className="service-row service-row-1">
          <div className="service-col">
            <img src="./img/s5.jpg" alt="" />
            <p>Gynae Physiotherapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s6.jpg" alt="" />
            <p>Orthopedics Physiotherapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s7.jpg" alt="" />
            <p>Stress Management</p>
          </div>
          <div className="service-col service-col-1">
            <img src="./img/s8.jpg" alt="" />
            <p>Weight Management & Diet</p>
          </div>
        </div>
        <h2>
          Specialized <span style={{ color: "#ff9301" }}>Techniques</span>
        </h2>
        <div className="service-row">
          <div className="service-col">
            <img src="./img/s9.jpg" alt="" />
            <p>Manual Therapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s10.jpg" alt="" />
            <p>Dry Needling Therapy</p>
          </div>
          <div className="service-col">
            <img src="./img/s11.jpg" alt="" />
            <p>Cupping Therapy</p>
          </div>
          <div className="service-col service-col-1">
            <img src="./img/s12.jpg" alt="" />
            <p>Exercise Therapy</p>
          </div>
        </div>
        <div className="service-row service-row-1">
          <div className="service-col ">
            <img src="./img/s13.jpg" alt="" />
            <p>Electro Therapy With Advance Machines</p>
          </div>
          <div className="service-col">
            <img src="./img/s14.jpg" alt="" />
            <p>Cranio Sacral therapy For Stress Management</p>
          </div>
          <div className="service-col">
            <img src="./img/s15.jpg" alt="" />
            <p>Taping</p>
          </div>
          {/* <div className="service-col service-col-1">
            <img src="./img/s8.jpg" alt="" />
            <p>Weight Management & Diet</p>
          </div> */}
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      <div className="whatisphsio">
        <div className="phsio-row">
          <div className="phsio-col">
            <h2>
              What is
              <span style={{ color: "#ff9310" }}>Physiotherapy?</span>
            </h2>
            <p>
              Physiotherapy is a profession of health sciences, characterized by
              seeking the appropriate development of the functions that produce
              the body’s systems, where his good or malfunction, affects the
              kinetics or human body movement.
            </p>
            <p>
              It intervenes when human beings have lost or are at risk of losing
              or altering temporarily or permanently proper movement and thereby
              form the physical functions by using scientifically proven
              techniques. The professional in this area receives the title of
              Doctor or Physiotherapist.
            </p>
            <h3>Recover Your Well-Being!</h3>
            <p>
              Our Physiotherapy treatment sessions are exclusively manual
              therapy, carried out by our qualified physiotherapist. The
              approximate duration of each session is 45 minutes, to provide
              quality treatment and most timely manner possible.
            </p>
          </div>
          <div className="phsio-col">
            <img src="./img/whatphsio.jpg" />
          </div>
        </div>
      </div>

      {/* --------------Contact-us--------------------- */}

      <div className="contact">
        <div className="contact-row">
          <div className="contact-col contact-col-1">
            <h1>Enquiry Form</h1>
            <form action="#" method="POST">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    name="UserName"
                    class="form-control"
                    placeholder="Your Name*"
                    aria-label="Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="number"
                    name="Number"
                    class="form-control"
                    placeholder="Your Phone"
                    aria-label="Your Phone"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <input
                    type="email"
                    name="Email"
                    class="form-control"
                    placeholder="Your Email*"
                    aria-label="Your Email"
                    autoComplete="off"
                    // value={gmail}
                    // onChange={(e)=>setGmail(e.target.value)}
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    name="Subject"
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  name="Message"
                  class="form-control"
                  placeholder="Message"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>
              <div className="contact-recaptch"></div>
              <div className="send-msg">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>

          <div className="contact-col contact-col-2">
            <h1>Our Clinic Inforamtion</h1>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-location-dot"></i>
              <div className="contact-cont">
                <h5>Location</h5>
                <p>
                  # Shri Siddhi Avenue, Bistan Rd, Khargone, Madhya Pradesh
                  451001
                </p>
              </div>
            </div>
            <div className="contact-col-l con-bor">
              <i class="fa-solid fa-phone-volume"></i>
              <div>
                <h5>Call Us</h5>
                <p>
                  <a href="tel: 6261157702">62611-57702 , </a> 
                   <a href="tel: 9977565674"> 99775-65674</a>
                </p>
              </div>
            </div>
            <div className="contact-col-l">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>
                  <a href="mailto:shubhamjaiswal1707@gmail.com">
                    shubhamjaiswal1707@gmail.com
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
