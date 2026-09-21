// Centralized site data for CALDIM Solutions

import drivesBusinessGrowthImg from '../assets/drives-business-growth.jpg';
import enhancesTransparencyImg from '../assets/enhances-transparency.jpg';
import improvesEfficiencyImg from '../assets/improves-operational-efficiency.jpg';
import supportsDecisionsImg from '../assets/supports-better-decisions.png';

import calrimsImg from '../assets/calrims-recruitment-system.png';
import caltimsImg from '../assets/caltims-timesheet.png';
import aiProcurementImg from '../assets/ai-procurement-workflow.png';
import projectManagementImg from '../assets/project-management.png';

import reactLogo from '../assets/react-logo.png';
import nodeLogo from '../assets/node-logo.png';
import pythonLogo from '../assets/python-logo.png';
import javaLogo from '../assets/java-logo.png';
import jsLogo from '../assets/javascript-logo.png';
import mongoLogo from '../assets/mongodb-logo.png';
import cppLogo from '../assets/cpp-logo.png';

export const OFFICES = [
  {
    id: "head-office",
    title: "INDIA - Head office",
    address: "Minimac Center #118, First Floor, Arcot Road, Valasaravakkam, Tamil Nadu, Chennai - 600087",
    phone: "0248-455 3855"
  },
  {
    id: "branch-office",
    title: "INDIA - Branch office",
    address: "Plot No: 22, 23, 24, 2nd Floor, Durga Bhavani Towers, Thirsul Layout, Near RTO Check Post, NH 207, Bagalur Road, Tamil Nadu, Hosur - 635103",
    phone: "04344-610637"
  },
  {
    id: "usa-office",
    title: "USA Office",
    companyName: "Caldim Tech Services LLC",
    address: "8668 John Hickman Pkwy, Suite 903, Frisco, Texas 75034",
    phone: "+1 (248) 455-3855"
  }
];

export const COMPANY_INFO = {
  name: "CALDIM Solutions",
  tagline: "Sophisticated Engineering For The Next Matrix",
  subtext: "A technology-driven startup specializing in customized software and AI-powered solutions.",
  locations: "Chennai & Hosur, India | Frisco, Texas, USA",
  email: "support@caldimengg.in",
  phone: "+1 (248) 455-3855 / 0248-455 3855",
  mission: "To empower organizations through intelligent, efficient, and reliable software solutions.",
  vision: "To be a trusted technology partner delivering impactful and future-ready solutions.",
  values: [
    {
      title: "Innovation First",
      description: "Constantly pioneering scalable software frameworks and next-gen AI architectures."
    },
    {
      title: "Client Centricity",
      description: "Delivering measurable business value through tailored technology implementations."
    },
    {
      title: "Engineering Excellence",
      description: "Rigorous quality benchmarks, automated testing pipelines, and battle-tested security."
    },
    {
      title: "Integrity & Trust",
      description: "Transparent workflows, strict data confidentiality, and dependable project execution."
    }
  ]
};

export const VALUE_PROPOSITIONS = [
  {
    id: 1,
    title: "Drives Business Growth",
    description: "Optimizes resources and improves productivity to deliver sustainable value.",
    image: drivesBusinessGrowthImg,
    stat: "+45% Efficiency"
  },
  {
    id: 2,
    title: "Enhances Transparency",
    description: "Provides real-time visibility into workflows, performance, and outcomes.",
    image: enhancesTransparencyImg,
    stat: "100% Auditability"
  },
  {
    id: 3,
    title: "Improves Operational Efficiency",
    description: "Streamlines processes and reduces manual effort across business functions.",
    image: improvesEfficiencyImg,
    stat: "80% Time Saved"
  },
  {
    id: 4,
    title: "Supports Better Decisions",
    description: "Transforms data into actionable insights for informed strategic planning.",
    image: supportsDecisionsImg,
    stat: "Real-time AI Analytics"
  }
];

export const PRODUCTS = [
  {
    id: "calrims",
    name: "CALRIMS",
    fullName: "Recruitment Intelligent Management System",
    tagline: "Transforming manual hiring into a unified, intelligent recruitment ecosystem.",
    description: "CALRIMS streamlines your entire talent acquisition cycle—from AI-driven resume screening and candidate evaluation to workflow automation and real-time recruitment analytics.",
    image: calrimsImg,
    features: [
      "Automated Resume Parsing & Ranking",
      "AI-Based Skill & Qualification Analysis",
      "Configurable Hiring Workflows",
      "Centralized Candidate Database",
      "Real-Time Recruitment Analytics",
      "Role-Based Access Control"
    ],
    outcomes: [
      "70% Faster Time-to-Hire",
      "95% Resume Parsing Accuracy",
      "Seamless ATS Integration"
    ]
  },
  {
    id: "caltims",
    name: "CALTIMS",
    fullName: "Timesheet Management System",
    tagline: "Eliminating manual timesheet errors and delays.",
    description: "CALTIMS automates employee time tracking, approval flows, payroll preparation, and audit trail compliance across projects and client deliverables.",
    image: caltimsImg,
    features: [
      "Automated Time Entry & Submission",
      "Configurable Approval Rules",
      "Timesheet Lock & Compliance Settings",
      "Payroll-Ready Data Generation",
      "Advanced Reports & Analytics",
      "Audit Trail & Traceability"
    ],
    outcomes: [
      "100% Payroll Calculation Precision",
      "Eliminate Paper & Manual Spreadsheets",
      "Instant Audit Reports"
    ]
  }
];

