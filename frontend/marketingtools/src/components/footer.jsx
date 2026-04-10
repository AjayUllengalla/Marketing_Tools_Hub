import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container className="glass-footer">

        <Row>

          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="logo">ToolsHub</h5>
            <p className="footer-text">
              Your all-in-one platform for marketing tools like hashtags,
              blogs, email templates, and campaign builders.
            </p>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Tools</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/tool/hashtags">Hashtag Generator</Link></li>
              <li><Link to="/tool/blog-title">Blog Title</Link></li>
              <li><Link to="/tool/email-template">Email Template</Link></li>
              <li><Link to="/tool/utm">UTM Builder</Link></li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled footer-links">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>Help Center</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>

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
          padding: 80px 0;
          margin-top: 80px;
          background: radial-gradient(circle at 30% 30%, #1a1a2e, #0f0f1b);
        }

        .glass-footer {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          padding: 50px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .logo {
          color: #ffffff;
          font-weight: 600;
        }

        .footer-text {
          font-size: 14px;
          color: #aaa;
        }

        .footer-heading {
          color: #6c5ce7;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          text-decoration: none;
          color: #ccc;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
          padding-left: 6px;
        }

        .social-icons svg {
          margin-right: 12px;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #bbb;
        }

        .social-icons svg:hover {
          color: #6c5ce7;
          transform: scale(1.2);
        }

        hr {
          border-color: rgba(255, 255, 255, 0.1);
          margin: 30px 0;
        }

        .copyright {
          font-size: 14px;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .glass-footer {
            padding: 25px;
          }
        }
        `}
      </style>
    </footer>
  );
}