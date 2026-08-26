import libro_seat_grid from "../assets/seat_grid_desktop.png";
import devTinder_ui from "../assets/devTinder_desktop.png";
import ajxShop_ui from "../assets/ajx_shop.png";

export const PROJECT = {
  index: "03. Selected Works",
  title: "Featured Projects",
  description:
    "Production-grade full-stack applications with an emphasis on data integrity, state synchronization, and clean RESTful API design.",
  projects: [
    // {
    //   id: "libro",
    //   title: "Libro",
    //   tagline: "Developer Knowledge Hub & Q&A Platform",
    //   project_preview: libro_seat_grid,
    //   description:
    //     "A full-stack Q&A and technical discussion platform for software developers. Features real-time markdown authoring, voting mechanics, tag categorization, and custom user reputation calculations.",
    //   role: "Full Stack Developer",
    //   techStack: [
    //     "React",
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "Tailwind CSS",
    //     "JWT",
    //   ],
    //   challengeSolved:
    //     "Engineered atomic aggregation pipelines in MongoDB for millisecond-latency tag queries and implemented token rotation with HttpOnly cookies for session durability.",
    //   liveUrl: "https://libro-pink-six.vercel.app/",
    //   githubUrl_fe: "https://github.com/ajmat-ali/devflow-fullstack",
    //   githubUrl_be: "https://github.com/ajmat-ali/devflow-fullstack",
    // },
    // {
    //   id: "trackstack",
    //   title: "TrackStack",
    //   tagline: "Sprint & Issue Tracking Management System",
    //   description:
    //     "An agile workflow and issue management tool designed for engineering squads. Includes drag-and-drop Kanban sprint boards, task dependency graphs, and team member workload allocations.",
    //   role: "Full Stack Architect",
    //   techStack: [
    //     "React",
    //     "TypeScript",
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "Mongoose",
    //   ],
    //   challengeSolved:
    //     "Built an optimistic concurrency update layer on top of custom React hooks with structured compound indexing to drop dashboard query execution times by 40%.",
    //   keyFeatures: [
    //     "Fluid Kanban drag-and-drop state syncing with automated column re-ordering",
    //     "Sprint velocity calculation charts comparing estimated vs actual story points",
    //     "Granular project permissions (Owner, Maintainer, Contributor)",
    //     "Activity audit log tracking every status change and assignment mutation",
    //   ],
    //   metrics: [
    //     { label: "Query Speedup", value: "40%" },
    //     { label: "State Sync", value: "Optimistic" },
    //     { label: "TypeScript", value: "100% Strict" },
    //   ],
    //   liveUrl: "https://trackstack-demo.example.com",
    //   githubUrl: "https://github.com/ajmat-ali/trackstack-app",
    //   previewType: "dashboard",
    //   mockupData: {
    //     accentColor: "#3ECF8E",
    //     endpointSample: "PATCH /api/v1/boards/:boardId/tasks/:taskId/status",
    //     statsSummary: "Active Sprint 04 • 28 Issues Tracked",
    //   },
    // },
    // {
    //   id: "shopsphere",
    //   title: "ShopSphere",
    //   tagline: "High-Performance E-Commerce Engine & Inventory Hub",
    //   description:
    //     "A scalable multi-category e-commerce engine with real-time stock reservation, structured search filtering, persistent cart sync, and an administrative inventory control console.",
    //   role: "Full Stack Developer",
    //   techStack: [
    //     "React",
    //     "Redux Toolkit",
    //     "Node.js",
    //     "Express",
    //     "MongoDB",
    //     "REST APIs",
    //   ],
    //   challengeSolved:
    //     "Designed two-phase checkout commit handlers using MongoDB multi-document transactions to eliminate overselling and race conditions under peak concurrent traffic.",
    //   keyFeatures: [
    //     "Multi-filter faceted search supporting price range, category, and availability",
    //     "Transactional checkout pipeline with automated stock lock during payment window",
    //     "Administrative dashboard for batch catalog uploads, order states, and customer metrics",
    //     "Centralized Redux Toolkit store with local storage synchronization fallback",
    //   ],
    //   metrics: [
    //     { label: "Transaction Safety", value: "ACID Multi-Doc" },
    //     { label: "Cart Sync", value: "Redux Persist" },
    //     { label: "Catalog Size", value: "500+ SKUs" },
    //   ],
    //   liveUrl: "https://shopsphere-demo.example.com",
    //   githubUrl: "https://github.com/ajmat-ali/shopsphere-ecommerce",
    //   previewType: "ecommerce",
    //   mockupData: {
    //     accentColor: "#3ECF8E",
    //     endpointSample: "POST /api/v1/orders/checkout/session",
    //     statsSummary: "14 Active Categories • Realtime Inventory Sync",
    //   },
    // },
    {
      id: "libro",
      title: "Libro",
      tagline: "Library Seat Management System",
      project_preview: libro_seat_grid,
      description:
        "A full-stack library seat management platform built for a client, automating manual seat allocation and reducing seat availability lookup time from 15+ minutes to seconds.",
      role: "Freelance Full Stack Developer",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"],
      challengeSolved:
        "Implemented role-based access control (Admin, Student, Guard) with JWT auth and HTTP-only cookie sessions, plus a QR code-based attendance system using html5-qrcode that automatically logs guard-scanned entries.",

      liveUrl: "https://libro-pink-six.vercel.app/",
      githubUrl_fe: "https://github.com/Ajmat-Ali/Libro-FE",
      githubUrl_be: "https://github.com/Ajmat-Ali/Libro",
    },
    {
      id: "devtinder",
      title: "DevTinder",
      tagline: "Developer Connection Platform",
      project_preview: devTinder_ui,
      description:
        "A full-stack developer networking platform enabling users to send, receive, accept, and reject connection requests, with a paginated developer feed and connect/ignore actions.",
      role: "Full Stack Developer",
      techStack: [
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      challengeSolved:
        "Implemented validation at three layers — client-side (React), API-level (Express), and schema-level (Mongoose) — to guarantee data integrity before persisting to MongoDB, alongside JWT auth with HTTP-only cookie sessions.",

      liveUrl: "https://dev-tinder-ui-lemon.vercel.app/",
      githubUrl_fe: "https://github.com/Ajmat-Ali/devTinder",
      githubUrl_be: "https://github.com/Ajmat-Ali/devTinderBackend",
    },
    {
      id: "ajxshop",
      title: "AjxShop",
      tagline: "E-Commerce Cart Application",
      project_preview: ajxShop_ui,
      description:
        "A responsive e-commerce frontend built with React and the FakeStore API, featuring product search, category/price/rating filters, price-based sorting, and full cart and wishlist management.",
      role: "Frontend Developer",
      techStack: ["React", "Redux Toolkit", "Tailwind CSS", "FakeStore API"],
      challengeSolved:
        "Implemented a debounced search feature to filter products by title, reducing unnecessary search operations while typing, and managed cart/wishlist state with Redux Toolkit for add/remove, quantity updates, and automatic total price calculation.",

      liveUrl: "https://aj-x-shop.vercel.app/",
      githubUrl_fe: "https://github.com/Ajmat-Ali/AjX-shop",
      githubUrl_be: null,
    },
  ],
};
