import tools from "../tools/toolconfig";
import ToolCard from "../components/toolcard";
import CarouselSection from "../components/corousel";
import { Badge, Button, Container, Row, Col } from "react-bootstrap";
import { FaChartLine, FaEnvelopeOpenText, FaLink } from "react-icons/fa";

// animation
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Home() {
  // PARALLAX EFFECT
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  // NEW: ACTIVE CATEGORY STATE (NO LOGIC CHANGE)
  const [activeCategory, setActiveCategory] = useState(
    tools[0]?.category
  );

  const testimonials = [
    {
      name: "Rahul Sharma",
      text: "This platform saved me hours! The tools are super fast and easy to use.",
      rating: 5,
      img: 1
    },
    {
      name: "Sneha Reddy",
      text: "Amazing experience! The email templates are very professional.",
      rating: 4,
      img: 2
    },
    {
      name: "Arjun Patel",
      text: "Loved the hashtag generator. My social reach increased a lot!",
      rating: 5,
      img: 3
    },
    {
      name: "Priya Nair",
      text: "Very clean UI and smooth experience. Highly recommended.",
      rating: 4,
      img: 4
    },
    {
      name: "Kiran Kumar",
      text: "UTM builder is extremely useful for tracking campaigns.",
      rating: 5,
      img: 5
    },
    {
      name: "Anjali Verma",
      text: "All tools in one place — very convenient and efficient.",
      rating: 4,
      img: 6
    }
  ];

  return (
    <div className="home-premium">

      {/* HERO SECTION */}
      <div className="hero-section">

        {/* VIDEO */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://media.istockphoto.com/id/1916685810/video/closeup-hands-and-brainstorming-with-business-people-planning-and-ideas-with-a-project.mp4?s=mp4-640x640-is&k=20&c=0s1YmgU658xBxuO28gcOHssr3mDAVz5-vfP3_o2iitY="
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* CONTENT */}
        <div className="hero-content">
          <Container className="text-center">

            <h1 className="home-hero-title text-warning">
              All-in-One Marketing Tools Hub
            </h1>

            <h5 className="home-hero-lead">
              Create. Convert. Automate. Grow Faster.
            </h5>

            <p className="text-secondary font-bold font-serif">Our Marketing Tools Hub is an all-in-one platform built to simplify and accelerate your digital marketing efforts. Whether you're creating content, optimizing campaigns, or analyzing performance, our intelligent tools help you work faster and smarter. Designed with efficiency and ease in mind, we empower individuals and teams to focus on growth while automation handles the rest.</p>

            <Button className="btn-home-cta rounded-pill mt-3" href="#tools-section">
              Explore Tools
            </Button>

          </Container>
        </div>

      </div>

      <Container>

        {/* ABOUT SECTION */}
        <motion.section
          id="about-premium"
          className="about-premium-section my-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <div className="about-overlay">

            <Row className="align-items-center">

              {/* LEFT SIDE */}
              <Col md={6} className="about-left">
                <h2 className="about-title">
                  About Our <br /> Marketing Tools Hub
                </h2>

                <p className="about-text">
                  Simplify your marketing workflow with powerful tools designed to
                  create content, automate tasks, and boost your online presence.
                </p>

                <Button className="about-btn">
                  Explore Tools
                </Button>
              </Col>

              {/* RIGHT SIDE */}
              <Col md={6} className="about-right">

                <div className="about-feature">
                  <div className="about-icon"><FaChartLine /></div>
                  <div>
                    <h5>Content Generation</h5>
                    <p>Create blog titles, captions, and ideas instantly.</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="about-icon"><FaEnvelopeOpenText /></div>
                  <div>
                    <h5>Email Marketing</h5>
                    <p>Generate professional emails and subject lines.</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="about-icon"><FaLink /> </div>
                  <div>
                    <h5>Campaign Tracking</h5>
                    <p>Build UTM links to track marketing performance.</p>
                  </div>
                </div>

              </Col>

            </Row>

          </div>
        </motion.section>


        {/* NEW: CATEGORY BUTTONS */}
        <div className="text-center my-5">
          <div className="tool-tabs d-inline-flex flex-wrap justify-content-center gap-2 p-2 rounded-pill shadow-sm bg-white">

            {tools.map((section, i) => (
              <button
                key={section.category || i}
                className={`tool-tab-btn px-4 py-2 rounded-pill border-0 ${activeCategory === section.category ? "active" : ""
                  }`}
                onClick={() => setActiveCategory(section.category)}
              >
                {section.category}
              </button>
            ))}

          </div>
        </div>

        {/* TOOLS SECTION (FILTERED ONLY, LOGIC SAME) */}
        <div id="tools-section">
          {tools
            .filter((section) => section.category === activeCategory)
            .map((section, i) => (
              <motion.section
                key={section.category || i}
                className="mb-5"
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="d-flex justify-content-between align-items-end mb-3">
                  <div>
                    <h3 className="mb-1 section-title text-capitalize text-warning">
                      {section.category}
                    </h3>
                    <div className="text-muted small">
                      <h5>Choose a tool to generate content faster.</h5>
                    </div>
                  </div>

                  <Badge bg="primary" className="badge-soft d-none d-md-inline">
                    {section.items.length} tools
                  </Badge>
                </div>

                <Row className="g-4">
                  {section.items.map((tool, idx) => (
                    <Col key={tool.path || idx} md={6} lg={6}>
                      <motion.div
                        className="tool-card-wrapper"

                        initial={{ opacity: 0, y: 90 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}

                        transition={{
                          duration: 0.5,
                          delay: idx * 0.1,
                          ease: "linear"
                        }}

                        whileHover={{ scale: 1.03 }}
                      >
                        <ToolCard tool={tool} category={section.category} />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.section>
            ))}
        </div>

        {/* CAROUSEL */}
        <motion.div
          className="small-carousel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <CarouselSection />
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div
          id="testimonial-section"
          className="testimonial-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="testimonial-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          >


            {testimonials.map((t, i) => (
              <div className="testimonial-card glass-card" key={i}>
                <img
                  src={`https://i.pravatar.cc/100?img=${t.img}`}
                  className="testimonial-img"
                  alt={t.name}
                />
                <div className="testimonial-stars">
                  {"⭐".repeat(t.rating)}
                </div>

                <p>"{t.text}"</p>

                <h6>{t.name}</h6>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.section
          className="cta-section my-5 p-4 p-md-5"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <Row className="align-items-center">

            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="cta-title mb-3">
                  Boost Your Productivity with Smart Marketing Tools
                </h2>

                <p className="cta-text mb-4">
                  Generate content, automate workflows, and scale your marketing —
                  all in one place.
                </p>

                <Button className="btn-home-cta px-5 py-2 rounded-pill">
                  Get Started Free
                </Button>
              </motion.div>
            </Col>

            <Col md={6} className="text-center mt-4 mt-md-0">
              <motion.img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
                alt="marketing tools"
                className="cta-image"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              />
            </Col>

          </Row>
        </motion.section>

      </Container>
    </div>
  );
}