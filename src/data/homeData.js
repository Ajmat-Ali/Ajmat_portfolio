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

export { NAME, NAV_LIST, LOGO, HERO_CODE };
