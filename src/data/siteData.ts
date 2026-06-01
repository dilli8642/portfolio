// ============================================================
// siteData.ts — Portfolio Data (Dilleswari Davala)
// ============================================================

export const personalInfo = {
  name: "Dilleswari Davala",
  initials: "DD",
  phone: "",
  email: "dillidavala@gmail.com",
  tagline: " MERN Stack Developer · Data Analytics Enthusiast Cybersecurity Aspirant",
  location: "Srikakulam, Andhra Pradesh, India",
  resumeUrl: "",

  socials: {
    github: "https://github.com/dilli8642",
    linkedin: "https://www.linkedin.com/in/dilleswari-davala-5506852b5",
    leetcode: "",
    codechef: "",
  },

  education: {
    institution: "Aditya Institute of Technology and Management",
    degree: "Bachelor of Technology in Computer Science and Engineering (Data Science)",
    gpa: "9.21 / 10",
  },

  aboutParagraph:
    "I am a Computer Science undergraduate with strong skills in web development, MERN Stack development, and data analytics. I enjoy building scalable web applications, AI-powered solutions, and data-driven systems. My focus is on developing practical software solutions that enhance user experience and solve real-world problems.",
};

// ── Skills ─────────────────────────────────────────────────────

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "JavaScript", "SQL"],
  },

  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React.js",
    ],
  },

  {
    category: "Backend",
    items: [
      "PHP",
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },

  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },

  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "NLP",
    ],
  },

  {
    category: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Google Colab",
      "MERN Stack",
    ],
  },

  {
    category: "Core Concepts",
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  },
];

// ── Projects ───────────────────────────────────────────────────

export interface Project {
  name: string;
  index: string;
  label: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    name: "Clinic Management System",
    index: "01",
    label: "Web Application",
    tagline: "A web-based healthcare clinic management and appointment booking system.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    highlights: [
      "Developed a web-based clinic management system.",
      "Implemented patient registration and appointment booking.",
      "Added doctor availability management features.",
      "Integrated MySQL database and analytics dashboard."
    ],
    liveUrl: "",
    githubUrl: ""
  },

  {
    name: "Campus AI Chatbot",
    index: "02",
    label: "AI Chatbot",
    tagline: "A real-time AI assistant for university queries and campus navigation.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Developed and deployed a real-time Campus AI Chatbot.",
      "Built responsive frontend using React.js.",
      "Developed REST APIs using Node.js and Express.js.",
      "Integrated MongoDB for data management."
    ],
    liveUrl: "https://campus-chatbot-aa5.web.app/",
    githubUrl: "https://github.com/dilli8642/healbharat_project",
  },
];

// ── Experience ─────────────────────────────────────────────────

export interface ExperienceEntry {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "MERN Stack Development Intern",
    company: "Heal Bharat Service LLP",
    dates: "Jan 2026 — Mar 2026",
    bullets: [
      "Developed and deployed a real-time Campus AI Chatbot.",
      "Built frontend using React.js.",
      "Developed backend APIs using Node.js and Express.js.",
      "Integrated MongoDB and performed full-stack deployment."
    ]
  },
  {
    title: "Full Stack Development Intern",
    company: "Infosys Springboard",
    dates: "Nov 2025 — Feb 2026",
    bullets: [
      "Worked on frontend and backend development concepts.",
      "Learned application architecture and databases.",
      "Completed project-based learning modules.",
    ]
  }
];

// ── Achievements ───────────────────────────────────────────────

export type AchievementSize = "large" | "normal";

export type AccentColor =
  | "accent-coral"
  | "accent-teal"
  | "accent-purple"
  | "accent-electric";

export interface Achievement {
  platform: string;
  title: string;
  badge?: string;
  rating?: string;
  stat?: string;
  progressPercent?: number;
  color: AccentColor;
  size: AchievementSize;
  description?: string;
  bigNumber?: string;
}

export const achievements: Achievement[] = [
  {
    platform: "GATE",
    title: "GATE Qualified",
    stat: "Score 338 | AIR 11289",
    color: "accent-coral",
    size: "large"
  },

  {
    platform: "Webathon",
    title: "Second Place",
    stat: "24-Hour Webathon",
    color: "accent-coral",
    size: "large"
  },

  {
    platform: "Hackathon",
    title: "Consolation Medal",
    stat: "AIGNITE-2.0",
    color: "accent-coral",
    size: "large"
  },

  {
    platform: "NPTEL",
    title: "Cyber Security and Privacy",
    stat: "IIT Madras",
    color: "accent-coral",
    size: "normal",
  },

  {
    platform: "NPTEL",
    title: "Data Analytics with Python",
    stat: "IIT Roorkee | 77%",
    color: "accent-purple",
    size: "normal",
  },

  {
    platform: "GeeksforGeeks",
    title: "Python Fundamentals",
    stat: "Certification",
    color: "accent-teal",
    size: "normal",
  },
];

// ── Positions / Leadership ────────────────────────────────────

export interface Position {
  label: string;
  title: string;
  description: string;
}

export const positions: Position[] = [
  {
    label: "Leadership — 01",
    title: "AI & Full-Stack Developer",
    description:
      "Focused on developing scalable AI-powered applications using MERN Stack, Machine Learning, and cloud technologies.",
  },
  {
    label: "Leadership — 02",
    title: "Problem Solving & DSA",
    description:
      "Actively practicing data structures and algorithms through competitive programming and coding platforms.",
  },
];

// ── Navigation Sections ───────────────────────────────────────

export const navSections = [
  { id: "home", label: "Home", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "achievements", label: "Achievements", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];