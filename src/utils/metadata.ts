import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `Terafence USA Inc. | Industry-Leading FPGA-Based Data Diode Technology & Comprehensive Cybersecurity Solutions`,
    description = `Terafence USA Inc. provides cutting-edge FPGA-based Data Diode (Unidirectional Security Gateway) technology for air-gapped, isolated, and secured network communication. Our hardware-based cybersecurity solutions protect critical infrastructure across government, defense, energy, pharmaceutical, and industrial sectors from advanced cyber threats. Our technologies ensure regulatory compliance while enabling secure data transfer through OT/IT network segmentation. Terafence's suite of products (1U-RP, BSG, VSecure, MBSecure+) offers unmatched protection for critical systems handling sensitive data in high-security environments. Discover how our Made-in-USA solutions can enhance your security posture against evolving threats with hardware-enforced security that software-based solutions cannot match.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    keywords = [
        // Core Brand & Identity
        "Terafence",
        "Terafence USA Inc",
        "Terafence Data Diode",
        "Terafence Cybersecurity",
        "Terafence Unidirectional Gateway",
        "Terafence Network Security",
        
        // Primary Data Diode Keywords
        "Data Diode",
        "Data Diode Technology",
        "Data Diode Device",
        "Data Diode Solution",
        "Hardware Data Diode",
        "FPGA-Based Data Diode",
        "Made in USA Data Diode",
        "American Data Diode",
        "Industrial Data Diode",
        "Enterprise Data Diode",
        "Critical Infrastructure Data Diode",
        "Government Data Diode",
        "Military Data Diode",
        
        // Unidirectional Gateway Terms
        "Unidirectional Security Gateway",
        "Unidirectional Network Gateway",
        "One-Way Security Gateway",
        "One-Way Network Gateway",
        "Unidirectional Data Transfer",
        "One-Way Data Flow",
        "Unidirectional Communication",
        "Hardware-Enforced Unidirectional Gateway",
        "Unidirectional Data Flow",
        
        // Bidirectional Security
        "Bidirectional Security Gateway",
        "Bidirectional Data Diode",
        "Controlled Bidirectional Gateway",
        "Secure Bidirectional Communication",
        "Monitored Bidirectional Gateway",
        
        // Security Device Comparisons
        "Data Diode vs Firewall",
        "Unidirectional Gateway vs Firewall",
        "Data Diode vs IDS",
        "Data Diode vs IPS",
        "Hardware vs Software Security",
        "FPGA Security vs Traditional Security",
        "Data Diode vs Air Gap",
        "Best Data Diode",
        "Top Unidirectional Gateway",
        
        // Terafence Products
        "Terafence 1U-RP",
        "Terafence BSG",
        "Terafence VSecure",
        "Terafence MBSecure+",
        "Terafence 121",
        "Terafence Product Suite",
        "Terafence Hardware Security",
        
        // Cybersecurity Core Terms
        "Cybersecurity",
        "Network Security",
        "Information Security",
        "IT Security",
        "OT Security",
        "Industrial Cybersecurity",
        "Critical Infrastructure Security",
        "Enterprise Cybersecurity",
        "Hardware Security",
        "Embedded Security",
        "Edge Security",
        "Perimeter Security",
        "Defense-in-Depth",
        
        // Security Technologies & Approaches
        "Zero Trust Architecture",
        "Air-Gapped Networks",
        "Network Segmentation",
        "Network Isolation",
        "Security Zoning",
        "Hardware-Based Security",
        "FPGA Security",
        "Hardware Security Module",
        "Security By Design",
        "Intrusion Detection System",
        "Intrusion Prevention System",
        "IDS/IPS",
        "Firewall",
        "Next-Gen Firewall",
        "Advanced Firewall",
        "Hardware Firewall",
        "Network Monitoring",
        "Threat Detection",
        "Threat Prevention",
        "Anti-Malware",
        "Anti-Virus",
        "Anti-Phishing",
        "Endpoint Protection",
        
        // Security Operations
        "Security Operations Center",
        "SOC",
        "CISO",
        "Chief Information Security Officer",
        "Security Information and Event Management",
        "SIEM",
        "Security Orchestration",
        "Security Automation",
        "Security Response",
        "Incident Response",
        "Threat Intelligence",
        "Vulnerability Management",
        "Penetration Testing",
        "Security Assessment",
        "Security Audit",
        
        // Data Transfer Protocols - Comprehensive
        "Protocol Security",
        "Secure Protocol Implementation",
        "HTTP Security",
        "HTTPS Security",
        "FTP Security",
        "SFTP Security",
        "SCP Security",
        "FTPS Security",
        "SMB Security",
        "SAMBA Security",
        "CIFS Security",
        "NFS Security",
        "Modbus Security",
        "DNP3 Security",
        "ICCP Security",
        "TASE.2 Security",
        "ASPEN.21 Security",
        "MQTT Security",
        "AMQP Security",
        "OPC UA Security",
        "OPC DA Security",
        "BACnet Security",
        "Profinet Security",
        "Profibus Security",
        "EtherNet/IP Security",
        "CIP Security",
        "IEC 61850 Security",
        "IEC 60870-5-101 Security",
        "IEC 60870-5-104 Security",
        "IEC 60870-6 Security",
        "IEC 61400-25 Security",
        "IEC 62351 Security",
        "IEC 62443 Security",
        "IEEE 1815 Security",
        "IEEE 1588 Security",
        "GOOSE Message Security",
        "MMS Protocol Security",
        "SNMP Security",
        "TCP/IP Security",
        "UDP Security",
        "SSH Security",
        "TLS Security",
        "SSL Security",
        "REST API Security",
        "SOAP Security",
        "XML Security",
        "JSON Security",
        
        // Industrial & OT Terms
        "OT Network Security",
        "Operational Technology Security",
        "Industrial Control System Security",
        "ICS Security",
        "SCADA Security",
        "DCS Security",
        "PLC Security",
        "RTU Security",
        "HMI Security",
        "Industrial IoT Security",
        "IIoT Security",
        "Smart Grid Security",
        "Critical Infrastructure Protection",
        
        // Industry Applications
        "Energy Sector Cybersecurity",
        "Power Generation Security",
        "Power Distribution Security",
        "Power Transmission Security",
        "Oil and Gas Cybersecurity",
        "Upstream Oil and Gas Security",
        "Midstream Oil and Gas Security",
        "Downstream Oil and Gas Security",
        "Pharmaceutical Manufacturing Security",
        "Defense Industry Cybersecurity",
        "Military Network Security",
        "Railway Cybersecurity",
        "Transportation Security",
        "Water Utility Cybersecurity",
        "Water Treatment Security",
        "Manufacturing Cybersecurity",
        "Smart Factory Security",
        "Smart Building Security",
        "Healthcare Cybersecurity",
        "Medical Device Security",
        "Space Research Cybersecurity",
        "Aerospace Cybersecurity",
        
        // Compliance & Regulatory
        "NERC CIP Compliance",
        "NIST Cybersecurity Framework",
        "NIST 800-82",
        "NIST 800-53",
        "NIST 800-171",
        "IEC 62443 Compliance",
        "ISO 27001 Compliance",
        "ISO 27002 Compliance",
        "FERC Standards",
        "CFATS Compliance",
        "TSA Cybersecurity Directives",
        "NRC Cybersecurity Requirements",
        "FDA Cybersecurity Guidelines",
        "HIPAA Security",
        "FISMA Compliance",
        "FedRAMP Compliance",
        "DoD Cybersecurity Requirements",
        "CMMC Compliance",
        "Cybersecurity Regulatory Compliance",
        
        // U.S. Specific Terms
        "Made in USA",
        "US Cybersecurity Solutions",
        "American Cybersecurity Company",
        "USA Cybersecurity Provider",
        "US Critical Infrastructure Protection",
        "US Government Cybersecurity",
        "US Defense Cybersecurity",
        "Buy American Act Compliant",
        "TAA Compliant",
        "NDAA Compliant",
        "American Technology",
        
        // Commercial & Procurement Terms
        "Cybersecurity Tenders",
        "Data Diode Procurement",
        "Unidirectional Gateway Tenders",
        "Government Cybersecurity Tenders",
        "Military Cybersecurity Tenders",
        "Critical Infrastructure Tenders",
        "Cybersecurity RFP",
        "Data Diode RFQ",
        "Enterprise Security Procurement",
        
        // Educational & Informational
        "What is a Data Diode",
        "How Data Diodes Work",
        "Data Diode Definition",
        "Unidirectional Gateway Explained",
        "Cybersecurity Glossary",
        "Network Security Concepts",
        "Cybersecurity Best Practices",
        "Data Diode Implementation Guide",
        "Cybersecurity Solutions Guide",
        "Industrial Cybersecurity Guide",
        "OT Security Best Practices",
        "Critical Infrastructure Protection Guide",
        
        // Emerging Technologies & Concerns
        "Cloud Security",
        "Hybrid Cloud Security",
        "Edge Computing Security",
        "AI Security",
        "Machine Learning Security",
        "5G Network Security",
        "Quantum-Safe Security",
        "Post-Quantum Cryptography",
        "Supply Chain Security",
        "Zero-Day Protection",
        "Advanced Persistent Threat Protection",
        "Ransomware Protection",
        "Nation-State Threat Protection"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Terafence USA Inc.",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://terafence.us");

    // Structured data for better SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Terafence USA Inc.",
        "url": metadataBase.href,
        "logo": `${metadataBase.href}images/og-image.png`,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.linkedin.com/company/terafence-usa/",
            // Add other social profiles if available
        ],
        "knowsAbout": [
            "Cybersecurity",
            "Data Diode Technology",
            "Network Segmentation",
            "Critical Infrastructure Protection",
            "Industrial Control Systems Security"
        ]
    };

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME || "Terafence USA Inc."}`,
            default: title,
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME || "Terafence USA Inc.",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
        openGraph: {
            type: "website",
            title,
            description,
            siteName: "Terafence USA Inc. | Industry-Leading Data Diode Technology & Cybersecurity Solutions",
            locale: "en_US",
            url: metadataBase.href,
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Terafence USA - Advanced Data Diode Technology & Cybersecurity Solutions",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: author,
            title,
            description,
            images: [
                "/images/og-image.png"
            ],
        },
        alternates: {
            canonical: metadataBase.href,
            languages: {
                'en-US': `${metadataBase.href}`,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        applicationName: "Terafence USA Inc.",
        category: "Cybersecurity",
        verification: {
            // Add verification codes for search engines if available
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
            // bing verification is not supported by the Verification type
            // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
        },
        other: {
            'revisit-after': '7 days',
            'geo.region': 'US',
            'geo.position': '38.8977;-77.0365', 
            'ICBM': '38.8977, -77.0365', 
            'og:video': process.env.NEXT_PUBLIC_COMPANY_VIDEO || "",
            'og:video:type': 'application/x-shockwave-flash',
            'og:video:width': '398',
            'og:video:height': '264',
            'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
            'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
            'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_VERIFICATION || "",
            'format-detection': 'telephone=no',
            'structured-data': JSON.stringify(structuredData)
        }
    };
};