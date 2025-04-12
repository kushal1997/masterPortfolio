/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kushal's Portfolio",
  description:
    "With 1.9 years of experience as a React.js fullstack developer, engaged in diverse projects within a dynamic startup landscape, led teams, guided developers and interns, and delivered innovative, high-quality web solutions.",
  og: {
    title: "U Kushal Rao Portfolio",
    type: "website",
    url: "https://www.noizyboy.cloud/",
  },
};

//Home Page
const greeting = {
  title: "U KUSHAL RAO",
  logo_name: "Kushal Rao",
  nickname: "FullStack Developer",
  subTitle:
    "With 1.9 years of experience as a React.js fullstack developer, engaged in diverse projects within a dynamic startup landscape, and delivered innovative web solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1a97QUz_sleP1LGMog6oNsU1zfufokdTI/view?usp=sharing",
  githubProfile: "https://github.com/kushal1997",
  portfolio_repository: "https://github.com/kushal1997",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/kushal1997/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/kushal-rao23/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:kushalrao103@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/918637218189",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "	#25D366", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expert in building responsive and dynamic web interfaces with HTML5, CSS3, and JavaScript.",
        "⚡ Proficient in developing robust frontend applications using ReactJS, Redux, and Material UI.",
        "⚡ Skilled in leveraging modern UI frameworks like Tailwind CSS, Bootstrap, and Chakra UI for sleek, user-friendly designs",
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
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "skill-icons:tailwindcss-dark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
          style: {
            color: "#9013fe",
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
          skillName: "TypeScript",
          fontAwesomeClassname: "skill-icons:typescript",
          style: {
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
          skillName: "Redux",
          fontAwesomeClassname: "devicon:redux",
          style: {
            color: "#764abc",
          },
        },
        {
          skillName: "Expo CLI",
          fontAwesomeClassname: "vscode-icons:file-type-expo",
          style: {
            color: "#4630eb",
          },
        },
        {
          skillName: "Native CLI",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            color: "#56d0d2",
          },
        },
        {
          skillName: "Vite.js",
          fontAwesomeClassname: "logos:vitejs",
          style: {
            color: "#56d0d2",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "skill-icons:materialui-dark",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Chakra UI",
          fontAwesomeClassname: "devicon:chakraui",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Shadcn UI",
          fontAwesomeClassname: "simple-icons:shadcnui",
          style: {
            color: "#161616",
          },
        },
        {
          skillName: "Mantine UI",
          fontAwesomeClassname: "logos:mantine-icon",
          style: {
            color: "#339af0",
          },
        },
        {
          skillName: "Ant Design",
          fontAwesomeClassname: "devicon:antdesign",
          style: {
            color: "#339af0",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in building scalable server-side applications using NodeJS and Express JS",
        "⚡ Experienced in implementing secure authentication with Passport JWT and managing dependencies with NPM.",
        "⚡ Skilled in API development and testing using Postman, ensuring robust backend solutions.",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express JS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#242938",
          },
        },
        {
          skillName: "Passport JWT",
          fontAwesomeClassname: "logos:jwt-icon",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
          style: {
            color: "#ff6c37",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced in deploying and managing applications on AWS and Firebase platforms.",
        "⚡ Proficient in utilizing MongoDB for scalable and efficient NoSQL database solutions.",
        "⚡ Skilled in web hosting and server management with cPanel, ensuring reliable application performance.",
      ],
      softwareSkills: [
        {
          skillName: "AWS S3 Bucket",
          fontAwesomeClassname: "logos:aws-s3",
          style: {
            color: "#1b660f",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "devicon:firebase",
          style: {
            color: "#ffa000",
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
          skillName: "cPanel",
          fontAwesomeClassname: "cib:cpanel",
          style: {
            color: "#ff6c2c",
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Veer Surendra Sai University of Technology",
      subtitle: "M.Tech. in Power System Engineering (7.70 CGPA)",
      logo_path: "iiitk_logo.png",
      alt_name: "VSSUT Burla",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have specialized in advanced topics such as Power System Dynamics, Renewable Energy Systems, and Smart Grid Technologies.",
        "⚡ Completed hands-on projects on Power System Simulation, Load Flow Analysis, and Power Quality Improvement.",
        "⚡ Successfully implemented a thesis project on the integration of distributed generation in microgrids.",
      ],
      website_link: "https://www.vssut.ac.in/",
    },
    {
      title: "Veer Surendra Sai University of Technology",
      subtitle: "B.Tech. in Electrical Engineering (6.50 CGPA)",
      logo_path: "iiitk_logo.png",
      alt_name: "VSSUT Burla",
      duration: "2016 - 2022",
      descriptions: [
        "⚡ Acquired a solid foundation in core electrical engineering subjects such as Circuit Analysis, Electromagnetic Theory, and Control Systems.",
        "⚡ Built a portable refrigerator for my major project, demonstrating innovation and practical application of theoretical knowledge.",
        "⚡ Engaged in extracurricular activities, contributing to the university’s technical fest and robotics club.",
      ],
      website_link: "https://www.vssut.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "React JS",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1PWSvrPbYcA4kGo3bS7bryx-blz7JvQOf/view",
      alt_name: "React JS",
      color_code: "rgb(102 166 230 / 28%)",
    },
    {
      title: "Javascript",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1WwsalQnkWnRwWdmSu938nR0TzrPz_rFV/view",
      alt_name: "deeplearning.ai",
      color_code: "#D83B0199",
    },
    {
      title: "Programmable Logic Control (PLC) ",
      logo_path: "plc.png",
      certificate_link:
        "https://drive.google.com/file/d/10oZgsolbAQuECBs72d7WnqkCLoP8l0JJ/view?usp=sharing",
      alt_name: "Programmable Logic Control",
      color_code: "#808080",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Internship",
  description:
    "I have worked with many evolving startups as Frontend Web Developer and UI Developer. My focus is on creating responsive, user-friendly designs and boosting user engagement through innovative front-end solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: " FullStack Developer",
          company: "Daya Consultancy Services (OPC) Pvt. Ltd.",
          company_url: "https://www.dayacs.com/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Dec 2024",
          location: "Bhubaneswar, Odisha",
          description:
            "Led UI development for E-Learning platforms at Eduzest Software Pvt. Ltd. using React.js, Tailwind CSS, Chakra UI, and Context API, boosting user engagement by 30%. Developed calendar logic and APIs for employee timesheets. Created an Application Tracking System frontend with Material UI and Redux, enhancing recruitment efficiency by 50%.",
          color: "#000000",
        },
        // {
        //   title: " UI Developer",
        //   company: "Eduzest Software Pvt. Ltd",
        //   company_url: "http://www.eduzestsoftware.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "May 2022 - Nov 2022",
        //   location: "Bhubaneswar, Odisha",
        //   description:
        //     "I was working on static webb-page designs. Crafted engaging user interfaces with Figma, paying meticulous attention to detail. Collaborated with the development team to implement responsive and user-friendly designs. Worked effectively in a small company environment",
        //   color: "#0879bf",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-End Web Developer Intern",
          company: "Daya Consultancy Services (OPC) Pvt. Ltd.",
          company_url: "https://www.dayacs.com/",
          logo_path: "tiktok_logo.png",
          duration: "March 2023 - May 2023",
          location: "Bhubaneswar, Odisha",
          description:
            "During my internship, I rapidly acquired proficiency in JavaScript through an intensive crash course. I then took on and completed a series of small-scale projects. I collaborated with team members to enhance my learning experience and contributed to various aspects of project development, showcasing my adaptability and commitment to continuous improvement.",
          color: "#000000",
        },
        {
          title: "PLC Programming Trainee",
          company: "Central Tool Room & Training Centre (CTTC)",
          company_url: "https://www.cttc.gov.in/",
          logo_path: "delhivery_logo.png",
          duration: "Feb 2019 - Feb 2019",
          location: "Bhubaneswar, Odisha",
          description:
            "Here I gained hands-on experience in PLC programming, enhancing my technical skills and understanding of automation processes. This role sharpened my problem-solving abilities and technical expertise in a professional setting",
          color: "#ee3c26",
        },
        {
          title: "Electrical Engg Intern",
          company: "Odisha Hydro Power Corporation Ltd.",
          company_url: "http://www.ohpcltd.com/",
          logo_path: "ohpc.png",
          duration: "May 2018 - June 2018",
          location: "Burla, Odisha",
          description:
            "I gained valuable hands-on experience in the generation division. I contributed to various projects, deepening my understanding of hydroelectric power generation processes and enhancing my technical skills in the field of electrical engineering",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Frontend Projects and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kushal_rao.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React,Redux,Node JS,Mongo DB,React Native",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Santoshi Vihar,Bhubaneswar,751006",
    locality: "Bhubaneswar",
    country: "India",
    region: "Odisha",
    postalCode: "751006",
    streetAddress: "Santoshi Vihar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/ypJUiwwUQZTNyUBMA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

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
  publications,
  contactPageData,
};
