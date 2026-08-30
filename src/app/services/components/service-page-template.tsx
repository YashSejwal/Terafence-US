"use client";

import type { ServicePageData } from "../data";
import ServiceHero from "./service-hero";
import ServiceOverview from "./service-overview";
import ServiceOfferings from "./service-offerings";
import ServiceCaseStudy from "./service-case-study";
import ServiceContact from "./service-contact";

export default function ServicePageTemplate({
  data,
}: {
  data: ServicePageData;
}) {
  return (
    <main className="min-h-screen">
      <ServiceHero data={data} />
      <ServiceOverview data={data} />
      <ServiceOfferings data={data} />
      <ServiceCaseStudy data={data} />
      <ServiceContact data={data} />
    </main>
  );
}