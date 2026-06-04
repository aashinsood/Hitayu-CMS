// src/components/HeaderTop.tsx

export default function HeaderTop() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="header-content">
          <div className="header-group">
            <span className="header-icon">✉</span>
            <span>info@hostiko.com</span>
          </div>
          <div className="header-group">
            <span className="header-icon">📍</span>
            <span>King Street Melbourne, Australia</span>
          </div>
          <div className="header-group">
            <span className="header-icon">📞</span>
            <span>+1 (234 567 89)</span>
          </div>
        </div>
        <div className="header-social">
          <a href="#" className="social-link" title="LinkedIn">in</a>
          <a href="#" className="social-link" title="Twitter">𝕏</a>
          <a href="#" className="social-link" title="Facebook">f</a>
        </div>
      </div>
    </div>
  )
}