export const SERVICES = [
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Globe",
    description: "Architecting high-performance, accessible, and scalable React, Next.js, and Node.js web applications.",
    points: [
      "Custom React / Next.js Single Page & Server-Rendered Apps",
      "Microservices & RESTful API Architectures",
      "Enterprise-Grade Security & Performance Tuning"
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    iconName: "Smartphone",
    description: "Cross-platform and native mobile apps built with React Native, Flutter, and Kotlin for iOS and Android.",
    points: [
      "Intuitive Touch-first Mobile UI/UX",
      "Offline Synchronization & Push Notifications",
      "App Store & Google Play Publishing Support"
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    iconName: "Cloud",
    description: "Cloud-native infrastructure management, CI/CD automated deployments, containerization, and orchestration.",
    points: [
      "AWS, Azure, and Google Cloud Infrastructure Setup",
      "Docker Containerization & Kubernetes Orchestration",
      "Automated Testing & Continuous Deployment Pipelines"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI & ML Solutions",
    iconName: "Cpu",
    description: "Custom Large Language Models (LLM), Retrieval-Augmented Generation (RAG), chatbots, and predictive analytics.",
    points: [
      "Natural Language Processing & Intelligent Document Parsing",
      "Predictive Business Intelligence & Recommendation Engines",
      "Custom Chatbots & Automated Agent Workflows"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    iconName: "Palette",
    description: "Human-centered digital design systems, interactive prototypes, and conversion-focused user interfaces.",
    points: [
      "Comprehensive User Research & Interactive Wireframes",
      "Design Systems & Brand Style Component Libraries",
      "Usability Testing & Micro-animation Systems"
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    iconName: "Code",
    description: "End-to-end custom enterprise applications designed to address complex operational requirements.",
    points: [
      "Tailored Business Process Automation",
      "Legacy System Modernization & API Integration",
      "Scalable Multi-tenant SaaS Architecture"
    ]
  }
];

export const DELIVERY_PROCESS = [
  { step: "01", title: "Discovery", desc: "Understanding client goals, mapping requirements, and defining technical scope." },
  { step: "02", title: "Design", desc: "Creating intuitive wireframes, system architecture blueprints, and design systems." },
  { step: "03", title: "Develop", desc: "Agile code execution using clean code principles and continuous integration." },
  { step: "04", title: "Deploy", desc: "Zero-downtime deployment to secure cloud infrastructure with monitoring." },
  { step: "05", title: "Evolve", desc: "Post-launch maintenance, security patches, performance scaling, and feature updates." }
];

export const TECH_STACK = [
  { name: "React.js", logo: reactLogo, category: "Frontend" },
  { name: "Node.js", logo: nodeLogo, category: "Backend" },
  { name: "Python", logo: pythonLogo, category: "AI/Data" },
  { name: "Java", logo: javaLogo, category: "Backend" },
  { name: "JavaScript", logo: jsLogo, category: "Frontend" },
  { name: "MongoDB", logo: mongoLogo, category: "Database" },
  { name: "C++", logo: cppLogo, category: "Systems" }
];

export const PROJECTS_CATALOG = [
  {
    id: 1,
    title: "CALRIMS - AI Recruitment System",
    category: "AI & Enterprise SaaS",
    image: calrimsImg,
    description: "Intelligent recruitment platform with automated resume parsing, AI ranking, and applicant tracking workflows.",
    tech: ["React", "Node.js", "Python AI", "MongoDB"]
  },
  {
    id: 2,
    title: "CALTIMS - Timesheet Management",
    category: "Enterprise Software",
    image: caltimsImg,
    description: "Automated timesheet submission, approval rules, compliance locks, and payroll report generation.",
    tech: ["React", "Express", "MySQL", "Tailwind"]
  },
  {
    id: 3,
    title: "AI Procurement & Vendor Workflow",
    category: "AI Automation",
    image: aiProcurementImg,
    description: "Automate purchase orders, vendor evaluation, and invoice parsing with intelligent NLP workflows.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Project Management Command Hub",
    category: "Web Application",
    image: projectManagementImg,
    description: "Real-time task tracking, milestone management, and resource allocation dashboard for engineering teams.",
    tech: ["React", "Node.js", "Docker", "AWS"]
  }
];

export const CAREERS_CULTURE = {
  cultureText: "Join a diverse group of passionate engineers and designers who love what they do.",
  benefits: [
    {
      title: "Health & Wellness",
      desc: "Comprehensive medical insurance coverage for employees and dependents."
    },
    {
      title: "Work from Anywhere",
      desc: "Flexible remote and hybrid working arrangements for work-life balance."
    },
    {
      title: "Latest Tech & Tools",
      desc: "High-end workstations, cloud credits, and access to premium developer tools."
    },
    {
      title: "Fast Career Growth",
      desc: "Accelerated promotions, learning budgets, and direct mentorship from founders."
    }
  ]
};
