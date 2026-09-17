// ============================================================
// portfolioData.js — Centralized configuration for Mohammedsakhib P Dharwad's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Mohammedsakhib P Dharwad",
  firstName: "Mohammedsakhib",
  brandName: "Mohammedsakhib",
  title: "Full-Stack Developer · Software Engineer · AI/ML Engineer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9113541721",
  emails: {
    primary: "sakhibdharwad08@gmail.com",
  },
  summary:
    "Information Science and Technology undergraduate with hands-on experience in full-stack architecture, RESTful APIs, database optimization, and applied AI systems.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/mohammedsakhibpdharwad",
  linkedin: "https://www.linkedin.com/in/mohammedsakhibpdharwad/",
};

export const heroContent = {
  greeting: "Hi, I'm Mohammedsakhib",
  titleHighlight: "Full-Stack & AI/ML Engineer",
  subtitle:
    "Information Science and Technology undergraduate with hands-on experience in full-stack architecture, RESTful APIs, database optimization, and applied AI systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sakhibdharwad08@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Mohammedsakhib,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Mohammedsakhib P Dharwad</span>, an Information Science and Technology undergraduate based in Bengaluru, Karnataka, India, with hands-on expertise in full-stack architecture, RESTful API development, database optimization, and applied AI systems.`,
  techStack: ["Python", "React", "FastAPI / AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, systematic, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data categorized across Mohammedsakhib's exact technical competencies
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "SQL", "JavaScript", "Bash"]
    },
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "State Management", "Responsive Design"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Flask", "RESTful APIs", "Asynchronous Programming", "JWT Authentication", "Microservices Architecture"]
    },
    {
      title: "AI, Computer Vision & NLP",
      skills: ["Hugging Face Transformers", "Computer Vision (CNNs)", "OpenCV", "Deep Learning", "Model Inference", "Risk Classification"]
    },
    {
      title: "Databases & Cloud",
      skills: ["PostgreSQL", "MySQL", "TiDB Cloud", "Schema Normalization", "Database Indexing", "Query Optimization"]
    },
    {
      title: "Software Engineering",
      skills: ["DSA", "OOP", "SDLC", "Unit Testing", "Systematic Debugging", "Git/GitHub", "CI/CD"]
    }
  ]
};

// Work Experience / Internships Data
export const internshipsList = [
  {
    organization: "Unified Mentor",
    role: "Full Stack Web Development Intern",
    duration: "June 2025 – September 2025",
    skills: [
      "Engineered responsive frontend interfaces",
      "Developed server-side backend logic",
      "Followed modern SDLC practices",
      "Integrated relational databases",
      "Resolved functional bottlenecks through systematic debugging"
    ],
    tech: ["React.js", "JavaScript", "Python", "FastAPI", "Relational Databases", "SDLC", "Git/GitHub"]
  }
];

// Education Data
export const educationList = [
  {
    degree: "B.Tech, Information Science & Technology",
    institution: "Presidency University, Bengaluru",
    duration: "Expected 2027",
    score: "CGPA: 8.29",
    badge: "Undergraduate"
  },
  {
    degree: "Pre-University Course (PUC)",
    institution: "MRM PU College, Haveri",
    duration: "2023",
    score: "84.5%",
    badge: "PUC"
  },
  {
    degree: "Matriculation (SSLC)",
    institution: "Lions English Medium School, Haveri",
    duration: "2021",
    score: "96.16%",
    badge: "SSLC"
  }
];

// Professional Soft Skills Data supported by verified resume background
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Deconstructing complex architectural and algorithmic challenges into modular, scalable solutions." },
  { name: "Systematic Debugging", icon: "🔍", desc: "Isolating runtime anomalies, resolving API bottlenecks, and profiling backend performance." },
  { name: "Software Engineering", icon: "📐", desc: "Adhering to strict SDLC standards, clean OOP principles, schema normalization, and unit testing." },
  { name: "Full-Stack Architecture", icon: "⚡", desc: "Designing end-to-end systems linking responsive user interfaces with asynchronous RESTful APIs." },
  { name: "Database Optimization", icon: "🗄️", desc: "Structuring relational schemas, query indexing, and transaction reliability in PostgreSQL & MySQL." },
  { name: "Applied AI Integration", icon: "🤖", desc: "Deploying Hugging Face transformer pipelines and computer vision models into real-time web workflows." },
  { name: "Adaptability", icon: "🌟", desc: "Swiftly learning and applying emerging frameworks, cloud databases, and development tooling." },
  { name: "Continuous Learning", icon: "📚", desc: "Proactively validating engineering competencies through industry certifications and rigorous projects." }
];

