import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ToolPage from "./pages/toolpage";
import AppNavbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool/:name" element={<ToolPage />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;