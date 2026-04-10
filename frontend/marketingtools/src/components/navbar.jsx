import { Navbar, Nav, Container, NavDropdown, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tools from "../tools/toolconfig";
import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

export default function AppNavbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const allTools = tools.flatMap(cat => cat.items);

  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  // NEW: scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`sticky-top py-2 navbar-premium ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <span className="d-flex align-items-center">
            <img
              src={logo}
              height={36}
              width={36}
              style={{ borderRadius: "999px" }}
              alt="ToolsHub"
            />
            <span className="ms-2 fw-semibold brand-name d-none d-md-inline">
              Marketing Tools Hub
            </span>
          </span>
        </Navbar.Brand>

        <Nav className="me-auto align-items-lg-center">
          <Nav.Link
            onClick={() => navigate("/")}
            className="nav-link-accent"
          >
            Home
          </Nav.Link>
        </Nav>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* DROPDOWNS */}
          <Nav className="me-auto">
            {tools.map((category, i) => (
              <NavDropdown
                key={category.category}
                title={category.category}
                show={openDropdown === i}
                onMouseEnter={() => setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
                className="text-capitalize nav-dropdown-premium"
              >
                {category.items.map((tool, idx) => (
                  <NavDropdown.Item
                    key={tool.path || idx}
                    onClick={() => navigate(`/tool/${tool.path}`)}
                    className="dropdown-item-premium"
                  >
                    {tool.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}
          </Nav>

          {/* SEARCH + CTA */}
          <div className="d-flex align-items-center gap-3 ms-lg-3">
            <Form className="d-flex position-relative navbar-search">
              <Form.Control
                type="search"
                placeholder="Search tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-pill ps-4 search-input"
              />

              {search && (
                <div className="search-dropdown shadow-sm">
                  {filteredTools.length > 0 ? (
                    filteredTools.map((tool, i) => (
                      <div
                        key={tool.path || i}
                        className="search-result-item"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          navigate(`/tool/${tool.path}`);
                          setSearch("");
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            navigate(`/tool/${tool.path}`);
                            setSearch("");
                          }
                        }}
                      >
                        {tool.name}
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: "8px" }}>
                      No tools found
                    </div>
                  )}
                </div>
              )}
            </Form>

            <Button
              className="btn-get-started rounded-pill px-4 py-2 btn-saas"
              onClick={() => navigate("/tool/hashtags")}
            >
              Get Started
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}