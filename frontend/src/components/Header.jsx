import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, COMPANY, SERVICE_DROPDOWN } from "../data/site";
import { GetQuoteButton } from "./CTAButtons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="logo-link" className="flex items-center">
            <img
              src={COMPANY.logo}
              alt="YTWC Pvt Ltd — production house and creative agency in Gurgaon logo"
              className="h-10 w-36 object-cover invert"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group" data-testid="nav-services">
                  <button className="flex items-center gap-1 text-xs font-medium text-white/70 hover:text-white uppercase tracking-wider transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="w-64 bg-[#111111] border border-white/10 py-2">
                      {SERVICE_DROPDOWN.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          data-testid={`nav-dropdown-${c.to.split("/").pop()}`}
                          className="block px-5 py-3 text-sm text-white/70 hover:text-gold hover:bg-white/5 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  data-testid={`nav-${item.label.toLowerCase()}`}
                  className="text-xs font-medium text-white/70 hover:text-white uppercase tracking-wider transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <GetQuoteButton testid="header-get-quote-btn" />
          </div>

          <button
            className="lg:hidden text-white"
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/10" data-testid="mobile-menu">
          <div className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-wider text-white/80"
                    onClick={() => setServicesOpen((v) => !v)}
                    data-testid="mobile-services-toggle"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen &&
                    SERVICE_DROPDOWN.map((c) => (
                      <Link key={c.to} to={c.to} className="block pl-4 py-2.5 text-sm text-white/60 hover:text-gold">
                        {c.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className="py-3 text-sm uppercase tracking-wider text-white/80 hover:text-gold"
                >
                  {item.label}
                </Link>
              )
            )}
            <GetQuoteButton className="mt-4 w-full" testid="mobile-get-quote-btn" />
          </div>
        </div>
      )}
    </header>
  );
}
