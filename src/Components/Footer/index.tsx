import { Link } from "react-router-dom";

interface FooterLink {
  label: string;
  href: string;
  isInternal?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerData: {
  columns: FooterColumn[];
  socialLinks: { label: string; href: string }[];
} = {
  columns: [
    {
      title: "About",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Mission & Vision", href: "#" },
        { label: "Meet the Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Contact Us", href: "/contact", isInternal: true },
        { label: "Location & Hours", href: "#" },
        { label: "Support", href: "#" },
        { label: "Partnership Inquiries", href: "#" },
      ],
    },
    {
      title: "Classes",
      links: [
        { label: "Class Schedule", href: "/timetable", isInternal: true },
        { label: "Types of Workouts", href: "#" },
        { label: "Trainers", href: "/about", isInternal: true },
        { label: "Virtual Classes", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog", isInternal: true },
        { label: "Exercise Tips", href: "#" },
        { label: "Nutrition Guides", href: "#" },
        { label: "Equipment Reviews", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { label: "ig", href: "#" },
    { label: "tw", href: "#" },
    { label: "yt", href: "#" },
    { label: "In", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="cs_footer_style_1">
      <div className="container">
        <div className="cs_footer_row">
          {footerData.columns.map((column, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{column.title}</h2>
                <ul className="cs_footer_widget_menu cs_mp_0">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      {link.isInternal ? (
                        <Link to={link.href} aria-label="Footer link">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} aria-label="Footer link">
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <div className="cs_text_widget">
                <h2 className="cs_footer_widget_title">
                  Sign up for our newsletter
                </h2>
              </div>
            </div>
            <div className="cs_footer_widget">
              <form action="#" className="cs_newsletter cs_style_1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="cs_newsletter_input"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="cs_heading_font cs_newsletter_btn wow fadeInRight"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
            <div className="cs_social_btns">
              {footerData.socialLinks.map((social, index) => (
                <a href={social.href} aria-label="Social link" key={index}>
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
