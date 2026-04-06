import { Container, Row, Col } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      style={{
        background: "#111",
        color: "#fff",
        padding: "40px 0",
        marginTop: "50px",
      }}
    >
      <Container>

        <Row>

          
          <Col md={3}>
            <h5> ToolsHub</h5>
            <p style={{ fontSize: "14px", color: "#bbb" }}>
              Your all-in-one platform for marketing tools like hashtags,
              blogs, email templates, and campaign builders.
            </p>
          </Col>

          
          <Col md={3}>
            <h6>Tools</h6>
            <ul className="list-unstyled">
              <li><Link to="/tool/hashtags">Hashtag Generator</Link></li>
              <li><Link to="/tool/blog-title">Blog Title</Link></li>
              <li><Link to="/tool/email-template">Email Template</Link></li>
              <li><Link to="/tool/utm">UTM Builder</Link></li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h6>Company</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </Col>

          
          <Col md={3}>
            <h6>Support</h6>
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