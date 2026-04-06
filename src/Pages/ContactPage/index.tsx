import { useState, ChangeEvent, FormEvent } from "react";
import { Icon } from "@iconify/react";
import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  usePageTitle("Contact Us");

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    const form = new FormData();
    form.append("access_key", "cd98b256-0db3-478c-ab28-1ec94f80447c");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResult(data.message);
      }
    } catch {
      setResult("Something went wrong!");
    }
  };

  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/Gallery_3_lg_Service_Details.jpg",
          title: 'MEET OUR <span>FITNESS EXPERTS </span> HERE',
          currentPage: "Contact Us",
          showHr: true,
        }}
      />

      <section className="cs_contact_style_1">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_radial_gradiant"></div>
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              <div className="cs_section_heading cs_mb_50">
                <h2
                  className="cs_section_title mb-0 cs_text_strock"
                  data-aos="fade-down"
                >
                  GET IN <span>TOUCH</span>
                </h2>
              </div>
              <ul className="cs_contact_info cs_mp_0 flex-column">
                <li>
                  <span className="cs_iconbox_icon cs_center">
                    <Icon icon="fa-regular:envelope" />
                  </span>
                  <p className="mb-0 cs_fs_18">EMAIL</p>
                  <p className="mb-0 cs_fs_18">
                    <a href="mailto:hello@fitflex.com">hello@fitflex.com</a>
                  </p>
                </li>
                <li>
                  <span className="cs_iconbox_icon cs_center">
                    <Icon icon="fa-solid:phone-volume" />
                  </span>
                  <p className="mb-0 cs_fs_18">PHONE</p>
                  <p className="mb-0 cs_fs_18">
                    <a href="tel:+1234567890">+123 456 7890</a>
                  </p>
                </li>
                <li>
                  <span className="cs_iconbox_icon cs_center">
                    <Icon icon="fa6-solid:location-dot" />
                  </span>
                  <p className="mb-0 cs_fs_18">ADDRESS</p>
                  <p className="mb-0 cs_fs_18">
                    123 Any Where St, Any City,
                    <br /> Any State
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="cs_contact_form_1">
                <div className="cs_section_heading cs_mb_50">
                  <h2
                    className="cs_section_title mb-0 cs_text_strock"
                    data-aos="fade-down"
                  >
                    SEND US A <span>MESSAGE</span>
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="row cs_gap_y_24 cs_fs_18"
                >
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field"
                      placeholder="Name"
                      autoComplete="off"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="cs_form_field"
                      placeholder="Email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="cs_form_field"
                      name="message"
                      placeholder="Message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="cs_btn_style_1 w-100"
                      type="submit"
                      data-aos="fade-up"
                    >
                      Send Message
                    </button>
                    {result && (
                      <div className="cs_fs_14 cs_heading_color mt-2">
                        {result}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container-fluid">
          <div className="cs_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
              title="Google Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
