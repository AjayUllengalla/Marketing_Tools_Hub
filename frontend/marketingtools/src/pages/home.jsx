import tools from "../tools/toolconfig";
import ToolCard from "../components/toolcard";
import CarouselSection from "../components/corousel";
import { Badge, Button, Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div className="home-premium">
      <Container className="py-5">
        <header className="home-hero text-center mb-4">
          <h1 className="home-hero-title">Marketing Tools Hub</h1>
          <p className="home-hero-lead mx-auto">
            Premium, one-click tools for social posts, content, emails, and campaign tracking.
          </p>
          <Button
            as="a"
            href="#tools-section"
            className="btn-home-cta rounded-pill px-4 py-2 mt-2"
          >
            Explore Tools
          </Button>
        </header>

        <CarouselSection />

        <div id="tools-section">
          {tools.map((section, i) => (
            <section key={section.category || i} className="mb-5">
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <h3 className="mb-1 section-title text-capitalize">
                    {section.category}
                  </h3>
                  <div className="text-muted small">
                    Choose a tool to generate content faster.
                  </div>
                </div>
                <Badge
                  bg="primary"
                  className="badge-soft d-none d-md-inline"
                >
                  {section.items.length} tools
                </Badge>
              </div>

              <Row className="g-3">
                {section.items.map((tool, idx) => (
                  <Col key={tool.path || idx} sm={6} md={4} lg={3}>
                    <ToolCard tool={tool} category={section.category} />
                  </Col>
                ))}
              </Row>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}