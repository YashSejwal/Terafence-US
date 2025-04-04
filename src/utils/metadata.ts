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
    title = `Terafence USA Inc. | A Leading Company Providing FPGA-Based Data Diode Technology & Cybersecurity Solutions.`,
    description = `Terafence USA Inc. is a leading solution provider of FPGA-based Data Diode (Unidirectional Gateway) technology, enabling air-gapped, isolated, and secured industrial network communication. Our cutting-edge cybersecurity solutions protect critical infrastructure, OT/IT networks, and industrial systems from advanced cyber threats. Implemented across various critical infrastructures and industries like Oil and Gas, Pharmaceutical Manufacturing, Power Generation, Railways, Defense, and Space Research, our technology ensures secure data transfer and compliance with cybersecurity standards. With a focus on hardware-based security, we offer solutions for secure data flow control, network segmentation, and advanced threat protection. Our products are designed to meet the stringent requirements of government and military applications, providing unmatched protection for sensitive data and systems. Explore our range of products, including 1U-RP, BSG, VSecure, and MBSecure+, to enhance your cybersecurity posture.`,
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
        "Data Diode",
        "US Data Diode",
        "US Data Diode",
        "What is a data diode?",
        "Firewall vs Data Diode",
        "US Cybersecurity best company",
        "Cybersecurity Solutions",
        "American Data Diode",
        "Data Diode America",
        "Data Diode USA",
        "Data Diode US",
        "US FPGA Data Diode",
        "US Cybersecurity",
        "Cybersecurity",
        "Unidirectional Gateway",
        "Cybersecurity Solutions",
        "Critical Infrastructure Security",
        "Industrial Network Protection",
        "Air-Gapped Network",
        "OT Network Security",
        "IT Network Protection",
        "Data Isolation Hardware",
        "Hardware-Based Cybersecurity",
        "Data Flow Control",
        "ICS/SCADA Protection",
        "Network Segmentation",
        "Secure Data Transfer",
        "IoT Device Security",
        "Cybersecurity for Power Grids",
        "Cybersecurity for Railways",
        "Cybersecurity for Defense Systems",
        "Cybersecurity for Space Research",
        "Critical Infrastructure Protection",
        "Cybersecurity Compliance Solutions",
        "Cybersecurity Products",
        "FPGA Based Data Diode",
        "Data Flow Segmentation Solutions",
        "Government Cybersecurity Solution",
        "Industrial Air-Gap Solution",
        "Military Network Security",
        "Terafence Data Diode US",
        "Cybersecurity Hardware",
        "Secure Network Communication",
        "Hardware-Based Firewall",
        "Unidirectional Data Transfer",
        "Data Isolation Technology",
        "Secure File Transfer",
        "Critical Network Infrastructure Security",
        "Securing Power Transmission",
        "Securing Railway Networks",
        "Data Diode US",
        "Cybersecurity Solution Provider US",
        "Secure Network Bridge",
        "Advanced Threat Protection",
        "No Return Path Technology",
        "One-Way Data Transfer",
        "Non-Routable Communication Path",
        "Government Approved Cybersecurity",
        "Defense Cybersecurity Solution",
        "Terafence US",
        "Terafence",
        "Terafence Israel",
        "Terafence India",
        "Terafence Data Diode",
        "Data Diode Tenders",
        "Data Diode Tenders US",
        "Data Diode Tenders USA",
        "Terafence USA Inc.",
        "Made in US",
        "Government of US",
        "Power sector",
        "Railways",
        "Defense",
        "Space Research",
        "Critical Infrastructure",
        "Cybersecurity Compliance",
        "Cybersecurity Solutions Provider",
        "Data Diode Technology",
        "Data Diode",
        "Data Diode Solution",
        "Data Diode Device",
        "Data Diode Technology US",
        "Data Diode Technology",
        "USA",
        "Data Diode Technology Solution",
        "Data Diode Technology Device",
        "Data Diode Technology US",
        "Data Diode Technology US Solution",
        "Data Diode Technology US Device",
        "Uni-Directional Gateway",
        "Uni-Directional Gateway",
        "Uni-Directional Gateway Solution",
        "Terafence Data Diode Technology",
        "Terafence Gurugram",
        "Data Diode",
        "1U-RP",
        "Bidirectional Security Gateway",
        "Air-Gap in US",
        "121",
        "BSG",
        "VSecure",
        "MBSecure+",
        "Bidirectional Security Gateway",
        "Bidirectional Data Diode",
        "Made in US products",
        "cybersecurity",
        "Leading cybersecurity company",
        "Leading cybersecurity company in US",
        "best cybersecurity company in US",
        "best data diode company in US",
        "best data diode company",
        "FPGA",
        "FPGA based data diode",
        "FPGA based data diode technology",
        "FPGA based data diode technology",
        "FPGA based data diode technology solution",
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Terafence US",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://terafence.us");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title,
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
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
            siteName: "Terafence US | Leading Company that provides the Data Diode Technology & Cybersecurity Solutions across the United States | FPGA based Data Diode Technology",
            locale: "en_US",
            url: metadataBase.href,
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Terafence US - Data Diode Technology",
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
        },
        robots: {
            index: true,
            follow: true,
        },
        applicationName: "Terafence US",
        category: "Cybersecurity",
    };
};