import { Link } from "react-router-dom";
import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import ClassAboutSection from "../../Components/ClassAboutSection";
import BenefitsSection from "../../Components/BenefitsSection";
import GallerySection from "../../Components/GallerySection";
import RelatedClassesSection from "../../Components/RelatedClassesSection";

export default function ClassDetailsPage() {
  usePageTitle("FitFusion - Class Details");

  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/Hero_Service_Details.jpg",
          variant: "cs_hero_style_1",
          title: "<span>FIT</span>FUSION",
          currentPage: "FitFusion",
          parentLink: { url: "/classes", label: "Services" },
          topSpacingClass: "cs_height_14 cs_height_lg_14",
          bottomSpacing: (
            <div className="cs_height_94 cs_height_lg_80"></div>
          ),
        }}
      />

      <ClassAboutSection />
      <BenefitsSection />
      <GallerySection />
      <RelatedClassesSection />

      {/* CTA Section */}
      <section
        className="cs_bg_filed cs_cta_style_4"
        style={{
          backgroundImage: "url(/assets/img/CTA_Service_Details.jpg)",
        }}
      >
        <div className="cs_height_107 cs_height_lg_75"></div>
        <div className="container position-relative">
          <div className="cs_cta_content d-flex justify-content-between align-items-end">
            <h2
              className="cs_cta_title cs_fs_54 cs_text_strock mb-0"
              data-aos="fade-down"
            >
              READY TO EXPERIENCE THE{" "}
              <span>INTENSITY AND VERSATILITY </span>OF FITFUSION?
            </h2>
            <Link
              to="/contact"
              aria-label="Contact button"
              className="cs_btn_style_1 cs_heading_font"
              data-aos="zoom-in"
            >
              SIGN UP FOR THE CLASS
            </Link>
          </div>
        </div>
        <div className="cs_height_117 cs_height_lg_80"></div>
      </section>
    </>
  );
}
