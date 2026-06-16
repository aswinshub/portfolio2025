import biSurveyTool from "../assets/projects/bi survey tool.png";
import kinderscapes from "../assets/projects/Kinderscapes.png";
import insy8 from "../assets/projects/Insy8.png";
import smartMenuPoc from "../assets/projects/smart menu POC.png";
import smartMenuLanding from "../assets/projects/smart menu landing.png";
import peopleMetrics from "../assets/projects/People metrics.png";
import if3 from "../assets/projects/if3.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software Developer / UI/UX Designer",
    company: "Voldumar Technologies PVT LTD",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2024 - 2025",
    role: "UI/UX Designer",
    company: "Xyvin Infotech PVT LTD",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2024 - 2024",
    role: "Junior Software Developer",
    company: "Neyndra Global Solutions Pvt Ltd.",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2021 - 2024",
    role: "Project Assistant",
    company: "LSGD DEPARTMENT, Government of Kerala",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "insy8.ai Smart Menu – Product Landing Page",
    image: smartMenuLanding,
    description:
      "Designed and developed the insy8 Smart Menu product landing page, a conversion-focused marketing site showcasing AI-powered hospitality and digital dining solutions. Built with React and Tailwind CSS to deliver a responsive, visually polished experience with clear product storytelling, feature highlights, and engaging UI interactions.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Responsive Design", "UI/UX"],
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
    liveLinks: [
      { label: "View Live", url: "https://teatimepremium-demo.bizintellis.ae/" },
      { label: "Front Desk", url: "https://teatimepremium-front-desk.vercel.app/" },
    ],
  },
  

  {
    title: "People Metrics – Workforce Analytics Platform",
    image: peopleMetrics,
    description:
      "Led the UI/UX redesign and product revamp of People Metrics, a workforce analytics platform that helps organizations track employee performance, engagement, and business KPIs. Redesigned dashboards, reporting interfaces, and analytics workflows to deliver a modern, data-driven, and user-friendly experience.",
    technologies: ["UI/UX Design", "Dashboard Design", "Analytics", "Figma"],
    liveLinks: [
      { label: "View Live", url: "https://cem.peoplemetrics.com/login" },
    ],
  },
  {
    title: "IF3 – Ingredient Factory Intelligence Platform",
    image: if3,
    description:
      "Led the UI/UX redesign and modernization of IF3, an ingredient factory business intelligence platform. Revamped analytics dashboards, reporting modules, and operational workflows to improve usability, data visibility, and overall user experience, helping stakeholders make faster and more informed business decisions.",
    technologies: ["UI/UX Design", "Business Intelligence", "Dashboard Design", "Analytics"],
    liveLinks: [
      { label: "View Live", url: "https://if-revamp-01.bizintellis.com/login" },
    ],
  },
];

export const CONTACT = {
  Email: "aswin.offcial@gmail.com",
  phoneNo: "7012892552 ",
  Address: "Kerala, India",
};
