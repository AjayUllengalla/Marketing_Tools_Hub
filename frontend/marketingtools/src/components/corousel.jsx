import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CarouselSection() {
  const navigate = useNavigate();

  return (
    <Carousel className="mb-4">

      <Carousel.Item onClick={() => navigate("/tool/hashtags")}>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmKNp8shKXsqfNQ87-jO3-9zPoT6shC8OVi5v2NwxlSIc_5Hz8jrGyyvQSWQK-QzIGf0H6_axp3AeY_ku-tr0FYaG2YpD9RirHpAx_-yFeHbUDP2pfPMmqnrDD5hDV03SNgZdvDFD-Vw0yup2YHwqW14qruDljhJmVu6dNB6RCraHkcoYLgy1hwMxF3CKk/s1600/Hashtag_Generator_Tools.webp"
          alt="Social Tools"  height={400}
        />
        <Carousel.Caption>
          <h3>Social Tools</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item onClick={() => navigate("/tool/blog-title")}>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/blogging-concept-picture-hands-laptop-various-tools-writers-around_80590-10030.jpg?semt=ais_incoming&w=740&q=80"
          alt="Content Tools" height={400}
        />
        <Carousel.Caption>
          <h3>Content Tools</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item onClick={() => navigate("/tool/email-template")}>
        <img
          className="d-block w-100"
          src="https://wpconcern.com/wp-content/uploads/2022/04/best-email-marketing-tools.png"
          alt="Email Tools" height={400}
        />
        <Carousel.Caption>
          <h3>Email Tools</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item onClick={() => navigate("/tool/utm")}>
        <img
          className="d-block w-100"
          src="https://www.plerdy.com/wp-content/uploads/2023/03/UTM-Builder-min.png"
          alt="Content Tools" height={400}
        />
        <Carousel.Caption>
          <h3>UTM Builder</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}