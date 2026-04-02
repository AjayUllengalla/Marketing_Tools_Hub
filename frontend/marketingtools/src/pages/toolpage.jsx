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

  if (!tool) return <h3 className="text-center mt-4">Tool not found</h3>;

  const handleSubmit = async () => {
  if (!input) {
    toast.error("Input is required!");
    return;
  }

  try {
  setLoading(true);

  let requestBody = {};

  if (tool.path === "hashtags") {
    requestBody = { keyword: input.trim() };
  } 
  else if (tool.path === "caption") {
    requestBody = { description: input.trim() };
  } 
  else {
    toast.error("Tool not connected yet");
    return;
  }

  console.log("Sending:", requestBody);

  const res = await api.post(tool.endpoint, requestBody, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  console.log("Response:", res.data);

  setResult(res.data);

  toast.success("Success!");
} catch (err) {
  console.error("ERROR:", err.response?.data || err.message);

  if (err.response?.status === 400) {
    toast.error("Bad request - check input format");
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
    toast.success("Copied to clipboard!");
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

      
      <Form.Control
        placeholder={tool.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="my-3"
      />

      
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

          <div>
            <button className="btn btn-success me-2" onClick={handleCopy}>
              Copy
            </button>

            <button className="btn btn-primary" onClick={handleDownload}>
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
}