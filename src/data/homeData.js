import { CodeXml, Database, Menu, MonitorSmartphone, X } from "lucide-react";

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

// ============================== ABout Me =============================

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

export { NAME, NAV_LIST, LOGO, HERO_CODE, ABOUT_ME };
