import { Link } from "react-router-dom";

interface RelatedClass {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  link: string;
}

const relatedClassesData: RelatedClass[] = [
  {
    image: "/assets/img/Item_4_Services.jpg",
    badge: "INTERMEDIATE",
    title: "CARDIO KICK",
    subtitle: "Kickboxing Cardio",
    link: "/classes/cardio-kick",
  },
  {
    image: "/assets/img/Item_5_Services.jpg",
    badge: "INTERMEDIATE",
    title: "MINDFUL PILATES",
    subtitle: "Pilates",
    link: "/classes/mindful-pilates",
  },
  {
    image: "/assets/img/Item_6_Services.jpg",
    badge: "INTERMEDIATE",
    title: "CYCLE FUSION",
    subtitle: "Indoor Cycling",
    link: "/classes/cycle-fusion",
  },
];

export default function RelatedClassesSection() {
  return (
    <section className="cs_classes_card">
      <div className="container position-relative">
        <div className="cs_radial_gradiant_2"></div>
        <div className="cs_section_heading_style_2">
          <div className="cs_section_heading_column_1">
            <h2
              className="cs_section_title cs_text_strock cs_fs_54 mb-0 lh-1"
              data-aos="fade-down"
            >
              <span>YOU MAY </span>ALSO INTERESTED IN
            </h2>
          </div>
          <div className="cs_section_heading_column_2">
            <Link
              to="/classes"
              aria-label="View classes button"
              className="cs_btn_style_1 cs_heading_font"
              data-aos="zoom-in"
            >
              VIEW MORE
            </Link>
          </div>
        </div>
        <div className="cs_height_57 cs_height_lg_57"></div>
        <div className="row justify-content-center cs_gap_y_40">
          {relatedClassesData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="cs_card_style_4">
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
                  <h3 className="cs_card_title cs_accent_color cs_mb_5 cs_fs_24">
                    <Link to={item.link} aria-label="Service details link">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="cs_card_text cs_fs_18 mb-0">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_140 cs_height_lg_80"></div>
    </section>
  );
}
