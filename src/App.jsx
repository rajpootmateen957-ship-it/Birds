import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Sale from "./pages/sale/Sale";
import AboutPage from "./components/Aboutnavbar";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/men/:slug" element={<Men />} />
        <Route path="/women/:slug" element={<Women />} />
        <Route path="/sale/:audience/:slug" element={<Sale />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}