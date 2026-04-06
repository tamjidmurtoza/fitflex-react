interface Feature {
  label: string;
  value: string;
}

const featureData: Feature[] = [
  { label: "Type", value: "High-Intensity Interval Training (HIIT)" },
  { label: "Level", value: "Intermediate" },
  { label: "Duration", value: "60 minutes" },
  {
    label: "Description",
    value:
      "Immerse yourself in a dynamic 60-minute session that seamlessly blends cardiovascular exercises with strength training intervals. FitFusion is designed to push your limits, ignite your metabolism, and leave you feeling invigorated.",
  },
];

export default function ClassAboutSection() {
  return (
    <section className="cs_class_about_section">
      <div className="cs_height_140 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_radial_gradiant_2"></div>
        <div className="cs_about_style_1 d-flex justify-content-between">
          <div className="cs_about_image">
            <img
              src="/assets/img/About_Service_Details.jpg"
              alt="Features image"
            />
          </div>
          <div className="cs_about_content cs_center">
            <ul className="cs_feature_list cs_mp_0">
              {featureData.map((feature, index) => (
                <li key={index}>
                  <h2 className="cs_feature_title cs_secondary_font cs_fs_16">
                    {feature.label}
                  </h2>
                  <p className="cs_feature_subtitle cs_fs_18 mb-0">
                    {feature.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
