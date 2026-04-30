import { useEffect, useMemo, useState } from "react";

const heroShoes = [
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
];

const products = [
  {
    id: "p1",
    badge: "NEW COLOR",
    name: "MEN'S CANVAS RUNNER NZ",
    color: "Deep Navy Stripes",
    price: "$100",
    swatch: "#9ba4b4",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p2",
    badge: "NEW COLOR",
    name: "WOMEN'S TREE GLIDER",
    color: "Burlwood",
    price: "$140",
    swatch: "#bf9a95",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p3",
    badge: "PANTONE COLOR",
    name: "MEN'S CANVAS CRUISER",
    color: "Cultured Blue",
    price: "$75",
    swatch: "#88a8c0",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p4",
    badge: "NEW COLOR",
    name: "WOMEN'S BREEZER MARY",
    color: "Dusty Pink",
    price: "$95",
    swatch: "#d5b0b0",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p5",
    badge: "NEW ARRIVAL",
    name: "MEN'S TREE DASHER",
    color: "Alloy Gray",
    price: "$125",
    swatch: "#9a9a9a",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "p6",
    badge: "LIMITED",
    name: "WOMEN'S CANVAS LOUNGER",
    color: "Soft Rose",
    price: "$110",
    swatch: "#d7a6ac",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80",
  },
];

const promos = [
  {
    id: "m1",
    title: "SHOP MEN",
    secondary: "SHOP WOMEN",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m2",
    title: "SHOP MEN",
    secondary: "SHOP WOMEN",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "m3",
    title: "SHOP MEN",
    secondary: "SHOP WOMEN",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },
];

const infoCards = [
  {
    id: "i1",
    heading: "WEAR ALL DAY COMFORT",
    text: "Lightweight, bouncy, and wildly comfortable. Allbirds shoes make any outing feel effortless.",
  },
  {
    id: "i2",
    heading: "SUSTAINABILITY IN EVERY STEP",
    text: "From materials to transport, we're reducing our carbon footprint and pushing toward net zero.",
  },
  {
    id: "i3",
    heading: "MATERIALS FROM THE EARTH",
    text: "Natural alternatives like wool, tree fiber, and sugarcane keep shoes breathable and softer.",
  },
];

