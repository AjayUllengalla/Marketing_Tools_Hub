import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="glass-footer">

        <Row>

          {/* BRAND */}
          <Col md={3} className="mb-4">
            <h5 className="logo text-warning">ToolsHub</h5>
            <p className="footer-text">
              Your all-in-one platform for marketing tools like hashtags,
              blogs, email templates, and campaign builders.
            </p>
          </Col>

          {/* TOOLS  */}
          <Col md={3} className="mb-4">
            <h6 className="footer-heading">Tools</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/tool/hashtags">Hashtag Generator</Link></li>
              <li><Link to="/tool/blog-title">Blog Title</Link></li>
              <li><Link to="/tool/email-template">Email Template</Link></li>
              <li><Link to="/tool/utm">UTM Builder</Link></li>
            </ul>
          </Col>

          {/* COMPANY (SCROLL NAV ADDED) */}
          <Col md={3} className="mb-4">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled footer-links">
              <li onClick={() => scrollTo("about-premium")}>About Us</li>
              <li onClick={() => scrollTo("tools-section")}>Tools Overview</li>
              <li onClick={() => scrollTo("testimonial-section")}>Testimonials</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          {/* CONTACT (UPGRADED) */}
          <Col md={3} className="mb-4">
            <h6 className="footer-heading">Contact Us</h6>

            <div className="footer-contact">
              <p><FaPhoneAlt /> +91 98765 43210</p>
              <p><FaEnvelope /> support@toolshub.com</p>
              <p><FaMapMarkerAlt /> India</p>
            </div>

            <div className="social-icons mt-3">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </Col>

        </Row>

        <hr />

        <p className="copyright text-center">
          © 2026 ToolsHub. All rights reserved.
        </p>

      </Container>

      {/* UPDATED PREMIUM CSS */}
      <style>
        {`
        .footer-section {
          padding: 70px 0;
          margin-top: 60px;
          background: linear-gradient( 135deg, #f5f3ff, #e0e7ff, #f0f9ff );
        }

        .glass-footer {
          background: linear-gradient( 135deg, #f0f4ff 0%, #e0ecff 50%, #f8fbff 100% );
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #333;
        }

        .logo {
          font-weight: 700;
          color: #222;
        }

        .footer-text {
          font-size: 14px;
          color: #666;
        }

        .footer-heading {
          color: #4f46e5;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .footer-links li {
          margin-bottom: 10px;
          cursor: pointer;
          color: #555;
          transition: 0.3s;
        }

        .footer-links li:hover {
          color: #4f46e5;
          transform: translateX(5px);
        }

        .footer-links a {
          text-decoration: none;
          color: inherit;
        }

        .footer-contact p {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #555;
        }

        .social-icons svg {
          margin-right: 12px;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
          color: #555;
        }

        .social-icons svg:hover {
          color: #4f46e5;
          transform: scale(1.2);
        }

        hr {
          border-color: rgba(0, 0, 0, 0.08);
        }

        .copyright {
          font-size: 13px;
          color: #777;
        }
        `}
      </style>
    </motion.footer>
  );
}