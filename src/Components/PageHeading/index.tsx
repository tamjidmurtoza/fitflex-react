import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { sanitizeHtml } from "../../helper";

interface PageHeadingData {
  variant?: string;
  bgImage: string;
  title: string;
  currentPage: string;
  headingStyle?: string;
  topSpacingClass?: string;
  parentLink?: { url: string; label: string };
  bottomSpacing?: ReactNode;
  showHr?: boolean;
}

interface PageHeadingProps {
  data: PageHeadingData;
}

export default function PageHeading({ data }: PageHeadingProps) {
  return (
    <section
      className={`cs_bg_filed ${data.variant || "cs_hero_style_2"}`}
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div className="cs_height_150 cs_height_lg_80"></div>
      <div
        className={data.topSpacingClass || "cs_height_40 cs_height_lg_40"}
      ></div>
      <div className="container">
        <div
          className={data.headingStyle || "cs_section_heading_style_1"}
        >
          <h1
            className="cs_text_strock cs_fs_72 cs_bold cs_mb_12"
            data-aos="fade-down"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.title) }}
          ></h1>
          <ol className="cs_breadcrumb_style_1 cs_fs_18 breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {data.parentLink && (
              <li className="breadcrumb-item">
                <Link to={data.parentLink.url}>{data.parentLink.label}</Link>
              </li>
            )}
            <li className="breadcrumb-item active">{data.currentPage}</li>
          </ol>
        </div>
      </div>
      {data.bottomSpacing || (
        <div className="cs_height_108 cs_height_lg_80"></div>
      )}
      {data.showHr && <hr />}
    </section>
  );
}
