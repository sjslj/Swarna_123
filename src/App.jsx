import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to update scroll position
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    setScrollPosition(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic background color
  const backgroundColor = `rgb(
    ${255 - scrollPosition * 2.55}, 
    ${255 - scrollPosition * 2.55}, 
    ${255 - scrollPosition * 2.55}
  )`;

  return (
    <div className="app" style={{ background: backgroundColor }}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Smooth Transition</div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={800}>
              Services
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={800}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="section">
        <div className="content">
          <h1>Welcome to Smooth Transitions</h1>
          <p>
            Dive into a beautifully designed scrolling experience where the
            background shifts seamlessly as you explore.
          </p>
          <p>
            Scroll down to see our story, services, and what people say about
            us.
          </p>
        </div>
      </section>

      <section id="about" className="section">
        <div className="content">
          <h1>About Us</h1>
          <p>
            We are a team of passionate web developers dedicated to creating
            engaging user experiences. Our goal is to combine aesthetics with
            functionality to create websites that leave a lasting impression.
          </p>
          <p>
            Our expertise includes UI/UX design, front-end development, and
            smooth animation effects. We believe every website should tell a
            story.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="content">
          <h1>Our Services</h1>
          <ul>
            <li>
              <strong>Web Development:</strong> Build responsive and visually
              stunning websites tailored to your needs.
            </li>
            <li>
              <strong>UI/UX Design:</strong> Create intuitive interfaces that
              enhance user satisfaction and engagement.
            </li>
            <li>
              <strong>Custom Animations:</strong> Add smooth transitions and
              effects that bring your website to life.
            </li>
            <li>
              <strong>Consultation:</strong> Get expert advice on improving
              your web presence and strategy.
            </li>
          </ul>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="content">
          <h1>What Our Clients Say</h1>
          <blockquote>
            "Smooth Transitions completely transformed our website. The sleek
            animations and responsive design brought our brand to life!" <br />
            <em>- John Doe, CEO of Bright Ideas</em>
          </blockquote>
          <blockquote>
            "Their attention to detail and creativity is unmatched. They took
            our vague ideas and turned them into a masterpiece."
            <br />
            <em>- Sarah Johnson, Founder of Craftsy</em>
          </blockquote>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="content">
          <h1>Contact Us</h1>
          <p>
            Ready to create something amazing? Let’s work together to bring
            your vision to life.
          </p>
          <p>
            Email: <a href="mailto:info@smoothtransitions.com">info@smoothtransitions.com</a>
          </p>
          <p>Phone: +1-800-123-4567</p>
          <p>
            Follow us on social media:{" "}
            <a href="https://facebook.com">Facebook</a> |{" "}
            <a href="https://twitter.com">Twitter</a> |{" "}
            <a href="https://instagram.com">Instagram</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
