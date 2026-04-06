import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brandData: string[] = [
  "/assets/img/Brands_1_About.svg",
  "/assets/img/Brands_2_About.svg",
  "/assets/img/Brands_3_About.svg",
  "/assets/img/Brands_4_About.svg",
  "/assets/img/Brands_5_About.svg",
  "/assets/img/Brands_1_About.svg",
];

export default function BrandSection() {
  return (
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
  );
}
