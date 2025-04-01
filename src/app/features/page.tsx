import { Metadata } from "next";
import { Hero } from "@/app/features/components/Hero";
import { KeyFeatures } from "@/app/features/components/KeyFeatures";
import { TechnicalSpecs } from "@/app/features/components/TechnicalSpecs";
import { UseCases } from "@/app/features/components/UseCases";
import { ComparisonChart } from "@/app/features/components/ComparisonChart";
import { Testimonials } from "@/app/features/components/Testimonials";
import { CTASection } from "@/app/features/components/CTASection";
import   Navbar  from "@/components/marketing/navbar";
import   Footer from "@/components/marketing/footer";

export const metadata: Metadata = {
  title: "Terafence Data Diode Technology | Features",
  description: "Discover Terafence's revolutionary data diode technology that provides secure one-way data transfer, protecting critical infrastructure from cyber threats while ensuring operational efficiency.",
  keywords: "data diode, Terafence, cybersecurity, one-way data transfer, critical infrastructure protection, OT security",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <KeyFeatures />
        <TechnicalSpecs />
        <UseCases />
        <ComparisonChart />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}