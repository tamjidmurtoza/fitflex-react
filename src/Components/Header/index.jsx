import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const menuData = {
  logo: "/assets/img/logo.svg",
  logoUrl: "/",
  menuItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Classes",
      href: "/classes",
      children: [
        { label: "Classes", href: "/classes" },
        { label: "Class Details", href: "/classes/fitfusion" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      children: [
        { label: "Blog", href: "/blog" },
        { label: "Blog Details", href: "/blog/blog-details" },
      ],
    },
    { label: "Timetable", href: "/timetable" },
  ],
};

const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [isSticky, setIsSticky] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 10) {
        setIsSticky("cs_sticky_active");
      } else {
        setIsSticky("");
      }
      if (currentScrollPos > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 cs_sticky_header ${isSticky}`}
      >
        <div className="cs_main_header cs_fs_16">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link
                  className="cs_site_branding"
                  to={menuData.logoUrl}
                  aria-label="Home page link"
                >
                  <img src={menuData.logo} alt="Logo" />
                </Link>
                <div className="cs_nav">
                  <div
                    className={`cs_nav_list_wrap ${
                      isShowMobileMenu ? "cs_active" : ""
                    }`}
                  >
                    <ul className="cs_nav_list">
                      {menuData.menuItems.map((item, index) => (
                        <li
                          key={index}
                          className={
                            item.children ? "menu-item-has-children" : ""
                          }
                        >
                          <Link to={item.href} aria-label="Menu link">
                            {item.label}
                          </Link>
                          {item.children && (
                            <>
                              <ul
                                className={
                                  openMobileSubmenuIndex.includes(index)
                                    ? "cs_submenu_open"
                                    : ""
                                }
                              >
                                {item.children.map((child, i) => (
                                  <li
                                    key={i}
                                    onClick={() =>
                                      setIsShowMobileMenu(false)
                                    }
                                  >
                                    <Link
                                      to={child.href}
                                      aria-label="Menu link"
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <span
                                className={`cs_menu_dropdown_toggle ${
                                  openMobileSubmenuIndex.includes(index)
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() => handleOpenMobileSubmenu(index)}
                              >
                                <span />
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu ? "cs_toggle_active" : ""
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="cs_main_header_right">
                <Link
                  to="/contact"
                  aria-label="Contact button"
                  className="cs_btn_style_1 cs_heading_font"
                >
                  <span>CONTACT</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        type="button"
        aria-label="Scroll to top button"
        className={`cs_scrollup ${showScrollTop ? "cs_scrollup_show" : ""}`}
        onClick={handleScrollToTop}
      >
        <Icon icon="fa-solid:arrow-up" />
      </button>
    </>
  );
};

export default Header;
