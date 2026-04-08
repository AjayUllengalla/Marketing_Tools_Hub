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

      
      <style>
        {`
        .footer-section {
          padding: 60px 0;
          margin-top: 60px;
          background: linear-gradient(135deg, #f9fafb, #e0f2fe, #ede9fe);
        }

        
        .glass-footer {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          color: #1e293b;
        }

        .logo {
          color: #1e293b;
          font-weight: 600;
        }

        .footer-text {
          font-size: 14px;
          color: #475569;
        }

       
        .footer-heading {
          color: #4f46e5; 
          margin-bottom: 12px;
          font-weight: 600;
        }

        
        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          text-decoration: none;
          color: #334155; 
          font-size: 14px;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #1d4ed8;
          padding-left: 5px;
        }

       
        .social-icons svg {
          margin-right: 10px;
          font-size: 18px;
          cursor: pointer;
          transition: 0.3s;
          color: #334155;
        }

        .social-icons svg:hover {
          color: #2563eb;
          transform: scale(1.2);
        }

        hr {
          border-color: rgba(0,0,0,0.1);
          margin: 30px 0;
        }

        .copyright {
          font-size: 14px;
          color: #475569;
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