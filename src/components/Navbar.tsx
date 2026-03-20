import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxe-cream/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Luxe Living Concepts" className="h-14 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-xs tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 hover:text-primary ${
                  pathname === l.to ? "text-primary border-b border-primary pb-1" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-luxe-cream border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase font-body transition-colors duration-300 ${
                    pathname === l.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
