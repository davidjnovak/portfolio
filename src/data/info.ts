export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "David Novak",
  jobDescription: "Web Developer",
  about: `I'm a programmer with a strong interest in data analysis and web frameworks. With a background in computer science and over three years of professional coding experience, I thrive on leveraging technology to solve complex problems.

I love diving into data, extracting meaningful insights, and uncovering patterns that drive informed decision-making.
I enjoy working with web frameworks to build robust and scalable applications, bringing ideas to life in the digital space.`,

  experience: [
    {
      name: "nCino",
      location: "Wilmington, NC",
      startDate: "AUG 2022",
      endDate: "PRESENT",
      description: [
        " - Collaborate with AI Platform Agile team",
        " - Complete tech tasks and tickets to achieve sprint goals",
        " - Build infrastructure to store and execute ML models with AWS",
        " - Design and maintain client-facing Salesforce site",
      ],
    },
    {
      name: "Innovative Financial Group",
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
      name: "UNC Wilmington",
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
  ],

  socialMedia: {
    github: "https://github.com/davidjnovak",
    email: "davidnovak01@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-novak-664970209/",
  },

  projects: [
    {
      title: "uTawk",
      isFeatured: true,
      thumbnail: "/assets/images/.png", // Replace with the path to your project thumbnail image
      githubUrl: "https://github.com/davidjnovak/utawk", // Replace "your-username" with your GitHub username and "astro-portfolio" with your project repository name
      liveUrl: "https://utawk.net",
    },
    {
      title: "kwerty",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png", // Replace with the path to your project thumbnail image
      githubUrl: "https://github.com/davidjnovak/kwerty", // Replace "your-username" with your GitHub username and "astro-portfolio" with your project repository name
      liveUrl: "https://kwerty.app",
    },
  ],
};
