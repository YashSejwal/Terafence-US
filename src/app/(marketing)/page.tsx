import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Info from "@/components/marketing/info";
import Integration from "@/components/marketing/integration";
import Security from "@/components/marketing/sec";
import NewsPreview from "@/components/marketing/newspreview";

const HomePage = () => {
    return (
        <Wrapper className="py-10 relative">
            <Hero />
            <Features />
            <NewsPreview />
            <Analysis />
            <Integration />
            <Info />
            <Security />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
