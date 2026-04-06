import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import CTASection from "../../Components/CTASection";
import AboutSection from "../../Components/AboutSection";
import ValueSection from "../../Components/ValueSection";
import VideoSection from "../../Components/VideoSection";
import TrainerSection from "../../Components/TrainerSection";
import BrandSection from "../../Components/BrandSection";

export default function AboutPage() {
  usePageTitle("About Us");

  return (
    <>
      <PageHeading
        data={{
          variant: "cs_hero_style_1",
          bgImage: "/assets/img/Hero_About.jpg",
          title: "<span>ABOUT</span> FITFLEX",
          currentPage: "About Us",
          showHr: true,
          bottomSpacing: (
            <>
              <div className="cs_height_150 cs_height_lg_80"></div>
              <div className="cs_height_40 cs_height_lg_40"></div>
            </>
          ),
        }}
      />

      <AboutSection />
      <ValueSection />
      <VideoSection />
      <TrainerSection />
      <BrandSection />

      <CTASection
        data={{
          bgImage: "/assets/img/CTA_About.jpg",
          title:
            'READY TO EMBARK ON YOUR <span> FITNESS JOURNEY</span> WITH FITFLEX?',
          btnText: "JOIN NOW",
          btnUrl: "/contact",
          style: "cs_cta_style_2",
          contentClass: "",
          titleClass: "cs_mb_40 cs_mb_lg_30",
          topSpacingClass: "cs_height_83 cs_height_lg_75",
          bottomSpacingClass: "cs_height_95 cs_height_lg_80",
        }}
      />
    </>
  );
}