export const projects = [
  {
    id: "bookmyshift",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "BookMyShift",
    description:
      "A full-stack shift management platform supporting job posting, search, filtering, applications, and shift workflows. Features JWT authentication, role-based access control (RBAC), worker/employer workflows, eligibility validation, shift slots, Spot Pay, shift assignment, attendance, payments, order management, real-time chat, notifications, ratings and reviews, profile management, and shift history with asynchronous FastAPI APIs and PostgreSQL backend.",
    techTags: [
      "React.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "RESTful APIs",
      "JWT",
      "RBAC",
      "Asynchronous APIs"
    ],
    features: [
      "JWT Authentication & RBAC",
      "Worker & Employer Workflows",
      "Eligibility Validation & Shift Slots",
      "Spot Pay & Order Management",
      "Shift Assignment & Attendance Tracking",
      "Real-Time Chat & Notifications",
      "Ratings, Reviews & Shift History",
      "Asynchronous FastAPI & PostgreSQL"
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "expensehub",
    number: "02",
    badge: null,
    title: "ExpenseHub — Enterprise Expense Management Platform",
    description:
      "A full-stack enterprise expense management platform featuring role-based access control across Employee, Manager, Finance, and Super Admin workflows. Built with multi-stage approval workflows, organizational expense policies, secure authentication, comprehensive audit logging, notifications, normalized MySQL/TiDB schemas, analytics dashboards, expense tracking, and reporting with Render deployment.",
    techTags: [
      "Python",
      "Flask",
      "MySQL",
      "TiDB Cloud",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
      "Render"
    ],
    features: [
      "RBAC (Employee, Manager, Finance, Super Admin)",
      "Multi-Stage Approval Workflows",
      "Expense Policies & Compliance Enforcement",
      "Authentication & Audit Logging",
      "Normalized MySQL/TiDB Cloud Schemas",
      "Analytics Dashboards & Reporting",
      "Render Cloud Deployment"
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "suraksha-astra",
    number: "03",
    badge: null,
    title: "Suraksha-Astra — AI-Based Cyber Safety & Content Moderation System",
    description:
      "A real-time cyber safety platform detecting toxic, abusive, and NSFW content using multi-modal AI analysis. Integrates NLP Transformers and CNN-based Computer Vision for behavioral anomaly detection and threat analysis. Equipped with a 0–100 weighted risk-scoring engine categorizing content into SAFE, MONITOR, SUSPICIOUS, and HIGH RISK, automated ALLOW/LIMIT/BLOCK policy enforcement, asynchronous FastAPI endpoints, and a moderation dashboard.",
    techTags: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Tailwind CSS",
      "Hugging Face Transformers",
      "Computer Vision (CNNs)",
      "OpenCV",
      "RESTful APIs"
    ],
    features: [
      "NLP Transformers & CNN Computer Vision",
      "Multi-Modal AI Threat Analysis",
      "Behavioral Anomaly Detection",
      "0–100 Weighted Risk-Scoring Engine",
      "SAFE, MONITOR, SUSPICIOUS & HIGH RISK Tiers",
      "Automated ALLOW / LIMIT / BLOCK Enforcement",
      "Asynchronous FastAPI Microservices",
      "Interactive Moderation Dashboard"
    ],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure (OCI) — Generative AI Professional",
      issuer: "Oracle",
      icon: "🤖",
      verificationUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3C3A14610C3176AED40BE97D82C9F6F3A178D2AF70367FDAB7CF3EFFE8FFA458",
    },
    {
      name: "Oracle Cloud Infrastructure (OCI) — AI Foundations Associate",
      issuer: "Oracle",
      icon: "☁️",
      verificationUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=874F3364D3CB91EF61ADCB00C9E96A989F59EC695F8C65C9AC7737932B4E1707",
    },
    {
      name: "Oracle AI Cloud Database Services — Certified Professional",
      issuer: "Oracle",
      icon: "🗄️",
      verificationUrl:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=608828976FCD4E8157712AF02E7D9E5F9B2D613DF1E9E81E892B4F6AA3C9C0A7",
    },
    {
      name: "Full Stack Web Development Internship — Unified Mentor",
      issuer: "Unified Mentor",
      icon: "💻",
      verificationUrl:
        "https://unifiedmentor.com/verify-certificate/UMID05062541038",
    },
    {
      name: "Data Analytics Job Simulation — Deloitte (Forage)",
      issuer: "Deloitte (Forage)",
      icon: "📊",
      verificationUrl:
        "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_actTCCoEyERR4JJMC_1754820064986_completion_certificate.pdf",
    },
    {
      name: "Data Visualization: Empowering Business with Effective Insights — Tata",
      issuer: "Tata",
      icon: "📈",
      verificationUrl:
        "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_actTCCoEyERR4JJMC_1752921841597_completion_certificate.pdf",
    },
    {
      name: "Software Creation: Version Control, Debugging & Object Design — Coursera",
      issuer: "Coursera",
      icon: "⚙️",
      verificationUrl:
        "https://www.coursera.org/account/accomplishments/verify/VO62HG0QOSED",
    },
  ],
};

export const footerContent = {
  taglines: [
    "Full-Stack Architecture & Applied AI",
    "FastAPI · React · PostgreSQL · Python",
    "Scalable Systems & RESTful APIs",
  ],
  credential: "B.Tech IST · Presidency University, Bengaluru",
  copyright: `© ${new Date().getFullYear()} Mohammedsakhib P Dharwad | All Rights Reserved`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
