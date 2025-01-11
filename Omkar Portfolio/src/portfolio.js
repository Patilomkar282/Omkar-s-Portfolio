/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Omkar's Portfolio",
  description:
    "A passionate engineering student with expertise in front-end and back-end development, AI, and machine learning, committed to building scalable, impactful solutions to solve real-world challenges.",
  og: {
    title: "Omkar Patil Portfolio",
    type: "website",
    url: "https://okpport.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Omkar Patil",
  logo_name: "OmkarPatil",
  nickname: "Om",
  subTitle:
    "A passionate engineering student with expertise in front-end and back-end development, AI, and machine learning, committed to building scalable, impactful solutions to solve real-world challenges.",
  resumeLink:
    "https://drive.google.com/file/d/1F_x5VzejBPfjRKqThaPyqSbYuLPbfnH9/view?usp=sharing",
  portfolio_repository: "https://github.com/Patilomkar282",
  githubProfile: "https://github.com/Patilomkar282",
};

const socialMediaLinks = [
  

  {
    name: "Github",
    link: "https://github.com/Patilomkar282",
    fontAwesomeIcon: "fa-github", 
    backgroundColor: "#181717", 
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/omkar-patil-373303224/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },
  {
    name: "Gmail",
    link: "mailto:patilomkar2820.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  
  {
    name: "Instagram",
    link: "https://www.instagram.com/ompatil_282?igsh=MTZ3cXl4bjhiazAzag==",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React",
        "⚡ Integrating AI/ML concepts into real-time projects and training machine learning models",
        "⚡ Developing robust application backends using Node.js, Express, and MongoDB",
        "⚡ Creating RESTful APIs and managing data with cloud integration",
        "⚡ Implementing secure and scalable backend systems using JWT and OAuth",
        
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    
    {
      title: "Version Control Tools",
      fileName: "version.png",
      skills: [
        "⚡ Proficient in version control using Git for collaborative development",
        "⚡ Experience working with repositories on GitHub, GitLab, and Bitbucket",
        "⚡ Familiar with branching, merging, and resolving conflicts in version-controlled projects",
        "⚡ Expertise in integrating version control with CI/CD pipelines for seamless deployments",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "Bitbucket",
          fontAwesomeClassname: "simple-icons:bitbucket",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Omkar-282/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Patilomkar2820",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#5B9E3B",
      },
      profileLink: "https://www.geeksforgeeks.org/user/patilomkar2820/",
    },
    {
      siteName: "Portfolio",
      iconifyClassname: "fa-solid:globe",
      style: {
        color: "#000000",
      },
      profileLink: "https://okpport.netlify.app/",
    }
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Marathwada Mitra Mandal college Of Engineering Karvenagar Pune",
      subtitle: "B.E in Information Technology",
      logo_path: "mmcoe.png",
      alt_name: "MMCOE Pune",
      duration: "2023 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Current CGPA : 9.07",
        
      ],
      website_link: "https://mmcoe.edu.in/",
    },
    {
      title: "Puranmal Lahoti Government Polytechnic College Latur",
      subtitle: "Diploma in Computer Science",
      logo_path: "plgp.png",
      alt_name: "Maharashtra State Board of Technical Education",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Computer Science which correspond to Operating System,Computer Networks, Computer Vision etc.",
        "⚡ Apart from this, I have also done Industrial Training. As part of it, I have worked on Python Libraries, frameworks, project development & Industrial Project Development.",
        "⚡ Percentage : 88.11 %",
      ],
      website_link: "https://www.plgpl.org/",
    },
    {
      title: "Dayanand Science College Latur",
      subtitle: "Higher Education",
      logo_path: "dscl.png",
      alt_name: "Maharashtra State Board",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ I have took knowledge about basic physics, Chemistry, Biology & Mathematics Subjects which are base of the Engineering",
        "⚡ Apart from this, I have gave Competative Exam like NEET, CET etc",
        "⚡ Percentage : 96.67 %",
      ],
      website_link: "https://dsclatur.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MLSC Interlock",
      subtitle: "Microsoft learn student Ambassadar",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1L1lxiTv3q6sWcDecu9Hunh_2ESMrgX1L/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "CICS HackSprint",
      subtitle: "Cultivative Ideas for Crafting Solutions",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1YIprmjVz09K7mzaxlIBbC1e-WOtqQEzb/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Code Mania 4.0",
      subtitle: "Cultivative Ideas for Crafting Solutions",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1EmUTemzZ6IKtOdDLmzjP2fcVel7TPJB0/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "IT SPEED HACK",
      subtitle: "ACM Student Chapter & IT Tech Club",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1z6PlHF6czw6yJhDwVcsylz6OkpJ6DCbc/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Web developer, Designer and Software Architect. I have also worked with some well established companies mostly as Full stack Web developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "No Work Till Now",
          company: "I am 3rd year of college no professional work experiance!!!!",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "mmcoe.png",
          duration: "NA",
          location: "Pune",
          description:
            "I am 3rd year of college no professional work experiance!!!!",
          color: "#000000",
        },
        
        
       
      ],
    },
    {
      title: "Internships",
      Internships: true,
      experiences: [
        {
          title: "Full Stack Developer Intern",
          company: "Athena Automation",
          company_url:
            "https://www.athenconsult.com/",
          logo_path: "athena.png",
          duration: "Dec 2024 - Present",
          location: "Pune, India",
          description:
            "This is automation Company. I am working on automation project in which client needs UI for handling CMS machines which is Full stack Website. Frontent Technologies are Reactjs and Bootstrap & bakcned technologies are Nodejs,Expressjs,Mysql, Python etc",
          color: "#0071C5",
        },
        {
          title: "Python Developer Intern",
          company: "Educadd Softwares.",
          company_url: "https://educadd.co.in/",
          logo_path: "educadd.png",
          duration: "June 2022 - Aug 2022",
          location: "Latur,Maharashtra, India",
          description:
            "Gained hands-on experience with Python programming and various libraries such as NumPy, Pandas , and Matplotlib.Developed a full-fledged Hospital Management System project using Python, automating patient records, billing, and appointment scheduling,significantly improving operational efficiency. Collaborated with team members and mentors to optimize code and enhance project features.",
          color: "#000000",
        },
        {
          title: "Web Developer Intern",
          company: "BEAT THE VIRUS STARTUP",
          company_url: "https://www.increaseimmunity.org/",
          logo_path: "btv.png",
          duration: "Jan 2022 - Aug 2022",
          location: "Mumbai, Maharashtra, India",
          description:
            "Developed and managed the company website using WIX , enhancing user experienceand overall design.Managed SEO of BTV website tried to keep website on top serach.Awarded Best Performer of the Month twice for outstanding contributions to the teamand project goals.",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technical Team Member",
          company: "Information Technology Student Association",
          company_url: "https://mmcoe.edu.in/departments/information-technology/student-desk/students-association/",
          logo_path: "itsa.png",
          duration: "Jue 2024 - Present",
          location: "Pune, Maharashtra",
          description:
            "Handle Various Technical task while every event held by the ITSA in MMCOE College. Documentation, Publicity, Tech Quiz, Coding Rouds and other Technical competition done by ITSA.",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies, including full-stack development with the MERN stack, database management, and AI/ML concepts. I specialize in building dynamic, responsive web applications and data-driven solutions, such as inventory and attendance management systems, by integrating intuitive frontends with efficient backends. My expertise extends to deploying projects using cloud infrastructure and creating impactful portfolios to showcase skills and achievements effectively.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};



// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "self2.png",
    description:
      "I am available on multiple professional and social media platforms. You can reach out to me for assistance or collaboration in areas such as Machine Learning, Artificial Intelligence, React, Node.js, Cloud Computing, SEO, and Open Source Development. I am committed to responding within 24 hours and am always eager to contribute to innovative and impactful projects.",
  },
 
  addressSection: {
    title: "Address",
    subtitle: "Karvenagar, Pune Maharashtra",
    locality: "Pune",
    country: "India",
    region: "Pune",
    postalCode: "411052",
    streetAddress: "Karv Raod",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/KiZzpF5pnjXJjWDd8",
  },
  phoneSection: {
    title: "Mobile Number",
    subtitle: "8999937124",
  },
};

