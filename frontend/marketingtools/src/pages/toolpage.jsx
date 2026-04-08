import { useParams } from "react-router-dom";
import tools from "../tools/toolconfig";
import { useState } from "react";
import api from "../services/api";
import { Badge, Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { FaBolt, FaCopy, FaDownload } from "react-icons/fa6";

export default function ToolPage() {
  const { name } = useParams();

  const tool = tools
    .flatMap(cat => cat.items)
    .find(t => t.path === name);

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [utmData, setUtmData] = useState({
    url: "",
    source: "",
    medium: "",
    campaign: ""
  });

  if (!tool) return <h3 className="text-center mt-4">Tool not found</h3>;

  const handleSubmit = async () => {

    if (
    tool.path !== "utm" &&
    (!input || input.trim() === "")
  ) {
    toast.error("Input field is required!");
    return;
  }
    try {
      setLoading(true);

      let requestBody = {};

      // SOCIAL
      if (tool.path === "hashtags") {
        requestBody = { keyword: input.trim() };
      } else if (tool.path === "caption") {
        requestBody = { description: input.trim() };
      }

      // BLOG
      else if (tool.path === "blog-title") {
        requestBody = { topic: input.trim() };
      } else if (tool.path === "blog-writer") {
        requestBody = { blog: input.trim() };
      }

      // EMAIL
      else if (tool.path === "email-template") {
        requestBody = { topic: input.trim() };
      } else if (tool.path === "email-subject") {
        requestBody = { subjectLine: input.trim() };
      }

      // UTM
      else if (tool.path === "utm") {
        if (
          !utmData.url ||
          !utmData.source ||
          !utmData.medium ||
          !utmData.campaign
        ) {
          toast.error("All UTM fields are required");
          setLoading(false);
          return;
        }

        requestBody = utmData;
      }

      console.log("Sending:", requestBody);

      const res = await api.post(tool.endpoint, requestBody, {
        headers: { "Content-Type": "application/json" }
      });

      setResult(res.data);
      toast.success("Success!");
    } catch (err) {
      console.error(err.response?.data || err.message);

      if (err.response?.status === 400) {
        toast.error(err.response.data || "Bad request");
      } else if (err.response?.status === 500) {
        toast.error("Server error (backend issue)");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied!");
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "result.txt";
    link.click();
  };

  return (
    <div className="container mt-4">
      <div className="tool-page-header mb-4 d-flex justify-content-between align-items-start gap-3 flex-wrap">
        <div>
          <h2 className="mb-1">{tool.name}</h2>
          <p className="text-muted small mb-0">
            Fill in the fields below and click{" "}
            <span className="fw-semibold">Generate</span> to get your result.
          </p>
        </div>
        <Badge bg="primary" className="badge-soft">
          Powered by ToolsHub
        </Badge>
      </div>

      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card tool-input-card">
            <div className="card-body p-4">
              {tool.path !== "utm" && (
                <Form.Group controlId="toolInput">
                  <Form.Label className="fw-semibold small text-uppercase text-muted">
                    Input
                  </Form.Label>
                  <Form.Control
                    placeholder={tool.input}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="mt-1"
                  />
                </Form.Group>
              )}

              {tool.path === "utm" && (
                <>
                  <Form.Group className="mb-3" controlId="utmUrl">
                    <Form.Label className="fw-semibold small text-uppercase text-muted">
                      Website URL
                    </Form.Label>
                    <Form.Control
                      placeholder="https://your-landing-page.com"
                      onChange={(e) =>
                        setUtmData({ ...utmData, url: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="utmSource">
                    <Form.Label className="fw-semibold small text-uppercase text-muted">
                      Source
                    </Form.Label>
                    <Form.Control
                      placeholder="e.g. facebook, newsletter"
                      onChange={(e) =>
                        setUtmData({ ...utmData, source: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="utmMedium">
                    <Form.Label className="fw-semibold small text-uppercase text-muted">
                      Medium
                    </Form.Label>
                    <Form.Control
                      placeholder="e.g. cpc, email, social"
                      onChange={(e) =>
                        setUtmData({ ...utmData, medium: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="utmCampaign">
                    <Form.Label className="fw-semibold small text-uppercase text-muted">
                      Campaign
                    </Form.Label>
                    <Form.Control
                      placeholder="e.g. summer_sale_2026"
                      onChange={(e) =>
                        setUtmData({ ...utmData, campaign: e.target.value })
                      }
                    />
                  </Form.Group>
                </>
              )}

              <div className="mt-3 d-flex justify-content-between align-items-center">
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  variant="primary"
                  className="px-4 btn-saas"
                >
                  {loading ? (
                    <>
                      <Spinner size="sm" className="me-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FaBolt className="me-2" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card tool-result-card h-100">
            <div className="card-body d-flex flex-column p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 text-uppercase small text-muted">
                  Output
                </h6>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-success btn-sm btn-saas-outline"
                    onClick={handleCopy}
                    disabled={!result}
                  >
                    <FaCopy className="me-2" />
                    Copy
                  </button>

                  <button
                    className="btn btn-outline-primary btn-sm btn-saas-outline"
                    onClick={handleDownload}
                    disabled={!result}
                  >
                    <FaDownload className="me-2" />
                    Download
                  </button>
                </div>
              </div>

              {loading && (
                <div className="tool-skeleton flex-grow-1">
                  <div className="skeleton-line w-100" />
                  <div className="skeleton-line w-95" />
                  <div className="skeleton-line w-90" />
                  <div className="skeleton-line w-100" />
                  <div className="skeleton-line w-80" />
                </div>
              )}

              {!loading && !result && (
                <div className="tool-empty-state flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
                  <div className="empty-icon mb-3" aria-hidden="true">
                    <FaBolt />
                  </div>
                  <div className="fw-semibold mb-1">Your output will appear here</div>
                  <div className="text-muted small">
                    Enter input on the left, then click Generate.
                  </div>
                </div>
              )}

              {!!result && (
                <textarea
                  className="form-control flex-grow-1 tool-output"
                  rows={10}
                  value={result}
                  readOnly
                  style={{ resize: "vertical" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}