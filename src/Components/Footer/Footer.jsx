import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <>
  <footer className="footer">
    <section className="">
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h4 className="text-uppercase fw-bold mb-4"><i className="fas fa-gem me-3" />MotionShift</h4>
            <p>
            To know more about us: <br />
            You can write us or read more.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Social Media</h5>
            <p><a href="#!" className="text-reset link-media">Facebook</a></p>
            <p><a href="#!" className="text-reset link-media">Instagram</a></p>
            <p><a href="#!" className="text-reset link-media">Tiktok</a></p>
            <p><a href="#!" className="text-reset link-media">Youtube</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h5 className="text-uppercase fw-bold mb-4">About us</h5>
            <p><a href="#!" className="text-reset link-media">Objetives</a></p>
            <p><a href="#!" className="text-reset link-media">Suscription</a></p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h5 className="text-uppercase fw-bold mb-4">Contact</h5>
            <p><i className="fas fa-home me-3" />Strøget 23, 1100 København</p>
            <p><i className="fas fa-envelope me-3" />info@motionshift.io</p>
            <p><i className="fas fa-phone me-3" /> + 45 23 23 23 23</p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center p-4 copy">
      © 2023 Copyright <a className="text-reset fw-bold link-media" href="https://www.motionshift.io/"> MotionShift </a>
    </div>
  </footer>
</>

            
        </>
    );
}

export default Footer;