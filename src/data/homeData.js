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
  },
  {
    name: "About",
  },
  {
    name: "Skills",
  },
  {
    name: "Projects",
  },
  {
    name: "Journey",
  },
  {
    name: "Contact",
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
        { text: "MongoDB Compass", icon: SiMongodb },
        { text: "Postman", icon: SiPostman },
        { text: "Vite", icon: SiVite },
        { text: "npm / yarn", icon: FaNpm },
        // { text: "Linux / Bash", icon: "" },
        { text: "VS Code", icon: VscVscode },
        { text: "Docker (Basics)", icon: SiDocker },
      ],
      status: "Production-ready",
    },
  ],
};

export { NAME, NAV_LIST, LOGO, HERO_CODE, ABOUT_ME, SKILL };
