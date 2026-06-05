type PageAction = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
}

type PageCard = {
  title: string
  text: string
}

type PageFeature = {
  title: string
  text: string
  badge?: string
}

type PageStat = {
  value: string
  label: string
  detail?: string
}

type PageHero = {
  actions: PageAction[]
  kicker: string
  text: string
  title: string
}

type PageStory = {
  kicker: string
  text: string
  title: string
}

type PageCTA = {
  href: string
  label: string
  text: string
  title: string
}

type PricingPlan = {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  isPopular?: boolean
}

type ContactDetail = {
  title: string
  value: string
  description: string
}

type FAQItem = {
  question: string
  answer: string
}

export async function getAboutPageData() {
  return {
    hero: {
      actions: [
        { href: '/pricing', label: 'View Plans' },
        { href: '/contact', label: 'Talk to Us', variant: 'secondary' },
      ],
      kicker: 'About Hitayu',
      text: 'Hitayu gives businesses a stronger digital foundation: fast hosting, cleaner setup, practical support, and infrastructure that keeps working when your website matters most.',
      title: 'Reliable hosting for teams that want speed, security, and peace of mind.',
    } satisfies PageHero,
    story: {
      kicker: 'Our approach',
      text: 'We combine performance-focused infrastructure with a calm service mindset. Our goal is to remove hosting confusion, keep your website stable, and give your team the confidence to publish, promote, and grow without worrying about the server behind it.',
      title: 'Hosting should be powerful in the background and simple in your hands.',
    } satisfies PageStory,
    cards: [
      {
        title: 'Infrastructure with discipline',
        text: 'Every hosting setup is planned for stability first, so your website can handle daily traffic, launches, and unexpected spikes with confidence.',
      },
      {
        title: 'Support that feels human',
        text: 'We explain the technical side clearly, solve practical issues quickly, and help you make better decisions for your website.',
      },
      {
        title: 'Built for long-term growth',
        text: 'From domain setup to managed hosting, our services are designed to grow with your business instead of slowing it down.',
      },
    ] satisfies PageCard[],
    stats: [
      {
        value: '99.99%',
        label: 'Uptime guarantee',
        detail: 'Backed by infrastructure monitoring and failover.',
      },
      {
        value: '24/7',
        label: 'Support coverage',
        detail: 'Fast answers from hosting specialists.',
      },
      {
        value: '3.2s',
        label: 'Average setup time',
        detail: 'Onboarding and launch support included.',
      },
      {
        value: '500+',
        label: 'Websites supported',
        detail: 'From first launches to growing business sites.',
      },
    ] satisfies PageStat[],
    proof: {
      items: [
        'Secure hosting environments for growing brands and active websites',
        'Simple control panels that make everyday updates easier for teams',
        'Performance-first infrastructure with room for more traffic and content',
        'Helpful support for setup, migration, maintenance, and launch planning',
      ],
      kicker: 'What we care about',
      title: 'Clean setup, clear service, and a hosting foundation that grows with your ambition.',
    },
    cta: {
      href: '/contact',
      label: 'Start a Conversation',
      text: 'Tell us about your website, traffic, and goals. We will help you shape a hosting setup that feels stable today and ready for tomorrow.',
      title: 'Ready to make your website faster, safer, and easier to manage?',
    } satisfies PageCTA,
  }
}

export async function getServicesPageData() {
  return {
    hero: {
      actions: [
        { href: '/pricing', label: 'Compare Plans' },
        { href: '/contact', label: 'Ask for Help', variant: 'secondary' },
      ],
      kicker: 'Services',
      text: 'From hosting and migration to security and performance, our services help your website run smoothly while your team focuses on customers and content.',
      title: 'Complete hosting services for websites that need to stay fast, secure, and online.',
    } satisfies PageHero,
    story: {
      kicker: 'How we help',
      text: 'We handle the operational work behind a reliable website: setup, migration, performance, security, DNS, and support. Each service is designed to reduce friction for founders, agencies, and growing business teams.',
      title: 'Everything starts with a foundation your business can trust.',
    } satisfies PageStory,
    cards: [
      {
        title: 'Managed Web Hosting',
        text: 'Fast, secure hosting for business websites, landing pages, portfolios, and content-heavy experiences that need dependable uptime.',
      },
      {
        title: 'Domain & DNS Setup',
        text: 'Clean domain configuration, DNS guidance, SSL setup, and practical launch support for new or existing websites.',
      },
      {
        title: 'Website Migration',
        text: 'Move your website to a better hosting environment with careful planning, less downtime, and fewer technical surprises.',
      },
      {
        title: 'Performance Tuning',
        text: 'Improve loading speed, stability, and reliability with infrastructure-first optimization.',
      },
      {
        title: 'SSL & Security',
        text: 'Secure certificates, basic hardening, and monitoring support to keep your site trusted.',
      },
      {
        title: 'CMS Support',
        text: 'Hosting guidance for CMS-backed websites that need smooth publishing and stable admin access.',
      },
    ] satisfies PageCard[],
    features: [
      {
        title: 'Managed Hosting + Peace of mind',
        text: 'We monitor your website, manage the server, and keep your hosting environment tuned for reliability.',
        badge: 'Core',
      },
      {
        title: 'Migration without downtime',
        text: 'We move your site carefully, test the new environment, and keep the transition smooth for visitors and editors.',
        badge: 'Fast',
      },
      {
        title: 'Performance and caching',
        text: 'Site speed tuning, image optimization, and cache setup for better page load performance.',
        badge: 'Smart',
      },
      {
        title: 'SSL, DNS, and launch support',
        text: 'Domain setup, SSL certificates, and launch-day readiness for modern websites.',
        badge: 'Secure',
      },
    ] satisfies PageFeature[],
    proof: {
      items: [
        'Hosting plans built for real business traffic',
        'Migration help for teams moving from another provider',
        'Support for launch days, campaigns, and content updates',
        'Simple service paths from domain to live website',
      ],
      kicker: 'Service promise',
      title:
        'Clear guidance, reliable setup, and support that keeps your website moving without drama.',
    },
    cta: {
      href: '/contact',
      label: 'Plan My Setup',
      text: 'Tell us what you are building, moving, or fixing. We will help you choose the right hosting service and next step.',
      title: 'Need help choosing the right hosting service?',
    } satisfies PageCTA,
  }
}

