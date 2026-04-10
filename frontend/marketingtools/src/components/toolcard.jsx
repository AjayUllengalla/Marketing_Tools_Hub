import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHashtag, FaPenNib, FaRegEnvelope, FaLink } from "react-icons/fa6";

function getStatusBadge(toolPath) {
  if (toolPath === "hashtags") {
    return { className: "badge-status badge-status--trending" };
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


function getToolImage(toolPath) {
  switch (toolPath) {
    case "hashtags":
      return "https://images.unsplash.com/photo-1611162616475-46b635cb6868";
    case "caption":
      return "https://images.unsplash.com/photo-1508780709619-79562169bc64";
    case "blog-title":
      return "https://images.unsplash.com/photo-1455390582262-044cdead277a";
    case "blog-writer":
      return "https://images.unsplash.com/photo-1499750310107-5fef28a66643";
    case "email-template":
      return "https://images.unsplash.com/photo-1521791136064-7986c2920216";
    case "email-subject":
      return "https://images.unsplash.com/photo-1557200134-90327ee9fafa";
    case "utm":
      return "https://images.unsplash.com/photo-1551288049-bebda4e38f71";
    default:
      return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";
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
        className="h-100 tool-card-horizontal-new"
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
        <div className="d-flex h-100">

          {/* LEFT IMAGE */}
          <div className="tool-left-image">
            <img
              src={`${getToolImage(tool.path)}?q=80&w=800&auto=format&fit=crop`}
              alt={tool.name}
            />
          </div>

          {/* RIGHT CONTENT (UNCHANGED LOGIC) */}
          <Card.Body className="d-flex flex-column justify-content-between tool-right-content">

            <div>
              <div className="d-flex align-items-center justify-content-between mb-3">

                <div className="tool-card-icon premium-icon">
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

              <h5 className="mb-2 tool-card-title text-success">{tool.name}</h5>

              <div className="text-muted small mb-0 tool-card-subtitle">
                <h6>Click to open and generate results instantly.</h6>
              </div>
            </div>

            <div className="mt-3 text-end">
              <span className="tool-card-cta premium-cta">
                Open tool →
              </span>
            </div>

          </Card.Body>
        </div>
      </Card>
    </motion.div>

  );
}