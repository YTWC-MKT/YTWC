import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
