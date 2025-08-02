export const projects = [
  {
  title: "Prompt Verse",
  slug: "prompt-verse",
  tagline: "A collaborative platform for sharing AI prompts publicly or privately.",
  overview:
    "Prompt Verse is a full-stack prompt-sharing platform that enables users to create, manage, and explore AI prompts. It allows public and private sharing to enhance discoverability and foster creative collaboration within the AI community.",
  features: [
    "Google OAuth 2.0 authentication",
    "Create, edit, and delete prompts",
    "Public and private sharing modes",
    "User dashboard and profile management",
    "Responsive UI with intuitive prompt discovery"
  ],
  techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Google OAuth", "REST APIs"],
  challenges: [
    "Ensuring secure and scalable user authentication with OAuth",
    "Building a clean and minimal UI for prompt input and viewing",
    "Handling visibility filters and access permissions for public/private prompts"
  ],
  learnings: [
    "Deepened knowledge of full-stack Next.js workflows",
    "Worked with OAuth 2.0 for secure user authentication",
    "Strengthened experience building and consuming RESTful APIs"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
},
{
  title: "CodeBunk",
  slug: "codebunk",
  tagline: "A real-time collaborative code editor with execution support.",
  overview:
    "CodeBunk is a browser-based collaborative code editor designed for real-time group coding. It allows up to 10 users to edit code together, featuring live synchronization and support for code execution via OneCompiler API.",
  features: [
    "Real-time code collaboration with up to 10 users",
    "Live sync using Socket.IO",
    "Code execution via OneCompiler API",
    "Multiple language support",
    "Room-based editor sessions with sharing links"
  ],
  techStack: ["React.js", "Node.js", "Socket.IO", "Express.js", "OneCompiler API"],
  challenges: [
    "Maintaining consistent sync among multiple concurrent users",
    "Integrating and managing responses from external code execution APIs",
    "Designing a scalable structure for room-based sessions"
  ],
  learnings: [
    "Enhanced proficiency in real-time systems with Socket.IO",
    "Gained experience working with third-party APIs for live execution",
    "Improved UI/UX for collaborative tools"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
},
{
  title: "LMS",
  slug: "college-lms",
  tagline: "A custom LMS for managing student assignments and interactions.",
  overview:
    "Built a Learning Management System for internal college department use. Allows assignment creation, submission tracking, and communication between students and staff.",
  features: [
    "Role-based login (teacher/student)",
    "Assignment upload and submission",
    "Leave requests and status tracking",
    "Warning-based tab exit handling",
    "Automatic submission on exit attempts"
  ],
  techStack: ["React.js", "Django", "MongoDB", "Tailwind CSS"],
  challenges: [
    "Implementing user warnings and auto-submission logic",
    "Managing role-based routing and permissions"
  ],
  learnings: [
    "Strengthened React-Django integration knowledge",
    "Designed dynamic user flows and session control"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
},
{
  title: "Official Club Website",
  slug: "official-club-website",
  tagline: "A showcase platform for a college department club.",
  overview:
    "Developed and deployed a responsive official website for a college department club. Showcases event highlights, team members, and project updates to boost engagement and visibility.",
  features: [
    "Mobile-responsive layout",
    "Event gallery with images and descriptions",
    "Team and alumni pages",
    "Project listing and contact form",
    "Animated transitions"
  ],
  techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
  challenges: [
    "Creating a design that appeals to both faculty and students",
    "Making the site easily maintainable for future updates"
  ],
  learnings: [
    "Led the development cycle from planning to deployment",
    "Enhanced collaboration with non-technical stakeholders"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
},
{
  title: "Metal Casting Industry Website",
  slug: "metal-casting-website",
  tagline: "Corporate website for a metal casting company.",
  overview:
    "A fully responsive business website built for a metal casting company, enhancing their online presence and lead generation. Features modern design and easy navigation for all devices.",
  features: [
    "Responsive design with clear service layout",
    "Domain and Netlify deployment",
    "SEO-friendly content and meta tags",
    "Contact and inquiry form",
    "Cross-browser support"
  ],
  techStack: ["React.js", "Netlify", "Tailwind CSS"],
  challenges: [
    "Balancing business tone with aesthetic UI",
    "Handling real-time deployment and domain integration"
  ],
  learnings: [
    "Client communication and feedback handling",
    "End-to-end project ownership"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
},
{
  title: "Code Daily With Me",
  slug: "code-daily-with-me",
  tagline: "Progress tracking for daily DSA practice.",
  overview:
    "Contributed to the frontend of 'Code Daily With Me', a DSA sheet-based tracker that helps users monitor their practice streaks, topics, and solved problems interactively.",
  features: [
    "Visual progress tracking",
    "Topic-wise filter and progress bars",
    "Responsive sheet interface",
    "Streak-based UI feedback"
  ],
  techStack: ["React.js", "Tailwind CSS", "Chart.js"],
  challenges: [
    "Matching frontend UI with dynamic DSA sheet structure",
    "Managing state for progress across categories"
  ],
  learnings: [
    "Dynamic rendering of structured data",
    "Modular frontend design and collaboration"
  ],
  feedback: false,
  links: {
    live: "",
    github: ""
  }
}
];
