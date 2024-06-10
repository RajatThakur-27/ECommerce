import React, {useState} from "react";
import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        setEmail("You just subscribed to us");
      }

    return <div className="newsletter-section">
        <div className="newsletter-content">
            <div className="small-text">Newsletter</div>
            <span className="big-text">
                Sign up for latest updates and offers
            </span>
            <form className="form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Subscribe
              </button>
            </form>
            <div className="text">
                Will be used according to our privacy policy
            </div>
            <div className="social-icons">
                <div className="icon">
                <a href="https://www.facebook.com/sachin.samkkc.7?mibextid=ZbWKwL"><FaFacebook size={14} /></a>
                </div>
                <div className="icon">
                    <a href="https://x.com/rajatthakur_27?t=kgBS3pEopM5fHeXMp4IOMw&s=09"><FaTwitter size={14} /></a>
                </div>
                <div className="icon">
                    <a href="https://www.instagram.com/rajat_thakur_03?igsh=MTdqaDcyZjJ5dHFocA=="><FaInstagram size={14} /></a>
                </div>
                <div className="icon">
                    <a href="https://www.linkedin.com/in/rajat-thakur-64315724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={14} /></a>
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
