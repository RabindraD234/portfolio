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
import DemoIcon from "./../public/assets/icons/demo.svg";

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
    title: "Automation & Scripting",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Containers & Orchestration",
    icon: <FreelancerIcon />,
  },
  {
    title: "Monitoring",
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
      name: "Ubuntu",
      icon: "/assets/tech/ubuntu.svg",
      link: "https://ubuntu.com/",
    },
    {
      name: "CentOS",
      icon: "/assets/tech/centos.svg",
      link: "https://www.centos.org/",
    },
    {
      name: "Red Hat",
      icon: "/assets/tech/redhat.svg",
      link: "https://www.redhat.com/en",
    },
    {
      name: "SUSE",
      icon: "/assets/tech/suse.svg",
      link: "https://www.suse.com/",
    },
    {
      name: "Windows",
      icon: "/assets/tech/windows.svg",
      link: "https://www.microsoft.com/",
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

const projects = [
  {
    name: "DevOpsPro",
    description:
      "DevOpsPro is a comprehensive CI/CD pipeline management tool designed to streamline the software delivery process. Built with Git, Jenkins, Maven, Trivy, Docker, SonarQube, ArgoCD, Kubernetes, and Slack, it automates build, deployment, security scanning, and monitoring for scalable cloud-native applications.",
    tags: [
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "jenkins",
        color: "yellow-text-gradient",
      },
      {
        name: "maven",
        color: "blue-text-gradient",
      },
      {
        name: "trivy",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "sonarqube",
        color: "orange-text-gradient",
      },
      {
        name: "argocd",
        color: "purple-text-gradient",
      },
      {
        name: "kubernetes",
        color: "purple-text-gradient",
      },
      {
        name: "slack",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/devops-pro.gif",
  },
  {
    name: "CloudOps Manager",
    description:
      "Welcome to the official repository for the DevOps Automation Platform. Built with GitLab, Jenkins, Maven, Docker, Trivy, SonarQube, DockerHub private repositories, Kubernetes, Load Balancer, Domain Mapper, Terraform, Grafana, and Prometheus! This platform automates CI/CD pipelines, security scanning, infrastructure provisioning, and monitoring for cloud-native applications.",
    tags: [
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "jenkins",
        color: "yellow-text-gradient",
      },
      {
        name: "trivy",
        color: "green-text-gradient",
      },
      {
        name: "sonarqube",
        color: "orange-text-gradient",
      },
      {
        name: "maven",
        color: "purple-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "k8s",
        color: "purple-text-gradient",
      },
      {
        name: "LB",
        color: "gray-text-gradient",
      },
      {
        name: "domain-mapper",
        color: "brown-text-gradient",
      },
      {
        name: "terraform",
        color: "cyan-text-gradient",
      },
      {
        name: "grafana",
        color: "green-text-gradient",
      },
      {
        name: "prometheus",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/devops-automation-platform.gif",
    source_code_link: "",
    deployed_link: "",
  },
  {
    name: "AWS Cloud Deployment Pipeline",
    description:
      "This project implements a full CI/CD pipeline with Git, Jenkins, Docker, ECR, Kubernetes, and Terraform. The deployment process includes committing code, managing dev and prod branches, installing dependencies, running lint and unit tests, retrieving the last commit details, and configuring environment-based builds. Docker images are built and pushed to ECR. Kubernetes manifests are updated, kubeconfig is configured, and services are deployed. AWS S3 is used as a backend for Terraform workspaces.",
    tags: [
      {
        name: "git",
        color: "red-text-gradient",
      },
      {
        name: "jenkins",
        color: "yellow-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "ecr",
        color: "orange-text-gradient",
      },
      {
        name: "kubernetes",
        color: "purple-text-gradient",
      },
      {
        name: "terraform",
        color: "cyan-text-gradient",
      },
      {
        name: "aws-s3",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/aws-cloud-deployment.gif",
  },
  {
    name: "Azure DevOps Kubernetes Integration",
    description:
      "This project integrates GitHub, GitHub Actions, Azure Boards, and Kubernetes using Azure DevOps Pipelines. The development lifecycle includes GitHub Actions triggering builds, pushing images to Azure Container Registries for both development and production. DevTest includes Development and QA resource groups with AKS clusters connected to Azure Cosmos DB. Production includes a production AKS connected similarly. Azure Key Vault, Active Directory, and Azure Monitor ensure secure and efficient operation.",
    tags: [
      {
        name: "vs-code",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "black-text-gradient",
      },
      {
        name: "github-actions",
        color: "green-text-gradient",
      },
      {
        name: "azure-boards",
        color: "purple-text-gradient",
      },
      {
        name: "aks",
        color: "cyan-text-gradient",
      },
      {
        name: "cosmos-db",
        color: "orange-text-gradient",
      },
      {
        name: "azure-key-vault",
        color: "pink-text-gradient",
      },
      {
        name: "azure-ad",
        color: "yellow-text-gradient",
      },
      {
        name: "azure-monitor",
        color: "red-text-gradient",
      },
    ],
    image: "/assets/projects/azure-k8s-integration.gif",
  },
  {
    name: "Prometheus Monitoring & Alerting System",
    description:
      "A comprehensive monitoring and alerting solution utilizing Prometheus servers for metric collection from Kubernetes API, Nodes, and Microservices. Data is visualized in Grafana dashboards and alerts are pushed using AlertManager through webhooks, Slack, and Email.",
    tags: [
      {
        name: "prometheus",
        color: "red-text-gradient",
      },
      {
        name: "kubernetes-api",
        color: "blue-text-gradient",
      },
      {
        name: "kube-state-metrics",
        color: "yellow-text-gradient",
      },
      {
        name: "redis",
        color: "green-text-gradient",
      },
      {
        name: "apache",
        color: "orange-text-gradient",
      },
      {
        name: "fluentd",
        color: "pink-text-gradient",
      },
      {
        name: "grafana",
        color: "cyan-text-gradient",
      },
      {
        name: "alertmanager",
        color: "purple-text-gradient",
      },
      {
        name: "webhooks",
        color: "gray-text-gradient",
      },
      {
        name: "slack",
        color: "teal-text-gradient",
      },
      {
        name: "email",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/prometheus-architecture.gif",
  },
  {
    name: "AWS VPC Network Architecture",
    description:
      "This project demonstrates a highly-available and scalable architecture built using AWS services. It leverages VPC with public and private subnets across multiple availability zones, incorporating services like ALB, NAT Gateways, and VPC Endpoints for secure communication. Additionally, it integrates VPN, Direct Connect, and Transit Gateway for hybrid connectivity with on-premise infrastructure.",
    tags: [
      {
        name: "aws-vpc",
        color: "blue-text-gradient",
      },
      {
        name: "nat-gateway",
        color: "green-text-gradient",
      },
      {
        name: "alb",
        color: "pink-text-gradient",
      },
      {
        name: "s3",
        color: "orange-text-gradient",
      },
      {
        name: "lambda",
        color: "yellow-text-gradient",
      },
      {
        name: "vpn",
        color: "purple-text-gradient",
      },
      {
        name: "transit-gateway",
        color: "cyan-text-gradient",
      },
      {
        name: "direct-connect",
        color: "red-text-gradient",
      },
      {
        name: "route53",
        color: "gray-text-gradient",
      },
      {
        name: "cloudfront",
        color: "teal-text-gradient",
      },
      {
        name: "flow-logs",
        color: "indigo-text-gradient",
      },
    ],
    image: "/assets/projects/cloud-vpc-architecture.gif",
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
  projects,
  socials,
  heroTexts,
};
