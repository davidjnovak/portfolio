export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "David Novak",
  jobDescription: "Software Engineer",
  about: `
  I'm a programmer with a strong interest in data analysis and web frameworks. 
  With a background in computer science and over three years of professional coding experience, I have a passion for leveraging technology to solve complex problems.
  A few facts about me: I come from a family of seven, love surfing, and speak fluent Spanish.`,

  experience: [
    {
      name: "nCino - SWE Intern",
      location: "Wilmington, NC",
      startDate: "AUG 2022",
      endDate: "PRESENT",
      description: [
        " - Build infrastructure to store and execute ML models with AWS",
        " - Design and maintain client-facing Salesforce site",
        " - Collaborate with AI Platform Agile team",
      ],
    },
    {
      name: "Innovative Financial Group - Web Developer",
      location: "Wilmington, NC",
      startDate: "SEP 2021",
      endDate: "JAN 2022",
      description: [
        " - Develop full stack web applications for insurance carriers",
        " - Write source code for web site appearance and functionality",
        " - Deploy and host sites on Linux VMs.",
      ],
    },
    {
      name: "UNC Wilmington - Deep Learning Researcher",
      location: "",
      startDate: "FEB 2021",
      endDate: "JUN 2021",
      description: [
        " - Apply deep learning models for research of coastal processes",
        " - Implement convolutional neural networks to predict and simulate ocean rip currents",
        " - Document findings and present to Physics Department at UNCW",
      ],
    },
  ],

  education: [
    {
      name: "University of North Carolina, Wilmington",
      location: "Wilmington, NC",
      startDate: "AUGUST 2020",
      endDate: "PRESENT",
      description: [
        " - GPA: 3.72",
        " - Honors College",
        " - Full tuition merit scholarship",
      ],
    },
    {
      name: "Universidad de Valencia",
      location: "Valencia, Spain",
      startDate: "JAN 2022",
      endDate: "JUN 2022",
      description: [
        " - Natural Language Processing (SPN)",
        " - Web Development (SPN)",
        " - Connectionist Models (SPN)",
        " - Mobile App Development (ENG)",
      ],
    },
    {
      name: "Cape Fear Academy",
      location: "Wilmington, North Carolina",
      startDate: "AUG 2017",
      endDate: "JUN 2020",
      description: [
        " - SAT: 1480 (~98th percentile)",
        " - 2019-20 Coastal Rivers Conference Male Scholar Athlete",
        " - Captain of Varsity Tennis and Sailing Teams",
      ],
    },
  ],

  socialMedia: {
    github: "https://github.com/davidjnovak",
    email: "mailto:davidnovak01@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-novak-664970209/",
  },

  projects: [
    {
      title: "uTawk",
      isFeatured: true,
      thumbnail: "/assets/images/utawkscreenshot.png", 
      githubUrl: "https://github.com/davidjnovak/utawk", 
      liveUrl: "https://utawk.net",
    },
    {
      title: "kwerty",
      isFeatured: true,
      thumbnail: "/assets/images/kwerty.png",
      githubUrl: "https://github.com/davidjnovak/kwerty",
      liveUrl: "https://kwerty.app",
    },
  ],
};
