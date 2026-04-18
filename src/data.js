// Central data file — all CV info lives here
export const profile = {
  name: "Md Rajib Hossain",
  title: "IT & Lead Generation Executive",
  subtitle: "Frontend Developer · Networking Enthusiast · Technical Support",
  location: "Konapara, Jatrabari, Dhaka",
  email: "md.razib161657@gmail.com",
  phone: "01569141609",
  about:
    "A passionate IT professional and front-end developer with hands-on experience in computer networking, hardware troubleshooting, ERP systems, and lead generation. I enjoy breaking complex problems into elegant solutions and continuously sharpening my technical skill set.",
};

export const experiences = [
  {
    id: 1,
    company: "Abridge IT",
    role: "IT & Lead Generation Executive",
    period: "Aug 2024 – Present",
    location: "Konapara, Jatrabari",
    current: true,
    highlights: [
      "Computer network, hardware connectivity & troubleshooting activities.",
      "Software & operating system updates and maintenance.",
      "Executed targeted outreach campaigns engaging key decision-makers, consistently exceeding monthly qualified lead quotas.",
      "Vetted high-potential prospects through rigorous qualification processes, improving conversion rate of leads to active sales opportunities.",
    ],
  },
  {
    id: 2,
    company: "Nucleus Academy & Admission Coaching",
    role: "Lecturer (Part-time)",
    period: "Jul 2022 – Present",
    location: "Konapara, Jatrabari",
    current: true,
    highlights: [
      "Developed specialised techniques for Math and Physics to improve students' speed and accuracy in competitive exams.",
      "Broke down complex theories into digestible modules, ensuring high student engagement and retention.",
    ],
  },
];

export const skills = [
  {
    category: "ERP Systems",
    icon: "🗄️",
    items: [
      { name: "System Control & Configuration", level: 85, tag: "Expert" },
      { name: "ERP-specific Actions", level: 80, tag: "Expert" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    items: [
      { name: "HTML5", level: 75, tag: "Medium" },
      { name: "CSS3", level: 70, tag: "Medium" },
    ],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    items: [
      { name: "C", level: 50, tag: "Basic" },
      { name: "Python", level: 50, tag: "Basic" },
      { name: "JavaScript", level: 50, tag: "Basic" },
    ],
  },
  {
    category: "Networking",
    icon: "🌐",
    items: [
      { name: "CCNA", level: 20, tag: "Learning" },
      { name: "MTCNA", level: 20, tag: "Learning" },
    ],
  },
];

export const education = [
  {
    id: 1,
    institution: "Daffodil International University",
    degree: "BSc in Computer Science & Engineering",
    period: "May 2018 – Jun 2023",
    location: "Birulia, Savar, Dhaka-1216",
    result: "CGPA: 2.86 / 4.00",
    icon: "🎓",
  },
  {
    id: 2,
    institution: "Dr Mahbubur Rahman Mollah College",
    degree: "HSC in Science",
    period: "May 2014 – Jun 2016",
    location: "Demra, Dhaka",
    result: "GPA: 5.00 / 5.00",
    icon: "🏫",
  },
];

export const languages = [
  { name: "Spoken English", level: 5, outOf: 10 },
  { name: "Written / Messaging", level: 6, outOf: 10 },
  { name: "Listening", level: 7, outOf: 10 },
];

export const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Skills",     href: "#skills"      },
  { label: "Education",  href: "#education"   },
  { label: "Contact",    href: "#contact"     },
];