export async function getPricingPageData() {
  return {
    hero: {
      actions: [
        { href: '/contact', label: 'Get Started' },
        { href: '/services', label: 'Explore Services', variant: 'secondary' },
      ],
      kicker: 'Pricing',
      text: 'Choose a plan that fits your website today, with clear upgrade paths when you need more performance, support, storage, or traffic capacity.',
      title: 'Simple hosting pricing with enough power for every stage of growth.',
    } satisfies PageHero,
    plans: [
      {
        name: 'Starter',
        price: '$2.99',
        period: '/mo',
        description:
          'A simple, reliable foundation for small websites, landing pages, and early business projects.',
        features: ['1 website', 'SSL included', 'SSD storage', 'Basic support'],
      },
      {
        name: 'Business',
        price: '$7.99',
        period: '/mo',
        description:
          'Balanced hosting for growing businesses, active content teams, and websites with regular traffic.',
        features: [
          'Multiple websites',
          'Priority support',
          'Daily backups',
          'Performance monitoring',
        ],
        isPopular: true,
      },
      {
        name: 'Scale',
        price: '$14.99',
        period: '/mo',
        description:
          'Extra capacity and expert support for high-traffic websites, campaigns, and important launches.',
        features: [
          'Advanced resources',
          'Migration support',
          'Security guidance',
          'Launch support',
        ],
      },
    ] satisfies PricingPlan[],
    features: [
      {
        title: 'Clear pricing for every stage',
        text: 'No hidden fees, no surprise add-ons. Pick the plan that matches your website and upgrade when you need more.',
      },
      {
        title: 'Fast provisioning',
        text: 'Sites go live quickly with a setup process built around speed and simplicity.',
      },
      {
        title: 'Built-in security',
        text: 'SSL, firewall basics, and safe defaults are included in every plan.',
      },
      {
        title: 'Simple upgrades',
        text: 'Expand resources, support, or migration help without changing providers.',
      },
    ] satisfies PageFeature[],
    story: {
      kicker: 'Flexible by design',
      text: 'Every plan is shaped around the same promise: give your website a steady home, keep setup understandable, and make upgrades simple when your traffic, content, or business demands more.',
      title: 'No confusing bundles, just a clean hosting path for your website.',
    } satisfies PageStory,
    cta: {
      href: '/contact',
      label: 'Ask About Plans',
      text: 'Share your website size, traffic expectations, CMS needs, and support requirements. We will recommend the plan that makes sense.',
      title: 'Not sure which hosting plan fits your website?',
    } satisfies PageCTA,
  }
}

export async function getContactPageData() {
  return {
    hero: {
      actions: [
        { href: 'mailto:info@hitayuhostmail.com', label: 'Email Us' },
        { href: '/services', label: 'View Services', variant: 'secondary' },
      ],
      kicker: 'Contact',
      text: 'Tell us about your website, migration, launch, or hosting issue. We will help you understand the best next step and move with clarity.',
      title: 'Let us make your hosting setup faster, clearer, and easier to manage.',
    } satisfies PageHero,
    story: {
      kicker: 'Before you write',
      text: 'Useful details include your current hosting provider, website type, traffic expectations, launch timeline, CMS setup, and whether you need migration support. A little context helps us respond faster.',
      title: 'A clear request helps us give you a better answer.',
    } satisfies PageStory,
    details: [
      {
        title: 'Email',
        value: 'info@hitayuhostmail.com',
        description: 'Send project details or ask for a guided hosting recommendation.',
      },
      {
        title: 'Phone',
        value: '+971 234 567 86',
        description: 'Talk to our team for fast answers and hosting guidance.',
      },
      {
        title: 'Response',
        value: 'Same business day',
        description: 'We aim to reply quickly with a concrete next step for your website.',
      },
    ] satisfies ContactDetail[],
    faq: [
      {
        question: 'How fast can you migrate a website?',
        answer:
          'Most migrations complete within 2–3 business days, depending on the complexity of the site and the current host.',
      },
      {
        question: 'Can I switch plans later?',
        answer:
          'Yes. Every plan is designed to upgrade smoothly as your website traffic and needs increase.',
      },
      {
        question: 'Do you support CMS websites?',
        answer:
          'Absolutely. We support content management systems, storefronts, marketing sites, and custom web applications.',
      },
    ] satisfies FAQItem[],
    cta: {
      href: '/pricing',
      label: 'Review Pricing',
      text: 'Want to compare options first? Review the plans, think about your website needs, and come back when you are ready to talk.',
      title: 'Still choosing the right hosting plan?',
    } satisfies PageCTA,
  }
}
