import { Link } from "react-router-dom";

export default function Sale() {
  const wrapper = { maxWidth: "1240px", margin: "0 auto", padding: "12px 10px 30px", fontFamily: "'Helvetica Neue', Arial, sans-serif" };

  return (
    <div style={wrapper}>
      <div style={{ background: "#f4f2ea", borderRadius: "14px", padding: "14px 20px", marginBottom: "18px", textAlign: "center", fontSize: "30px", fontWeight: 600 }}>
        All Sale
      </div>

      <div style={{ background: "#f4f2ea", borderRadius: "14px", padding: "24px 14px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.2fr", gap: "20px" }}>
          <div>
            <p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>MEN</p>
            {["All Sale", "Sale Shoes", "Sale Apparel"].map((it) => (
              <Link key={it} to={`/sale/men/${it.toLowerCase().replace(/\s+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "20px" }}>
                {it}
              </Link>
            ))}
          </div>
          <div>
            <p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>WOMEN</p>
            {["All Sale", "Sale Shoes", "Sale Apparel"].map((it) => (
              <Link key={it} to={`/sale/women/${it.toLowerCase().replace(/\s+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "20px" }}>
                {it}
              </Link>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "10px" }}>
            <div style={{ borderRadius: "16px", minHeight: "150px", backgroundImage: "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
              <p style={{ position: "absolute", left: "14px", bottom: "14px", color: "#fff", margin: 0, fontSize: "30px", fontFamily: "Georgia, serif" }}>MEN'S SALE</p>
            </div>
            <div style={{ borderRadius: "16px", minHeight: "150px", backgroundImage: "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
              <p style={{ position: "absolute", left: "14px", bottom: "14px", color: "#fff", margin: 0, fontSize: "30px", fontFamily: "Georgia, serif" }}>WOMEN'S SALE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
