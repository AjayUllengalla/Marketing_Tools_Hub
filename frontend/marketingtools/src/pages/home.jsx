import tools from "../tools/toolconfig";
import ToolCard from "../components/toolcard";
import CarouselSection from "../components/corousel";
import { Badge, Button, Container, Row, Col } from "react-bootstrap";

// animation
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  // PARALLAX EFFECT
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <div className="home-premium">

      {/* HERO SECTION (PARALLAX + ADVANCED ANIMATION) */}
      <div className="hero-section" >
        <motion.div className="hero-bg" style={{ y }}>
          <Container className="py-5 text-center" position-relative>

            <motion.h1
              className="home-hero-title"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              All-in-One Marketing Tools Hub
            </motion.h1>

            <motion.p
              className="home-hero-lead mx-auto"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Create. Convert. Automate. Grow Faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                as="a"
                href="#tools-section"
                className="btn-home-cta rounded-pill px-4 py-2 mt-3"
              >
                Explore Tools
              </Button>
            </motion.div>

          </Container>
        </motion.div>
      </div>

      <Container>

        {/* ABOUT / OVERVIEW SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <Row className="align-items-center glass-card p-4">
            <Col md={6}>
              <h2 className="section-title">About Us</h2>
              <p className="text-muted">
                Streamline your marketing workflow with powerful tools designed
                for creators, marketers, and businesses.
              </p>
              <Button className="btn-home-cta mt-2">Learn More</Button>
            </Col>

            <Col md={6}>
              <motion.div
                className="about-illustration"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </Col>
          </Row>
        </motion.section>

        {/* PREMIUM SMALL CAROUSEL */}
        <motion.div
          className="small-carousel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <CarouselSection />
        </motion.div>

        {/*  TOOLS SECTION (UNCHANGED LOGIC + BETTER ANIMATION) */}
        <div id="tools-section">
          {tools.map((section, i) => (
            <motion.section
              key={section.category || i}
              className="mb-5"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                  <h3 className="mb-1 section-title text-capitalize">
                    {section.category}
                  </h3>
                  <div className="text-muted small">
                    Choose a tool to generate content faster.
                  </div>
                </div>

                <Badge bg="primary" className="badge-soft d-none d-md-inline">
                  {section.items.length} tools
                </Badge>
              </div>

              <Row className="g-4">
                {section.items.map((tool, idx) => (
                  <Col key={tool.path || idx} sm={6} md={4} lg={3}>
                    <motion.div
                      className="tool-card-wrapper"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <ToolCard tool={tool} category={section.category} />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.section>
          ))}
        </div>

        {/* TESTIMONIALS (SMOOTH AUTO SCROLL GLASSMORPHIC) */}
        <motion.div
          className="testimonial-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="testimonial-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="testimonial-card glass-card" key={i}>
                <img
                  src={`https://i.pravatar.cc/100?img=${i}`}
                  className="testimonial-img"
                  alt="user"
                />
                <p>"Amazing tools! Boosted my productivity."</p>
                <h6>User {i}</h6>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.section
          className="cta-section text-center my-5 p-5"
          initial={{ scale: 0.9, opacity: 0 ,y: 80 }}
          whileInView={{ scale: 1, opacity: 1 ,y: 0}}
          transition={{ duration: 0.7 }}
          viewport={{ once: false}}
        >
          <h2>Boost Your Productivity with Smart Tools</h2>
          <Button className="btn-home-cta mt-3 px-5 py-2">
            Get Started Free
          </Button>
        </motion.section>

      </Container>
    </div>
  );
}