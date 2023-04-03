import React from 'react';

const Footer = () => {
    return (
        <>
            <>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      {/* Left */}
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              MotionShift
            </h6>
            <p>
            To know more about us: <br />
            You can write us or read more.
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Social Media</h6>
            <p>
              <a href="#!" className="text-reset">
                Facebook
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Instagram
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Tiktok
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Youtube
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">About us</h6>
            <p>
              <a href="#!" className="text-reset">
                Objetives
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Suscriptions
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" />Strøget 23, 1100 København
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              info@motionshift.io
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 45 23 23 23 23
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
      © 2023 Copyright <a className="text-reset fw-bold" href="https://www.motionshift.io/"> MotionShift </a>
    </div>
  </footer>
</>

            
        </>
    );
}

export default Footer;