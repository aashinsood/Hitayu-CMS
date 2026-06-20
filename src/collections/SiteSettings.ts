import type { CollectionConfig } from 'payload'
import { iconOptions } from '../lib/iconMap'

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'siteName',
    description: 'Global site configuration and home page content',
  },
  fields: [
    // ─── GENERAL ────────────────────────────────────────────────────────────
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'HOSTIKO',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Upload your site logo' },
    },
    {
      name: 'companyDescription',
      type: 'textarea',
      admin: { description: 'Short company description used in footer' },
    },

    // ─── HEADER ─────────────────────────────────────────────────────────────
    {
      name: 'headerInfo',
      type: 'group',
      label: 'Header Info',
      fields: [
        { name: 'email', type: 'text', defaultValue: 'info@hitayu.com' },
        { name: 'phone', type: 'text', defaultValue: '+91 98765 43210' },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            {
              name: 'icon',
              type: 'text',
              required: true,
              admin: { description: 'Emoji or text symbol (e.g. in, 𝕏, f)' },
            },
          ],
        },
      ],
    },
    {
      name: 'navigation',
      label: 'Navigation Menu',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'openInNewTab', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'headerButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Sign In' },
        { name: 'url', type: 'text', defaultValue: '/signin' },
        { name: 'openInNewTab', type: 'checkbox', defaultValue: false },
      ],
    },

    // ─── HERO SECTION ────────────────────────────────────────────────────────
    {
      name: 'heroSection',
      type: 'group',
      label: '🏠 Hero Section',
      fields: [
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'AWS Powered Cloud Hosting',
          admin: { description: 'Small badge text above the title' },
        },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Managed AWS Hosting\nBuilt For Speed,\nSecurity & Scale',
          admin: { description: 'Main heading. Use line breaks for multi-line display.' },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Deploy your website on enterprise-grade AWS infrastructure with lightning-fast performance, daily backups and 24/7 expert support.',
        },
        { name: 'primaryButtonText', type: 'text', defaultValue: 'Get Started' },
        { name: 'primaryButtonUrl', type: 'text', defaultValue: '#' },
        { name: 'secondaryButtonText', type: 'text', defaultValue: 'View Plans' },
        { name: 'secondaryButtonUrl', type: 'text', defaultValue: '#pricing' },
        {
          name: 'heroImageUrl',
          type: 'text',
          label: 'Hero Image URL',
          defaultValue:
            'https://wp.xpeedstudio.com/hostinza/wp-content/uploads/revslider/home-04/banner_image-41.png',
          admin: { description: 'External image URL for hero section' },
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image (Upload)',
          admin: { description: 'Uploaded image overrides the URL field above' },
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          admin: { description: 'Small stats shown below buttons (e.g. 99.99% Uptime)' },
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // ─── STATS COUNTER SECTION ───────────────────────────────────────────────
    {
      name: 'statsSection',
      type: 'group',
      label: '📊 Stats Counter Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show this section',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Counter Stats',
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { description: 'e.g. 500+' },
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: { description: 'e.g. Happy Clients' },
            },
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Users',
            },
          ],
        },
      ],
    },

    // ─── WHY CHOOSE SECTION ──────────────────────────────────────────────────
    {
      name: 'whyChooseSection',
      type: 'group',
      label: '✅ Why Choose Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'WHY CHOOSE HITAYU' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Enterprise Grade\nCloud Infrastructure',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Power your applications with secure AWS hosting designed for businesses that demand reliability and performance.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Cards',
          fields: [
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Zap',
            },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ─── SERVICES SECTION ────────────────────────────────────────────────────
    {
      name: 'servicesSection',
      type: 'group',
      label: '🛠 Services Section',
      admin: {
        description:
          'Section heading/intro — actual service cards are managed in the Services collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'OUR SERVICES' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Hosting Solutions\nBuilt For Growth',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Powerful AWS-powered hosting services designed to keep your business online and growing.',
        },
      ],
    },

    // ─── AWS / ABOUT SECTION ─────────────────────────────────────────────────
    {
      name: 'awsSection',
      type: 'group',
      label: '☁️ AWS Infrastructure Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'AWS POWERED' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Enterprise Cloud\nInfrastructure',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Powered by Amazon Web Services, our cloud platform delivers unmatched reliability, scalability and security for businesses of all sizes.',
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Explore AWS Hosting' },
        { name: 'buttonUrl', type: 'text', defaultValue: '#' },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Section Image URL',
          defaultValue: 'https://localhost.pixellyo.com/html/assets/img/about-img-7.png',
        },
        {
          name: 'sectionImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Section Image (Upload)',
          admin: { description: 'Upload overrides the URL above' },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Bullets',
          fields: [
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Globe',
            },
            { name: 'title', type: 'text', required: true },
          ],
        },
      ],
    },

    // ─── HOW IT WORKS SECTION ────────────────────────────────────────────────
    {
      name: 'howItWorksSection',
      type: 'group',
      label: '⚙️ How It Works Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show this section',
        },
        { name: 'tag', type: 'text', defaultValue: 'HOW IT WORKS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Get Started In\n3 Simple Steps',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Set up your hosting in minutes with our streamlined onboarding process.',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps',
          fields: [
            {
              name: 'stepNumber',
              type: 'text',
              required: true,
              admin: { description: 'e.g. 01' },
            },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Package',
            },
          ],
        },
      ],
    },

    // ─── PRICING SECTION ─────────────────────────────────────────────────────
    {
      name: 'pricingSection',
      type: 'group',
      label: '💳 Pricing Section',
      admin: {
        description:
          'Section heading — actual pricing cards are managed in Pricing Plans collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'PRICING PLANS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Choose The Perfect\nHosting Plan',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Transparent pricing with no hidden fees. Cancel anytime.',
        },
      ],
    },

    // ─── FAQ SECTION ─────────────────────────────────────────────────────────
    {
      name: 'faqSection',
      type: 'group',
      label: '❓ FAQ Section',
      admin: {
        description: 'Section heading — FAQ items are managed in the FAQs collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'FAQ' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Frequently Asked\nQuestions',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Everything you need to know about our AWS hosting services.',
        },
      ],
    },

    // ─── CTA SECTION ─────────────────────────────────────────────────────────
    {
      name: 'ctaSection',
      type: 'group',
      label: '🚀 CTA (Call-To-Action) Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'AWS Powered Hosting' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Ready To Launch\nOn AWS Infrastructure?',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Get secure, scalable and high-performance hosting backed by AWS cloud technology and expert support.',
        },
        { name: 'primaryButtonText', type: 'text', defaultValue: 'Get Started' },
        { name: 'primaryButtonUrl', type: 'text', defaultValue: '#' },
        { name: 'secondaryButtonText', type: 'text', defaultValue: 'Contact Sales' },
        { name: 'secondaryButtonUrl', type: 'text', defaultValue: '#contact' },
      ],
    },

    // ─── TESTIMONIALS SECTION ────────────────────────────────────────────────
    {
      name: 'testimonialsSection',
      type: 'group',
      label: '⭐ Testimonials Section',
      admin: {
        description:
          'Section heading — testimonial cards are managed in the Testimonials collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'TESTIMONIALS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'What Our Customers\nAre Saying',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Trusted by hundreds of businesses across India and beyond.',
        },
      ],
    },

    // ─── CONTACT SECTION ─────────────────────────────────────────────────────
    {
      name: 'contactSection',
      type: 'group',
      label: '📞 Contact Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'CONTACT US' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: "Let's Talk About\nYour Hosting Needs",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Our cloud hosting experts are ready to help you choose the perfect AWS hosting solution.',
        },
        { name: 'formTitle', type: 'text', defaultValue: 'Request A Callback' },
      ],
    },


    // ─── ABOUT US PAGE ──────────────────────────────────────────────────────
    {
      name: 'aboutPage',
      type: 'group',
      label: '🏢 About Us Page',
      fields: [
        { name: 'eyebrow', type: 'text', defaultValue: 'About Hitayu' },
        { name: 'titleLine1', type: 'text', label: 'Title (line 1)', defaultValue: 'Reimagine, digitize, and realize better' },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted)', defaultValue: 'business outcomes' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.',
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Section Image URL',
          defaultValue: 'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/new-header.png',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Uploaded image overrides the URL above' },
        },
        { name: 'badge1Title', type: 'text', defaultValue: 'Award Winning' },
        { name: 'badge1Sub', type: 'text', defaultValue: 'Best IT Partner 2024' },
        { name: 'badge2Title', type: 'text', defaultValue: 'ISO 27001' },
        { name: 'badge2Sub', type: 'text', defaultValue: 'Security Certified' },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Highlights',
          minRows: 3,
          maxRows: 3,
          defaultValue: [
            { icon: 'fas fa-rocket', title: 'Enabling Agility, Empowering Growth' },
            { icon: 'fas fa-star', title: 'Commitment to Quality' },
            { icon: 'fas fa-users-cog', title: 'Skilled, Dedicated Team' },
          ],
          fields: [
            { name: 'icon', type: 'text', defaultValue: 'fas fa-rocket', admin: { description: 'Font Awesome class, e.g. fas fa-rocket' } },
            { name: 'title', type: 'text', required: true },
          ],
        },
        { name: 'ctaText', type: 'text', defaultValue: 'Partner with Us' },
        { name: 'ctaUrl', type: 'text', defaultValue: '#contact' },

        // ── Agility section (full statement — shown on /about page) ──
        { name: 'agilityTitle', type: 'text', defaultValue: 'Enabling Agility, Empowering Growth' },
        {
          name: 'agilityDescription',
          type: 'textarea',
          defaultValue:
            'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today\'s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.',
        },
        {
          name: 'agilityImageUrl',
          type: 'text',
          label: 'Agility Section Image URL',
          defaultValue: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
        },
        {
          name: 'agilityImage',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Uploaded image overrides the URL above' },
        },

        // ── Mission / Vision / Values ──
        { name: 'mvvEyebrow', type: 'text', defaultValue: 'Our Foundation' },
        { name: 'mvvTitleLine1', type: 'text', defaultValue: 'Mission, Vision &' },
        { name: 'mvvTitleHighlight', type: 'text', defaultValue: 'Values' },
        {
          name: 'mission',
          type: 'textarea',
          defaultValue:
            'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.',
        },
        {
          name: 'vision',
          type: 'textarea',
          defaultValue:
            'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.',
        },
        {
          name: 'values',
          type: 'textarea',
          defaultValue:
            'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients\' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.',
        },
      ],
    },

    // ─── CAREERS PAGE ───────────────────────────────────────────────────────
    {
      name: 'careersPage',
      type: 'group',
      label: '💼 Careers Page',
      fields: [
        // Hero / Intro
        { name: 'eyebrow', type: 'text', defaultValue: 'Careers' },
        { name: 'titleLine1', type: 'text', label: 'Title (line 1)', defaultValue: 'Build Your' },
        { name: 'titleHighlight', type: 'text', label: 'Title (highlighted)', defaultValue: 'Future' },
        { name: 'titleLine2', type: 'text', label: 'Title (line 2, after highlight)', defaultValue: 'with Hitayu' },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            "At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you're an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You'll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development.",
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Section Image URL',
          defaultValue: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Uploaded image overrides the URL above' },
        },

        // Why Join Us — benefits
        { name: 'benefitsEyebrow', type: 'text', defaultValue: 'Why Join Us?' },
        { name: 'benefitsTitle', type: 'text', defaultValue: 'Benefits & Culture' },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefit Cards',
          minRows: 1,
          defaultValue: [
            {
              icon: 'fas fa-chart-line',
              title: 'Growth Opportunities',
              description: 'We invest in your development through training, mentorship, and hands-on experience.',
            },
            {
              icon: 'fas fa-lightbulb',
              title: 'Innovative Work',
              description: 'Be part of projects that leverage the latest in cloud, data, and digital transformation technologies.',
            },
            {
              icon: 'fas fa-users',
              title: 'Collaborative Culture',
              description: 'Work in a team-oriented environment where your ideas are valued.',
            },
            {
              icon: 'fas fa-balance-scale',
              title: 'Flexible Work Environment',
              description: 'We support work-life balance and modern ways of working.',
            },
            {
              icon: 'fas fa-rocket',
              title: 'Impactful Careers',
              description: 'Contribute to solutions that help businesses grow and succeed.',
            },
          ],
          fields: [
            { name: 'icon', type: 'text', defaultValue: 'fas fa-star', admin: { description: 'Font Awesome class, e.g. fas fa-chart-line' } },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },

        // Who we're looking for — traits
        { name: 'traitsEyebrow', type: 'text', defaultValue: "Who We're Looking For" },
        {
          name: 'traitsTitle',
          type: 'text',
          defaultValue: "We're always on the lookout for passionate individuals who are:",
        },
        {
          name: 'traits',
          type: 'array',
          label: 'Traits',
          minRows: 1,
          defaultValue: [
            { text: 'Curious and eager to learn' },
            { text: 'Problem-solvers with a proactive mindset' },
            { text: 'Team players with strong communication skills' },
            { text: 'Driven to deliver high-quality results' },
          ],
          fields: [{ name: 'text', type: 'text', required: true }],
        },

        // Closing CTA
        { name: 'ctaTitle', type: 'text', defaultValue: 'Join Our Team' },
        {
          name: 'ctaDescription',
          type: 'textarea',
          defaultValue:
            "If you're ready to take the next step in your career and be part of a forward-thinking organization, we'd love to hear from you.",
        },
        { name: 'ctaButtonText', type: 'text', defaultValue: 'Get In Touch' },
        { name: 'ctaButtonUrl', type: 'text', defaultValue: '/contact' },
        { name: 'careersEmail', type: 'text', defaultValue: 'careers@hitayu.com' },
      ],
    },

    // ─── CONTACT PAGE ───────────────────────────────────────────────────────
    {
  name: 'contactHomePage',
  type: 'group',
  label: '📇 Contact Page',
  fields: [
    {
      name: 'pageEyebrow',
      type: 'text',
      label: 'Banner Eyebrow',
      defaultValue: 'Get In Touch',
    },
    {
      name: 'pageTitle',
      type: 'text',
      label: 'Banner Title',
      defaultValue: 'Contact Us',
    },
    {
      name: 'officesEyebrow',
      type: 'text',
      label: 'Offices Eyebrow',
      defaultValue: 'Our Offices',
    },
    {
      name: 'officesTitle',
      type: 'text',
      label: 'Offices Section Title',
      defaultValue: 'All Locations',
    },
    {
      name: 'locations',
      type: 'array',
      label: 'Office Locations',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'e.g. Dubai UAE, Bengaluru India',
          },
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          admin: { description: 'Leave blank to use the global phone number above' },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'Office photo (uploaded)' },
        },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Office Photo URL',
          admin: { description: 'Used if no uploaded photo is set above' },
        },
        {
          name: 'icon',
          type: 'text',
          defaultValue: 'fas fa-map-marker-alt',
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'text',
      defaultValue: 'Mon–Fri: 9 AM – 6 PM IST',
    },
    {
      name: 'emergencySupport',
      type: 'text',
      defaultValue: '24 × 7 × 365',
    },
  ],
},

    // ─── FOOTER ──────────────────────────────────────────────────────────────
    { name: 'footerAddress', type: 'text' },
    { name: 'footerPhone', type: 'text' },
    { name: 'footerEmail', type: 'text' },
    { name: 'contactEmail', type: 'text' },
    { name: 'contactPhone', type: 'text' },
    { name: 'contactAddress', type: 'textarea' },
    {
      name: 'contactPhoneHours',
      type: 'text',
      defaultValue: 'Mon-Fri, 9AM-6PM EST',
    },

    // ─── LEGACY FIELDS (kept for backward compat) ───────────────────────────
    { name: 'heroTitle', type: 'text' },
    { name: 'heroDescription', type: 'textarea' },
  ],
}
