import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";

const data = {
  title: "404",
  subtitle: "Oops! Page Not Found!",
  message:
    "Sorry, the page you're seeking isn't here. It could have been relocated or removed.",
  buttonText: "Return Home",
  buttonLink: "/",
};

const Error404 = () => {
  pageTitle("404");

  return (
    <section
      style={{
        marginTop: "150px",
        marginBottom: "150px",
      }}
    >
      <div className="container">
        <div className="cs_error text-center">
          <h2 className="cs_fs_120 cs_accent_color">{data.title}</h2>
          <h2 className="cs_fs_53 cs_normal">{data.subtitle}</h2>
          <p>{data.message}</p>
          <Link
            to={data.buttonLink}
            className="cs_btn_style_1 cs_heading_font"
          >
            <span>{data.buttonText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
