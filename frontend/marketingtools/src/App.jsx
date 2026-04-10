import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ToolPage from "./pages/toolpage";
import AppNavbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// NEW: animation + smooth scroll
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app-container">
      <BrowserRouter>
        <AppNavbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool/:name" element={<ToolPage />} />
          </Routes>
        </div>

        <ToastContainer position="top-right" autoClose={2000} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;