interface ValueItem {
  icon: string;
  title: string;
  text: string;
}

const valueData: ValueItem[] = [
  {
    icon: "/assets/img/Value_1_About.svg",
    title: "Community",
    text: "Fostering a sense of belonging and support.",
  },
  {
    icon: "/assets/img/Value_2_About.svg",
    title: "Inclusivity",
    text: "Embracing diversity in fitness for all body types and abilities.",
  },
  {
    icon: "/assets/img/Value_3_About.svg",
    title: "Innovation",
    text: "Offering cutting-edge workouts and technology.",
  },
  {
    icon: "/assets/img/Value_1_About.svg",
    title: "Personalization",
    text: "Tailoring fitness plans to individual needs.",
  },
];

export default function ValueSection() {
  return (
    <section className="cs_value_section">
      <div className="cs_height_128 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_section_heading_style_1 text-center">
          <h2
            className="cs_section_title cs_text_strock cs_fs_54 cs_mb_19"
            data-aos="fade-down"
          >
            <span>OUR </span>Core Values
          </h2>
          <p className="cs_section_content cs_fs_18 mb-0">
            guide everything we do
          </p>
        </div>
        <div className="cs_height_65 cs_height_lg_65"></div>
        <div className="row cs_gap_y_24">
          {valueData.map((value, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="cs_card_style_3 animationonhover">
                <div className="d-flex justify-content-end">
                  <img src={value.icon} alt="Card image" />
                </div>
                <div className="cs_height_74 cs_height_lg_50"></div>
                <div className="cs_card_info">
                  <h3 className="cs_card_title cs_mb_15 cs_fs_24">
                    {value.title}
                  </h3>
                  <p className="cs_card_text cs_fs_16 mb-0">{value.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cs_radial_gradiant"></div>
      </div>
    </section>
  );
}
