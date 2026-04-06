import { usePageTitle } from "../../helper";
import HeroSection from "../../Components/HeroSection";
import ProgramSection from "../../Components/ProgramSection";
import TestimonialSection from "../../Components/TestimonialSection";
import PricingSection from "../../Components/PricingSection";
import FeatureSection from "../../Components/FeatureSection";
import CTASection from "../../Components/CTASection";

export default function HomePage() {
  usePageTitle("Home");
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <TestimonialSection />
      <PricingSection />
      <FeatureSection />
      <CTASection
        data={{
          bgImage: "/assets/img/CTA.jpg",
          title: 'READY TO START YOUR JOURNEY WITH <span>FITFLEX?</span>',
          subtitle: "Reserve Your Spot Today!",
          btnText: "JOIN NOW",
          btnUrl: "/contact",
          style: "cs_cta_style_1",
        }}
      />
    </>
  );
}
