import {
  Globe, Smartphone, ShoppingCart, Workflow, Megaphone, Boxes, CodeXml,
  HeartPulse, GraduationCap, Factory, Building2, Shapes,
  MessageSquareText, PencilRuler, Rocket,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Our Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

// Slugs match the old site's /services/<slug> URLs, which now redirect to /services#<slug>.
export const SERVICES = [
  {
    slug: 'web-development', Icon: Globe, title: 'Web Development',
    desc: 'Fast, responsive, search-friendly websites and web apps built to grow your business.',
    points: ['Corporate sites, web apps & SaaS', 'Responsive on every device', 'SEO-optimized from day one', 'React, Next.js & Node.js'],
  },
  {
    slug: 'app-development', Icon: Smartphone, title: 'App Development',
    desc: 'Smooth iOS, Android and hybrid apps backed by secure, scalable systems.',
    points: ['iOS, Android & hybrid apps', 'Flutter, React Native, Kotlin & Swift', 'Built for speed and real-time use', 'Scales without slowing down'],
  },
  {
    slug: 'automation', Icon: Workflow, title: 'Automation',
    desc: 'Hand repetitive work to software — fewer errors, lower costs, faster teams.',
    points: ['Robotic process automation (RPA)', 'Business process & CRM automation', 'Billing & data-entry automation', 'Up to 70% of manual time saved'],
  },
  {
    slug: 'marketing', Icon: Megaphone, title: 'SEO & Marketing',
    desc: 'Campaigns and search strategies that bring the right customers to you.',
    points: ['Search engine optimization', 'Google, Meta & LinkedIn ads', 'Social & email marketing', 'Clear, ROI-focused reporting'],
  },
  {
    slug: 'ecommerce-development', Icon: ShoppingCart, title: 'E-Commerce Development',
    desc: 'Secure online stores and marketplaces designed to turn visitors into buyers.',
    points: ['B2C stores, B2B stores & marketplaces', 'Secure payments (Stripe & more)', 'Easy-to-run admin panel', 'Shopify or fully custom builds'],
  },
  {
    slug: 'customer-software', Icon: Boxes, title: 'Custom Software',
    desc: 'Tailor-made CRM, HRM, ERP and SaaS tools that fit how your business works.',
    points: ['CRM, HRM & ERP systems', 'Web, desktop & cloud software', 'Secure, compliant architecture', 'Grows with your customer base'],
  },
]

export const INDUSTRIES = [
  {
    Icon: ShoppingCart, label: 'Retail & E-commerce',
    desc: 'Online stores, billing and inventory systems that keep stock, sales and customers in sync.',
    examples: ['E-commerce storefronts', 'Billing & checkout', 'Inventory & order management'],
  },
  {
    Icon: HeartPulse, label: 'Healthcare',
    desc: 'Patient intake, appointment booking and records that stay secure and easy to use.',
    examples: ['Patient forms & intake', 'Appointment scheduling', 'Clinic dashboards'],
  },
  {
    Icon: GraduationCap, label: 'Education',
    desc: 'Learning platforms and admin tools that save teachers and staff hours every week.',
    examples: ['Student portals', 'Attendance & fees', 'Online course platforms'],
  },
  {
    Icon: Factory, label: 'Manufacturing',
    desc: 'Production tracking, quality checks and supply-chain visibility from the shop floor up.',
    examples: ['Production tracking', 'Quality control logs', 'Supplier portals'],
  },
  {
    Icon: Building2, label: 'Real Estate',
    desc: 'Listing sites, lead capture and CRM tools that help agents close faster.',
    examples: ['Property listing sites', 'Lead management CRM', 'Tenant portals'],
  },
  {
    Icon: Shapes, label: 'Other Industries',
    desc: "Don't see yours? If it runs on processes, we can make it run better with technology.",
    examples: ['Custom ERPs', 'Booking systems', 'Internal tools'],
  },
]

export const PROCESS = [
  { Icon: MessageSquareText, title: 'Understand Your Needs', desc: 'We learn about your goals, challenges, and vision.' },
  { Icon: PencilRuler, title: 'Plan & Design', desc: 'We create a tailored solution and roadmap.' },
  { Icon: CodeXml, title: 'Build & Test', desc: 'We develop, test, and refine with your feedback.' },
  { Icon: Rocket, title: 'Launch & Support', desc: 'We deploy and stay with you for the long term.' },
]

export const PROJECTS = [
  {
    name: 'Kamigami', type: 'E-commerce', category: 'E-commerce', stack: ['Next.js', 'Prisma', 'PostgreSQL'], shot: 'store', featured: true,
    desc: 'A full e-commerce storefront for collectibles with catalogue, cart, payments and an admin dashboard.',
  },
  {
    name: 'HR Management Portal', type: 'Employee & Access Control', category: 'Business Software', stack: ['.NET', 'React', 'SQL Server'], shot: 'light',
    desc: 'Employee records, attendance and role-based access control in one portal for HR teams.',
  },
  {
    name: 'Alfacure', type: 'Form Automation', category: 'Automation', stack: ['Next.js', 'Google Sheets', 'API'], shot: 'light',
    desc: 'Patient and order forms that flow straight into Google Sheets and notify the team automatically.',
  },
  {
    name: 'JARVIS', type: 'Desktop Assistant', category: 'AI', stack: ['Python', 'Ollama', 'n8n'], shot: 'dark',
    desc: 'A local AI desktop assistant that runs workflows, answers questions and automates daily tasks.',
  },
  {
    name: 'Voxina.online', type: 'Polling Web App', category: 'Web App', stack: [], shot: 'dark',
    desc: 'A real-time polling web application that handled live voting seamlessly and scaled during peak traffic.',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'Tirahut Tech delivered an exceptional polling web application for our platform Voxina.online. The system handled real-time voting seamlessly, scaled perfectly during peak traffic, and exceeded our expectations in performance and UX.',
    name: 'Akhil', role: 'Founder, Voxina.online', img: '/img/akhil.jpg',
  },
  // From the design mockup — replace with real client quotes before launch.
  {
    quote: 'Their automation solution saved us hours of manual work. Very quick, clean code. Highly recommended!',
    name: 'Neha Sharma', role: 'Operations Head, Retail Business',
  },
  {
    quote: "Professional, creative, and super easy to work with. They turned our idea into a real product, and we couldn't be happier.",
    name: 'Rohit Mehta', role: 'CEO, Alfacure',
  },
]

export const STATS = [
  ['10', 'Projects Completed'],
  ['6+', 'Happy Clients'],
  ['24/7', 'Support Available'],
]

export const PRODUCTS = [
  ['CRM', 'Customer relationship management', 'Boost sales • Automate follow-ups • Data analytics'],
  ['HRM', 'Human resources management', 'Employee management • Payroll • Attendance tracking'],
  ['ERP', 'Enterprise resource planning', 'Integrated operations • Inventory • Accounting'],
]

export const POSTS = [
  {
    slug: 'automate-before-you-hire',
    title: 'Automate before you hire: 5 tasks every small business can hand to software',
    category: 'Automation', date: '2026-09-18', read: '6 min read', tone: 'orange', featured: true,
    excerpt: 'Before adding headcount, look at the repetitive work your team does every day. Chances are a workflow can do it faster.',
    body: [
      'Most growing businesses hit the same wall: the team is busy, but a lot of that busyness is copying data between tools, chasing approvals and building the same report every Monday.',
      'Start by listing every task someone does more than once a week. Anything that follows the same steps each time — data entry, invoice reminders, lead routing, report generation, onboarding emails — is a strong candidate for automation.',
      'Tools like n8n or a small custom script can connect your forms, spreadsheets, CRM and email so these tasks happen on their own. The goal is not to replace people, but to free them for work that needs judgement.',
      'Pick one task, automate it end to end, and measure the hours saved. That number usually makes the case for the next one.',
    ],
  },
  {
    slug: 'custom-vs-off-the-shelf',
    title: 'Custom software vs. off-the-shelf: how to decide',
    category: 'Strategy', date: '2026-08-30', read: '5 min read', tone: 'teal',
    excerpt: 'A simple framework for knowing when a SaaS tool is enough and when building your own pays off.',
    body: [
      'Off-the-shelf tools are fast to start with and cheap at first. Custom software takes longer up front but fits the way you actually work.',
      'Choose off-the-shelf when your process is standard and a tool already does 90% of what you need. Choose custom when the process is your competitive edge, when you are paying for many tools to do one job, or when integrations keep breaking.',
      'Often the right answer is a mix: keep the standard tools, and build a thin custom layer that connects them.',
    ],
  },
  {
    slug: 'cloud-costs',
    title: 'Why your cloud bill keeps growing (and how to fix it)',
    category: 'Cloud', date: '2026-08-12', read: '7 min read', tone: 'teal',
    excerpt: 'Idle servers, oversized databases and forgotten storage — the usual suspects behind surprise invoices.',
    body: [
      'Cloud costs grow quietly. A test server left running, a database sized for a launch that never needed it, logs kept forever.',
      'Start with tagging every resource by project and owner, set budget alerts, and review the top five cost lines each month. Rightsizing and scheduled shutdowns for non-production environments often cut bills by a third.',
    ],
  },
  {
    slug: 'design-systems-small-teams',
    title: 'Design systems are not just for big companies',
    category: 'Design', date: '2026-07-25', read: '4 min read', tone: 'orange',
    excerpt: 'Even a small set of shared components and colours makes every new screen faster to build and easier to use.',
    body: [
      'A design system can be as small as a colour palette, a type scale and ten components. That alone removes hundreds of small decisions from every new feature.',
      'Start with the pieces you use most — buttons, inputs, cards — and grow from there.',
    ],
  },
  {
    slug: 'local-ai-assistants',
    title: 'Running AI assistants locally: privacy without the cloud',
    category: 'AI', date: '2026-07-08', read: '6 min read', tone: 'teal',
    excerpt: 'How we built JARVIS with Ollama and n8n to keep business data on your own machines.',
    body: [
      'Not every business wants its documents sent to a third-party AI service. Local models have become good enough for many everyday tasks.',
      'With Ollama running a model on a local machine and n8n orchestrating workflows, an assistant can summarise documents, draft replies and trigger automations — all without data leaving the office.',
    ],
  },
]

export const CONTACT = {
  email: 'tirahuttech@gmail.com',
  phone: '+91 8130654209',
  address: '14th Avenue, Gaur City 2, Greater Noida, Uttar Pradesh – 203201, India',
  landmark: 'Landmark Near D.F. Place',
}

export const SOCIALS = {
  facebook: 'https://www.facebook.com/share/1N3mrzezfA/',
  linkedin: 'https://www.linkedin.com/in/tirahut-tech-7249323a6',
  instagram: 'https://www.instagram.com/tirahut_tech',
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}
