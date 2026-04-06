import { Link } from "react-router-dom";
import { sanitizeHtml } from "../../helper";

interface CTAData {
  bgImage: string;
  title: string;
  subtitle?: string;
  subtitleClass?: string;
  btnText?: string;
  btnUrl?: string;
  style?: string;
  contentClass?: string;
  containerClass?: string;
  titleClass?: string;
  topSpacingClass?: string;
  bottomSpacingClass?: string;
  showRadialGradient?: boolean;
}

interface CTASectionProps {
  data: CTAData;
}

export default function CTASection({ data }: CTASectionProps) {
  return (
    <section
      className={`cs_bg_filed ${data.style || "cs_cta_style_1"}`}
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div
        className={data.topSpacingClass || "cs_height_105 cs_height_lg_75"}
      ></div>
      <div className={`container ${data.containerClass || ""}`}>
        <div
          className={`cs_cta_content ${data.contentClass !== undefined ? data.contentClass : "ms-auto"}`}
        >
          <h2
            className={`cs_fs_54 cs_text_strock ${data.titleClass || "cs_mb_22"}`}
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.title) }}
          ></h2>
          {data.subtitle && (
            <p
              className={
                data.subtitleClass || "cs_heading_color cs_fs_18 cs_mb_22"
              }
            >
              {data.subtitle}
            </p>
          )}
          <Link
            to={data.btnUrl || "/contact"}
            className="cs_btn_style_1 cs_heading_font"
            data-aos="fade-up"
          >
            {data.btnText || "JOIN NOW"}
          </Link>
        </div>
        {data.showRadialGradient && (
          <div className="cs_radial_gradiant"></div>
        )}
      </div>
      <div
        className={
          data.bottomSpacingClass || "cs_height_115 cs_height_lg_80"
        }
      ></div>
    </section>
  );
}
