import Image from 'next/image'

import {
  Globe,
  ShieldCheck,
  Database,
  TrendingUp,
} from "lucide-react";

export default function AWSInfrastructure() {
  const features = [
    {
      icon: Globe,
      title: "Global Infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Auto Scaling",
    },
    {
      icon: Database,
      title: "Daily Backups",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
    },
  ];

  return (
    <section className="aws-section">
      <div className="container">

        <div className="aws-grid">

          <div className="aws-content">
            <span>AWS POWERED</span>

            <h2>
              Enterprise Cloud
              Infrastructure
            </h2>

            <p>
              Powered by Amazon Web Services, our cloud
              platform delivers unmatched reliability,
              scalability and security for businesses
              of all sizes.
            </p>

            <div className="aws-features">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div className="aws-feature" key={index}>
                    <Icon size={24} />
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </div>

            <button className="btn-primary">
              Explore AWS Hosting
            </button>
          </div>

          <div className="aws-image">
            <img
              src="https://localhost.pixellyo.com/html/assets/img/about-img-7.png"
              alt="AWS Cloud"
            />
          </div>

        </div>

      </div>
    </section>
  );
}