// 简历的默认数据结构
// 所有模板都从这份数据里读取内容进行展示
const defaultResumeData = {
  // 基本信息
  fullName: "Full Name",
  title: "Professional Title",
  profileSummary:
    "A refined classic profile statement can be placed here to present career focus, professional strengths, and a concise summary of value delivered across roles.",

  // 左侧「PROFILE」板块
  profile:
    "Experienced professional with a structured approach to planning, communication, service quality, and continuous improvement. Skilled at organizing priorities, supporting decisions with clear information, and delivering dependable results.",

  // 工作经历（数组，可以有多条）
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
    {
      id: 2,
      position: "Position Title",
      company: "Company Name",
      city: "City Name",
      dateRange: "Date Range",
      bullets: [
        "Delivered administrative, operational, or client-focused support with accuracy.",
        "Tracked progress, prepared updates, and maintained reliable records.",
        "Collaborated with teams to resolve issues and strengthen service standards.",
      ],
    },
  ],

  // 教育背景（数组，可以有多条）
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

  // 右侧侧边栏 - 联系方式
  contact: {
    location: "Location Placeholder",
    availability: "Availability Placeholder",
    reference: "Reference On Request",
  },

  // 右侧侧边栏 - 技能（带进度条）
  skills: [
    { name: "Planning", level: 85 },
    { name: "Leadership", level: 75 },
    { name: "Reporting", level: 80 },
    { name: "Communication", level: 90 },
  ],

  // 右侧侧边栏 - 工具
  tools: ["Office Suite", "Reporting Tool", "Planning Platform", "Workflow System"],

  // 右侧侧边栏 - 语言
  languages: ["Language One", "Language Two"],
};

export default defaultResumeData;