import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "ROI", href: "#roi" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#cta" },
  ];

  return (
    <nav className="fixed w-full bg-gray-950/95 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl sm:text-2xl font-bold text-white">
          SmartPay
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-300 font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-teal-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu slide */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-md z-40 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center h-full space-y-8 text-white text-xl">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-teal-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
