export interface Device {
  name: string
  tagline: string
  uspBadge: string
  keyFeatures: string[]
  supportedProtocols: string[]
  techSpecs: Record<string, string>
  resources: Array<{
    title: string
    description: string
    url: string
  }>
  support: {
    email: string
    phone: string
    hours: string
  }
  images: string[] 
}

export const devices: Record<string, Device> = {
"121": {
    name: "TFG 121",
    tagline: "File Transfer for Air Gapped Networks",
    uspBadge: "Total Galvanic Network Separation",
    keyFeatures: [
      "Total galvanic network separation",
      "Terafence proprietary hardware chip (FPGA)",
      "Multiple file transfer protocols",
      "Protocol conversion with ease",
      "HTTP/S file upload to cloud",
      "Simple GUI for configuration (from secure side only)",
      "Two accompanying CPUs for protocol support",
    ],
    supportedProtocols: [
      "S/FTP",
      "SAMBA",
      "SMB",
      "HTTP/S (post, put)"
    ],
    techSpecs: {
      Processor: "Intel® ATOM x5-E3940 CPU (x2)",
      Memory: "Slim Bootloader 16 MiB Bios, LPDDR4 Dual Channel 1600MHz 8GB",
      Storage: "Embedded secure storage",
      "Network Interfaces": "2 x Intel® I210-IT 10/100/1000 Mbps",
      "Power Consumption": "12-48VDC @60 Watt",
      Dimensions: "95 x 160 x 200 mm",
      "Operating Temperature": "-40°C to 80°C",
      "Certifications": "CE & FCC Class B",
      "Mounting Options": "Desktop or DIN Rail",
    },
    resources: [
      {
        title: "121 Technical Datasheet",
        description: "Complete technical specifications and capabilities",
        url: "/datasheets/121-datasheet.pdf",
      },
      {
        title: "Deployment Guide",
        description: "Step-by-step installation and configuration",
        url: "/guides/121-deployment.pdf",
      },
      {
        title: "Security Whitepaper",
        description: "In-depth analysis of security features",
        url: "/whitepapers/121-security.pdf",
      },
      {
        title: "API Documentation",
        description: "Complete API reference for developers",
        url: "/docs/121-api.pdf",
      },
      {
        title: "Case Study: Secure File Transfer",
        description: "Implementation in air-gapped environments",
        url: "/case-studies/121-secure-transfer.pdf",
      },
      {
        title: "Compliance Certificate",
        description: "Regulatory compliance documentation",
        url: "/certificates/121-compliance.pdf",
      },
    ],
    support: {
      email: "support@terafence.us",
      phone: "+1-800-555-0121",
      hours: "24/7/365",
    },
    images: [
      "/images/devices/121/image-1.png",
      "/images/devices/121/image-2.png",
      "/images/devices/121/image-3.png",
      "/images/devices/121/image-4.png",
      "/images/devices/121/image-5.png",
    ],
  },

 "1U-RP": {
    name: "TFG 1U-RP",
    tagline: "Unified Remote Protection for IoT and IIoT",
    uspBadge: "Total Galvanic Network Separation",
    keyFeatures: [
      "Total galvanic network separation",
      "Terafence proprietary hardware chip (FPGA)",
      "HTTPS WEB GUI for configuration (from secure side only)",
      "Two accompanying CPUs for protocol support",
    ],
    supportedProtocols: [
      "SFTP",
      "FTP",
      "SMB",
      "SMTP",
      "SYSLOG",
      "RTSP",
      "HTTP/S",
      "Modbus",
      "IEC-104",
      "MQTT",
    ],
    techSpecs: {
      Processor: "Dual accompanying CPUs for protocol support",
      Memory: "Hardened Linux OS on accompanying CPUs",
      Storage: "No data storage within the unit",
      "Network Interfaces": "2x RJ-45 CAT5E ports",
      "Power Consumption": "100-240 VAC 50/60Hz, fully redundant hot-swappable AC power supplies",
      Dimensions: "W440 x H44 x D260 mm (1U)",
      "Operating Temperature": "-40°C to 70°C",
      Certifications: "FCC Part 15, Subpart B, Class A",
      "Mounting Options": "19” 1U rackmount, desktop mounting",
    },
    resources: [
      {
        title: "1U-RP Technical Datasheet",
        description: "Complete technical specifications and capabilities",
        url: "/datasheets/1-urp-datasheet.pdf",
      },
      {
        title: "Deployment Guide",
        description: "Step-by-step installation and configuration",
        url: "/guides/1-urp-deployment.pdf",
      },
      {
        title: "Security Whitepaper",
        description: "In-depth analysis of security features",
        url: "/whitepapers/1-urp-security.pdf",
      },
      {
        title: "API Documentation",
        description: "Complete API reference for developers",
        url: "/docs/1-urp-api.pdf",
      },
      {
        title: "Case Study: Industrial IoT Security",
        description: "Implementation in industrial environments",
        url: "/case-studies/1-urp-iiot-security.pdf",
      },
      {
        title: "Compliance Certificate",
        description: "Regulatory compliance documentation",
        url: "/certificates/1-urp-compliance.pdf",
      },
    ],
    support: {
      email: "support@terafence.us",
      phone: "+1-800-555-0122",
      hours: "24/7/365",
    },
    images: [
      "/images/devices/1-urp/image-1.png",
      "/images/devices/1-urp/image-2.png",
      "/images/devices/1-urp/image-3.png",
      "/images/devices/1-urp/image-4.png",
    ],
  },

  BSG: {
    name: "TFG BSG",
    tagline: "Bi-Directional Secure Gateway for Network Protection",
    uspBadge: "Total Galvanic Network Separation",
    keyFeatures: [
      "Total galvanic network separation",
      "Terafence proprietary hardware chip (FPGA)",
      "Totally transparent to the network",
      "TCP/IP protocol agnostic",
      "Full TCP/IP bi-directional protocol support",
      "Hardware-based packet filtering with optional firewalls",
      "Control over passthrough LAN traffic",
      "Ability to determine session initiation direction (Client-Server)",
    ],
    supportedProtocols: [
      "Modbus",
      "DNP3",
      "IEC 61850",
      "BACnet",
      "OPC UA",
      "Profinet",
      "EtherNet/IP",
      "MQTT",
      "CoAP",
      "IEC-104",
      "S7",
    ],
    techSpecs: {
      Processor: "Intel i3/i5/i7/i9 CPU",
      Memory: "8GB - 32GB",
      Storage: "No internal data storage",
      "Network Interfaces": "2x RJ-45 CAT5E ports",
      "Power Consumption": "12VDC/18Amp MAX 230 Watt",
      Dimensions: "44mm x 430mm x 353mm (1U)",
      "Operating Temperature": "0°C to 60°C",
      Certifications: "CE & FCC Class B",
      "Mounting Options": "Desktop or Rackmount",
    },
    resources: [
      {
        title: "BSG Technical Datasheet",
        description: "Complete technical specifications and capabilities",
        url: "/datasheets/bsg-datasheet.pdf",
      },
      {
        title: "Deployment Guide",
        description: "Step-by-step installation and configuration",
        url: "/guides/bsg-deployment.pdf",
      },
      {
        title: "Security Whitepaper",
        description: "In-depth analysis of security features",
        url: "/whitepapers/bsg-security.pdf",
      },
      {
        title: "API Documentation",
        description: "Complete API reference for developers",
        url: "/docs/bsg-api.pdf",
      },
      {
        title: "Case Study: Critical Infrastructure",
        description: "Implementation in industrial and IT environments",
        url: "/case-studies/bsg-critical-infra.pdf",
      },
      {
        title: "Compliance Certificate",
        description: "Regulatory compliance documentation",
        url: "/certificates/bsg-compliance.pdf",
      },
    ],
    support: {
      email: "support@terafence.us",
      phone: "+1-800-555-0123",
      hours: "24/7/365",
    },
    images: [
      "/images/devices/bsg/image-1.png",
      "/images/devices/bsg/image-2.png",
      "/images/devices/bsg/image-3.png",
      "/images/devices/bsg/image-4.png",
    ],
  },

  VSecure: {
    name: "TFG VSecure",
    tagline: "Air-Gap Protection for IoT and IIoT Security",
    uspBadge: "Unidirectional Gateway with Protocol Proxy",
    keyFeatures: [
      "Total galvanic network separation",
      "Terafence proprietary FPGA hardware chip",
      "Unidirectional data transfer with no return path",
      "HTTPS Web GUI for secure configuration",
      "Acts as a Protocol Proxy, terminating TCP/IP sessions",
      "Prevents data storage, eliminating encryption needs",
      "Protects IoT/IIoT devices from cyber threats",
      "Blocks malicious infiltration from compromised endpoints",
    ],
    supportedProtocols: [
      "SFTP",
      "FTP",
      "SMB",
      "SMTP",
      "SYSLOG",
      "RTSP",
      "HTTP/S",
      "Modbus",
      "IEC-104",
      "MQTT",
    ],
    techSpecs: {
      Processor: "Two accompanying CPUs for protocol support",
      Memory: "Not applicable (stateless design)",
      Storage: "No internal data storage",
      "Network Interfaces": "2x RJ-45 CAT5E ports",
      "Power Consumption": "100-240 VAC 50/60Hz, dual hot-swappable power supplies",
      Dimensions: "W440 x H44 x D260 mm (1U)",
      "Operating Temperature": "-40°C to 70°C",
      Certifications: "FCC Part 15 Subpart B, Class A | IEC 62443-4-2 – SL2 | MIL-STD-810F",
      "Mounting Options": "19” rackmount or desktop",
    },
    resources: [
      {
        title: "VSecure Technical Datasheet",
        description: "Complete technical specifications and capabilities",
        url: "/datasheets/vsecure-datasheet.pdf",
      },
      {
        title: "IoT Security Deployment Guide",
        description: "Best practices for securing IoT and IIoT environments",
        url: "/guides/vsecure-iot-security.pdf",
      },
      {
        title: "Cyber Threat Mitigation Whitepaper",
        description: "In-depth analysis of unidirectional security",
        url: "/whitepapers/vsecure-security.pdf",
      },
      {
        title: "API Documentation",
        description: "Complete API reference for developers",
        url: "/docs/vsecure-api.pdf",
      },
      {
        title: "Case Study: Industrial Automation",
        description: "How VSecure protects critical infrastructure",
        url: "/case-studies/vsecure-industrial.pdf",
      },
      {
        title: "Compliance Certificate",
        description: "Regulatory compliance documentation",
        url: "/certificates/vsecure-compliance.pdf",
      },
    ],
    support: {
      email: "support@terafence.us",
      phone: "+1-800-555-0124",
      hours: "24/7/365",
    },
    images: [
      "/images/devices/vsecure/image-1.png",
      "/images/devices/vsecure/image-2.png",
      "/images/devices/vsecure/image-3.png",
      "/images/devices/vsecure/image-4.png",
    ],
  },

"MBSecure+": {
    name: "TFG MBSecure+",
    tagline: "Air-Gap Security for SCADA and Industrial Networks",
    uspBadge: "Hardware-Based Isolation for Critical Infrastructure",
    keyFeatures: [
      "Supports up to 247 Modbus devices per unit",
      "Full Modbus RTU support",
      "SCADA protocol security with OSI Layer-1/2 isolation",
      "Syslog, MQTT, SMTP, and OPC DA/UA support",
      "High availability with unit redundancy",
      "No network access to PLCs from HMI network",
      "Configurable HMI access list for security enforcement",
      "Web-based GUI for easy configuration",
    ],
    supportedProtocols: [
      "Modbus",
      "Syslog",
      "MQTT",
      "SMTP",
      "OPC DA/UA (Future)",
      "DNP3 (Future)",
      "BACnet (Future)",
    ],
    techSpecs: {
      "Data Bandwidth": "1 Gbps",
      "Power Requirements": "1x 5VDC / 8AMP",
      "Network Interfaces": "2x RJ-45 CAT6 connectors (STP/UTP)",
      "Physical Ports": "2x 1Gbps LAN ports",
      "Latency": "Near Zero (30µs on average)",
      "Power Consumption": "Max 40W",
      "Mounting Options": "Desktop, 19” Rack Shelf, 35mm DIN Rail",
      "Unit Isolation": "Physical isolation at OSI Layer-1/2",
      "Configuration": "Accessible only from PLC side (Web GUI)",
      "Security": "No CPU, No MAC/IP address, No software exposure",
      "Dimensions": "Wx290mm, Hx50mm, Dx230mm",
    },
    resources: [
      {
        title: "MBSecure+ Technical Datasheet",
        description: "Complete technical specifications and capabilities",
        url: "/datasheets/mbsecure-datasheet.pdf",
      },
      {
        title: "SCADA Security Implementation Guide",
        description: "Best practices for securing industrial control networks",
        url: "/guides/mbsecure-scada-security.pdf",
      },
      {
        title: "Air-Gap Security Whitepaper",
        description: "Hardware-based network isolation for industrial environments",
        url: "/whitepapers/mbsecure-airgap.pdf",
      },
      {
        title: "API Documentation",
        description: "Complete API reference for developers",
        url: "/docs/mbsecure-api.pdf",
      },
      {
        title: "Case Study: Industrial Automation",
        description: "How MBSecure+ protects industrial control systems",
        url: "/case-studies/mbsecure-industrial.pdf",
      },
      {
        title: "Compliance Certificate",
        description: "Regulatory compliance documentation",
        url: "/certificates/mbsecure-compliance.pdf",
      },
    ],
    support: {
      email: "support@terafence.us",
      phone: "+1-800-555-0125",
      hours: "24/7/365",
    },
    images: [
      "/images/devices/mbsecure/image-1.png",
      "/images/devices/mbsecure/image-2.png",
      "/images/devices/mbsecure/image-3.png",
      "/images/devices/mbsecure/image-4.png",
      "/images/devices/mbsecure/image-5.png",
    ],
  },
}