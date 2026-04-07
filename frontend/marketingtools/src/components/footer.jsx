import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0b0b0f",
        color: "#fff",
        padding: "40px 0 20px",
        marginTop: "50px",
      }}
    >
      <Container>

        <Row>

          
          <Col md={3} className="mb-4 mb-md-0">
            <h5 className="mb-3">ToolsHub</h5>
            <p style={{ fontSize: "14px", color: "#bbb" }}>
              Your all-in-one platform for marketing tools like hashtags,
              blogs, email templates, and campaign builders.
            </p>
          </Col>

          
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Tools</h6>
            <ul className="list-unstyled">
              <li><Link to="/tool/hashtags">Hashtag Generator</Link></li>
              <li><Link to="/tool/blog-title">Blog Title</Link></li>
              <li><Link to="/tool/email-template">Email Template</Link></li>
              <li><Link to="/tool/utm">UTM Builder</Link></li>
            </ul>
          </Col>

          
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </Col>

          
          <Col md={3} className="mb-4 mb-md-0">
            <h6 className="footer-heading">Support</h6>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </Col>

        </Row>

        
        <hr style={{ borderColor: "#444" }} />

        <Row className="align-items-center">
          <Col md={6}>
            <p style={{ fontSize: "14px", color: "#bbb" }}>
              © 2026 ToolsHub. All rights reserved.
            </p>
          </Col>

          {/* <Col md={6} className="text-md-end">
            <FaFacebook style={{ margin: "0 10px", cursor: "pointer" }} />
            <FaTwitter style={{ margin: "0 10px", cursor: "pointer" }} />
            <FaInstagram style={{ margin: "0 10px", cursor: "pointer" }} />
            <FaLinkedin style={{ margin: "0 10px", cursor: "pointer" }} />
          </Col> */}
        </Row>

      </Container>
    </footer>
  );
}