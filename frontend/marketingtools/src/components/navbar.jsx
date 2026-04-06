import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import tools from "../tools/toolconfig";
import { useState } from "react";

export default function AppNavbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const allTools = tools.flatMap(cat => cat.items);

  const filteredTools = allTools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm sticky-top">
      <Container>

        
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <span><img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1440,h=756,fit=crop,f=jpeg/G6fuUQTNiFdQnj5S/logo-Idhelh6KDFsmOxlF.JPG" height={59} width={190} style={{borderRadius:"10px"}}/></span>
        </Navbar.Brand>

        
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
        </Nav>

        <Navbar.Toggle />

        <Navbar.Collapse>
          
          <Nav className="me-auto">

            {tools.map((category, i) => (
              <NavDropdown
                key={i}
                title={category.category}
                show={openDropdown === i}
                onMouseEnter={() => setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {category.items.map((tool, idx) => (
                  <NavDropdown.Item
                    key={idx}
                    onClick={() => navigate(`/tool/${tool.path}`)}
                  >
                    {tool.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ))}

          </Nav>

          
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  background: "white",
                  width: "100%",
                  zIndex: 1000,
                  borderRadius: "5px",
                  maxHeight: "200px",
                  overflowY: "auto"
                }}
              >
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee"
                      }}
                      onClick={() => {
                        navigate(`/tool/${tool.path}`);
                        setSearch("");
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

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}