import { Icon } from "@iconify/react";

interface Feature {
  title: string;
  text: string;
}

const featureData: Feature[] = [
  {
    title: "Personalized Training",
    text: "We create personalized workout plans designed specifically for your needs and goals, ensuring that every aspect of your fitness journey is customized to help you achieve success.",
  },
  {
    title: "Flexible Schedules",
    text: "Enjoy the flexibility of our fitness programs, offering early morning to late night classes, so you can choose the time that suits your schedule best.",
  },
  {
    title: "Latest Equipment",
    text: "Stay ahead in your fitness journey with cutting-edge technology that not only enhances your workouts but also provides real-time data and analysis to help you track your progress.",
  },
  {
    title: "Expert Nutritionists",
    text: "Our comprehensive fitness program goes beyond exercise; we also provide tailored meal plans to fuel your fitness journey. These nutritionally balanced meal plans are designed to support your specific fitness goals.",
  },
];

export default function FeatureSection() {
  return (
    <section className="cs_feature_section">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_radial_gradiant"></div>
        <div className="cs_section_heading_style_1">
          <h2 className="cs_text_strock cs_fs_54 mb-0" data-aos="fade-down">
            <span>WHY FITFLEX </span>IS YOUR <br />
            IDEAL FITNESS PARTNER
          </h2>
        </div>
        <div className="cs_height_55 cs_height_lg_50"></div>
        <div className="row cs_gap_y_50">
          <div className="col-xl-4 col-lg-5 order-lg-2">
            <div className="cs_feature_widget_img">
              <img src="/assets/img/feature_image.jpg" alt="Features image" />
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <ul className="cs_feature_list cs_mp_0">
              {featureData.map((feature, index) => (
                <li key={index}>
                  <span className="cs_feature_icon">
                    <Icon icon="fa-solid:check-circle" />
                  </span>
                  <h3 className="cs_feature_title cs_fs_24 cs_semibold">
                    {feature.title}
                  </h3>
                  <p className="cs_feature_subtitle mb-0">{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="cs_height_135 cs_height_lg_80"></div>
    </section>
  );
}
