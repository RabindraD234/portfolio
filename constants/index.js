import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Multicloud",
    icon: <FullStackIcon />,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: <FrontendIcon />,
  },
  {
    title: "CI/CD",
    icon: <BackendIcon />,
  },
  {
    title: "Containers & Orchestration",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Automation & Scripting",
    icon: <FreelancerIcon />,
  },
  {
    title: "Release Management",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  devops: [
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Kubernetes",
      icon: "/assets/tech/kubernetes.svg",
      link: "https://kubernetes.io/",
    },
    {
      name: "Terraform",
      icon: "/assets/tech/terraform.svg",
      link: "https://www.terraform.io/",
    },
    {
      name: "Ansible",
      icon: "/assets/tech/ansible.svg",
      link: "https://www.ansible.com/",
    },
    {
      name: "Jenkins",
      icon: "/assets/tech/jenkins.svg",
      link: "https://www.jenkins.io/",
    },
    {
      name: "GitHub-Actions",
      icon: "/assets/tech/githubactions.svg",
      link: "https://github.com/features/actions",
    },
    {
      name: "Argo-CD",
      icon: "/assets/tech/argocd.svg",
      link: "https://argo-cd.readthedocs.io/en/stable/",
    },
    {
      name: "SonarQube",
      icon: "/assets/tech/sonarqube.svg",
      link: "https://www.sonarsource.com/",
    },
    {
      name: "Helm",
      icon: "/assets/tech/helm.svg",
      link: "https://helm.sh/",
    },
  ],
  cloud: [
    {
      name: "AWS",
      icon: "/assets/tech/aws.svg",
      link: "https://aws.amazon.com/",
    },
    {
      name: "Azure",
      icon: "/assets/tech/azure.svg",
      link: "https://azure.microsoft.com/",
    },
    {
      name: "GCP",
      icon: "/assets/tech/gcp.svg",
      link: "https://cloud.google.com/",
    },
  ],
  scripting: [
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/",
    },
    {
      name: "Bash",
      icon: "/assets/tech/bash.svg",
      link: "https://www.linuxfoundation.org/",
    },
    {
      name: "Golang",
      icon: "/assets/tech/golang.svg",
      link: "https://go.dev/",
    },
    {
      name: "YAML",
      icon: "/assets/tech/yaml.svg",
      link: "https://yaml.org/",
    },
  ],
  iac: [
    {
      name: "Terraform",
      icon: "/assets/tech/terraform.svg",
      link: "https://www.terraform.io/",
    },
    {
      name: "Cloudformation",
      icon: "/assets/tech/cloudformation.svg",
      link: "https://aws.amazon.com/cloudformation/",
    },
    {
      name: "Pulumi",
      icon: "/assets/tech/pulumi.svg",
      link: "https://www.pulumi.com/",
    },
  ],
  monitoring: [
    {
      name: "Prometheus",
      icon: "/assets/tech/prometheus.svg",
      link: "https://prometheus.io/",
    },
    {
      name: "Grafana",
      icon: "/assets/tech/grafana.svg",
      link: "https://grafana.com/",
    },
    {
      name: "ELK",
      icon: "/assets/tech/elasticsearch.svg",
      link: "https://www.elastic.co/",
    },
    {
      name: "DataDog",
      icon: "/assets/tech/datadog.svg",
      link: "https://www.datadoghq.com/",
    },

  ],
  security: [
    {
      name: "BurpSuite",
      icon: "/assets/tech/burpsuite.svg",
      link: "https://portswigger.ne",
    },
    {
      name: "Metasploit",
      icon: "/assets/tech/metasploit.svg",
      link: "https://www.metasploit.com/",
    },
    {
      name: "ZAP",
      icon: "/assets/tech/zap.png",
      link: "https://www.zaproxy.org/",
    },
    {
      name: "Aquasec",
      icon: "/assets/tech/aqua.svg",
      link: "https://www.aquasec.com/",
    },
  ],
  loadbalancers: [
    {
      name: "NGINX",
      icon: "/assets/tech/nginx.svg",
      link: "https://nginx.org/",
    },
    {
      name: "HAProxy",
      icon: "/assets/tech/haproxy.svg",
      link: "https://www.haproxy.com/",
    },
  ],
  versioning: [
    {
      name: "GitHub",
      icon: "/assets/tech/github.svg",
      link: "https://github.com/",
    },
    {
      name: "GitLab",
      icon: "/assets/tech/gitlab.svg",
      link: "https://about.gitlab.com/",
    },
    {
      name: "Bitbucket",
      icon: "/assets/tech/bitbucket.svg",
      link: "https://bitbucket.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/mysql.svg",
      link: "https://www.mysql.com/",
    },
    {
      name: "MariaDB",
      icon: "/assets/tech/mariadb.svg",
      link: "https://mariadb.org/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Oracle",
      icon: "/assets/tech/oracle.svg",
      link: "https://www.oracle.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.svg",
      link: "https://www.postgresql.org/",
    },
  ],
  testing: [
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Selenium",
      icon: "/assets/tech/selenium.svg",
      link: "https://www.selenium.dev/",
    },
  ],
  sre: [
    {
      name: "New Relic",
      icon: "/assets/tech/new_relic.svg",
      link: "https://newrelic.com/",
    },
    {
      name: "Litmus",
      icon: "/assets/tech/litmus.svg",
      link: "https://litmuschaos.io/",
    },
    {
      name: "Gremlin",
      icon: "/assets/tech/gremlin.svg",
      link: "https://www.gremlin.com/",
    },
    {
      name: "Opsgenie",
      icon: "/assets/tech/opsgenie.svg",
      link: "https://www.atlassian.com/software/opsgenie",
    },
    {
      name: "PagerDuty",
      icon: "/assets/tech/pagerduty.svg",
      link: "https://www.pagerduty.com/",
    },
  ],
  environments: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "Cloud DevOps Engineer",
    company_name: "Limasoft India Pvt Ltd",
    icon: "/assets/company/limalogo.svg",
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Architected and managed highly scalable, secure, and fault-tolerant cloud infrastructure across AWS and Azure platforms.",
      "Designed and implemented advanced CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions, ensuring rapid and reliable deployments.",
      "Automated infrastructure provisioning and configuration management using Terraform, Ansible, and CloudFormation, reducing manual effort by 40%.",
      "Enhanced system observability by integrating tools like Prometheus, Grafana, and ELK stack, leading to a 50% reduction in incident resolution time.",
      "Proactively led cross-functional teams in optimizing cost, performance, and reliability of cloud environments, delivering measurable business impact."
    ],
  },
  {
    title: "Cloud DevOps Engineer",
    company_name: "Neosoft Technologies",
    icon: "/assets/company/agile.png",
    iconBg: "#E6DEDD",
    date: "June 2019 - March 2023",
    points: [
      "Orchestrated seamless cloud migration projects for enterprise clients, achieving cost savings and improved scalability.",
      "Built and managed Kubernetes clusters for containerized applications, ensuring zero-downtime deployments and efficient resource utilization.",
      "Automated security and compliance processes by implementing IAM policies, encryption, and continuous security scans.",
      "Streamlined workflows by integrating DevOps best practices, leading to a 35% reduction in project delivery times.",
      "Mentored junior engineers, fostering a culture of learning and continuous improvement within the DevOps team."
    ],
  },
  {
    title: "DevOps Consultant",
    company_name: "Freelance Projects",
    icon: "/assets/company/devops-2.svg",
    iconBg: "#E6DEDD",
    date: "Part-time (2020 - Present)",
    points: [
      "Advised startups and enterprises on cloud strategies, reducing infrastructure costs by up to 30%.",
      "Developed custom DevOps solutions tailored to unique business needs, ensuring scalability and reliability.",
      "Provided hands-on training and workshops on Kubernetes, Docker, and cloud-native technologies.",
      "Assisted clients in adopting GitOps practices for enhanced automation and version control of infrastructure.",
      "Resolved critical production issues, demonstrating expertise under high-pressure environments."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/fig-pro.png",
    //source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    //deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "GDSC Website",
    description:
      "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gdsc-website.png",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
   // source_code_link:
   //   "https://github.com/Shivam-Sharma-1/Facility-Management-System",
   // deployed_link:
   //   "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },

];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/RabindraD234",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/rabindra_vibes",
  },
];

const heroTexts = [
  "Multicloud DevOps Engineer", 500,
  "Cloud Architect", 500,
  "Cloud Solutions Expert", 500,
  "Infrastructure Automation", 500,
  "CI/CD Expert", 500,
  "AWS SysOps Certified", 500,
  "SRE Specialist", 500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
