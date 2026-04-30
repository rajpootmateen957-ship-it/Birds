import { useEffect, useState } from "react";

const cards = [
  {
    id: "new-arrivals",
    title: "NEW ARRIVALS",
    cardColor: "#6d8599",
    shoeImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mens",
    title: "MENS",
    cardColor: "#5e5555",
    shoeImage:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "womens",
    title: "WOMENS",
    subtitle: "SHOP WOMEN",
    cardColor: "#8f7472",
    shoeImage:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "best-sellers",
    title: "BEST SELLERS",
    cardColor: "#8f9a8c",
    shoeImage:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
  },
];

const topTiles = [
  {
    id: "t1",
    bgImage:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t2",
    bgImage:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t3",
    bgImage:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t4",
    bgImage:
      "https://images.unsplash.com/photo-1465429103920-a1879239e95f?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t5",
    bgImage:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t6",
    bgImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t7",
    bgImage:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t8",
    bgImage:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t9",
    bgImage:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t10",
    bgImage:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t11",
    bgImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t12",
    bgImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t13",
    bgImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t14",
    bgImage:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "t15",
    bgImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=700&q=80",
    shoeImage:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
];

export default function About() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredTile, setHoveredTile] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 640;
  const isTablet = screenWidth <= 1150;
  const isTopSmall = screenWidth <= 900;

  const sectionStyle = {
    background: "#f5f2ea",
    padding: isMobile ? "14px 8px 24px" : "20px 8px 40px",
  };

  const gridStyle = {
    maxWidth: "1220px",
    margin: "0 auto",
    display: "grid",
    gap: "10px",
    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))",
  };

  return (
    <section style={sectionStyle}>
      <div
        style={{
          maxWidth: "1220px",
          margin: "0 auto 12px",
          display: "grid",
          gap: "10px",
          gridTemplateColumns: isMobile
            ? "repeat(2, minmax(0, 1fr))"
            : isTopSmall
            ? "repeat(3, minmax(0, 1fr))"
            : "repeat(5, minmax(0, 1fr))",
          position: "relative",
        }}
      >
        {topTiles.map((tile) => (
          <div
            key={tile.id}
            onMouseEnter={() => setHoveredTile(tile.id)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              backgroundImage: `linear-gradient(rgba(18, 18, 18, 0.14), rgba(18, 18, 18, 0.14)), url(${tile.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: isMobile ? "140px" : "170px",
              borderRadius: "2px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={tile.shoeImage}
              alt="shoe"
              style={{
                width: "88%",
                height: "74%",
                position: "absolute",
                left: "50%",
                bottom: "-8px",
                transform:
                  hoveredTile === tile.id
                    ? "translateX(-50%) rotate(-2deg) scale(1.05)"
                    : "translateX(-50%) rotate(-4deg)",
                objectFit: "contain",
                transition: "transform 280ms ease",
                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        ))}

        <div
          style={{
            position: "absolute",
            right: isTopSmall ? "12px" : "34px",
            bottom: isTopSmall ? "14px" : "24px",
            color: "#fff",
            textAlign: "right",
            zIndex: 3,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: isMobile ? "22px" : "36px",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            The New Canvas Cruiser Collection
          </p>
          <div style={{ marginTop: "14px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            {["SHOP MEN", "SHOP WOMEN"].map((btn) => (
              <button
                key={btn}
                type="button"
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "9px 18px",
                  background: "#fff",
                  color: "#222",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={gridStyle}>
        {cards.map((card) => (
          <article
            key={card.id}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: "relative",
              height: isMobile ? "310px" : isTablet ? "400px" : "540px",
              borderRadius: hoveredCard === card.id ? "180px" : isTablet ? "24px" : "16px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: card.cardColor,
              transform: hoveredCard === card.id ? "translateY(-3px)" : "translateY(0)",
              transition: "transform 250ms ease, border-radius 280ms ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 40% 5%, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.08))",
              }}
            />

            <img
              src={card.shoeImage}
              alt={`${card.title} shoe`}
              style={{
                width: "min(92%, 310px)",
                height: isMobile ? "32%" : "36%",
                position: "absolute",
                bottom: "34%",
                left: "50%",
                transform:
                  hoveredCard === card.id
                    ? "translateX(-50%) rotate(-4deg) scale(1.06)"
                    : "translateX(-50%) rotate(-6deg) scale(1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.23)",
                transition: "transform 320ms ease",
                objectFit: "contain",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: isMobile ? "26%" : "31%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 2,
                textAlign: "center",
              }}
            >
              <button
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.72)",
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.9px",
                  borderRadius: "999px",
                  padding: "9px 18px",
                  cursor: "pointer",
                }}
                type="button"
              >
                {card.title}
              </button>
              {card.subtitle && (
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#fff",
                    fontSize: isMobile ? "18px" : "22px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {card.subtitle}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
