import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const pricingData = [
  {
    plan: "BASIC PLAN",
    price: "39",
    period: "month",
    frequency: "3 DAYS/WEEK",
    features: [
      "Access to all cardio classes",
      "Monthly body assessment",
      "Nutritional guidance",
    ],
  },
  {
    plan: "PREMIUM PLAN",
    price: "59",
    period: "month",
    frequency: "3 DAYS/WEEK",
    features: [
      "All Basic Plan features",
      "Strength training sessions",
      "Nutritional guidance",
    ],
  },
  {
    plan: "ELITE PLAN",
    price: "89",
    period: "month",
    frequency: "3 DAYS/WEEK",
    features: [
      "All Premium Plan features",
      "Personal training session a month",
      "Priority booking for all classes",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="cs_pricing_section">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_radial_gradiant"></div>
        <div className="cs_section_heading_style_1 text-center">
          <h2
            className="cs_section_title cs_text_strock cs_fs_54 cs_mb_30"
            data-aos="fade-down"
          >
            <span>FLEXIBLE </span>PLANS FOR <br />
            EVERY BUDGET
          </h2>
          <p className="cs_section_content mb-0">
            Choose a plan that suits you. No long-term commitments required.
          </p>
        </div>
        <div className="cs_height_67 cs_height_lg_67"></div>
        <div className="row cs_gap_y_24">
          {pricingData.map((plan, index) => (
            <div className="col-lg-4" key={index}>
              <div className="cs_pricing_card cs_center animationonhover">
                <div className="cs_pricing_card_content">
                  <div className="cs_pricing_head cs_mb_34">
                    <h3 className="cs_secondary_font cs_fs_16 cs_mb_6 cs_pricing_plan">
                      {plan.plan}
                    </h3>
                    <p className="cs_price_value cs_heading_font cs_fs_54 cs_mb_26">
                      $<span className="monthlyPrice">{plan.price}</span>
                      <small className="cs_fs_24">
                        / <span className="monthlyText">{plan.period}</span>
                      </small>
                    </p>
                    <p className="cs_pricing_head_subtitle mb-0 cs_heading_color">
                      {plan.frequency}
                    </p>
                  </div>
                  <ul className="cs_pricing_list cs_fs_18 list-unstyled p-0 cs_mb_34">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <span className="cs_pricing_icon">
                          <Icon icon="fa-solid:check-circle" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="cs_btn_style_1 cs_heading_font"
                  >
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
