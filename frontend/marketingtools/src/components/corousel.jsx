import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CarouselSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-carousel-wrapper mb-4">
      <Carousel className="hero-carousel" indicators={true}>
        <Carousel.Item
          onClick={() => navigate("/tool/hashtags")}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          aria-label="Open Social Tools"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/tool/hashtags");
            }
          }}
        >
          <div className="hero-slide">
            <div className="hero-slide-media">
              <img
                className="hero-slide-img"
                src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
                alt="Social marketing"
              />
            </div>
            <div className="hero-slide-content">
              <div className="hero-slide-inner">
                <h2 className="hero-slide-title">Social Tools</h2>
                <p className="hero-slide-lead">
                  Generate high-impact hashtags in seconds to grow reach and engagement.
                </p>
                <Button
                  className="carousel-cta rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/tool/hashtags");
                  }}
                >
                  Generate Hashtags
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          onClick={() => navigate("/tool/blog-title")}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          aria-label="Open Content Tools"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/tool/blog-title");
            }
          }}
        >
          <div className="hero-slide">
            <div className="hero-slide-media">
              <img
                className="hero-slide-img"
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
                alt="Content writing"
              />
            </div>
            <div className="hero-slide-content">
              <div className="hero-slide-inner">
                <h2 className="hero-slide-title">Content Tools</h2>
                <p className="hero-slide-lead">
                  Produce click-worthy blog titles and sharpen your content strategy.
                </p>
                <Button
                  className="carousel-cta rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/tool/blog-title");
                  }}
                >
                  Create Blog Titles
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          onClick={() => navigate("/tool/email-template")}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          aria-label="Open Email Tools"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/tool/email-template");
            }
          }}
        >
          <div className="hero-slide">
            <div className="hero-slide-media">
              <img
                className="hero-slide-img"
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                alt="Email marketing"
              />
            </div>
            <div className="hero-slide-content">
              <div className="hero-slide-inner">
                <h2 className="hero-slide-title">Email Tools</h2>
                <p className="hero-slide-lead">
                  Build conversion-focused templates and compelling subject lines.
                </p>
                <Button
                  className="carousel-cta rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/tool/email-template");
                  }}
                >
                  Draft Email Template
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item
          onClick={() => navigate("/tool/utm")}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          aria-label="Open UTM Builder"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate("/tool/utm");
            }
          }}
        >
          <div className="hero-slide">
            <div className="hero-slide-media">
              <img
                className="hero-slide-img"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Campaign analytics"
              />
            </div>
            <div className="hero-slide-content">
              <div className="hero-slide-inner">
                <h2 className="hero-slide-title">UTM Builder</h2>
                <p className="hero-slide-lead">
                  Generate clean tracking links so you can measure what matters.
                </p>
                <Button
                  className="carousel-cta rounded-pill"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate("/tool/utm");
                  }}
                >
                  Build Tracking Links
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}