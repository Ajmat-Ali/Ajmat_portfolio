import {
  CodeXml,
  Database,
  Menu,
  MonitorSmartphone,
  Proportions,
  Server,
  TabletSmartphone,
  Wrench,
  X,
} from "lucide-react";
import { FaGithub, FaLock, FaNpm } from "react-icons/fa";
import { MdPolymer } from "react-icons/md";
import {
  SiAxios,
  SiBootstrap,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const NAME = "Ajmat Ali";
const LOGO = "AA";

const NAV_LIST = [
  {
    name: "Home",
    link: "#hero",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Journey",
    link: "#journey",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const HERO_CODE = {
  fileName: "ajmat-ali.js",
  lines: [
    { num: 1, tokens: [{ text: "const developer = {" }] },
    {
      num: 2,
      tokens: [
        { text: "  name: " },
        { text: '"Ajmat Ali"', type: "string" },
        { text: "," },
      ],
    },
    {
      num: 3,
      tokens: [
        { text: "  stack: [" },
        { text: '"React"', type: "string" },
        { text: ", " },
        { text: '"Node"', type: "string" },
        { text: "]," },
      ],
    },
    {
      num: 4,
      tokens: [
        { text: "  focus: " },
        { text: '"useful software"', type: "string" },
        { text: "," },
      ],
    },
    {
      num: 5,
      tokens: [{ text: "  available: " }, { text: "true", type: "boolean" }],
    },
    { num: 6, tokens: [{ text: "}" }] },
  ],
};

// ============================================ ABout Me =================================================

const ABOUT_ME = {
  index: "01. Background & Direction",
  title: "About Me",

  tags: [
    { icon: CodeXml, text: "Deterministic APIs" },
    { icon: Database, text: "Structured Schemas" },
    { icon: MonitorSmartphone, text: "Responsive UI" },
  ],
  card: {
    cardTitle: "Key Metrics & Focus",
    stats: [
      { title: "Projects Built", value: "4+" },
      { title: "Core Specialization", value: "MERN Stack" },
      { title: "Active Focus", value: "DSA & System Design" },
    ],
    goal: {
      title: "Goal:",
      data: " Seeking a Junior / Associate Full Stack Developer role where I can contribute to high-impact production codebases and learn alongside experienced engineers.",
    },
  },
};

// ============================================ Skills =================================================

const SKILL = {
  index: "02. Technical Toolkit",
  title: "Tech I Work With",
  description: `Core technologies and developer tooling I use to architect 
   and maintain production-grade web applications.`,
  skills: [
    {
      domain: { icon: Proportions, text: "Frontend" },
      description:
        "Responsive user interfaces, deterministic state management, and modern component systems.",
      techStack: [
        { text: "React", icon: SiReact },
        { text: "JavaScript ES6+", icon: SiJavascript },
        { text: "HTML5 / CSS3", icon: SiHtml5 },
        { text: "Tailwind CSS", icon: SiTailwindcss },
        { text: "Redux Toolkit", icon: SiRedux },
        { text: "React Router", icon: SiReactrouter },
        { text: "Fetch / Axios", icon: SiAxios },
        { text: "Bootstrap", icon: SiBootstrap },
        { text: "Chakra UI", icon: SiChakraui },
      ],
      status: "Production-ready",
    },
    {
      domain: { icon: Server, text: "Backend" },
      description:
        "Server architecture, RESTful API contract design, authentication protocols, and database modeling.",
      techStack: [
        { text: "Node.js", icon: SiNodedotjs },
        { text: "Express.js", icon: SiExpress },
        { text: "MongoDB", icon: SiMongodb },
        { text: "Mongoose ORM", icon: SiMongoose },
        { text: "JWT Authentication", icon: SiJsonwebtokens },
        { text: "Bcrypt / Auth Flow", icon: FaLock },
        { text: "CRUD Pipelines", icon: MdPolymer },
      ],
      status: "Production-ready",
    },
    {
      domain: { icon: Wrench, text: "Tools / Other" },
      description:
        "Version control, API debugging, schema inspection, and developer tooling.",
      techStack: [
        { text: "Git / GitHub", icon: FaGithub },
        { text: "Docker", icon: SiDocker },
        { text: "MongoDB Compass", icon: SiMongodb },
        { text: "Postman", icon: SiPostman },
        { text: "Vite", icon: SiVite },
        { text: "npm / yarn", icon: FaNpm },
        // { text: "Linux / Bash", icon: "" },
        { text: "VS Code", icon: VscVscode },
      ],
      status: "Production-ready",
    },
  ],
};

// ============================================ Projects =================================================

export { NAME, NAV_LIST, LOGO, HERO_CODE, ABOUT_ME, SKILL };

// export const journeyTimeline = [
//   {
//     period: "2024 — Present",
//     title: "DSA & System Design Specialization",
//     institutionOrRole: "Independent Continuous Learning & Problem Solving",
//     description:
//       "Actively practicing Data Structures & Algorithms (Arrays, Hash Maps, Linked Lists, Trees, Dynamic Programming) to write optimal, clean code. Exploring microservice boundaries, caching strategies, and database indexing.",
//     tags: [
//       "Data Structures",
//       "Algorithms",
//       "Time Complexity",
//       "System Architecture",
//       "Clean Code",
//     ],
//     type: "focus",
//   },
//   {
//     period: "2023 — 2024",
//     title: "Full Stack MERN Engineering",
//     institutionOrRole: "Project-Driven Software Development",
//     description:
//       "Mastered the MERN ecosystem by architecting end-to-end production web applications. Focused on robust REST APIs in Express, resilient document modeling in MongoDB, and fluid component architectures in React.",
//     tags: [
//       "React",
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "REST APIs",
//       "JWT Security",
//     ],
//     type: "stack",
//   },
//   {
//     period: "2021 — 2024",
//     title: "Bachelor of Computer Applications (BCA)",
//     institutionOrRole: "University Degree",
//     description:
//       "Graduated with core coursework in Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Data Structures, and Computer Networking.",
//     tags: [
//       "Computer Science",
//       "DBMS",
//       "OOP",
//       "Software Engineering",
//       "Networking",
//     ],
//     type: "education",
//   },
// ];
