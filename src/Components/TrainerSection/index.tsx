import { Link } from "react-router-dom";

interface Trainer {
  image: string;
  name: string;
  role: string;
}

const trainerData: Trainer[] = [
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

export default function TrainerSection() {
  return (
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
  );
}
