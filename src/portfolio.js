/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Md. Rokibul Hasan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Md. Rokibul Hasan Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Rokibul Hasan",
  logo_name: "AshutoshHathidara",
  nickname: "Oracle Certified Professional",
  subTitle:
    "I'm a dedicated software developer specializing in SQL, PL-SQL, Oracle Fusion Middleware, and Oracle APEX. With nearly two years of professional experience, I've developed and maintained robust software solutions, managed databases, and contributed to impactful projects across various sectors. I hold professional certifications from Oracle University and a PGDIT from Jahangirnagar University. I'm passionate about leveraging my expertise to drive innovation and deliver high-quality applications. I'm seeking opportunities that challenge me to grow and offer a collaborative, growth-oriented environment.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/rokibdev",
  // linkedin: "https:// linkedin.com/in/devrokib/",
  // gmail: "rokib.fsdev@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/devrokib/",
  // twitter: "https://x.com/RHROKIB6",
  // instagram: "https://www.instagram.com/devrokib/"

  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/devrokib/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCD8DmC3EiOl2rPxPPVrlxBg",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rokib.fsdev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/RHROKIB6",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/devrokib/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/devrokib/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Oracle Apex",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Application Development: Creating robust, scalable web applications using Oracle APEX",
        "⚡ Database Management: Expertise in SQL, PL/SQL, and database administration to ensure optimal performance and security",
        "⚡ Custom Solutions: Developing custom solutions for business needs, including HR, payroll, and school management systems",
        "⚡ User Interface Design: Designing intuitive and user-friendly interfaces to enhance user experience",
        "⚡ Integration: Integrating Oracle APEX applications with other technologies and platforms to streamline business processes",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Front-End Development: Crafting responsive and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks",
        "⚡ Back-End Development: Building robust server-side applications with SQL, PL/SQL, and other server-side technologies",
        "⚡ Database Management: Managing and optimizing databases, ensuring high performance and security",
        "⚡ Oracle APEX Expertise: Developing comprehensive applications using Oracle APEX, from design to deployment",
        "⚡ API Integration: Integrating third-party APIs and services to enhance functionality and interoperability",
        "⚡ Email Configuration: Setting up and managing email servers, ensuring reliable and secure email communication",
        "⚡ End-to-End Solutions: Delivering complete solutions, from gathering requirements to deployment and maintenance, ensuring seamless operation and user satisfaction",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
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
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
     {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
      title: "National University",
      subtitle: "BSC in Botany",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Core Studies: Studied fundamental subjects such as Plant Physiology, Genetics, Ecology, and Microbiology",
        "⚡ Research Projects: Conducted various research projects on plant biology and environmental science, gaining hands-on experience in laboratory techniques and fieldwork",
        "⚡ Extracurricular Learning: Participated in workshops and seminars related to botany and environmental conservation",
      ],
      website_link: "https://www.nu.ac.bd/",
    },
     {
      title: "Jahangirnagar University",
      subtitle: "Professional Masters in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "",
      descriptions: [
        "⚡ In-Depth Curriculum: Studied advanced topics in Information Technology, focusing on database management, software development, and IT project management",
        "⚡ Hands-On Learning: Completed practical projects and assignments, applying theoretical knowledge to real-world IT challenges",
        "⚡ Skill Development: Enhanced technical and professional skills, preparing for leadership roles in the IT industry through comprehensive coursework and experiential learning",
      ],
      website_link: "https://juniv.edu/",
    },
     {
      title: "Jahangirnagar University",
      subtitle: "PGD in Information Technology",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Comprehensive Curriculum: Gained in-depth knowledge in various aspects of Information Technology, including database management, software development, and IT project management",
        "⚡ Practical Experience: Engaged in hands-on projects and practical assignments to apply theoretical concepts in real-world scenarios",
        "⚡ Professional Growth: Enhanced technical skills and prepared for advanced roles in the IT industry through rigorous coursework and practical training",
      ],
      website_link: "https://juniv.edu/",
    },
     {
      title: "IsDB-BISEW",
      subtitle: "IT Scholarship Programme",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Focus: Specialized in database design and development",
        "⚡ Technical Skills: Acquired proficiency in SQL, PL/SQL, HTML, CSS, JavaScript, Oracle APEX, and Oracle Database",
        "⚡ Comprehensive Training: Received extensive training in both theoretical and practical aspects of IT and database management",
      ],
      website_link: "https://isdb-bisew.org/it-scholarship-programme/it-scholarship-programme",
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      subtitle: "- Issued by Oracle University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=95EB0F9106C09EF99AA3881F0CA9EA1BD8AA3554E11768D796450CC58602CF6C",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      subtitle: "- Issued by Oracle University",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=88AF690837DC0E7C2C42A8AD10454D426894703C0C14A6888CD13BFB95C7D6ED",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Oracle Cloud Data Management 2023 Certified Foundations Associate",
      subtitle: "- Issued by Oracle University",
      logo_path: "google_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DDB1B65DBE02846BDC7A63907EDEB818035553A76047C9F0A41F6EBFAB7D7E38",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      subtitle: "- Issued by Oracle University",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=69DA5F450DAF074D1B1DC4FE58E343B8A19A21CEDF22F14200B45E865DAEC32B",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Science",
      subtitle: "- Great Learning Academy",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4058412/original/Md_Rokibul_Hasan20240127-70-16h2g6a.jpg",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced SQL",
      subtitle: "- Great Learning Academy",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4058387/original/Md_Rokibul_Hasan20240127-70-7r6vie.jpg",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Front End Development - HTML",
      subtitle: "- Great Learning Academy",
      logo_path: "google_logo.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4058006/original/Md_Rokibul_Hasan20240127-70-115s1ce.jpg",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Preprocessing",
      subtitle: "- Great Learning Academy",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/4057986/original/Md_Rokibul_Hasan20240127-70-1nbt0vm.jpg",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Database Management System",
      subtitle: "- Great Learning Academy",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/3475113/original/Md_Rokibul_Hasan20231008-74-6hixwb.jpg",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Great Learning Academy",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Great Learning Academy",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I have nearly two years of professional experience in software development and database management. As an Officer ICT at Jenphar Bangladesh Limited, I managed software maintenance, new development projects, and database administration. At Ignite Technology, I contributed to Oracle APEX projects, including VAT and tax-related software, and worked on HR, payroll, and school management systems. During my time as a Jr. Oracle Developer, I received mentorship in Oracle Fusion Middleware, Oracle Reports, and Oracle APEX, gaining hands-on experience and practical knowledge. My roles have equipped me with a strong foundation in SQL, PL/SQL, and Oracle APEX, preparing me to take on more advanced challenges in the IT industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Officer ICT(Programmer)",
          company: "Jenphar Bangladesh Limited",
          company_url: "https://jenphar.com/",
          logo_path: "tiktok_logo.png",
          duration: "May 1, 2024 – October 31, 2024",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Oracle APEX Developer",
          company: "Ignite Technology",
          company_url: "https://ignitetechno.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "At Ignite Technology, I contributed to Oracle APEX software development projects, including designing and implementing web applications. I collaborated with a team to create database-driven applications, worked on VAT and tax-related software, and assisted in customizing user interfaces, data modeling, and application testing. I gained hands-on experience with Oracle APEX tools and best practices in software development, successfully delivering functional web applications, and worked on projects related to HR, payroll, and school management systems.",
          color: "#0879bf",
        },
        {
          title: "Senior Graphics Designer",
          company: "Graphics Next",
          company_url: "/",
          logo_path: "muffito_logo.png",
          duration: "Jun 2020 - Jan 2023,
          location: "Pune, Maharashtra",
          description:
            "At Graphics Next, I worked as a Senior Graphics Designer, leading design projects and creating visually compelling graphics. I was responsible for designing marketing materials, product packaging, and digital content, ensuring alignment with brand guidelines and client requirements. My role involved collaborating with cross-functional teams to deliver high-quality designs on time, utilizing advanced design software and tools, and contributing to the overall creative strategy of the company.",
          color: "#9b1578"
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
