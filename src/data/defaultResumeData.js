const defaultResumeData = {
  fullName: "Full Name",
  photo: null,
  title: "Professional Title",

  profile:
    "Experienced professional with a structured approach to planning, communication, service quality, and continuous improvement. Skilled at organizing priorities, supporting decisions with clear information, and delivering dependable results.",

  experience: [
    {
      id: 1,
      position: "Position Title",
      company: "Company Name",
      city: "City Name",
      dateRange: "Date Range",
      bullets: [
        "Managed primary responsibilities, coordinated priorities, and supported quality outcomes through organized processes and consistent communication.",
        "Improved documentation, reporting standards, and cross-functional coordination.",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Project Name",
      role: "Role",
      dateRange: "Date Range",
      description: "Project description goes here.",
    },
  ],

  education: [
    {
      id: 1,
      degree: "Degree or Certification",
      institution: "Institution Name",
      field: "Field of Study",
      dateRange: "Date Range",
      details: "Relevant coursework, honors, professional training, or development details.",
    },
  ],

  contact: {
    location: "Location Placeholder",
    availability: "Availability Placeholder",
    reference: "Reference On Request",
    email: "",
    phone: "",
  },

  skills: [
    { name: "Planning", level: 85 },
    { name: "Leadership", level: 75 },
    { name: "Reporting", level: 80 },
    { name: "Communication", level: 90 },
  ],

  certifications: ["Certification One", "Certification Two"],
  tools: ["Office Suite", "Reporting Tool", "Planning Platform", "Workflow System"],
  languages: ["Language One", "Language Two"],
};

export default defaultResumeData;