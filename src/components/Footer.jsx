import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid mb-5">
        <div className="row ml-4">
          <div className="col">
            <div>
              <i className="fab mr-3 fa-2x fa-facebook-square bg-transparent text-dark" />
            </div>
            <div>
              <i className="fab mr-3 fa-2x fa-instagram-square bg-transparent text-dark" />
            </div>
            <div>
              <i className="fab mr-3 fa-2x fa-youtube bg-transparent text-dark" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <ul>
              <div className="text-dark">
                <li>Audio and Subtitles</li>
              </div>
              <div className="text-dark">
                <li>Media Centre</li>
              </div>
              <div className="text-dark">
                <li>Privacy</li>
              </div>
              <div className="text-dark">
                <li>Contact Us</li>
              </div>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <ul>
              <div className="text-dark">
                <li>Audio Description</li>
              </div>
              <div className="text-dark">
                <li>Investor Relations</li>
              </div>
              <div className="text-dark">
                <li>Legal Notices</li>
              </div>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <ul>
              <div className="text-dark">
                <li>Help Centre</li>
              </div>
              <div className="text-dark">
                <li>Jobs</li>
              </div>
              <div className="text-dark">
                <li>Cookie Preferences</li>
              </div>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <ul>
              <div className="text-dark">
                <li>Gift Cards</li>
              </div>
              <div className="text-dark">
                <li>Terms of Use</li>
              </div>
              <div className="text-dark">
                <li>Corporate Information</li>
              </div>
            </ul>
          </div>
          <div className="col">
            <button className="service-code">Service Code</button>
            <br />
            <h6>
              © 1997-2021 Netflix, Inc. {"{"}i-08f0134f19a7965f3{"}"}
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
