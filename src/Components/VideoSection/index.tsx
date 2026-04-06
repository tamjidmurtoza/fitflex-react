import { useState } from "react";
import VideoModal from "../VideoModal";

export default function VideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
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
    </>
  );
}
