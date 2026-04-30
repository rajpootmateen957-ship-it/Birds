import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const mainLinks = [
  { id: "men", label: "MEN", to: "/men" },
  { id: "women", label: "WOMEN", to: "/women" },
  { id: "sale", label: "SALE", to: "/sale" },
];

const megaMenus = {
  men: {
    topTabs: [
      { label: "Shoes", to: "/men/shoes" },
      { label: "Socks & Apparel", to: "/men/socks-apparel" },
      { label: "Sale", to: "/sale" },
    ],
    columns: [
      ["ALLBIRDS X PANTONE", "DASHER NZ COLLECTION", "TERRALUX COLLECTION", "VARSITY COLLECTION", "NEW ARRIVALS", "BESTSELLERS"],
      ["Shop All", "Sneakers", "Slip Ons", "Slippers", "All-Weather", "Sandals"],
      ["Tree Runner NZ", "Canvas Cruiser", "The Original Tree Runner", "Varsity", "Dasher NZ", "Cruiser"],
      ["Socks", "Apparel", "Bags", "Laces", "Insoles"],
    ],
    headings: ["", "MEN'S SHOES", "CUSTOMER FAVORITES", "APPAREL & ACCESSORIES"],
    promos: [
      { title: "CANVAS CRUISER", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80" },
      { title: "MEN'S NEW ARRIVALS", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80" },
      { title: "MEN'S SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
    ],
    routePrefix: "/men",
  },
  women: {
    topTabs: [
      { label: "Shoes", to: "/women/shoes" },
      { label: "Socks & Apparel", to: "/women/socks-apparel" },
      { label: "Sale", to: "/sale" },
    ],
    columns: [
      ["ALLBIRDS X PANTONE", "DASHER NZ COLLECTION", "TERRALUX COLLECTION", "VARSITY COLLECTION", "NEW ARRIVALS", "BESTSELLERS"],
      ["Shop All", "Sneakers", "Flats", "Slip Ons", "Slippers", "All-Weather", "Sandals"],
      ["Tree Runner NZ", "Canvas Cruiser", "The Original Tree Runner", "Tree Glider", "Tree Breezer", "Dasher NZ", "Varsity"],
      ["Socks", "Apparel", "Bags", "Laces", "Insoles"],
    ],
    headings: ["", "WOMEN'S SHOES", "POPULAR PICKS", "APPAREL & ACCESSORIES"],
    promos: [
      { title: "CANVAS CRUISER", image: "https://images.unsplash.com/photo-1512574792095-4f45f8e9f3f8?auto=format&fit=crop&w=900&q=80" },
      { title: "WOMEN'S NEW ARRIVALS", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80" },
      { title: "WOMEN'S SALE", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80" },
    ],
    routePrefix: "/women",
  },
  sale: {
    topTabs: [{ label: "All Sale", to: "/sale" }],
    columns: [["All Sale", "Sale Shoes", "Sale Apparel"], ["All Sale", "Sale Shoes", "Sale Apparel"]],
    headings: ["MEN", "WOMEN"],
    promos: [
      { title: "MEN'S SALE", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80" },
      { title: "WOMEN'S SALE", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80" },
    ],
    routePrefix: "/sale",
  },
};

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const NavIcon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: 20,
      height: 20,
      stroke: "#1a1a1a",
      fill: "none",
      strokeWidth: 1.6,
      cursor: "pointer",
    }}
  >
    {children}
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ background: "#f5f0e8", position: "sticky", top: 0, zIndex: 1200 }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div style={{ background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "10px 16px", fontSize: "13px", letterSpacing: "0.3px", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
        Extra 25% off sale items.{" "}
        <Link to="/men" style={{ color: "#fff", textDecoration: "underline", margin: "0 4px" }}>Shop Men</Link> |{" "}
        <Link to="/women" style={{ color: "#fff", textDecoration: "underline", margin: "0 4px" }}>Shop Women</Link>
      </div>

      <div style={{ padding: "10px 20px" }}>
        <nav style={{ background: "#fff", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", maxWidth: "1240px", margin: "0 auto", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <Link to="/" style={{ fontFamily: "'Georgia', cursive", fontSize: "36px", fontStyle: "italic", fontWeight: "400", color: "#1a1a1a", letterSpacing: "-0.5px", textDecoration: "none", lineHeight: 1 }}>allbirds</Link>
          {!isMobile && (
            <ul style={{ display: "flex", alignItems: "center", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
              {mainLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.to}
                    onMouseEnter={() => setActiveMenu(item.id)}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: "#1a1a1a",
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      border: isActive ? "1px solid #1a1a1a" : "1px solid transparent",
                      padding: "2px 4px",
                      borderRadius: "3px",
                    })}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {!isMobile && (
              <div style={{ display: "flex", gap: "14px" }}>
                <Link to="/about" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "13px" }}>About</Link>
                <Link to="/" style={{ textDecoration: "none", color: "#1a1a1a", fontSize: "13px" }}>ReRun</Link>
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <NavIcon>
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
              </NavIcon>
              <NavIcon>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </NavIcon>
              <NavIcon>
                <circle cx="12" cy="12" r="10" />
                <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="#1a1a1a" />
              </NavIcon>
              <NavIcon>
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </NavIcon>
            </div>

            {isMobile && (
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  cursor: "pointer",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      width: "22px",
                      height: "2px",
                      background: "#1a1a1a",
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </nav>

        {isMobile && menuOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#fff",
              borderRadius: "20px",
              margin: "8px auto 0",
              padding: "16px 24px",
              maxWidth: "1200px",
              gap: "4px",
            }}
          >
            {[...mainLinks, { id: "about", label: "About", to: "/" }, { id: "rerun", label: "ReRun", to: "/" }].map((item, index, arr) => (
              <Link
                key={item.id}
                to={item.to}
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  padding: "12px 0",
                  borderBottom:
                    index !== arr.length - 1 ? "1px solid #f0ece3" : "none",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {!isMobile && activeMenu && (
        <div style={{ maxWidth: "1240px", margin: "0 auto 10px", background: "#f4f2ea", borderRadius: "14px", overflow: "hidden" }}>
          <div style={{ padding: "12px 20px", display: "flex", justifyContent: "center", gap: "26px", borderBottom: "1px solid #ebe7dc" }}>
            {megaMenus[activeMenu].topTabs.map((tab) => (
              <Link key={tab.label} to={tab.to} style={{ textDecoration: "none", color: "#1f1f1f", fontSize: "13px", fontWeight: 600 }}>
                {tab.label}
              </Link>
            ))}
          </div>

          <div style={{ padding: "16px", display: "grid", gridTemplateColumns: activeMenu === "sale" ? "1fr 1fr 1.2fr" : "1fr 1fr 1fr 1fr 1.8fr", gap: "16px" }}>
            {megaMenus[activeMenu].columns.map((col, cIdx) => (
              <div key={`col-${cIdx}`}>
                {megaMenus[activeMenu].headings[cIdx] && <p style={{ marginTop: 0, marginBottom: "10px", fontSize: "13px", fontWeight: 700 }}>{megaMenus[activeMenu].headings[cIdx]}</p>}
                {col.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const menu = megaMenus[activeMenu];
                      if (activeMenu === "sale") {
                        navigate(`/sale/${cIdx === 0 ? "men" : "women"}/${slugify(item)}`);
                      } else {
                        navigate(`${menu.routePrefix}/${slugify(item)}`);
                      }
                      setActiveMenu(null);
                    }}
                    style={{ display: "block", marginBottom: "11px", border: "none", background: "transparent", padding: 0, color: cIdx === 0 ? "#111" : "#3e3e3e", fontSize: cIdx === 0 ? "13px" : "18px", fontWeight: cIdx === 0 ? 700 : 400, cursor: "pointer", textAlign: "left" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ))}

            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: megaMenus[activeMenu].promos.length === 3 ? "1fr 1fr" : "1fr" }}>
              {megaMenus[activeMenu].promos.map((promo, idx) => (
                <Link
                  key={promo.title}
                  to={activeMenu === "sale" ? "/sale" : `${megaMenus[activeMenu].routePrefix}/new-arrivals`}
                  style={{
                    textDecoration: "none",
                    borderRadius: "16px",
                    minHeight: megaMenus[activeMenu].promos.length === 3 && idx === 0 ? "280px" : "134px",
                    gridRow: megaMenus[activeMenu].promos.length === 3 && idx === 0 ? "span 2" : "span 1",
                    overflow: "hidden",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.45)), url(${promo.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "12px",
                  }}
                >
                  <p style={{ margin: 0, color: "#fff", fontSize: "30px", fontFamily: "Georgia, serif", lineHeight: 1.1 }}>{promo.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}