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
    title = `Terafence Private Limited | Leading Company that provides the Data Diode Technology & Cybersecurity Solutions | Made in India`,
    description = `Terafence Private Limited India is a leading manufacturer and solution provider of FPGA-based Data Diode (Unidirectional Gateway) technology, enabling air-gapped, isolated, and secured industrial network communication. Our cutting-edge cybersecurity solutions protect critical infrastructure, OT/IT networks, and industrial systems from advanced cyber threats.`,
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
        "Cybersecurity Products Manufacturer",
        "FPGA Based Data Diode",
        "Data Flow Segmentation Solutions",
        "Government Cybersecurity Solution",
        "Industrial Air-Gap Solution",
        "Military Network Security",
        "Terafence Data Diode India",
        "Cybersecurity Hardware",
        "Secure Network Communication",
        "Hardware-Based Firewall",
        "Unidirectional Data Transfer",
        "Data Isolation Technology",
        "Secure File Transfer",
        "Critical Network Infrastructure Security",
        "Securing Power Transmission",
        "Securing Railway Networks",
        "Data Diode India Manufacturer",
        "Cybersecurity Solution Provider India",
        "Secure Network Bridge",
        "Advanced Threat Protection",
        "No Return Path Technology",
        "One-Way Data Transfer",
        "Non-Routable Communication Path",
        "Government Approved Cybersecurity",
        "Defense Cybersecurity Solution",
        "Terafence Private Limited Gurugram",
        "Made in India",
        "Government of India",
        "Power sector",
        "Railways",
        "Defense",
        "Space Research",
        "Critical Infrastructure",
        "Cybersecurity Compliance",
        "Cybersecurity Solutions Provider",
        "Data Diode Technology",
        "Data Diode Manufacturer",
        "Data Diode Solution",
        "Data Diode Device",
        "Data Diode Technology India",
        "Data Diode Technology Manufacturer",
        "Data Diode Technology Solution",
        "Data Diode Technology Device",
        "Data Diode Technology India Manufacturer",
        "Data Diode Technology India Solution",
        "Data Diode Technology India Device",
        "Uni-Directional Gateway",
        "Uni-Directional Gateway Manufacturer",
        "Uni-Directional Gateway Solution",
        "Terafence Data Diode Technology",
        "Terafence Gurugram",
        "Data Diode",
        "1-URP",
        "121",
        "BSG",
        "VSecure",
        "MBSecure+",
        "Bidirectional Security Gateway",
        "Bidirectional Data Diode",
        "Made in India products",
        "cybersecurity",
        "Leading cybersecurity company",
        "Leading cybersecurity company in India",
        "best cybersecurity company in India",
        "best data diode company in India",
        "best data diode company",
        "FPGA",
        "FPGA based data diode",
        "FPGA based data diode technology",
        "FPGA based data diode technology manufacturer",
        "FPGA based data diode technology solution",
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Terafence Private Limited",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://terafenceindia.vercel.app/");

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
            siteName: "Terafence Private Limited",
            url: metadataBase.href,
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Terafence Private Limited - Data Diode Technology",
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
        applicationName: "Terafence Private Limited",
        category: "Cybersecurity",
    };
};