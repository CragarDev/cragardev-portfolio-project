import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Prevent misleading success messages in local previews.
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      setError("Contact form submissions will be available after deployment to Netlify.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(new FormData(e.currentTarget)).toString()
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setIsFormSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);

      setError("Sorry, your message could not be sent. Please try again or contact me by email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">
        <span>Have An Idea? </span> Let's Make It Happen!
      </h2>

      <p className="app__footer-subheading">Apps, automation, animation, and creative solutions — let's bring your vision to life.</p>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.celphone} alt="mobile" />
          <a href="tel:+1 (214) 957-0713" className="p-text_dark">
            cel: +1 (214) 957-0713
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.email01} alt="email" />
          <a href="mailto:cragardev@gmail.com" className="p-text_dark">
            email: cragardev@gmail.com
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" name="portfolio-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="portfolio-contact" />

          <input
            type="text"
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px"
            }}
          />

          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" aria-label="Your Name" name="name" value={formData.name} onChange={handleChangeInput} required />
          </div>

          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" aria-label="Your Email" name="email" value={formData.email} onChange={handleChangeInput} required />
          </div>

          <div>
            <textarea className="p-text" name="message" value={formData.message} onChange={handleChangeInput} placeholder="Your Message" aria-label="Your Message" required />
          </div>

          {error && (
            <p className="p-text" role="alert" style={{ color: "var(--darkorange-color)" }}>
              {error}
            </p>
          )}

          <button className="p-text_dark" type="submit" disabled={loading}>
            {loading ? "SENDING..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="head-text" role="status">
          Thank you for getting in touch!
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__footerbg");
