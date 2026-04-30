import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const s = {
    footer: {
      background: "#1a1a1a",
      color: "#fff",
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    },
    topSection: {
      display: "flex",
      justifyContent: "space-between",
      padding: "60px 48px 40px",
      flexWrap: "wrap",
      gap: "40px",
    },
    subscribeBlock: {
      flex: "0 0 320px",
      maxWidth: "340px",
    },
    subscribeTitle: {
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "28px",
    },
    emailForm: {
      display: "flex",
      alignItems: "center",
      background: "#fff",
      borderRadius: "50px",
      overflow: "hidden",
      padding: "4px 4px 4px 20px",
    },
    emailInput: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: "14px",
      color: "#1a1a1a",
      padding: "10px 0",
    },
    signupBtn: {
      background: "#1a1a1a",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      padding: "10px 20px",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1.5px",
      textTransform: "uppercase",
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    linksBlock: {
      display: "flex",
      gap: "48px",
      flexWrap: "wrap",
    },
    column: {
      minWidth: "120px",
    },
    columnTitle: {
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "24px",
    },
    columnLink: {
      display: "block",
      fontSize: "14px",
      color: "#aaa",
      textDecoration: "none",
      marginBottom: "16px",
      fontWeight: "400",
      lineHeight: "1.4",
    },
    divider: {
      height: "1px",
      background: "#333",
      margin: "0 48px",
    },
    socialSection: {
      padding: "40px 48px",
    },
    socialTitle: {
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: "20px",
    },
    socialIcons: {
      display: "flex",
      gap: "12px",
      marginBottom: "48px",
    },
    socialIcon: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "1.5px solid #555",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
    },
    bottomMeta: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "40px",
    },
    bCorpBox: {
      border: "1.5px solid #555",
      borderRadius: "4px",
      padding: "6px 10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "60px",
    },
    bCorpCertified: {
      fontSize: "9px",
      color: "#aaa",
      letterSpacing: "1px",
      marginBottom: "2px",
    },
    bCorpLetter: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#fff",
      lineHeight: 1,
      fontFamily: "Georgia, serif",
    },
    bCorpSub: {
      fontSize: "8px",
      color: "#aaa",
      letterSpacing: "1.5px",
      marginTop: "2px",
    },
    regionSelector: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "13px",
      color: "#fff",
      cursor: "pointer",
      border: "none",
      background: "transparent",
    },
    bottomBar: {
      borderTop: "1px solid #333",
      padding: "20px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
    },
    copyright: {
      fontSize: "12px",
      color: "#aaa",
    },
    bottomLinks: {
      display: "flex",
      gap: "32px",
      flexWrap: "wrap",
    },
    bottomLink: {
      fontSize: "12px",
      color: "#aaa",
      textDecoration: "none",
    },
  };

  const helpLinks = ["Live Chat", "Call Us", "Text Us", "help@allbirds.com", "FAQ/Contact Us", "Returns/Exchanges"];
  const shopLinks = ["Men's Shoes", "Women's Shoes", "Men's Apparel", "Women's Apparel", "Socks", "Refer a Friend"];
  const companyLinks = ["Store Locator", "Our Story", "Our Materials", "Sustainability", "Investors", "Shoe Care", "Affiliates", "Bulk Orders"];
  const moreLinks = ["Press", "Careers", "Allbirds Responsible Disclosure Program", "California Transparency Act", "Community Offers", "Our Blog", "Patents", "Terms of Use - Wholesale", "Allbirds Global Entities"];

  const socialLinks = [
    { label: "IG", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="0.8" fill="#fff"/></svg> },
    { label: "PI", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.1-2 .1-2.9.2-.8 1.4-5.8 1.4-5.8s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4 .3 1.2 1.2 1.9 2.2 1.9 2.6 0 4.4-2.8 4.4-6.8 0-3.6-2.5-6-6.1-6-4.2 0-6.7 3.1-6.7 6.4 0 1.3.5 2.6 1.1 3.3.1.1.1.3.1.4l-.4 1.7c-.1.2-.2.3-.4.2C4.4 15.2 3 12.7 3 10c0-4.4 3.2-8.5 9.3-8.5 4.9 0 8.7 3.5 8.7 8.1 0 4.9-3 8.8-7.3 8.8-1.4 0-2.8-.7-3.2-1.6l-.9 3.3c-.3 1.2-1.1 2.7-1.7 3.6.5.1 1.1.2 1.6.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg> },
    { label: "FB", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
    { label: "X", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
    { label: "TK", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg> },
    { label: "YT", svg: <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" stroke="none"/></svg> },
  ];

  return (
    <footer style={s.footer}>
      {/* Top Section */}
      <div style={s.topSection}>
        {/* Subscribe */}
        <div style={s.subscribeBlock}>
          <p style={s.subscribeTitle}>Subscribe to our emails</p>
          <div style={s.emailForm}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={s.emailInput}
            />
            <button style={s.signupBtn}>Sign Up</button>
          </div>
        </div>

        {/* Links Columns */}
        <div style={s.linksBlock}>
          {/* HELP */}
          <div style={s.column}>
            <p style={s.columnTitle}>Help</p>
            {helpLinks.map((l) => <a key={l} href="#" style={s.columnLink}>{l}</a>)}
          </div>
          {/* SHOP */}
          <div style={s.column}>
            <p style={s.columnTitle}>Shop</p>
            {shopLinks.map((l) => <a key={l} href="#" style={s.columnLink}>{l}</a>)}
          </div>
          {/* COMPANY */}
          <div style={s.column}>
            <p style={s.columnTitle}>Company</p>
            {companyLinks.map((l) => <a key={l} href="#" style={s.columnLink}>{l}</a>)}
          </div>
          {/* MORE */}
          <div style={s.column}>
            <p style={s.columnTitle}>&nbsp;</p>
            {moreLinks.map((l) => <a key={l} href="#" style={s.columnLink}>{l}</a>)}
          </div>
        </div>
      </div>

      <div style={s.divider} />

      {/* Social + Bottom Meta */}
      <div style={s.socialSection}>
        <p style={s.socialTitle}>Follow the Flock</p>
        <div style={s.socialIcons}>
          {socialLinks.map((icon) => (
            <a key={icon.label} href="#" style={s.socialIcon}>{icon.svg}</a>
          ))}
        </div>

        {/* B Corp + Region */}
        <div style={s.bottomMeta}>
          <div style={s.bCorpBox}>
            <span style={s.bCorpCertified}>Certified</span>
            <span style={s.bCorpLetter}>B</span>
            <span style={s.bCorpSub}>Corporation</span>
          </div>
          <button style={s.regionSelector}>
            SA &nbsp; ▾
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={s.bottomBar}>
        <span style={s.copyright}>© 2025 Allbirds, Inc. All Rights Reserved</span>
        <div style={s.bottomLinks}>
          {["Refund policy", "Privacy policy", "Terms of service", "Accept or Reject All Non-Essential Cookies", "California Transparency Act"].map((l) => (
            <a key={l} href="#" style={s.bottomLink}>{l}</a>
          ))}
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px) {
          .footer-top { flex-direction: column !important; }
        }
        @media (max-width: 600px) {
          .footer-links-block { flex-direction: column !important; gap: 32px !important; }
          .footer-bottom-bar { flex-direction: column !important; align-items: flex-start !important; }
          .footer-bottom-links { flex-direction: column !important; gap: 10px !important; }
        }
      `}</style>
    </footer>
  );
}