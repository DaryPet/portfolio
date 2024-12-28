export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Fortune Tax Solution",
    desc: "The Smart Booking & Document Management System is a web application that allows users to easily manage documents, fill out tax reports, book meetings, and interact with a tax adviser.",
    subdesc:
      "Built as a full-stack application this project is designed with an intuitive user interface, making it suitable for both registered and unregistered users.",
    stack:
      "TECH STACK: React, Redux, Axios, JavaScript, CSS, NestJs, GraphQL, Supabase, Vercel.",
    href: "https://tax-consulting-app.vercel.app",
    texture: "/textures/project/tax.mp4",
    logo: "/assets/tax-1.png",
    logoStyle: {
      backgroundColor: "#aac2e7",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/redux.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      // {
      //   id: 4,
      //   name: "CSS",
      //   path: "/assets/css.svg",
      // },
      {
        id: 4,
        name: "Nest.js",
        path: "assets/nest.svg",
      },

      {
        id: 5,
        name: "GraphQl",
        path: "/assets/graphql.svg",
      },

      {
        id: 6,
        name: "Supabse",
        path: "/assets/supabase.svg",
      },
    ],
  },
  {
    title: "Guitar Lessons - Learnihg platform with personal teacher",
    desc: "The Guitar Lessons App with Personal login, access to documents, notes, and chat with teacher is a web application that enables students to easily manage lessons, notes, chat with teacher in a real time, send homework, kinks wit video, etc.",
    subdesc:
      "Students can learn to play guitar with a personal teacher, gaining access to materials such as notes, tabs, videos, a teacher chat, and the option to book private lessons directly through their user panel.",
    stack:
      "TECH STACK: React, Redux, Axios, JavaScript, CSS, NestJs, GraphQL, Supabase, Websocket, Vercel.",
    href: "https://guitar-lessons-px2t.vercel.app",
    texture: "/textures/project/guitar.mp4",
    logo: "/assets/guitar-1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "assets/redux.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "NestJs",
        path: "/assets/nest.svg",
      },
      {
        id: 5,
        name: "Supabase",
        path: "/assets/supabase.svg",
      },
      {
        id: 6,
        name: "Supabase",
        path: "/assets/websocket.svg",
      },
    ],
  },
  {
    title: " Travel Truck - App for renting campers",
    desc: " TravelTrucks is a web application for renting campers. It allows users to browse available vehicles, filter them by various criteria, view detailed information, read and leave reviews, and book campers.",
    subdesc:
      "Filtering vehicles by location, body type, and specific features (air conditioning, kitchen, etc.); Camper Details Page, Reviews, Booking Form  React, Redux, Axios, JS, CSS, Vite, Vercel",
    stack: "TECH STACK: React, Redux, Axios, JavaScript, CSS, Vite, Vercel.",
    href: "https://travel-trucks-app-tan.vercel.app",
    texture: "/textures/project/campers.mp4",
    logo: "/assets/camper-1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "assets/redux.svg",
      },
      {
        id: 3,
        name: "Axios",
        path: "/assets/axios.svg",
      },
      {
        id: 4,
        name: "Vite",
        path: "/assets/vite.svg",
      },
      {
        id: 5,
        name: "CSS",
        path: "/assets/css.svg",
      },
    ],
  },
  {
    title: "Aquatrack App",
    desc: " Aquatrack is a personal hydration app with login, register, and log out features. ",
    subdesc:
      "It calculates daily water needs based on user weight, height, and exercise habits, and tracks water intake through an integrated calendar to help users stay hydrated.",
    stack:
      "TECH STACK: React, Redux, Axios, CSS, Node.js, MongoDB, Mongoose, Vercel.",
    href: "https://water-in.vercel.app",
    texture: "/textures/project/water.mp4",
    logo: "/assets/waterin.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "assets/redux.svg",
      },
      {
        id: 3,
        name: "Axios",
        path: "/assets/axios.svg",
      },
      {
        id: 4,
        name: "NodeJS",
        path: "/assets/node-1.svg",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 6,
        name: "Mongoose",
        path: "/assets/mongoose.png",
      },
    ],
  },
  {
    title: "Weather App",
    desc: " A weather application that provides users with current weather information and a 6-day forecast.",
    subdesc:
      "The app features live updates and is designed for an intuitive user experience.",
    stack: "TECH STACK: React, Redux, Axios, CSS, Netlify.",
    href: "https://weatherapp-009.netlify.app",
    texture: "/textures/project/weather.mp4",
    logo: "/assets/weather-1.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "assets/redux.svg",
      },
      {
        id: 3,
        name: "Axios",
        path: "/assets/axios.svg",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/css.svg",
      },
      {
        id: 5,
        name: "Netlify",
        path: "/assets/netlify.svg",
      },
    ],
  },
  {
    title: "EnglishExcellence - English School App",
    desc: "English Excellence is a comprehensive platform for learning English, offering a variety of study packages, personalized teacher selection, and convenient consultations. It features a responsive, adaptive design for all devices and screen sizes, ensuring a user-friendly experience.",
    // subdesc:
    //   "The app features live updates and is designed for an intuitive user experience.",
    stack: "TECH STACK: HTML, CSS, JavaScript, Figma, Vite",
    href: "https://kgrebets.github.io/goit-markup-english-school/",
    texture: "/textures/project/english.mp4",
    logo: "/assets/english.svg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.svg",
      },
      {
        id: 4,
        name: "Vite",
        path: "/assets/vite.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    arrowPosition: isSmall
      ? [2.7, -8, 0]
      : isMobile
      ? [3.5, -8, 0]
      : isTablet
      ? [5, -7.5, 0]
      : [5, -7, 0],
    reactLogoPosition: isSmall
      ? [3, 3, 0]
      : isMobile
      ? [5, 2, 0]
      : isTablet
      ? [5, 1, 0]
      : [9, 1, 0],
    ringPosition: isSmall
      ? [-7, 8, 0]
      : isMobile
      ? [-13, 5, 0]
      : isTablet
      ? [-16, 3, 2]
      : [-24, 4, 0],
    targetPosition: isSmall
      ? [-4, -10, -7]
      : isMobile
      ? [-5, -10, -6.5]
      : isTablet
      ? [-8, -10, -8]
      : [-9, -10, -8],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
