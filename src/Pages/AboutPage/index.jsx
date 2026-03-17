import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { pageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import CTASection from "../../Components/CTASection";
import VideoModal from "../../Components/VideoModal";

const valueData = [
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

const trainerData = [
  {
    image: "/assets/img/Trainer_1_About.jpg",
    name: "Alexandra Rodriguez",
    role: "Strength & Conditioning Specialist",
  },
  {
    image: "/assets/img/Trainer_2_About.jpg",
    name: "David Chen",
    role: "Certified Yoga Instructor",
  },
  {
    image: "/assets/img/Trainer_3_About.jpg",
    name: "Emily Turner",
    role: "Nutrition and Wellness Coach",
  },
  {
    image: "/assets/img/Trainer_4_About.jpg",
    name: "Mark Johnson",
    role: "High-Intensity Interval Training (HIIT) Expert",
  },
  {
    image: "/assets/img/Trainer_5_About.jpg",
    name: "Dr. Maya Patel",
    role: "Injury Prevention Specialist",
  },
  {
    image: "/assets/img/Trainer_6_About.jpg",
    name: "Sophie Nguyen",
    role: "Pilates and Flexibility Trainer",
  },
];

const brandData = [
  "/assets/img/Brands_1_About.svg",
  "/assets/img/Brands_2_About.svg",
  "/assets/img/Brands_3_About.svg",
  "/assets/img/Brands_4_About.svg",
  "/assets/img/Brands_5_About.svg",
  "/assets/img/Brands_1_About.svg",
];

export default function AboutPage() {
  pageTitle("About Us");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* Page Heading */}
      <PageHeading
        data={{
          variant: "cs_hero_style_1",
          bgImage: "/assets/img/Hero_About.jpg",
          title: "<span>ABOUT</span> FITFLEX",
          currentPage: "About Us",
          showHr: true,
          bottomSpacing: (
            <>
              <div className="cs_height_150 cs_height_lg_80"></div>
              <div className="cs_height_40 cs_height_lg_40"></div>
            </>
          ),
        }}
      />

      {/* About Section */}
      <section className="cs_about_section">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_about_style_1 d-flex justify-content-between">
            <div className="cs_about_image d-flex">
              <div className="cs_about_img_1">
                <img
                  src="/assets/img/About_1_About.jpg"
                  alt="features of fitflex"
                />
              </div>
              <div className="cs_about_img_2">
                <img
                  src="/assets/img/About_2_About.jpg"
                  alt="features of fitflex"
                />
              </div>
            </div>
            <div className="cs_section_heading_style_1 cs_center">
              <h2
                className="cs_text_strock cs_fs_54"
                data-aos="fade-down"
              >
                <span>EMPOWERING </span>YOUR FITNESS JOURNEY
              </h2>
              <p className="cs_fs_18 mb-0">
                Welcome to FitFlex, where we believe that a healthier, happier
                you begins with personalized fitness and a supportive community.
                Our state-of-the-art studio is not just a gym; it's a space for
                transformation, where individuals of all fitness levels come
                together to achieve their goals. With a commitment to innovation
                and inclusivity, FitFlex is more than a workout — it's a
                lifestyle.
              </p>
            </div>
          </div>
          <div className="cs_radial_gradiant"></div>
        </div>
      </section>

      {/* Value Section */}
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

      {/* Video Section */}
      <section>
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container">
          <div
            className="cs_video_style_1 cs_bg_filed position-relative"
            style={{
              backgroundImage: "url(/assets/img/Video_About.jpg)",
            }}
          >
            <a
              href="#"
              aria-label="Player button"
              className="cs_video_open"
              onClick={(e) => {
                e.preventDefault();
                setIsVideoOpen(true);
              }}
            >
              <img src="/assets/img/Play_About.svg" alt="Player button icon" />
            </a>
            <div className="cs_section_heading_style_1">
              <h2
                className="cs_section_title cs_text_strock cs_fs_54 cs_mb_8"
                data-aos="fade-left"
              >
                <span>EXPERIENCE </span>FITFLEX
              </h2>
              <p className="cs_section_content cs_fs_18 mb-0">
                Where Your Fitness Journey Thrives
              </p>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isTrue={isVideoOpen}
        iframeSrc="https://www.youtube.com/embed/RJ1izzADlzY"
        handelClose={() => setIsVideoOpen(false)}
      />

      {/* Trainer Section */}
      <section className="cs_trainer_section">
        <div className="cs_height_134 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_section_heading_style_2">
            <div className="cs_section_heading_column_1">
              <h2
                className="cs_section_title cs_text_strock cs_fs_54 cs_mb_17"
                data-aos="fade-down"
              >
                <span>MEET</span> THE EXPERT
              </h2>
              <p className="cs_fs_18 mb-0">
                Each member of our team brings unique expertise to ensure a
                well-rounded and holistic fitness experience.
              </p>
            </div>
            <div className="cs_section_heading_column_2">
              <button
                type="button"
                className="cs_btn_style_1 cs_heading_font"
                data-aos="zoom-in"
              >
                SEE MORE
              </button>
            </div>
          </div>
          <div className="cs_height_66 cs_height_lg_50"></div>
          <div className="row cs_gap_y_30">
            {trainerData.map((trainer, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="cs_card_style_2">
                  <div className="cs_card_thumbnail position-relative">
                    <img src={trainer.image} alt="Card image" />
                    <Link
                      to="#"
                      aria-label="View team button"
                      className="cs_btn_style_1 cs_heading_font position-absolute"
                    >
                      View More
                    </Link>
                  </div>
                  <div className="cs_card_info cs_center_column text-center">
                    <h3 className="cs_card_title cs_mb_10 cs_fs_24">
                      <Link to="#" aria-label="View team link">
                        {trainer.name}
                      </Link>
                    </h3>
                    <p className="cs_card_text mb-0">{trainer.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_radial_gradiant"></div>
        </div>
      </section>

      {/* Brand Section */}
      <div className="cs_brands_section">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_slider cs_style_1 cs_slider_gap_100">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={600}
              slidesPerView={5}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={100}
              breakpoints={{
                0: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 5 },
              }}
            >
              {brandData.map((brand, index) => (
                <SwiperSlide key={index}>
                  <div className="cs_brands_logo">
                    <img src={brand} alt="Partner logo" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="cs_radial_gradiant"></div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
      </div>

      {/* CTA Section */}
      <CTASection
        data={{
          bgImage: "/assets/img/CTA_About.jpg",
          title:
            'READY TO EMBARK ON YOUR <span> FITNESS JOURNEY</span> WITH FITFLEX?',
          btnText: "JOIN NOW",
          btnUrl: "/contact",
          style: "cs_cta_style_2",
          contentClass: "",
          titleClass: "cs_mb_40 cs_mb_lg_30",
          topSpacingClass: "cs_height_83 cs_height_lg_75",
          bottomSpacingClass: "cs_height_95 cs_height_lg_80",
        }}
      />
    </>
  );
}
