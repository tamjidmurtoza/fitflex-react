import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import CTASection from "../../Components/CTASection";

const classesData = [
  {
    image: "/assets/img/Item_1_Services.jpg",
    badge: "INTERMEDIATE",
    title: "FITFUSION",
    subtitle: "High-Intensity Interval Training (HIIT)",
    link: "/classes/fitfusion",
  },
  {
    image: "/assets/img/Item_2_Services.jpg",
    badge: "ALL LEVELS",
    title: "YOGA HARMONY",
    subtitle: "Vinyasa Flow",
    link: "/classes/yoga-harmony",
  },
  {
    image: "/assets/img/Item_3_Services.jpg",
    badge: "BEGINNER",
    title: "STRENGTH SCULPT",
    subtitle: "Strength Training",
    link: "/classes/strength-sculpt",
  },
  {
    image: "/assets/img/Item_4_Services.jpg",
    badge: "ALL LEVELS",
    title: "CARDIO KICK",
    subtitle: "Kickboxing Cardio",
    link: "/classes/cardio-kick",
  },
  {
    image: "/assets/img/Item_5_Services.jpg",
    badge: "BEGINNER",
    title: "MINDFUL PILATES",
    subtitle: "Pilates",
    link: "/classes/mindful-pilates",
  },
  {
    image: "/assets/img/Item_6_Services.jpg",
    badge: "ALL LEVELS",
    title: "CYCLE FUSION",
    subtitle: "Indoor Cycling",
    link: "/classes/cycle-fusion",
  },
  {
    image: "/assets/img/Item_7_Services.jpg",
    badge: "INTERMEDIATE",
    title: "ZEN STRETCH",
    subtitle: "Stretch and Relaxation",
    link: "/classes/zen-stretch",
  },
  {
    image: "/assets/img/Item_8_Services.jpg",
    badge: "ALL LEVELS",
    title: "DANCE CARDIO GROOVE",
    subtitle: "Dance Fitness",
    link: "/classes/dance-cardio-groove",
  },
  {
    image: "/assets/img/Item_9_Services.jpg",
    badge: "ADVANCED",
    title: "FUNCTIONAL FITNESS",
    subtitle: "CrossFit-inspired",
    link: "/classes/functional-fitness",
  },
];

export default function ClassesPage() {
  pageTitle("Classes");
  return (
    <>
      {/* Page Heading */}
      <PageHeading
        data={{
          bgImage: "/assets/img/Hero_Services.jpg",
          title: "<span>ELEVATE YOUR </span>WORKOUT EXPERIENCE",
          currentPage: "Services",
        }}
      />

      {/* Classes Grid */}
      <section className="cs_service_card">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="row justify-content-center cs_gap_y_40">
            {classesData.map((item, index) => (
              <div className="col-lg-4 col-sm-6 cs_hobble" key={index}>
                <div className="cs_card_style_4 cs_hover_layer1">
                  <div className="cs_card_thumbnail position-relative">
                    <img src={item.image} alt="Card image" />
                    <span className="cs_badge cs_heading_color cs_medium position-absolute">
                      {item.badge}
                    </span>
                    <Link
                      to={item.link}
                      aria-label="Service details link"
                      className="cs_btn_style_1 cs_heading_font position-absolute"
                    >
                      View More
                    </Link>
                  </div>
                  <div className="cs_card_info cs_center_column text-center">
                    <h2 className="cs_card_title cs_accent_color cs_mb_5 cs_fs_24 cs_hover_layer3">
                      <Link to={item.link} aria-label="Service details link">
                        {item.title}
                      </Link>
                    </h2>
                    <p className="cs_card_text cs_fs_18 mb-0">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_radial_gradiant"></div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
      </section>

      {/* CTA Section */}
      <CTASection
        data={{
          bgImage: "/assets/img/CTA_Services.jpg",
          title:
            'READY TO EXPERIENCE <span>THE VARIETY AND EFFECTIVENESS </span>OF OUR CLASSES?',
          btnText: "SIGN UP FOR A CLASS",
          btnUrl: "/contact",
          style: "cs_cta_style_3",
          contentClass: "",
          titleClass: "",
          containerClass: "position-relative",
          topSpacingClass: "cs_height_107 cs_height_lg_80",
          bottomSpacingClass: "cs_height_117 cs_height_lg_80",
          showRadialGradient: true,
        }}
      />
    </>
  );
}
