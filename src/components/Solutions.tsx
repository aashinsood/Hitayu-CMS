const solutions = [
  { icon: 'fas fa-box-open', tag: 'All-in-One', title: 'SMB-in-a-Box', desc: 'Everything SMBs need in one package — ERP, CRM, Microsoft Office licenses, website hosting, domain registration, and professional onboarding support. Delivered via flexible per-user pricing with 1 year dedicated support.' },
  { icon: 'fas fa-globe', tag: 'Hosting', title: 'Web Hosting Launch Kit', desc: 'Secure, scalable, fully managed hosting — advanced data encryption, professional database management, email support, static and dynamic content delivery, with flexible cloud provider selection.' },
  { icon: 'fas fa-life-ring', tag: 'Resilience', title: 'DR Jumpstart Bundle', desc: 'Guaranteed RTO of 30 minutes and RPO of 15 minutes. Fully managed replication server, real-time data synchronization, continuous monitoring alerts, and audit logging for complete visibility.' },
  { icon: 'fas fa-archive', tag: 'Backup', title: 'Backup Solution Kit', desc: 'Cloud Backup as a Service replacing physical tape libraries. Hot and archival storage tiers, HIPAA & PCI compliant, virtual tape systems in the cloud, and fully managed by our experts.' },
  { icon: 'fas fa-database', tag: 'Data', title: 'Database Starter Kit', desc: 'Greenfield cloud database deployment with minimal downtime. RDS with redundancy, SAP B1 support, automated backups, high-speed transfer, audit logging, and annual performance reports.' },
  { icon: 'fas fa-chart-pie', tag: 'Analytics', title: 'BI Solution Kit', desc: 'Subscription-based cloud BI — data integration from ERP, CRM, APIs & IoT, cloud data warehouse setup, interactive dashboards, automated reporting, and AI-driven insights.' },
]

export default function Solutions() {
  return (
    <section className="ht-section" id="solutions" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-svc-head">
          <div>
            <div className="ht-eyebrow">SMB Solutions</div>
            <h2 className="ht-title ht-reveal">Ready-to-Run Packages for<br /><span className="hi">Small &amp; Medium Businesses</span></h2>
          </div>
          <a href="#contact" className="ht-btn ht-btn-od ht-reveal ht-d2">Get a Quote <i className="fas fa-arrow-right" /></a>
        </div>
        <div className="ht-sol-grid">
          {solutions.map((s, i) => (
            <div key={i} className={`ht-sol-card ht-reveal ht-d${(i % 3) + 1}`}>
              <div className="ht-sol-top">
                <div className="ht-sol-ico"><i className={s.icon} /></div>
                <div>
                  <div className="ht-sol-tag">{s.tag}</div>
                  <h3>{s.title}</h3>
                </div>
              </div>
              <div className="ht-sol-body"><p>{s.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