export default function ArrivalsSection() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hoverCarousel, setHoverCarousel] = useState(false);
  const [hoverHero, setHoverHero] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const visibleCount = useMemo(() => {
    if (screenWidth <= 640) return 1;
    if (screenWidth <= 900) return 2;
    if (screenWidth <= 1180) return 3;
    return 4;
  }, [screenWidth]);

  const maxIndex = Math.max(0, products.length - visibleCount);
  const canPrev = slideIndex > 0;
  const canNext = slideIndex < maxIndex;
  const isMobile = screenWidth <= 640;

  const cardWidth = `${100 / visibleCount}%`;

  return (
    <section
      style={{
        background: "#f3f2ed",
        padding: isMobile ? "22px 8px 26px" : "34px 10px 40px",
      }}
    >
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div
          onMouseEnter={() => setHoverHero(true)}
          onMouseLeave={() => setHoverHero(false)}
          style={{
            marginBottom: "28px",
            position: "relative",
            background: "#efeee8",
            borderRadius: "12px",
            padding: isMobile ? "20px 0 14px" : "26px 0 18px",
            overflow: "hidden",
          }}
        >
          <p style={{ margin: 0, textAlign: "center", fontSize: "27px", letterSpacing: "1.2px" }}>NEW ARRIVALS</p>
          <div style={{ width: "132px", height: "2px", background: "#111", margin: "6px auto 18px" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "0.35fr 1fr 0.35fr" : "0.7fr 1.6fr 0.7fr",
              alignItems: "center",
              minHeight: isMobile ? "175px" : "240px",
            }}
          >
            {heroShoes.map((img, idx) => (
              <div
                key={img}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  opacity: idx === 1 ? 1 : 0.88,
                  transform: idx === 1 ? "scale(1.06)" : "scale(0.92)",
                  transition: "all 250ms ease",
                }}
              >
                <img
                  src={img}
                  alt={`hero shoe ${idx + 1}`}
                  style={{
                    width: idx === 1 ? "100%" : "140%",
                    height: isMobile ? "130px" : "180px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            style={{
              position: "absolute",
              right: isMobile ? "12px" : "34px",
              top: "50%",
              transform: "translateY(-50%)",
              width: isMobile ? "58px" : "92px",
              height: isMobile ? "58px" : "92px",
              borderRadius: "999px",
              border: "1px solid #8a8a8a",
              background: "rgba(220, 220, 220, 0.88)",
              fontSize: isMobile ? "24px" : "34px",
              cursor: "pointer",
              opacity: hoverHero ? 1 : 0,
              pointerEvents: hoverHero ? "auto" : "none",
              transition: "opacity 180ms ease",
            }}
          >
            →
          </button>
        </div>

        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <p
            style={{
              margin: 0,
              fontSize: isMobile ? "44px" : "56px",
              fontFamily: "Georgia, serif",
              color: "#111",
              lineHeight: 1,
            }}
          >
            Canvas Cruiser
          </p>
          <p style={{ margin: "10px 0 14px", fontSize: "14px", color: "#111" }}>
            Cultured Blue (Natural White Sole) &nbsp;&gt;&nbsp; $75
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {["SHOP MEN", "SHOP WOMEN"].map((label) => (
              <button
                key={label}
                type="button"
                style={{
                  border: "1px solid #222",
                  borderRadius: "999px",
                  background: "transparent",
                  padding: "8px 22px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            marginBottom: "18px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "10px",
          }}
        >
          {heroShoes.slice(0, 2).map((img, idx) => (
            <div
              key={img}
              style={{
                background: "#d5d1c8",
                borderRadius: "16px",
                minHeight: isMobile ? "200px" : "290px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    idx === 0
                      ? "linear-gradient(rgba(10,10,10,0.1), rgba(10,10,10,0.35))"
                      : "linear-gradient(rgba(18,47,74,0.15), rgba(18,47,74,0.45))",
                }}
              />
              <img
                src={img}
                alt={`hero shoe ${idx + 1}`}
                style={{
                  width: "95%",
                  height: "82%",
                  objectFit: "contain",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "22px",
                  margin: 0,
                  color: "#fff",
                  fontSize: isMobile ? "34px" : "52px",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1.05,
                }}
              >
                {idx === 0 ? "Bold By Nature" : "allbirds × PANTONE"}
              </p>
            </div>
          ))}
        </div>

        <div
          onMouseEnter={() => setHoverCarousel(true)}
          onMouseLeave={() => setHoverCarousel(false)}
          style={{ position: "relative", marginTop: "20px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <p style={{ margin: 0, fontSize: "30px", letterSpacing: "1px" }}>NEW ARRIVALS</p>
              <div style={{ width: "106px", height: "2px", background: "#111", marginTop: "4px" }} />
            </div>
            {screenWidth > 640 && (
              <div style={{ display: "flex", gap: "8px", opacity: hoverCarousel ? 1 : 0, transition: "opacity 180ms ease" }}>
                <button
                  type="button"
                  disabled={!canPrev}
                  onClick={() => canPrev && setSlideIndex((prev) => prev - 1)}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    border: "1px solid #999",
                    background: canPrev ? "#f3f2ed" : "#e6e4dc",
                    cursor: canPrev ? "pointer" : "not-allowed",
                  }}
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => canNext && setSlideIndex((prev) => prev + 1)}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "999px",
                    border: "1px solid #999",
                    background: canNext ? "#f3f2ed" : "#e6e4dc",
                    cursor: canNext ? "pointer" : "not-allowed",
                  }}
                >
                  {">"}
                </button>
              </div>
            )}
          </div>

          {screenWidth <= 640 && hoverCarousel && (
            <>
              <button
                type="button"
                disabled={!canPrev}
                onClick={() => canPrev && setSlideIndex((prev) => prev - 1)}
                style={{
                  position: "absolute",
                  left: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "999px",
                  border: "1px solid #999",
                  background: "#f3f2ed",
                  opacity: canPrev ? 1 : 0.45,
                }}
              >
                {"<"}
              </button>
              <button
                type="button"
                disabled={!canNext}
                onClick={() => canNext && setSlideIndex((prev) => prev + 1)}
                style={{
                  position: "absolute",
                  right: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "36px",
                  height: "36px",
                  borderRadius: "999px",
                  border: "1px solid #999",
                  background: "#f3f2ed",
                  opacity: canNext ? 1 : 0.45,
                }}
              >
                {">"}
              </button>
            </>
          )}

          <div style={{ overflow: "hidden", marginTop: "18px" }}>
            <div
              style={{
                display: "flex",
                width: `${(products.length / visibleCount) * 100}%`,
                transform: `translateX(-${slideIndex * cardWidth})`,
                transition: "transform 280ms ease",
              }}
            >
              {products.map((item) => (
                <div key={item.id} style={{ width: cardWidth, padding: "0 6px", boxSizing: "border-box" }}>
                  <article
                    style={{
                      background: "#f7f7f7",
                      borderRadius: "14px",
                      padding: "14px 14px 12px",
                      minHeight: "390px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        background: "#dfddd2",
                        color: "#121212",
                        borderRadius: "999px",
                        padding: "6px 10px",
                        fontSize: "12px",
                        letterSpacing: "0.4px",
                      }}
                    >
                      {item.badge}
                    </span>
                    <div style={{ height: "190px", marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <p style={{ margin: "16px 0 4px", fontWeight: 700, fontSize: "13px", lineHeight: 1.2, letterSpacing: "0.4px" }}>{item.name}</p>
                    <p style={{ margin: 0, fontSize: "14px" }}>{item.color}</p>
                    <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "999px",
                          border: "1px solid #555",
                          background: item.swatch,
                        }}
                      />
                      <strong style={{ fontSize: "24px", fontWeight: 600 }}>{item.price}</strong>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "22px",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
          }}
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              style={{
                borderRadius: "16px",
                minHeight: "150px",
                backgroundImage: `linear-gradient(rgba(20,20,20,0.2), rgba(20,20,20,0.35)), url(${promo.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                padding: "12px",
              }}
            >
              <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                {[promo.title, promo.secondary].map((btn) => (
                  <button
                    key={btn}
                    type="button"
                    style={{
                      flex: 1,
                      border: "1px solid rgba(255,255,255,0.75)",
                      borderRadius: "999px",
                      background: "transparent",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: "8px 0",
                      cursor: "pointer",
                    }}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "10px",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
          }}
        >
          {infoCards.map((item) => (
            <article
              key={item.id}
              style={{
                borderRadius: "14px",
                background: "#f7f7f7",
                padding: "20px",
                minHeight: "138px",
              }}
            >
              <p style={{ margin: 0, letterSpacing: "1.4px", fontSize: "12px", fontWeight: 700 }}>{item.heading}</p>
              <p style={{ margin: "12px 0 0", fontSize: "14px", lineHeight: 1.45 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
