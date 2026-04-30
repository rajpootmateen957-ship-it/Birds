export default function AboutPage() {
  const s = {
    page: {
      background: '#f0ece3',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    },
    blogSection: {
      background: '#f0ece3',
      padding: '60px 80px',
    },
    blogGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: '#fff',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    cardImg: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      display: 'block',
    },
    cardBody: {
      padding: '24px',
    },
    cardDate: {
      fontSize: '13px',
      color: '#666',
      marginBottom: '10px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '14px',
      lineHeight: '1.35',
      fontFamily: 'Georgia, serif',
    },
    cardDesc: {
      fontSize: '14px',
      color: '#555',
      lineHeight: '1.6',
    },
    splitSection: {
      display: 'flex',
      minHeight: '500px',
    },
    splitImgWrap: {
      flex: 1,
      overflow: 'hidden',
    },
    splitImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    splitTextWrap: {
      flex: 1,
      background: '#f0ece3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 64px',
      textAlign: 'center',
    },
    splitTitle: {
      fontSize: '32px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '28px',
      fontFamily: 'Georgia, serif',
    },
    splitDesc: {
      fontSize: '15px',
      color: '#444',
      lineHeight: '1.75',
      marginBottom: '32px',
      maxWidth: '420px',
    },
    splitLink: {
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#1a1a1a',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  }

  const blogs = [
    {
      date: 'June 09, 2025',
      title: 'How Casual Sneakers Are Redefining Everyday Style',
      desc: 'The days of formal dress codes and everyday suits are definitely changing—and casual looks have...',
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    },
    {
      date: 'June 24, 2025',
      title: 'How We Got M0.0NSHOT Zero To A 0.0 CO₂e Carbon Footprint:',
      desc: "First, we started by working with The New Zealand Merino Company's regenerative wool program, ZQRX,...",
      img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',
    },
    {
      date: 'June 06, 2025',
      title: 'Podiatrists For Allbirds',
      desc: 'Find out what some podiatrists really think about Allbirds and learn more about why they value the...',
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    },
  ]

  return (
    <div style={s.page}>

      {/* Blog Cards */}
      <div style={s.blogSection}>
        <div style={s.blogGrid}>
          {blogs.map((b, i) => (
            <div key={i} style={s.card}>
              <img src={b.img} alt={b.title} style={s.cardImg} />
              <div style={s.cardBody}>
                <p style={s.cardDate}>{b.date}</p>
                <h3 style={s.cardTitle}>{b.title}</h3>
                <p style={s.cardDesc}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Better Things - Image Left, Text Right */}
      <div style={s.splitSection}>
        <div style={s.splitImgWrap}>
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=80"
            alt="Better Things"
            style={s.splitImg}
          />
        </div>
        <div style={s.splitTextWrap}>
          <h2 style={s.splitTitle}>Better Things</h2>
          <p style={s.splitDesc}>
            We work with—not against—Mother Nature, favoring both recycled and natural
            materials like responsibly-sourced Merino wool, tree fiber, and sugarcane.
            Every choice we make is a step toward a world we could all feel better about living in.
          </p>
          <span style={s.splitLink}>Learn More About Our Materials</span>
        </div>
      </div>

      {/* Better Ways - Text Left, Image Right */}
      <div style={s.splitSection}>
        <div style={{ ...s.splitTextWrap }}>
          <h2 style={s.splitTitle}>Better Ways</h2>
          <p style={s.splitDesc}>
            We innovate with a greater goal in mind: preserving our planet for future
            generations. As a certified B Corp, we use a data-driven approach to invest
            in projects, systems, and tools that maximize our opportunity for positive
            impact, prioritizing progress over perfection.
          </p>
          <span style={s.splitLink}>Learn More About Sustainability</span>
        </div>
        <div style={s.splitImgWrap}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
            alt="Better Ways"
            style={s.splitImg}
          />
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .split-section { flex-direction: column !important; }
        }
      `}</style>
    </div>
  )
}