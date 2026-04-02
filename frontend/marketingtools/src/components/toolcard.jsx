import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ToolCard({ tool }) {
  const navigate = useNavigate();

  return (
    <Card
      className="shadow-sm h-100"
      style={{ cursor: "pointer", transition: "0.3s" }}
      onClick={() => navigate(`/tool/${tool.path}`)}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <Card.Body>
        <h5>{tool.name}</h5>
        <p>Click to use tool</p>
      </Card.Body>
    </Card>
  );
}