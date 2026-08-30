// import { Metadata } from "next";
"use client";
import { getServiceBySlug } from "../data";
import ServicePageTemplate from "../components/service-page-template";

const service = getServiceBySlug("workplace")!;

// export const metadata: Metadata = {
//   title: `${service.navLabel} | Informage Techno Solutions`,
//   description: service.hero.description,
// };

export default function Page() {
  return <ServicePageTemplate data={service} />;
}