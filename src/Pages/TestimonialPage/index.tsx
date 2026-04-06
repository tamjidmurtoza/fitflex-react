import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import TestimonialSection from "../../Components/TestimonialSection";
import CTASection from "../../Components/CTASection";

export default function TestimonialPage() {
  usePageTitle("Testimonials");
  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/Hero_Services.jpg",
          title: "WHAT OUR <span>MEMBERS </span>SAY",
          currentPage: "Testimonials",
        }}
      />

      <TestimonialSection showHeading={false} />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <CTASection
        data={{
          bgImage: "/assets/img/CTA_Services.jpg",
          title: "READY TO START YOUR <span>FITNESS JOURNEY </span>WITH US?",
          btnText: "JOIN NOW",
          btnUrl: "/contact",
          style: "cs_cta_style_3",
          containerClass: "position-relative",
          topSpacingClass: "cs_height_107 cs_height_lg_80",
          bottomSpacingClass: "cs_height_117 cs_height_lg_80",
          showRadialGradient: true,
        }}
      />
    </>
  );
}
