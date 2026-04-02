import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Marketing Tools Hub
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}