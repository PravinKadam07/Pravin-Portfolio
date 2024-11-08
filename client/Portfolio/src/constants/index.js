import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  docker,
  spring,
  starbucks,
  carrent,
  jobit,
  tripguide,
  japfa
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "spring boot",
    icon: spring,
  },
];

const experiences = [
  {
    title: "React.js Developer (trainee)",
    company_name: "Japfa Comfeed India Pvt. Ltd.",
    icon: japfa,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Utilized Redux to efficiently manage application state across complex components, ensuring a centralized and predictable data flow that enhances maintainability.",
      "Integrated RESTful APIs to provide real-time data access, enabling seamless communication between the front-end and back-end systems.",
      "Worked on the shipment management module, CMS module, and production module to create responsive and intuitive user interfaces for the JAPFA BEST PC-Back Office platform, enhancing user experience.",
      "Developed features for inventory tracking and order processing within the back office management system using React.",
      "Worked closely with UI/UX designers and backend developers to ensure seamless integration between the front-end interface and back office functionalities.",
      " Analyzed component performance and applied techniques such as lazy loading and code splitting to enhance responsiveness.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Movie & TV Show Explorer",
    description:
      "I developed a React app using the TMDB API to display trending, popular, and top-rated movies and TV shows, with search functionality and trailer viewing. The app is optimized for a responsive and seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PravinKadam07/Movix",
  },
  {
    name: "Rental Listings & Reviews",
    description:
      "I built a rental management app using the MERN stack with property listings, viewing, and review features. It includes user authentication for secure logins and property management, enabling users to browse, review, and manage properties efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PravinKadam07/NestAway",
  },
  {
    name: "eCommerce Platform",
    description:
      "This eCommerce platform includes a shopping cart, product reviews, top products list, user profiles, and order history. Admins manage products, users, and orders, with a checkout process for shipping and payments, plus a database seeder.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PravinKadam07/proShop",
  },
];

export { services, technologies, experiences, testimonials, projects };
