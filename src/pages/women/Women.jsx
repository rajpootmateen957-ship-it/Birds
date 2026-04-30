import { Link } from "react-router-dom";

const sectionLinks = {
  collections: ["ALLBIRDS X PANTONE", "DASHER NZ COLLECTION", "TERRALUX COLLECTION", "VARSITY COLLECTION", "NEW ARRIVALS", "BESTSELLERS"],
  shoes: ["Shop All", "Sneakers", "Flats", "Slip Ons", "Slippers", "All-Weather", "Sandals"],
  picks: ["Tree Runner NZ", "Canvas Cruiser", "The Original Tree Runner", "Tree Glider", "Tree Breezer", "Dasher NZ", "Varsity"],
  apparel: ["Socks", "Apparel", "Bags", "Laces", "Insoles"],
};

export default function Women() {
  const wrapper = { maxWidth: "1240px", margin: "0 auto", padding: "12px 10px 30px", fontFamily: "'Helvetica Neue', Arial, sans-serif" };
  const whiteBar = { background: "#fff", borderRadius: "14px", padding: "14px 20px", display: "flex", justifyContent: "center", gap: "36px", marginBottom: "10px" };
  const tab = { color: "#6f6f6f", textDecoration: "none", fontSize: "22px" };
  const activeTab = { ...tab, color: "#111", fontWeight: 600 };
  const panel = { background: "#f4f2ea", borderRadius: "14px", padding: "22px 0", marginBottom: "10px" };

  return (
    <div style={wrapper}>
      <div style={whiteBar}>
        <Link to="/women/shoes" style={activeTab}>Shoes</Link>
        <Link to="/women/socks-apparel" style={tab}>Socks & Apparel</Link>
        <Link to="/sale" style={tab}>Sale</Link>
      </div>

      <div style={panel}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.2fr 1.2fr 1.2fr 2fr", gap: "18px", padding: "0 14px" }}>
          <div>{sectionLinks.collections.map((it) => <Link key={it} to={`/women/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "14px", color: "#111", textDecoration: "none", fontSize: "13px", fontWeight: 700 }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>WOMEN'S SHOES</p>{sectionLinks.shoes.map((it) => <Link key={it} to={`/women/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>POPULAR PICKS</p>{sectionLinks.picks.map((it) => <Link key={it} to={`/women/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div><p style={{ marginTop: 0, fontWeight: 700, fontSize: "13px" }}>APPAREL & ACCESSORIES</p>{sectionLinks.apparel.map((it) => <Link key={it} to={`/women/${it.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ display: "block", marginBottom: "12px", color: "#3e3e3e", textDecoration: "none", fontSize: "18px" }}>{it}</Link>)}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div style={{ borderRadius: "18px", minHeight: "280px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1512574792095-4f45f8e9f3f8?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "14px", bottom: "14px", margin: 0, color: "#fff", fontSize: "34px", fontFamily: "Georgia, serif" }}>CANVAS CRUISER</p></div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "10px" }}>
              <div style={{ borderRadius: "18px", minHeight: "135px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "12px", bottom: "12px", margin: 0, color: "#fff", fontSize: "28px", fontFamily: "Georgia, serif" }}>WOMEN'S NEW ARRIVALS</p></div>
              <div style={{ borderRadius: "18px", minHeight: "135px", overflow: "hidden", position: "relative", backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.46)), url(https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80)", backgroundSize: "cover", backgroundPosition: "center" }}><p style={{ position: "absolute", left: "12px", bottom: "12px", margin: 0, color: "#fff", fontSize: "30px", fontFamily: "Georgia, serif" }}>WOMEN'S SALE</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
