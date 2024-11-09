const mongoose = require("mongoose");
const Service = require("./models/Service");
const Technology = require("./models/Technology");
const Experience = require("./models/Experience");
const Testimonial = require("./models/Testimonial");
const Project = require("./models/Project");
const connectDB=require("./DB/db")
// Connect to MongoDB
connectDB();

// Data to seed
const services = [
    { title: "Web Developer", icon: "web" },
    { title: "React Developer", icon: "mobile" },
    { title: "MERN Developer", icon: "backend" },
  ];

  const technologies = [
    { name: "HTML 5", icon: "html" },
    { name: "CSS 3", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React JS", icon: "reactjs" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Node JS", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "git", icon: "git" },
    { name: "java", icon: "java" },
    { name: "spring boot", icon: "spring" },
  ];
  

  const experiences = [
    {
      title: "React.js Developer (trainee)",
      company_name: "Japfa Comfeed India Pvt. Ltd.",
      icon: "japfa",
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Utilized Redux to manage application state efficiently.",
        "Integrated RESTful APIs for real-time data access.",
        "Created responsive user interfaces for various modules.",
        "Developed inventory tracking and order processing features.",
        "Collaborated with UI/UX designers and backend developers.",
        "Optimized component performance with lazy loading and code splitting.",
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
        "I developed a React app using the TMDB API to display trending, popular, and top-rated movies and TV shows.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "TMDB API", color: "green-text-gradient" },
        { name: "Bootstrap", color: "pink-text-gradient" },
      ],
      image: "carrent",
      source_code_link: "https://github.com/PravinKadam07/Movix",
    },
    {
      name: "Rental Listings & Reviews",
      description:
        "A MERN stack rental management app with property listings, viewing, and review features.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "node", color: "green-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
      ],
      image: "jobit",
      source_code_link: "https://github.com/PravinKadam07/NestAway",
    },
    {
      name: "eCommerce Platform",
      description:
        "An eCommerce platform with a shopping cart, product reviews, and admin management.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "node", color: "green-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
      ],
      image: "tripguide",
      source_code_link: "https://github.com/PravinKadam07/proShop",
    },
  ];

// Seed function
async function seedDatabase() {
  try {
    await Service.deleteMany({});
    await Service.insertMany(services);

    await Technology.deleteMany({});
    await Technology.insertMany(technologies);

    await Experience.deleteMany({});
    await Experience.insertMany(experiences);

    await Testimonial.deleteMany({});
    await Testimonial.insertMany(testimonials);

    await Project.deleteMany({});
    await Project.insertMany(projects);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
