import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CarouselSection() {
  const navigate = useNavigate();

  return (
    <div className="hero-carousel-wrapper mb-4">
      <Carousel className="hero-carousel" indicators={false}>

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
          <img
            className="d-block w-100"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmKNp8shKXsqfNQ87-jO3-9zPoT6shC8OVi5v2NwxlSIc_5Hz8jrGyyvQSWQK-QzIGf0H6_axp3AeY_ku-tr0FYaG2YpD9RirHpAx_-yFeHbUDP2pfPMmqnrDD5hDV03SNgZdvDFD-Vw0yup2YHwqW14qruDljhJmVu6dNB6RCraHkcoYLgy1hwMxF3CKk/s1600/Hashtag_Generator_Tools.webp"
            alt="Social Tools"  height={400}
          />
          <Carousel.Caption>
            <h3 className="fw-semibold">Social Tools</h3>
            <p className="d-none d-md-block">
              Generate engaging hashtags to boost your social reach.
            </p>
          </Carousel.Caption>
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
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/blogging-concept-picture-hands-laptop-various-tools-writers-around_80590-10030.jpg?semt=ais_incoming&w=740&q=80"
          alt="Content Tools" height={400}
        />
        <Carousel.Caption>
          <h3 className="fw-semibold">Content Tools</h3>
          <p className="d-none d-md-block">
            Craft compelling blog titles and long-form content in seconds.
          </p>
        </Carousel.Caption>
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
        <img
          className="d-block w-100"
          src="https://wpconcern.com/wp-content/uploads/2022/04/best-email-marketing-tools.png"
          alt="Email Tools" height={400}
        />
        <Carousel.Caption>
          <h3 className="fw-semibold">Email Tools</h3>
          <p className="d-none d-md-block">
            Build high-converting email templates and subject lines.
          </p>
        </Carousel.Caption>
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
        <img
          className="d-block w-100"
          src="https://www.plerdy.com/wp-content/uploads/2023/03/UTM-Builder-min.png"
          alt="Content Tools" height={400}
        />
        <Carousel.Caption>
          <h3 className="fw-semibold">UTM Builder</h3>
          <p className="d-none d-md-block">
            Quickly generate clean tracking links for your campaigns.
          </p>
        </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}