import biSurveyTool from "../assets/projects/bi survey tool.png";
import kinderscapes from "../assets/projects/Kinderscapes.png";
import insy8 from "../assets/projects/Insy8.png";
import smartMenuPoc from "../assets/projects/smart menu POC.png";
import smartMenuLanding from "../assets/projects/smart menu landing.png";
import peopleMetrics from "../assets/projects/People metrics.png";
import if3 from "../assets/projects/if3.png";

export const HERO_CONTENT = `Designing experiences. Developing solutions. Delivering results. With 3 years of UI/UX design and development experience, I create modern, user-focused products that balance aesthetics, usability, and performance.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Developer / UI/UX Designer",
    company: "Voldumar Technologies PVT LTD",
    points: [
      "Designed and developed enterprise SaaS products, analytics dashboards, and AI-powered applications.",
      "Led UI/UX redesigns for business intelligence and workforce analytics platforms, improving usability and user engagement.",
      "Built responsive frontend applications using React.js, Vue.js, Astro, TypeScript, and Tailwind CSS.",
      "Created scalable design systems, reusable components, and modern dashboard experiences.",
      "Collaborated with cross-functional teams to deliver user-centered digital products from concept to deployment.",
      "Optimized application performance, accessibility, and mobile responsiveness across multiple products.",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Wireframe",
      "Prototype",
      "Design System",
      "Figma Make",
      "Stitch",
      "Lovable",
      "Claude Design",
    ],
  },
  {
    year: "2024 - 2025",
    role: "UI/UX Developer",
    company: "Xyvin Infotech PVT LTD",
    points: [
      "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, including REST API development, secure user authentication, and integrated Stripe payment gateways.",
      "Designed user-centric web and mobile application interfaces using Figma, developing wireframes and interactive prototypes to improve user experience and navigation.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Figma", "Stripe"],
  },
  {
    year: "2024 - 2024",
    role: "Junior Software Developer",
    company: "Neyndra Global Solutions Pvt Ltd.",
    points: [
      "Developed responsive and user-friendly interfaces for an education platform using React, improving usability, accessibility, and user engagement.",
      "Collaborated with cross-functional teams and worked on AEM CMS integrations to ensure seamless content management and platform functionality.",
    ],
    technologies: ["React", "AEM CMS", "Accessibility", "Responsive Design"],
  },
  {
    year: "2021 - 2024",
    role: "Project Coordinator & IT Support",
    company: "LSGD DEPARTMENT, Government of Kerala",
    points: [
      "Managed CFC fund utilization tracking and reporting, ensuring transparency and accurate progress monitoring.",
      "Supported GIS asset mapping and payment processing systems, enabling efficient asset tracking and direct beneficiary payments.",
      "Provided technical support and user assistance for government portals, ensuring smooth operations and system reliability.",
    ],
    technologies: ["GIS", "Reporting", "Payment Systems", "Government Portals"],
  },
];

export const PROJECTS = [
  {
    title: "insy8.ai Smart Menu – Product Landing Page",
    image: smartMenuLanding,
    description:
      "Designed and developed the insy8 Smart Menu product landing page, a conversion-focused marketing site showcasing AI-powered hospitality and digital dining solutions. Built with React and Tailwind CSS to deliver a responsive, visually polished experience with clear product storytelling, feature highlights, and engaging UI interactions.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design", "UI/UX"],
    labels: ["Design", "Development"],
    liveLinks: [
      { label: "View Live", url: "https://www.bizintellis.com/products/insy8-smartmenu/" },
    ],
  },
  {
    title: "Bi Survey Suite Studio",
    image: biSurveyTool,
    description:
      "Designed and developed the UI/UX and frontend for Bi Survey Suite Studio, a business-focused survey and analytics platform that helps organizations collect feedback, analyze data, and gain actionable insights through interactive dashboards and real-time reporting. Built using React, Vite, TypeScript, Tailwind CSS, shadcn/ui, PrimeReact, React Query, and Axios to deliver a scalable, responsive, and user-friendly experience.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "PrimeReact", "React Query", "Axios"],
    labels: ["Design", "Development"],
    liveLinks: [
      { label: "View Live", url: "https://bi-survey-studio-dev.bizintellis.com/auth/login" },
    ],
  },
  {
    title: "Kinder Scapes – Daycare Management Platform",
    image: kinderscapes,
    description:
      "Designed and developed the Kinder Scapes Daycare Management Software Landing Page using React.js, creating a modern, responsive, and conversion-focused user experience. Additionally, led the product revamp in Vue.js, improving usability, visual consistency, and overall user experience across the daycare management platform for administrators, teachers, and parents.",
    technologies: ["React.js", "Vue.js", "Responsive Design", "UI/UX"],
    labels: ["Design", "Development"],
    liveLinks: [
      { label: "View Live", url: "https://demoweb.kinderscapes.com/" },
    ],
  },
  {
    title: "insy8.ai – AI Analytics Platform Website",
    image: insy8,
    description:
      "Designed and developed the insy8.ai marketing website, a high-performance, SEO-friendly platform built with Astro 6, Tailwind CSS v4, and TypeScript. The website features a scalable content architecture, dark/light theme support, interactive animations, and conversion-focused user journeys to showcase AI-powered business analytics solutions.",
    technologies: ["Astro 6", "Tailwind CSS v4", "TypeScript", "SEO"],
    labels: ["Design", "Development"],
    liveLinks: [
      { label: "View Live", url: "https://insy8.ai/" },
      { label: "Landing Page", url: "https://www.bizintellis.com/insy8-ai/" },
      { label: "Hospitality Services", url: "https://www.bizintellis.com/hospitality-services/" },
    ],
  },
  {
    title: "Tea Time Premium Smart Menu - POC",
    image: smartMenuPoc,
    description:
      "Designed and developed Tea Time Premium Smart Menu, a modern QR-based digital dining platform built with Astro 5, React 19, TypeScript, and Tailwind CSS v4. The solution features AI-assisted menu discovery, multilingual support, smart search, cart management, and a Front Desk dashboard, delivering a fast, interactive, and mobile-first customer experience.",
    technologies: ["Astro 5", "React 19", "TypeScript", "Tailwind CSS v4"],
    labels: ["Design", "Development"],
    liveLinks: [
      { label: "View Live", url: "https://teatimepremium-demo.bizintellis.ae/" },
      { label: "Front Desk", url: "https://teatimepremium-demo.bizintellis.ae/front-desk" },
    ],
  },
  

  {
    title: "People Metrics – Customer Experience Management Platform",
    image: peopleMetrics,
    description:
      "Led the UI/UX redesign and product revamp of People Metrics,ustomer Experience Management (CEM) software platform and consulting firm that helps organizations measure, monitor, and improve the customer journey. and business KPIs. Redesigned dashboards, reporting interfaces, and analytics workflows to deliver a modern, data-driven, and user-friendly experience.",
    technologies: ["UI/UX Design", "Dashboard Design", "Analytics", "Figma"],
    labels: ["Design"],
    liveLinks: [
      { label: "View Live", url: "https://cem.peoplemetrics.com/login" },
    ],
  },
  {
    title: "TAKASAGO - IF3 – Ingredient Factory Intelligence Platform",
    image: if3,
    description:
      "Led the UI/UX redesign and modernization of IF3, an ingredient factory business intelligence platform. Revamped analytics dashboards, reporting modules, and operational workflows to improve usability, data visibility, and overall user experience, helping stakeholders make faster and more informed business decisions.",
    technologies: ["UI/UX Design", "Business Intelligence", "Dashboard Design", "Analytics"],
    labels: ["Design"],
    liveLinks: [
      { label: "View Live", url: "https://if-revamp-01.bizintellis.com/login" },
    ],
  },
];

export const CONTACT = {
  Email: "aswin1998ply@gmail.com",
  phoneNo: "7012892552 ",
  Address: "Kerala, India",
};
