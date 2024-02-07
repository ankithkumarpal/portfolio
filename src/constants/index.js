import {
  javascript,
  typescript,
  html,
  reactjs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
} from "../assets";
import technovert from "../assets/company/technovert.png";
import tezo from "../assets/company/tezo.png";
import kaarpool from "../assets/projects/kaarpool.png";
import uniquecarving from "../assets/projects/uniquecarving.png";
import movierecommendation from "../assets/projects/movierecommendation.png";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Angular",
    icon: angular,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "MySQL",
    icon: mysql,
  },
  {
    title: "Git",
    icon: git,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
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
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
 
  {
    title: "Full Stack Developer",
    company_name: "Tezo solutions",
    date: "May 2023 - Present",
    company_website: "https://tezo.com/",
    icon: tezo,
    iconBg: "#E6DEDD",
    points: [
      " Achieved a 25% reduction in development time by leveraging the OpenAPI tool for automated API service and model generation, streamlining the development process",
      "Strategically Established routing with optimal redirect management, resulting in improved website performanceand enhanced user experience.",
      "Successfully enforced lazy loading, leading to a remarkable reduction in page load time and memory consumption from 54kb to 37kb, significantly enhancing the overall performance of the website.",
      " Worked in technologies : Angular 15 , React Js , C , .Net(Dot Net core) ,Type Script ,Html , Css , Bootstrap"
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Technovert Solutions",
    date: "Aug 2022 - May 2023",
    company_website: "https://tezo.com/",
    icon: technovert,
    iconBg: "#E6DEDD",
    points: [
       "Collaborated with a team of 2 to conceptualize and develop a carpool application, showcasing expertise integrating CRUD operations and essential features such as ride booking and offering.",
       " Created robust user authentication functionalities, encompassing secure login, registration, and logout mechanisms using JWT (JSON Web Tokens), ensuring a seamless and secure user experience.",
       "Proficiently leveraged a tech stack comprising React.js, .NET Core 7, TypeScript, and Bootstrap to develop innovative and user-friendly web applications"
    ]
  }
];

const personalInfo = {
  name: "Ankith",
  fullName: "Ankith Pal",
  email: "ankithpal721@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in React Js , Angular , .Net Core  , Node Js , Express Js , 
  TypeScript , JavaScript ,MongoDb , Sql , Java , Python ,  I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`
};

const publicUrls = {
  resume:
    "https://rb.gy/hm91w",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/ankith-pal-772572206/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/ankithkumarpal",
      icon: github,
    },
  },
};


const projects = [
  {
    name: "Carpool Web",
    description:"A simple carpool website where a user can book ride or offerride from a particular source location to destination. A user can also see history that he booked or offered.",
      tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name : "Typescript" , 
        color : "green-text-gradient"
      },
      {
        name: ".Net Core",
        color: "pink-text-gradient",
      },
      {
        name: "Sql",
        color: "blue-text-gradient",
      },
    ],
    image: kaarpool,
    hosted_link: "https://github.com/ankithkumarpal/kaarpoolApplication",
  },
  {
    name: "Unique Carving",
    description:"A shopping site for pencil carved items  . A user can place any number of order by just choose his template and selecting the service he needs.",
     tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Express Js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: uniquecarving,
    hosted_link: "https://github.com/ankithkumarpal/uniqueCarving",
  },
  {
    name: "Movie Recommendation",
    description:"A movie recommendation system which recommends top 10 movie based on the user selected option, works based on selected movie parameters ",
     tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: movierecommendation,
    hosted_link: "https://github.com/ankithkumarpal/ML-_movieRecommendataion",
  }
];

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