const repoData = [
  {
    id: "1",
    name: "Portfolio Website",
    description: "A personal portfolio showcasing projects, skills, and achievements.",
    url: "https://github.com/Patilomkar282/Portfolio",
    createdAt: "2024-08-15T10:00:00Z",
    languages: [
      { name: "JavaScript", color: "#f1e05a" },
      { name: "CSS", color: "#563d7c" },
    ],
  },
  {
    id: "2",
    name: "Inventory Management System",
    description: "A web-based inventory system for tracking and managing inventory data.",
    url: "https://github.com/Patilomkar282/Inventory-Management-Project-main",
    createdAt: "2024-01-20T08:15:00Z",
    languages: [
      { name: "PHP", color: "#4F5D95" },
      { name: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: "3",
    name: "Attendance Management System",
    description: "A DBMS-based system to automate attendance tracking and report generation.",
    url: "https://github.com/Patilomkar282/Attendance-Management-System",
    createdAt: "2024-05-10T09:00:00Z",
    languages: [
      { name: "JavaScript", color: "#f1e05a" },
      { name: "MySQL", color: "#4479A1" },
    ],
  },
  {
    id: "4",
    name: "ShopEasy Web Application",
    description: "A seamless shopping experience for local vendors using a web-based platform.",
    url: "https://github.com/Patilomkar282/ShopEasy",
    createdAt: "2023-12-01T14:30:00Z",
    languages: [
      { name: "HTML", color: "#e34c26" },
      { name: "JavaScript", color: "#f1e05a" },
      { name: "CSS", color: "#563d7c" },
    ],
  },
];


export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  repoData,
};
