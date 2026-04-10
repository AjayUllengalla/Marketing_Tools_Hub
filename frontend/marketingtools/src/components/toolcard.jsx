import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHashtag, FaPenNib, FaRegEnvelope, FaLink } from "react-icons/fa6";

function getStatusBadge(toolPath) {
  if (toolPath === "hashtags") {
    return { label: "Trending", className: "badge-status badge-status--trending" };
  }
  if (toolPath === "utm") {
    return { label: "New", className: "badge-status badge-status--new" };
  }
  return null;
}

function getToolIcon(toolPath) {
  switch (toolPath) {
    case "hashtags":
      return <FaHashtag />;
    case "caption":
      return <FaPenNib />;
    case "blog-title":
    case "blog-writer":
      return <FaPenNib />;
    case "email-template":
    case "email-subject":
      return <FaRegEnvelope />;
    case "utm":
      return <FaLink />;
    default:
      return <FaPenNib />;
  }
}

export default function ToolCard({ tool, category }) {
  const navigate = useNavigate();
  const statusBadge = getStatusBadge(tool.path);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="toolcard-motion-wrapper"
    >
      <Card
        className="h-100 tool-card soft-card reveal-card premium-card"
        style={{ cursor: "pointer" }}
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
      >
        <Card.Body className="d-flex flex-column justify-content-between">

          <div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              
              {/* ICON */}
              <div className="tool-card-icon premium-icon" aria-hidden="true">
                {getToolIcon(tool.path)}
              </div>

              {category && (
                <Badge bg="secondary" className="badge-soft badge-soft--slate">
                  {category}
                </Badge>
              )}
            </div>

            {statusBadge && (
              <div className="mb-2">
                <Badge className={statusBadge.className} bg="light">
                  {statusBadge.label}
                </Badge>
              </div>
            )}

            <h5 className="mb-2 tool-card-title">{tool.name}</h5>

            <div className="text-muted small mb-0 tool-card-subtitle">
              Click to open and generate results instantly.
            </div>
          </div>

          {/* CTA */}
          <div className="mt-3 text-end">
            <span className="tool-card-cta premium-cta">
              Open tool →
            </span>
          </div>

        </Card.Body>
      </Card>
    </motion.div>
  );
}