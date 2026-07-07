import "@/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import HubPage from "@/pages/HubPage";
import ServicePage from "@/pages/ServicePage";
import LocationPage from "@/pages/LocationPage";
import IndustryPage from "@/pages/IndustryPage";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import OurBrands from "@/pages/OurBrands";
import Pricing from "@/pages/Pricing";
import FaqPage from "@/pages/FaqPage";
import Careers from "@/pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Hubs */}
          <Route path="/video-production-services" element={<HubPage hubKey="video-production-services" />} />
          <Route path="/marketing-services" element={<HubPage hubKey="marketing-services" />} />
          <Route path="/services" element={<Navigate to="/video-production-services" replace />} />
          <Route path="/services/:slug" element={<ServicePage />} />

          {/* Locations */}
          <Route path="/video-production-company-gurgaon" element={<LocationPage locationKey="gurgaon" />} />
          <Route path="/video-production-company-delhi-ncr" element={<LocationPage locationKey="delhi-ncr" />} />
          <Route path="/video-production-company-noida" element={<LocationPage locationKey="noida" />} />
          <Route path="/video-production-company-delhi" element={<LocationPage locationKey="delhi" />} />
          <Route path="/industrial-shoot-faridabad-manesar" element={<LocationPage locationKey="faridabad-manesar" />} />

          {/* Industries */}
          <Route path="/industries/:slug" element={<IndustryPage />} />

          {/* Company */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-brands" element={<OurBrands />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
