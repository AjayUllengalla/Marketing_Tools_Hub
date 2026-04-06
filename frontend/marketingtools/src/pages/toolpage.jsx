import { useParams } from "react-router-dom";
import tools from "../tools/toolconfig";
import { useState } from "react";
import api from "../services/api";
import { Button, Form, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

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
      <h2>{tool.name}</h2>

      {/* NORMAL INPUT */}
      {tool.path !== "utm" && (
        <Form.Control
          placeholder={tool.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="my-3"
        />
      )}

      {/* UTM INPUTS */}
      {tool.path === "utm" && (
        <>
          <Form.Control
            placeholder="Website URL"
            className="mb-2"
            onChange={(e) =>
              setUtmData({ ...utmData, url: e.target.value })
            }
          />
          <Form.Control
            placeholder="Source"
            className="mb-2"
            onChange={(e) =>
              setUtmData({ ...utmData, source: e.target.value })
            }
          />
          <Form.Control
            placeholder="Medium"
            className="mb-2"
            onChange={(e) =>
              setUtmData({ ...utmData, medium: e.target.value })
            }
          />
          <Form.Control
            placeholder="Campaign"
            className="mb-3"
            onChange={(e) =>
              setUtmData({ ...utmData, campaign: e.target.value })
            }
          />
        </>
      )}

      <Button onClick={handleSubmit}>
        {loading ? <Spinner size="sm" /> : "Generate"}
      </Button>

      {result && (
        <div className="mt-4 p-3 border rounded">
          <textarea
            className="form-control mb-2"
            rows={6}
            value={result}
            readOnly
          />

          <button className="btn btn-success me-2" onClick={handleCopy}>
            Copy
          </button>

          <button className="btn btn-primary" onClick={handleDownload}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}