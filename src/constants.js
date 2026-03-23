// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import dockerLogo from './assets/tech_logo/docker.png';
import cicdLogo from './assets/tech_logo/cicd.avif';
import kubernetesLogo from './assets/tech_logo/kubernetes.png'



// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import universityLogo from './assets/education_logo/university1.jpg';
import collegeLogo from './assets/education_logo/college.png';
import schoolLogo from './assets/education_logo/school.jpeg';

// Project Section Logo's
import gptLogo from './assets/work_logo/gpt.png';
import webmeetLogo from './assets/work_logo/webmeet.png';



export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Basic C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      
      
    ],
  },
  {
    title: 'DataBase',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      
    ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'CI/CD', logo: cicdLogo },
      { name: 'Docker (Basic)', logo: dockerLogo },
      { name: 'Kubernetes (Basic)', logo: kubernetesLogo },
      { name: 'Vercel', logo: vercelLogo },
      
    ],
  },
];

//   export const experiences = [
//     {
//       id: 0,
//       img: webverseLogo,
//       role: "Fullstack Developer",
//       company: "Webverse Digital",
//       date: "April 2024 - Present",
//       desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "React JS",
//         "TypeScript",
//         "Node JS",
//         "Tailwind CSS",
//         "MongoDb",
//         "Redux",
//         " Next Js",
//       ],
//     },
//     {
//       id: 1,
//       img: agcLogo,
//       role: "Fullstack Engineer",
//       company: "Agumentik Group of Companies",
//       date: "July 2023 - March 2024",
//       desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
//       skills: [
//         "ReactJS",
//         "Redux",
//         "JavaScript",
//         "Tailwind CSS",
//         "HTML",
//         "CSS",
//         "SQL",
//       ],
//     },
//     {
//       id: 2,
//       img: newtonschoolLogo,
//       role: "Frontend Intern",
//       company: "Newton School",
//       date: "September 2021 - August 2022",
//       desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//       skills: [
//         "HTML",
//         "CSS",
//         "Javascript",
//         "Bootstrap",
//         "Figma",
//         "Material UI",
//       ],
//     },
//   ];
  
  export const education = [
    {
      id: 0,
      img: universityLogo,
      school: "Meerut Institute of Technology, Meerut",
      date: "2023 - 2027",
      grade: "7 CGPA",
      desc: "I am currently pursuing my Bachelor's degree in Computer Science and Engineering (B.Tech) from MIT College,Meerut. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "B.Tech (CSE)",
    },
    {
      id: 1,
      img: collegeLogo,
      school: "Anugrah Narayan College, Patna",
      date: "2020 - 2022",
      grade: "87%",
      desc: "I completed my class 12 education from A.N. College, Patna, under the Bihar Board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "BSEB(XII) - PCM",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "St. John's Academy, Hajipur",
      date: "2019 - 2020",
      grade: "87.20%",
      desc: "I completed my class 10 education from St. John's Academy, Hajipur, under the CBSE Board.",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GPT",
      description:
        "Developed a full-stack GPT chat application with persistent conversation threads and integrated OpenAI Chat API to generate assistant replies. Built REST endpoints for chat and thread management (create/read/delete), implemented OpenAI request/response handling, and saved message history for each thread.",
      image: gptLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "OpneAI", "MongoDB", "Express", "Node JS"],
      github: "https://github.com/singhvivek76/GPT",
    
    },
    {
      id: 1,
      title: "WebMeet",
      description:
        "Built a full-stack video conferencing application using MERN stack with WebRTC for peer-to-peer video/audio text chat streaming.",
      image: webmeetLogo,
      tags: ["HTML", "CSS", "React JS", "Node.js", "MongoDB", "Express", "JavaScript", "Socket.IO", "WebRTC", "JWT"],
      github: "https://github.com/singhvivek76/WebMeet",
      webapp: "https://webmeetfrontend.onrender.com/",
    },
  ];  