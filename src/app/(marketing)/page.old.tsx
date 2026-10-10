import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Security from "@/components/marketing/sec";
import NewsPreview from "@/components/marketing/newspreview";
import TerafencePlatform from "@/components/marketing/platform";
import ServicePortfolio from "@/components/marketing/service-portfolio";
import ServiceCapabilities from "@/components/marketing/service-capabilities";
import ServiceHighlight from "@/components/marketing/service-highlight";
import ServiceDelivery from "@/components/marketing/service-delivery";
// import ServiceExcellence from "@/components/marketing/service-excellence";
import ServiceOfferings from "@/components/marketing/service-offerings";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServicePortfolio />
      <ServiceCapabilities />
      <ServiceOfferings />
      <ServiceHighlight />
      <ServiceDelivery />
      {/* <ServiceExcellence /> */}
      <NewsPreview />
      <Features />
      <Analysis />
      <TerafencePlatform />
      <Security />
      <CTA />
    </>
  );
};

export default HomePage;