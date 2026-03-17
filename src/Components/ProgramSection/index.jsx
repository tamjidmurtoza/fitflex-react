import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const programData = [
  {
    image: "/assets/img/program_image_1.jpg",
    title: "STRENGTH TRAINING",
    text: "Build muscle, increase stamina.",
    link: "/classes/strength-training",
  },
  {
    image: "/assets/img/program_image_2.jpg",
    title: "CARDIO BLAST",
    text: "Maximize heart health and weight loss.",
    link: "/classes/cardio-blast",
  },
  {
    image: "/assets/img/program_image_3.jpg",
    title: "YOGA & FLEXIBILITY",
    text: "Achieve mental clarity and flexibility.",
    link: "/classes/yoga-flexibility",
  },
  {
    image: "/assets/img/program_image_4.jpg",
    title: "NUTRITION COUNSELING",
    text: "Eat right to complement your workout.",
    link: "/classes/nutrition-counseling",
  },
  {
    image: "/assets/img/program_image_3.jpg",
    title: "STRENGTH TRAINING",
    text: "Build muscle, increase stamina.",
    link: "/classes/strength-training",
  },
];

export default function ProgramSection() {
  return (
    <section className="cs_programs_section cs_slider cs_style_1 cs_slider_gap_24">
      <div className="cs_height_130 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div className="cs_radial_gradiant"></div>
        <div className="cs_section_heading_style_1 text-center">
          <h2
            className="cs_section_title cs_text_strock cs_fs_54 mb-0 cs_slideup_text"
            data-aos="fade-up"
          >
            <span>CHOOSE </span>OUR PATH TO FITNESS
          </h2>
        </div>
        <div className="cs_height_58 cs_height_lg_58"></div>
        <div className="cs_full_screen_right">
          <Swiper
            modules={[Pagination]}
            loop={true}
            speed={600}
            slidesPerView="auto"
            spaceBetween={24}
            pagination={{
              clickable: true,
              el: ".cs_pagination.cs_style_1",
            }}
          >
            {programData.map((program, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <div className="cs_card_style_1">
                  <div className="cs_card_thumbnail position-relative">
                    <img src={program.image} alt={program.title} />
                    <Link
                      to={program.link}
                      className="cs_btn_style_1 cs_heading_font position-absolute"
                    >
                      View More
                    </Link>
                  </div>
                  <div className="cs_card_info cs_center_column text-center">
                    <h3 className="cs_card_title cs_mb_5 cs_fs_24">
                      <Link to={program.link}>{program.title}</Link>
                    </h3>
                    <p className="cs_card_text cs_fs_18 mb-0">{program.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="cs_height_60 cs_height_lg_40"></div>
        <div className="cs_center">
          <div className="cs_pagination cs_style_1"></div>
        </div>
      </div>
    </section>
  );
}
