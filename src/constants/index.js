import {
  data,
  frontend,
  software,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python,
  java,
  git,
  scheme,
  aldi,
  csudh,
  dollartree,
  nike,
  promptopia,
  tripguide,
  echo,
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
    title: "Frontend Developer",
    icon: frontend,
    text: "I specialize in front-end web development, crafting visually appealing websites that engage users across all devices. From eye-catching designs to seamless user experiences, I bring your brand to life on the digital stage.",
  },
  {
    title: "Web Developer",
    icon: web,
    text: "I analyze and optimize the performance of your websites or web applications. By identifying bottlenecks, optimizing code, and implementing best practices, I ensure your digital presence is both swift and impressive.",
  },
  {
    title: "Software Developer",
    icon: software,
    text: "I specialize in algorithm design, data structures, and code efficiency. My services include code reviews, performance analysis, and implementation of best practices to enhance your software projects.",
  },
  {
    title: "Data Analyst",
    icon: data,
    text: "I offer comprehensive data analysis services, including data cleaning, preprocessing, exploratory data analysis, and data visualizations. Transforming data into meaningful insights that drive informed decision-making."
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Scheme",
    icon: scheme,
  }
];

const experiences = [
  {
    title: "Retail Associate",
    company_name: "Dollar Tree",
    icon: dollartree,
    date: "June 2020 - September 2021",
    points: [
      "Demonstrated strong customer service skills by assisting and interacting with customers in a friendly and helpful manner.",
      "Maintained store cleanliness and organization, ensuring a pleasant shopping environment for customers.",
      "Effectively managed inventory by restocking shelves and monitoring stock levels to meet customer demands.",
      "Collaborated with team members to achieve store goals and participated in regular team meetings to discuss store performance and improvements.",
    ],
  },
  {
    title: "Store Associate",
    company_name: "ALDI",
    icon: aldi,
    date: "October 2021 - July 2022",
    points: [
      "Efficiently operated cash register and processed customer transactions accurately and quickly, ensuring a smooth checkout experience.",
      "Demonstrated excellent multitasking abilities by balancing cashier responsibilities with stocking duties, contributing to the overall efficiency of the store.",
      "Maintained store cleanliness and organization, including restocking shelves, arranging displays, and ensuring products were properly labeled and easily accessible for customers.",
    ],
  },
  {
    title: "Education/Skill Development Period",
    company_name: "California State University, Dominguez Hills",
    icon: csudh,
    date: "August 2018 - May 2023",
    points: [
      "Specialized in mathematics, delving deep into complex problem-solving and analytical thinking.",
      "Additionally, gained valuable insights in computer science, enhancing proficiency in programming languages and computational problem-solving techniques.",
      "Invested time in educational pursuits to prepare for upcoming career challenges, ensuring a strong foundation for future roles and responsibilities",
      "Engaged in extracurricular activities, collaborated with peers on academic projects, and actively participated in relevant student organizations, fostering a well-rounded educational experience and enhancing interpersonal skills.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "RLSMARA Hub",
    icon: reactjs,
    date: "May 2023 - Present",
    points: [
      "Developed web applications using React.js and related technologies, focusing on foundational concepts and hands-on coding practice.",
      "Designed responsive user interfaces independently, demonstrating adaptability and a keen eye for user experience.",
      "Engaged in self-directed learning and online coding communities, exploring diverse technologies and methodologies, demonstrating a commitment to continuous growth.",
    ],
  },
];

const projects = [
  {
    name: "Nike Landing Page",
    description:
      "Developed Nike Landing Page based on a tutorial using JavaScript, ReactJS, and Tailwind CSS. Demonstrated skills in replicating design and implementing interactivity.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/rlsmara/nike-landing-page",
    deploy_link: "https://rlsmara.github.io/nike-landing-page/",
  },
  {
    name: "Promptopia",
    description:
      "Built a full-stack web app with Next.js, ReactJS, and Tailwind CSS, featuring CRUD capabilities. Demonstrated mastery in creating a seamless user experience with robust functionality.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/rlsmara/promptopia",
    deploy_link: "https://promptopia-three-jet.vercel.app/",
  },
  {
    name: "Travel Camp Guide",
    description:
      "Built a Travel Camp Guide landing page with Next.js, TypeScript, and Tailwind CSS. Demonstrated expertise in replicating design concepts and integrating interactive elements.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rlsmara/camp-travel",
    deploy_link: "https://travelcampguide.vercel.app/",
  },
  {
    name: "Echo",
    description:
      "Created a comprehensive web application using ReactJS, TailwindCSS, and Appwrite, incorporating CRUD functionalities. Showcased expertise in developing a user-friendly interface with powerful features for enhanced user experience.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: echo,
    source_code_link: "https://github.com/rlsmara/echo",
    deploy_link: "https://echo-circle.vercel.app/",
  },
];

export { services, technologies, experiences, projects };