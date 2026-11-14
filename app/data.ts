// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: { first: "Ronak", last: "Patel" },
  title: "Software Developer",
  location: "Canada",
  email: "patelronak.ca@gmail.com",
  linkedin: "https://www.linkedin.com/in/ronak-ca",
  github: "https://github.com/patelronak-ca",
  languages: "English, Hindi, Gujarati",
};

export const status: { key: string; value: string; highlight?: string }[] = [
  { key: "role", value: "Software Developer" },
  { key: "experience", value: "2 years, full-time" },
  { key: "stack", value: "Python · JS/TS · React · Node.js" },
  { key: "infra", value: "Docker · CI/CD · AWS · Linux" },
  { key: "studying", value: "Computer Systems Technician" },
  { key: "graduates", value: "April 2027" },
  { key: "open to", value: ", new-grad roles", highlight: "Winter 2027 co-op" },
];

export const numbers = [
  { value: "2 yrs", label: "building production software" },
  { value: "3", label: "applications shipped end to end" },
  { value: "100,000+", label: "users served" },
];

export const about = [
  "I spent two years as a Software Developer at Nexowa, where I built an admin dashboard, an AI-based booking system and a REST API for applications used by more than 100,000 people. I like owning a feature from the first design to the fix after it ships.",
  "Today I'm completing a Computer Systems Technician diploma at St. Lawrence College in Ontario, which has deepened my work with Linux, networking, Windows Server and cloud platforms. I'm looking for a co-op or new-grad developer role in Canada.",
];

export const experience = [
  {
    role: "Software Developer",
    company: "Nexowa",
    place: "Surat, India",
    dates: "July 2023 to July 2025",
    points: [
      "Designed, built and tested 3 applications in Python and JavaScript: an admin dashboard that replaced manual processes, an AI-based booking system, and a REST API.",
      "Integrated the OpenAI API into the booking system to automate bookings that were previously handled by hand.",
      "Debugged user-reported production issues, including bugs and slow pages, by tracing each one to its root cause.",
      "Wrote automated tests for new features and API endpoints, run through CI/CD pipelines before every release.",
      "Designed MySQL and MongoDB data models, and containerized the apps with Docker for deployment on AWS.",
      "Worked in a 10-person Agile team using Git, owning features from design through production.",
    ],
  },
];

export const projects = [
  {
    tag: "Work · Nexowa",
    title: "AI-based booking system",
    text: "Automated a booking process that staff used to handle by hand, using the OpenAI API behind a Python and JavaScript app.",
    tech: ["Python", "JavaScript", "OpenAI API"],
  },
  {
    tag: "Work · Nexowa",
    title: "Admin dashboard",
    text: "A web dashboard that replaced manual processes for the operations team, backed by MySQL and MongoDB.",
    tech: ["JavaScript", "MySQL", "MongoDB"],
  },
  {
    tag: "Work · Nexowa",
    title: "REST API",
    text: "Backend endpoints with automated tests, containerized with Docker and deployed to AWS through CI/CD.",
    tech: ["REST", "Docker", "AWS", "CI/CD"],
  },
  {
    tag: "College · Linux",
    title: "Linux shared folder access control",
    text: "Least-privilege access for team folders using users, groups, ACLs and setgid, plus a root-cause fix for a broken permission setup.",
    tech: ["Rocky Linux", "Bash", "ACLs"],
  },
  {
    tag: "College · Automation",
    title: "System health report script",
    text: "Collects OS, CPU, RAM, disk and uptime into a report, with try/catch error handling and every change tracked in Git.",
    tech: ["PowerShell", "Git"],
  },
  {
    tag: "College · Windows",
    title: "Secure Active Directory mini-enterprise",
    text: "Designed and configured a small enterprise environment with Windows Server and Active Directory.",
    tech: ["Windows Server", "Active Directory"],
  },
  {
    tag: "Personal · Web",
    title: "This portfolio",
    text: "Built with Next.js, React and TypeScript, exported as a static site and deployed to GitHub Pages by a GitHub Actions workflow.",
    tech: ["Next.js", "TypeScript", "GitHub Actions"],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Bash", "PowerShell"] },
  { group: "Web and APIs", items: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "REST APIs", "Postman"] },
  { group: "Data", items: ["MySQL", "MongoDB"] },
  { group: "Cloud and DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Git"] },
  { group: "Systems and networking", items: ["Linux", "Windows Server", "Active Directory", "TCP/IP", "DNS", "VLANs", "OSPF"] },
  { group: "Practices", items: ["Test automation", "Debugging", "Agile (Scrum)", "Jira", "OOP"] },
];

export const education = [
  {
    title: "Ontario College Diploma, Computer Systems Technician",
    when: "Jan 2026 to Apr 2027",
    text: "St. Lawrence College, Cornwall, Ontario. Linux, networking, Windows Server and Active Directory, cloud computing with Azure, PowerShell scripting.",
  },
  {
    title: "Diploma in Information Technology",
    when: "May 2021 to May 2023",
    text: "Gujarat Technological University, India. CGPA 7.45/10.",
  },
];
