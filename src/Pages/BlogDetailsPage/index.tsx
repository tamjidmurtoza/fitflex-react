import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import Sidebar from "../../Components/Sidebar";

interface CommentFormData {
  fullName: string;
  email: string;
  website: string;
  comment: string;
}

export default function BlogDetailsPage() {
  usePageTitle("Blog Details");

  const [formData, setFormData] = useState<CommentFormData>({
    fullName: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ fullName: "", email: "", website: "", comment: "" });
  };

  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/CTA_About.jpg",
          headingStyle: "cs_section_heading_style_3",
          title: "Benefits of Daily Exercise for <span>Mental Health</span>",
          currentPage: "Blog Details",
          parentLink: { url: "/blog", label: "Blog" },
        }}
      />

      <section className="cs_blog_details">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_radial_gradiant"></div>
          <div className="cs_radial_gradiant_3"></div>
          <div className="cs_radial_gradiant_4"></div>
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post cs_style_1">
                <div className="cs_post_thumb">
                  <img src="/assets/img/Post_1.jpg" alt="Post" className="w-100" />
                </div>
                <div className="cs_post_info">
                  <div className="cs_post_meta cs_style_1 cs_semibold">
                    <span className="cs_posted_by">07 Mar 2022</span>
                    <a href="#" aria-label="Post category" className="cs_post_avatar">Mental Health</a>
                  </div>
                  <h2 className="cs_post_title">Understanding the Connection Between Exercise and Mental Health</h2>
                  <p>Mental health has become a major concern in today's fast-paced world. Work pressure, academic stress, financial responsibilities, and constant screen time can affect our mood, focus, and emotional stability. Many people struggle with anxiety, stress, low motivation, and emotional exhaustion without realizing how much their daily habits influence their mental well-being.</p>
                  <blockquote>
                    "Daily exercise is not just a workout for your body, it is a healing practice for your mind. Every step you take releases stress, builds strength, and restores clarity. Consistency turns movement into confidence, and effort into emotional balance."
                    <small>Loren Mulari</small>
                  </blockquote>
                  <p>Exercise is often seen as a way to stay physically fit, but its impact on mental health is just as powerful. Regular physical activity helps the brain function better, improves emotional balance, and supports a positive mindset. Even simple daily movements like walking, stretching, or light workouts can create noticeable improvements in mood and mental clarity.</p>
                  <div className="row">
                    <div className="col-md-6">
                      <img src="/assets/img/post_4.jpg" alt="Blog Details" className="w-100" />
                      <div className="cs_height_35 cs_height_lg_20"></div>
                    </div>
                    <div className="col-md-6">
                      <img src="/assets/img/Post_2.jpg" alt="Blog Details" className="w-100" />
                      <div className="cs_height_35 cs_height_lg_35"></div>
                    </div>
                  </div>
                  <h3>How Exercise Improves Brain Function</h3>
                  <p>When you exercise, your brain releases chemicals called endorphins, which are known as "feel-good hormones." These chemicals reduce pain, lower stress, and create a sense of happiness. Physical activity also increases serotonin and dopamine, which help regulate emotions, motivation, and pleasure.<br />Exercise improves blood flow to the brain, delivering more oxygen and nutrients to brain cells. This helps improve memory, thinking ability, and emotional control. Over time, regular physical activity can protect the brain from mental fatigue and age-related decline.</p>
                  <h3>Reducing Stress and Anxiety Naturally</h3>
                  <p>Stress is a normal part of life, but too much stress can harm both the mind and body. Exercise is one of the most effective natural ways to reduce stress. When you move your body, muscle tension decreases, breathing becomes deeper, and the nervous system relaxes.</p>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/RJ1izzADlzY" title="Fitness Video" allowFullScreen></iframe>
                  </div>
                  <p>Activities like walking, jogging, yoga, and swimming are especially helpful for calming the mind. These exercises allow you to focus on movement and breathing instead of worrying thoughts. This mental break helps reduce anxiety and creates a sense of peace.</p>
                  <h3>Fighting Depression with Physical Activity</h3>
                  <p>Depression affects millions of people worldwide. While professional treatment is important, daily exercise can strongly support emotional recovery. Regular movement helps increase serotonin levels, which improves mood and emotional stability.<br />Exercise also gives a sense of achievement. Completing even a short workout can boost confidence and motivation. Over time, this helps reduce feelings of sadness, fatigue, and hopelessness. Simple activities like a 20-minute walk can make a big difference when done consistently.</p>
                  <h3>Better Sleep for a Healthier Mind</h3>
                  <p>Poor sleep and mental health are closely connected. Stress and anxiety often cause sleep problems, while lack of sleep can worsen emotional issues. Exercise helps regulate the body's natural sleep cycle.<br />Regular physical activity helps people fall asleep faster and enjoy deeper, more restful sleep. Better sleep improves concentration, emotional balance, and energy levels throughout the day.<br />Light or moderate exercise earlier in the day works best. Intense workouts late at night may make it harder to relax.</p>
                </div>
              </div>
              <div className="cs_height_30 cs_height_lg_30"></div>
              <h2 className="cs_fs_32 mb-0">Leave A Reply</h2>
              <div className="cs_height_5 cs_height_lg_5"></div>
              <p className="mb-0">Your email address will not be published. Required fields are marked *</p>
              <div className="cs_height_40 cs_height_lg_30"></div>
              <form onSubmit={handleSubmit} className="row cs_fs_18">
                <div className="col-lg-6">
                  <label htmlFor="name">Full Name*</label>
                  <input type="text" id="name" name="fullName" className="cs_form_field" autoComplete="off" value={formData.fullName} onChange={handleChange} />
                  <div className="cs_height_20 cs_height_lg_20"></div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="email">Email*</label>
                  <input type="text" id="email" name="email" className="cs_form_field" autoComplete="off" value={formData.email} onChange={handleChange} />
                  <div className="cs_height_20 cs_height_lg_20"></div>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="website">Website*</label>
                  <input type="text" id="website" name="website" className="cs_form_field" value={formData.website} onChange={handleChange} />
                  <div className="cs_height_20 cs_height_lg_20"></div>
                </div>
                <div className="col-lg-12">
                  <label htmlFor="comment">Write Your Comment*</label>
                  <textarea rows={7} id="comment" name="comment" className="cs_form_field" value={formData.comment} onChange={handleChange}></textarea>
                  <div className="cs_height_25 cs_height_lg_25"></div>
                </div>
                <div className="col-lg-12">
                  <button type="submit" className="cs_btn_style_1 cs_white_color"><span>Send Message</span></button>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
        <hr className="cs_gray_color" />
      </section>
    </>
  );
}
