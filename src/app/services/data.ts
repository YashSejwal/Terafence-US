import {
  Globe,
  Shield,
  Cloud,
  Monitor,
  Network,
  Link2,
  Database,
  Users,
  Cpu,
  DollarSign,
  Server,
  Lock,
  Headphones,
  BarChart3,
  Settings,
  Workflow,
  Layers,
  Eye,
  Target,
  Zap,
  RefreshCcw,
  FileSearch,
  Lightbulb,
  Building2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type ServiceOffering = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
};

export type CaseStudy = {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  image: string;
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServicePageData = {
  slug: string;
  navLabel: string;
  hero: {
    badge: string;
    badgeIcon: LucideIcon;
    title: string;
    titleAccent: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    accentColors: { from: string; to: string };
    stats: ServiceStat[];
    image: string;
  };
  overview: {
    title: string;
    description: string;
    keyPoints: { icon: LucideIcon; title: string; desc: string }[];
  };
  offerings: ServiceOffering[];
  caseStudy: CaseStudy;
  subServices?: { name: string; href: string; description: string }[];
};

export const SERVICES: ServicePageData[] = [

{
slug: "advisory",
navLabel: "Advisory & Consulting",

hero: {
badge: "Strategic Advisory",
badgeIcon: Lightbulb,
title: "Advisory &",
titleAccent: "Consulting",
subtitle: "Strategic Technology Transformation",
description:
"Terafence helps global enterprises align technology with business growth. Our advisory practice enables organizations across North America, Europe and Asia-Pacific to modernize infrastructure, optimize IT spending and accelerate digital transformation.",
primaryCta: "Book a Consultation",
secondaryCta: "Our Approach",
accentColors: { from: "emerald-400", to: "blue-400" },
stats: [
{ value: "50+", label: "Enterprises Advised" },
{ value: "40%", label: "Average IT Cost Optimization" },
{ value: "99.9%", label: "Migration Success Rate" }
],
image: "/images/services/advisory/hero.png"
},

overview: {
title: "Technology Strategy That Drives Outcomes",
description:
"Our consultants bring deep experience across global enterprise environments helping organizations redesign technology architecture, modernize legacy platforms and unlock operational efficiency.",
keyPoints: [
{
icon: Target,
title: "Digital Strategy",
desc: "Enterprise technology roadmaps aligned with business growth."
},
{
icon: ShieldCheck,
title: "Risk & Compliance Advisory",
desc: "Security and governance frameworks aligned to global standards."
},
{
icon: Building2,
title: "Enterprise Architecture",
desc: "Future ready architecture for scalable global platforms."
}
]
},

offerings: [
{
icon: Database,
title: "Data Migration",
description:
"Enterprise scale migration across hybrid environments including cloud, on-prem and modern analytics platforms.",
highlights: [
"Cloud Data Migration",
"Enterprise ETL Pipelines",
"Real-time Replication",
"Data Validation"
],
gradient: "from-emerald-500 to-teal-500"
},
{
icon: Users,
title: "Workplace Experience Consulting",
description:
"Design digital workplace strategies that improve employee productivity and collaboration across global teams.",
highlights: [
"Employee Journey Mapping",
"Collaboration Strategy",
"Adoption Programs",
"Experience Analytics"
],
gradient: "from-blue-500 to-cyan-500"
},
{
icon: RefreshCcw,
title: "Technology Transformation",
description:
"Modernize legacy platforms and adopt cloud-native architecture with DevOps driven delivery models.",
highlights: [
"Legacy Modernization",
"Cloud Native Platforms",
"DevOps Enablement",
"Platform Engineering"
],
gradient: "from-purple-500 to-pink-500"
},
{
icon: DollarSign,
title: "Cost Optimization & FinOps",
description:
"Reduce enterprise IT spending while improving performance using FinOps and infrastructure optimization.",
highlights: [
"Cloud FinOps",
"License Optimization",
"TCO Analysis",
"Vendor Rationalization"
],
gradient: "from-amber-500 to-orange-500"
},
{
icon: FileSearch,
title: "Enterprise Architecture",
description:
"Design scalable reference architectures aligned with modern enterprise platforms.",
highlights: [
"TOGAF Architecture",
"Integration Strategy",
"Technology Evaluation",
"Architecture Governance"
],
gradient: "from-rose-500 to-red-500"
},
{
icon: Shield,
title: "Security & Compliance Consulting",
description:
"Implement enterprise security governance aligned to global regulatory frameworks.",
highlights: [
"Security Architecture",
"Risk Assessment",
"Compliance Readiness",
"Audit Support"
],
gradient: "from-teal-500 to-cyan-500"
}
],

caseStudy: {
industry: "Global Manufacturing",
title: "Enterprise Technology Transformation for a Global Manufacturing Group",
challenge:
"A multinational manufacturing enterprise operating across North America, Germany and Singapore faced fragmented IT systems and aging infrastructure across dozens of production facilities.",
solution:
"Terafence delivered an enterprise transformation roadmap including cloud migration strategy, unified data platforms and modern digital workplace architecture enabling standardized IT operations across global plants.",
results: [
{ metric: "10+", label: "Global Facilities Modernized" },
{ metric: "$20M+", label: "IT Cost Savings Identified" },
{ metric: "60%", label: "Faster System Integration" },
{ metric: "3 Year", label: "Transformation Roadmap Delivered" }
],
image: "/images/services/advisory/case-study.png"
}
},

{
slug: "cloud",
navLabel: "Cloud Services",

hero: {
badge: "Cloud Solutions",
badgeIcon: Cloud,
title: "Cloud",
titleAccent: "Services",
subtitle: "Enterprise Cloud Platforms at Global Scale",
description:
"We design, migrate and operate secure cloud platforms across AWS, Azure and GCP enabling global enterprises to scale digital platforms across Americas, Europe and Asia-Pacific.",
primaryCta: "Start Cloud Journey",
secondaryCta: "Cloud Assessment",
accentColors: { from: "blue-400", to: "cyan-400" },
stats: [
{ value: "99.99%", label: "Global Platform Availability" },
{ value: "500+", label: "Cloud Workloads Managed" },
{ value: "35%", label: "Average Cost Optimization" }
],
image: "/images/services/cloud/hero.png"
},

overview: {
title: "Enterprise Cloud Transformation",
description:
"Terafence enables enterprises to transition from legacy infrastructure to scalable multi-cloud platforms delivering performance, security and cost efficiency.",
keyPoints: [
{
icon: RefreshCcw,
title: "Cloud Migration",
desc: "Secure migration across hybrid and multi-cloud environments."
},
{
icon: Zap,
title: "Cloud Native Platforms",
desc: "Kubernetes and microservices architectures for modern applications."
},
{
icon: DollarSign,
title: "FinOps Optimization",
desc: "Cost governance and resource optimization for cloud infrastructure."
}
]
},

offerings: [
{
icon: Cloud,
title: "Cloud Migration Services",
description:
"Enterprise workload migration across AWS, Azure and GCP environments.",
highlights: [
"Lift & Shift",
"Re-platforming",
"Hybrid Cloud",
"Multi Region"
],
gradient: "from-blue-500 to-indigo-500"
},
{
icon: Server,
title: "Cloud Infrastructure (IaaS)",
description:
"Scalable compute, storage and networking infrastructure for enterprise platforms.",
highlights: [
"Auto Scaling",
"High Availability",
"Disaster Recovery",
"Multi Region"
],
gradient: "from-cyan-500 to-teal-500"
},
{
icon: Layers,
title: "Platform Services (PaaS)",
description:
"Managed platforms enabling faster application development and deployment.",
highlights: [
"Kubernetes",
"CI/CD Pipelines",
"API Gateways",
"Managed Databases"
],
gradient: "from-violet-500 to-purple-500"
},
{
icon: Lock,
title: "Cloud Security",
description:
"Zero trust cloud security architecture protecting enterprise workloads.",
highlights: [
"Identity Controls",
"Encryption",
"Security Monitoring",
"Compliance"
],
gradient: "from-emerald-500 to-green-500"
},
{
icon: BarChart3,
title: "FinOps & Optimization",
description:
"Continuous cost monitoring and optimization for enterprise cloud infrastructure.",
highlights: [
"Cost Allocation",
"Resource Optimization",
"Usage Analytics",
"Budget Governance"
],
gradient: "from-amber-500 to-yellow-500"
},
{
icon: Settings,
title: "Managed Cloud Services",
description:
"24/7 cloud monitoring, support and lifecycle management for enterprise platforms.",
highlights: [
"Monitoring",
"Patch Management",
"Incident Response",
"Operations Support"
],
gradient: "from-pink-500 to-rose-500"
}
],

caseStudy: {
industry: "Global SaaS Technology",
title: "Multi Region Cloud Platform for a Global SaaS Provider",
challenge:
"A fast growing SaaS company serving millions of users across the United States, Europe and Asia required a resilient cloud platform capable of scaling globally.",
solution:
"Terafence architected a cloud native platform using Kubernetes clusters, CI/CD pipelines and automated failover enabling reliable global service delivery.",
results: [
{ metric: "3M+", label: "Users Supported Worldwide" },
{ metric: "99.99%", label: "Platform Availability" },
{ metric: "42%", label: "Infrastructure Cost Optimization" },
{ metric: "10x", label: "Faster Deployment Cycles" }
],
image: "/images/services/cloud/case-study.png"
}
},

{
slug: "workplace",
navLabel: "Workplace Services",

hero: {
badge: "Modern Workplace",
badgeIcon: Monitor,
title: "Workplace",
titleAccent: "Services",
subtitle: "Secure Digital Collaboration for Global Teams",
description:
"Terafence delivers modern digital workplaces enabling unified collaboration, secure endpoints and seamless productivity for distributed global teams.",
primaryCta: "Transform Workplace",
secondaryCta: "Workplace Audit",
accentColors: { from: "violet-400", to: "pink-400" },
stats: [
{ value: "40%", label: "Productivity Increase" },
{ value: "10K+", label: "Endpoints Managed" },
{ value: "60%", label: "Faster IT Resolution" }
],
image: "/images/services/workplace/hero.png"
},

overview: {
title: "Modern Workplace Experience",
description:
"Enable secure digital collaboration through modern workplace platforms combining endpoint management, identity security and unified collaboration tools.",
keyPoints: [
{
icon: Monitor,
title: "Endpoint Management",
desc: "Unified management across enterprise endpoints."
},
{
icon: Users,
title: "Unified Collaboration",
desc: "Enterprise collaboration platforms for distributed teams."
},
{
icon: Lock,
title: "Workspace Security",
desc: "Identity driven security across digital workplaces."
}
]
},

offerings: [
{
icon: Monitor,
title: "Digital Workspace Setup",
description:
"Modern digital workspace deployments including VDI, device management and collaboration platforms.",
highlights: [
"VDI Deployment",
"Secure Remote Access",
"Profile Migration",
"Device Management"
],
gradient: "from-violet-500 to-purple-500"
},
{
icon: Cpu,
title: "Endpoint Management (UEM)",
description:
"Lifecycle management across laptops, mobile devices and enterprise endpoints.",
highlights: [
"Device Enrollment",
"Patch Management",
"Asset Tracking",
"Remote Wipe"
],
gradient: "from-pink-500 to-rose-500"
},
{
icon: Users,
title: "Unified Collaboration",
description:
"Enterprise collaboration platforms enabling meetings, messaging and productivity workflows.",
highlights: [
"Team Collaboration",
"Video Meetings",
"Messaging",
"Productivity Integration"
],
gradient: "from-blue-500 to-indigo-500"
},
{
icon: Headphones,
title: "Service Desk",
description:
"Multi channel enterprise IT support with AI driven service management.",
highlights: [
"L1 L2 L3 Support",
"AI Chatbots",
"Self Service Portal",
"SLA Tracking"
],
gradient: "from-emerald-500 to-teal-500"
},
{
icon: BarChart3,
title: "Workplace Experience",
description:
"Measure digital workplace performance through productivity analytics and employee experience insights.",
highlights: [
"Experience Metrics",
"Adoption Analytics",
"Productivity Insights",
"Experience Scoring"
],
gradient: "from-amber-500 to-orange-500"
},
{
icon: Shield,
title: "Endpoint Security",
description:
"Zero trust endpoint protection including EDR, device compliance and identity controls.",
highlights: [
"EDR Protection",
"Identity Security",
"Compliance Enforcement",
"Device Monitoring"
],
gradient: "from-teal-500 to-cyan-500"
}
],

caseStudy: {
industry: "Global Pharmaceutical",
title: "Secure Digital Workplace for a Global Pharmaceutical Enterprise",
challenge:
"A pharmaceutical organization with research teams across the United States, Germany and Singapore required a secure digital workplace for distributed research collaboration.",
solution:
"Terafence deployed enterprise collaboration platforms, secure endpoints and identity driven access enabling global research teams to collaborate securely.",
results: [
{ metric: "12,000+", label: "Employees Enabled" },
{ metric: "55%", label: "Collaboration Improvement" },
{ metric: "70%", label: "Faster IT Support Resolution" },
{ metric: "30+", label: "Global Offices Connected" }
],
image: "/images/services/workplace/case-study.png"
}
},

{
slug: "network",
navLabel: "Network Services",

hero: {
badge: "Network Infrastructure",
badgeIcon: Network,
title: "Network",
titleAccent: "Services",
subtitle: "Global Enterprise Connectivity",
description:
"Design and deploy enterprise networks connecting global operations across data centers, campuses and cloud environments.",
primaryCta: "Network Assessment",
secondaryCta: "View Solutions",
accentColors: { from: "amber-400", to: "orange-400" },
stats: [
{ value: "30K+", label: "Endpoints Connected" },
{ value: "99.99%", label: "Network Availability" },
{ value: "10+", label: "Global Sites Deployed" }
],
image: "/images/services/network/hero.png"
},

overview: {
title: "Enterprise Networking at Scale",
description:
"Terafence designs high performance networks enabling global connectivity across enterprise environments.",
keyPoints: [
{
icon: Building2,
title: "Campus Networks",
desc: "Secure enterprise LAN infrastructure."
},
{
icon: Globe,
title: "SD WAN",
desc: "Software defined networking connecting global offices."
},
{
icon: Shield,
title: "Zero Trust Networking",
desc: "Identity driven secure networking architecture."
}
]
},

offerings: [
{
icon: Building2,
title: "Campus Networking",
description:
"Enterprise LAN infrastructure delivering secure connectivity across offices and campuses.",
highlights: [
"WiFi 6",
"Network Segmentation",
"NAC",
"QoS Policies"
],
gradient: "from-amber-500 to-yellow-500"
},
{
icon: Globe,
title: "SD WAN",
description:
"Software defined networking connecting global sites securely.",
highlights: [
"Multi Link Routing",
"Application Steering",
"WAN Optimization",
"Zero Touch Deployment"
],
gradient: "from-orange-500 to-red-500"
},
{
icon: Server,
title: "Data Center Networking",
description:
"High performance fabric architectures for enterprise data centers.",
highlights: [
"Spine Leaf Architecture",
"Micro Segmentation",
"Network Automation",
"High Availability"
],
gradient: "from-blue-500 to-indigo-500"
},
{
icon: Network,
title: "Secure Enterprise Networks",
description:
"Zero trust enterprise networking architecture for global organizations.",
highlights: [
"Zero Trust",
"Network Encryption",
"Secure Gateways",
"Access Control"
],
gradient: "from-emerald-500 to-teal-500"
},
{
icon: Eye,
title: "Network Monitoring",
description:
"24/7 network visibility with advanced telemetry and analytics.",
highlights: [
"Real Time Telemetry",
"Anomaly Detection",
"Capacity Planning",
"SLA Reporting"
],
gradient: "from-violet-500 to-purple-500"
},
{
icon: Settings,
title: "Network as a Service",
description:
"Managed enterprise networking delivered through flexible operational models.",
highlights: [
"Managed Routers",
"Managed Firewalls",
"Managed WiFi",
"Lifecycle Management"
],
gradient: "from-teal-500 to-cyan-500"
}
],

caseStudy: {
industry: "Global Logistics",
title: "SD WAN Transformation for an International Logistics Network",
challenge:
"A logistics enterprise with operations across Europe, the Middle East and Asia required reliable connectivity across hundreds of distribution centers.",
solution:
"Terafence deployed a global SD WAN platform integrating enterprise firewalls and centralized network monitoring.",
results: [
{ metric: "20+", label: "Distribution Centers Connected" },
{ metric: "65%", label: "Latency Reduction" },
{ metric: "99.99%", label: "Network Availability" },
{ metric: "Real Time", label: "Operational Visibility" }
],
image: "/images/services/network/case-study.png"
}
},

{
slug: "cybersecurity",
navLabel: "Cybersecurity",

hero: {
badge: "Cybersecurity Solutions",
badgeIcon: Shield,
title: "Cyber",
titleAccent: "Security",
subtitle: "Threat Intelligence. Identity Security. XDR.",
description:
"Terafence delivers modern cybersecurity platforms including threat intelligence, XDR, EDR, identity security and enterprise SOC operations.",
primaryCta: "Security Assessment",
secondaryCta: "View Capabilities",
accentColors: { from: "red-400", to: "amber-400" },
stats: [
{ value: "24/7", label: "SOC Operations" },
{ value: "500+", label: "Threats Detected Daily" },
{ value: "<15min", label: "Incident Response" }
],
image: "/images/services/cybersecurity/hero.png"
},

overview: {
title: "Advanced Cyber Defense Platforms",
description:
"Our cybersecurity services combine modern detection platforms, identity security and threat intelligence to protect enterprise environments.",
keyPoints: [
{
icon: Eye,
title: "Threat Intelligence",
desc: "Advanced IOC monitoring and dark web intelligence."
},
{
icon: Cpu,
title: "XDR & EDR",
desc: "Enterprise detection platforms including CrowdStrike and SentinelOne."
},
{
icon: Lock,
title: "Identity Security",
desc: "IAM, Active Directory security and privileged access management."
}
]
},

offerings: [
{
icon: Eye,
title: "SOC Operations",
description:
"24/7 enterprise SOC monitoring powered by modern SIEM and XDR platforms.",
highlights: [
"Splunk SIEM",
"Microsoft Sentinel",
"CrowdStrike Falcon",
"Threat Intelligence"
],
gradient: "from-red-500 to-rose-500"
},
{
icon: Lock,
title: "Identity & Access Management",
description:
"Enterprise IAM architecture including AD security and identity governance.",
highlights: [
"Okta",
"Azure AD",
"SailPoint",
"Identity Governance"
],
gradient: "from-amber-500 to-orange-500"
},
{
icon: Cpu,
title: "XDR & Endpoint Security",
description:
"Endpoint and extended detection platforms providing enterprise threat visibility.",
highlights: [
"CrowdStrike",
"SentinelOne",
"Microsoft Defender",
"Endpoint Telemetry"
],
gradient: "from-blue-500 to-indigo-500"
},
{
icon: Target,
title: "Vulnerability Assessment & Penetration Testing (VAPT)",
description:
"Comprehensive security testing across networks, applications and infrastructure.",
highlights: [
"Network VAPT",
"Web App Testing",
"Cloud Security Testing",
"Red Teaming"
],
gradient: "from-violet-500 to-purple-500"
},
{
icon: FileSearch,
title: "Threat Intelligence",
description:
"Proactive intelligence services identifying emerging cyber threats.",
highlights: [
"IOC Feeds",
"Dark Web Monitoring",
"Threat Research",
"Attribution Analysis"
],
gradient: "from-emerald-500 to-teal-500"
},
{
icon: Shield,
title: "Privileged Access Management",
description:
"Secure privileged identities across enterprise infrastructure.",
highlights: [
"CyberArk PAM",
"Privileged Monitoring",
"Credential Vaulting",
"Session Recording"
],
gradient: "from-pink-500 to-rose-500"
}
],

caseStudy: {
industry: "Banking & Financial Services",
title: "PAN India SOC, IAM & XDR Platform for a Large Banking Network",
challenge:
"A large banking network with thousands of branches across India required centralized cyber defense, identity governance and real time threat monitoring.",
solution:
"Terafence deployed a PAN India cybersecurity architecture integrating SOC monitoring, identity security, XDR driven endpoint protection and privileged access management using Splunk, Microsoft Sentinel, CrowdStrike and CyberArk.",
results: [
{ metric: "PAN India", label: "Banking Infrastructure Coverage" },
{ metric: "100K+", label: "Endpoints Protected" },
{ metric: "24/7", label: "SOC Monitoring" },
{ metric: "<10min", label: "Threat Response Time" }
],
image: "/images/services/cybersecurity/case-study.png"
}
},

{
slug: "integration",
navLabel: "Service Integration",

hero: {
badge: "Service Integration",
badgeIcon: Link2,
title: "Service",
titleAccent: "Integration",
subtitle: "Unified IT Operations",
description:
"Integrate ITSM, observability and AIOps platforms into a unified enterprise operations framework.",
primaryCta: "Integration Workshop",
secondaryCta: "SIAM Framework",
accentColors: { from: "teal-400", to: "violet-400" },
stats: [
{ value: "30+", label: "Vendors Integrated" },
{ value: "1M+", label: "Tickets Managed" },
{ value: "250+", label: "ITIL Certified Experts" }
],
image: "/images/services/integration/hero.png"
},

overview: {
title: "Unified IT Operations Framework",
description:
"Our SIAM practice integrates ITSM platforms, AIOps engines and observability tools to deliver end to end operational visibility.",
keyPoints: [
{
icon: Link2,
title: "ITSM Platforms",
desc: "ServiceNow, Jira Service Management and BMC Helix."
},
{
icon: Workflow,
title: "AIOps",
desc: "AI driven anomaly detection and remediation."
},
{
icon: BarChart3,
title: "Observability",
desc: "Application and infrastructure monitoring platforms."
}
]
},

offerings: [
{
icon: Building2,
title: "SIAM Implementation",
description:
"Implement enterprise service integration frameworks enabling unified service delivery.",
highlights: [
"Operating Models",
"Vendor Integration",
"Governance",
"Service Reporting"
],
gradient: "from-teal-500 to-emerald-500"
},
{
icon: Workflow,
title: "Process Integration",
description:
"Unified ITSM processes across enterprise service providers.",
highlights: [
"Incident Management",
"Change Management",
"Problem Management",
"Request Management"
],
gradient: "from-violet-500 to-indigo-500"
},
{
icon: Link2,
title: "Tool Integration",
description:
"Integrate ITSM platforms with observability and automation tools.",
highlights: [
"ServiceNow",
"Datadog",
"Dynatrace",
"Elastic"
],
gradient: "from-blue-500 to-cyan-500"
},
{
icon: BarChart3,
title: "Service Assurance",
description:
"Real time SLA monitoring and service performance reporting.",
highlights: [
"SLA Dashboards",
"Operational Reporting",
"Performance Monitoring",
"Improvement Programs"
],
gradient: "from-amber-500 to-yellow-500"
},
{
icon: Users,
title: "Vendor Management",
description:
"Enterprise vendor governance and service performance management.",
highlights: [
"Scorecards",
"Escalation Management",
"Contract Compliance",
"Relationship Management"
],
gradient: "from-pink-500 to-rose-500"
},
{
icon: Zap,
title: "Automation Center",
description:
"Automate service operations through AIOps and workflow automation.",
highlights: [
"Automation Platforms",
"AIOps",
"Self Service",
"ChatOps"
],
gradient: "from-emerald-500 to-teal-500"
}
],

caseStudy: {
industry: "Global Financial Services",
title: "Enterprise ITSM & AIOps Integration for a Multinational Financial Enterprise",
challenge:
"A multinational financial services organization operating across the United States, United Kingdom and Asia faced fragmented monitoring and service management tools.",
solution:
"Terafence integrated ServiceNow ITSM, Dynatrace AIOps and Datadog observability platforms into a unified operations framework.",
results: [
{ metric: "10+", label: "Technology Vendors Integrated" },
{ metric: "50%", label: "Faster Incident Resolution" },
{ metric: "99.7%", label: "SLA Compliance" },
{ metric: "30%", label: "Operational Cost Reduction" }
],
image: "/images/services/integration/case-study.png"
}
}

];

export function getServiceBySlug(slug: string): ServicePageData | undefined {
return SERVICES.find((s) => s.slug === slug);
}