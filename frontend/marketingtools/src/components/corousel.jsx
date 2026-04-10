import { Carousel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CarouselSection() {
  const navigate = useNavigate();

  const slides = [
    {
      title: "Social Growth Tools",
      desc: "Boost engagement with smart hashtags & captions.",
      btn: "Explore Social Tools",
      path: "/tool/hashtags",
      img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Content Creation Suite",
      desc: "Generate blog ideas & write faster with AI.",
      btn: "Create Content",
      path: "/tool/blog-title",
      img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Email Marketing Tools",
      desc: "Craft high-converting emails & subject lines.",
      btn: "Write Emails",
      path: "/tool/email-template",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "UTM & Analytics Builder",
      desc: "Track campaigns and measure performance easily.",
      btn: "Build Links",
      path: "/tool/utm",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="modern-carousel-wrapper">
      <Carousel fade indicators={true} interval={4000}>

        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            <div
              className="modern-slide"
              onClick={() => navigate(slide.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(slide.path);
                }
              }}
            >

              {/* IMAGE */}
              <img
                src={slide.img}
                alt={slide.title}
                className="modern-slide-img"
              />

              {/* OVERLAY CONTENT */}
              <div className="modern-overlay">
                <div className="modern-content">

                  <h2 className="modern-title">
                    {slide.title}
                  </h2>

                  <p className="modern-desc">
                    {slide.desc}
                  </p>

                  <Button
                    className="modern-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(slide.path);
                    }}
                  >
                    {slide.btn} →
                  </Button>

                </div>
              </div>

            </div>
          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}