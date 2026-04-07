import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ToolCard({ tool }) {
  const navigate = useNavigate();

  return (
    <Card
      className="shadow-sm h-100 tool-card"
      style={{ cursor: "pointer", transition: "0.3s" }}
      onClick={() => navigate(`/tool/${tool.path}`)}
      role="button"
      tabIndex={0}
      aria-label={`Open ${tool.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(`/tool/${tool.path}`);
        }
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <div className="tool-card-badge mb-2">
            {tool.categoryIcon || "⚙️"}
          </div>
          <h5 className="mb-2">{tool.name}</h5>
          <p className="text-muted small mb-0">
            Click to open this tool and start creating.
          </p>
        </div>
        <div className="mt-3 text-end">
          <span className="text-primary small fw-semibold">
            Open tool →
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}