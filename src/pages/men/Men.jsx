import { Link } from "react-router-dom";

const sectionLinks = {
  collections: ["ALLBIRDS X PANTONE", "DASHER NZ COLLECTION", "TERRALUX COLLECTION", "VARSITY COLLECTION", "NEW ARRIVALS", "BESTSELLERS"],
  shoes: ["Shop All", "Sneakers", "Slip Ons", "Slippers", "All-Weather", "Sandals"],
  favorites: ["Tree Runner NZ", "Canvas Cruiser", "The Original Tree Runner", "Varsity", "Dasher NZ", "Cruiser"],
  apparel: ["Socks", "Apparel", "Bags", "Laces", "Insoles"],
};

export default function Men() {
  const wrapper = { maxWidth: "1240px", margin: "0 auto", padding: "12px 10px 30px", fontFamily: "'Helvetica Neue', Arial, sans-serif" };
  const whiteBar = { background: "#fff", borderRadius: "14px", padding: "14px 20px", display: "flex", justifyContent: "center", gap: "36px", marginBottom: "10px" };
  const tab = { color: "#6f6f6f", textDecoration: "none", fontSize: "22px" };
  const activeTab = { ...tab, color: "#111", fontWeight: 600 };
  const panel = { background: "#f4f2ea", borderRadius: "14px", padding: "22px 0", marginBottom: "10px" };

  return (
    <div style={wrapper}>
      <div style={whiteBar}>
        <Link to="/men/shoes" style={activeTab}>Shoes</Link>
        <Link to="/men/socks-apparel" style={tab}>Socks & Apparel</Link>
        <Link to="/sale" style={tab}>Sale</Link>
      </div>

      <div style={panel}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1.2fr 1.2fr 2fr", gap: "18px", padding: "0 14px" }}>
          <div>{sectionLinks.collections.map((it) => <Link key={it} to={`/men/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "14px", color: "#111", textDecoration: "none", fontSize: "13px", fontWeight: 700 }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>MEN'S SHOES</p>{sectionLinks.shoes.map((it) => <Link key={it} to={`/men/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>CUSTOMER FAVORITES</p>{sectionLinks.favorites.map((it) => <Link key={it} to={`/men/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>APPAREL & ACCESSORIES</p>{sectionLinks.apparel.map((it) => <Link key={it} to={`/men/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ borderRadius: "18px", minHeight: "280px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "14px", bottom: "14px", margin: 0, color: "#fff", fontSize: "34px", fontFamily: "Georgia, serif" }}>CANVAS CRUISER</p></div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "10px" }}>
              <div style={{ borderRadius: "18px", minHeight: "135px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "12px", bottom: "12px", margin: 0, color: "#fff", fontSize: "28px", fontFamily: "Georgia, serif" }}>MEN'S NEW ARRIVALS</p></div>
              <div style={{ borderRadius: "18px", minHeight: "135px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "12px", bottom: "12px", margin: 0, color: "#fff", fontSize: "30px", fontFamily: "Georgia, serif" }}>MEN'S SALE</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
