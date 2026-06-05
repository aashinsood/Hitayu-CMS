import {
  Cloud,
  Server,
  Shield,
  Database,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cloud,
      title: "AWS Cloud Hosting",
      description:
        "Scalable cloud hosting powered by AWS infrastructure with maximum uptime.",
    },
    {
      icon: Server,
      title: "Managed VPS",
      description:
        "Fully managed virtual servers optimized for performance and security.",
    },
    {
      icon: Database,
      title: "Database Hosting",
      description:
        "Secure and high-performance database solutions with automatic backups.",
    },
    {
      icon: Shield,
      title: "Managed Security",
      description:
        "Advanced protection against attacks, malware, and data loss.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">

        <div className="section-header">
          <span>OUR SERVICES</span>

          <h2>
            Hosting Solutions
            <br />
            Built For Growth
          </h2>

          <p>
            Powerful AWS-powered hosting services designed
            to keep your business online and growing.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <Icon size={42} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a href="#">
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}