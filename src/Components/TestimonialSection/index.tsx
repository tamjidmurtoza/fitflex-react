import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface Testimonial {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const testimonialData: Testimonial[] = [
  {
    name: "Joanne",
    image: "/assets/img/Joanne.jpg",
    text: '"Before joining FitFlex, I was stuck in a fitness rut. But the trainers here are amazing, and the community is so supportive! It\'s like a second home to me now."',
    rating: 5,
  },
  {
    name: "Caleb",
    image: "/assets/img/Caleb.jpg",
    text: '"I used to dread going to the gym, but FitFlex changed that for me. The variety of classes ensures I never get bored, and I genuinely look forward to each workout session!"',
    rating: 5,
  },
];

interface TestimonialSectionProps {
  showHeading?: boolean;
}

export default function TestimonialSection({
  showHeading = true,
}: TestimonialSectionProps) {
  return (
    <section className="cs_testimonial_section">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_radial_gradiant"></div>
        {showHeading && (
          <>
            <div className="cs_section_heading_style_2">
              <div className="cs_section_heading_column_1">
                <h2
                  className="cs_section_title cs_text_strock cs_fs_54 mb-0 lh-1"
                  data-aos="fade-down"
                >
                  TRANSFORMATIONS SPEAK LOUDER<span> THAN WORDS</span>
                </h2>
              </div>
              <div className="cs_section_heading_column_2">
                <Link
                  to="/testimonials"
                  className="cs_btn_style_1 cs_heading_font"
                  data-aos="zoom-in"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
            <div className="cs_height_57 cs_height_lg_57"></div>
          </>
        )}
        <div className="row cs_gap_y_24">
          {testimonialData.map((testimonial, index) => (
            <div className="col-lg-6" key={index}>
              <div className="cs_testimonial_card d-flex">
                <div className="cs_testimonial_image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="cs_testimonial_content">
                  <p className="cs_fs_18 cs_mb_26">{testimonial.text}</p>
                  <div className="cs_mb_10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span className="cs_testimonial_rating" key={i}>
                        <Icon icon="fa-solid:star" />
                      </span>
                    ))}
                  </div>
                  <h3 className="cs_testimonial_user cs_secondary_font cs_fs_18 mb-0">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
