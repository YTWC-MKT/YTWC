import "@/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import LocationPage from "@/pages/LocationPage";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Navigate to="/services/corporate-film-production" replace />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/video-production-company-gurgaon" element={<LocationPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
