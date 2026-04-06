import { Link } from "react-router-dom";
import { usePageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import Sidebar from "../../Components/Sidebar";

interface BlogPost {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    image: "/assets/img/Post_3.jpg",
    date: "14 Jan 2026",
    category: "Workout",
    title: "Benefits of Daily Exercise for Mental Health",
    excerpt:
      "Learn how daily exercise reduces stress, improves mood, boosts focus, and supports mental well-being for a healthier, happier, and more balanced lifestyle.",
    link: "/blog/benefits-of-daily-exercise",
  },
  {
    image: "/assets/img/Post_2.jpg",
    date: "07 Jan 2026",
    category: "Fitness",
    title: "Home Workout Routine for Beginners (No Equipment)",
    excerpt:
      "Start exercising at home with this beginner-friendly, no-equipment workout routine that builds strength, burns calories, and improves fitness using simple daily exercises.",
    link: "/blog/home-workout-routine",
  },
  {
    image: "/assets/img/Post_1.jpg",
    date: "01 Jan 2026",
    category: "Professional",
    title: "Nutrition for Fitness: What to Eat for Better Performance",
    excerpt:
      "Discover the best foods for fitness, including pre- and post-workout meals, hydration tips, and balanced nutrition to boost performance, recovery, and overall health.",
    link: "/blog/nutrition-for-fitness",
  },
];

export default function BlogPage() {
  usePageTitle("Blog");
  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/Hero_Services.jpg",
          title: "<span>Latest </span>Post",
          currentPage: "Blog",
        }}
      />

      <section className="cs_blog_section">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_radial_gradiant"></div>
          <div className="cs_radial_gradiant_3"></div>
          <div className="cs_radial_gradiant_4"></div>
          <div className="row">
            <div className="col-lg-8">
              <div className="cs_post_1_list">
                {blogPosts.map((post, index) => (
                  <div className="cs_post cs_style_1" key={index}>
                    <Link
                      to={post.link}
                      aria-label="Post details link"
                      className="cs_post_thumb"
                    >
                      <img src={post.image} alt="Post" className="w-100" />
                    </Link>
                    <div className="cs_post_info">
                      <div className="cs_post_meta cs_style_1">
                        <span className="cs_posted_by">{post.date}</span>
                        <a
                          href="#"
                          aria-label="Post category link"
                          className="cs_post_avatar"
                        >
                          {post.category}
                        </a>
                      </div>
                      <h2 className="cs_post_title">
                        <Link to={post.link} aria-label="Post details link">
                          {post.title}
                        </Link>
                      </h2>
                      <div className="cs_post_subtitle">{post.excerpt}</div>
                      <Link
                        to={post.link}
                        aria-label="Post details link"
                        className="cs_btn cs_style_2 cs_bold cs_heading_color"
                      >
                        See More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_height_60 cs_height_lg_40"></div>
              <ul className="cs_pagination_box cs_center cs_mp_0">
                <li>
                  <a className="cs_pagination_item cs_center active" href="#" aria-label="Pagination">1</a>
                </li>
                <li>
                  <a className="cs_pagination_item cs_center" href="#" aria-label="Pagination">2</a>
                </li>
                <li>
                  <a className="cs_pagination_item cs_center" href="#" aria-label="Pagination">3</a>
                </li>
                <li>
                  <a className="cs_pagination_item cs_center" href="#" aria-label="Pagination">4</a>
                </li>
                <li>
                  <a href="#" aria-label="Pagination" className="cs_pagination_item cs_center">
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1.272L4.55116 6L0 10.728L1.22442 12L7 6L1.22442 0L0 1.272Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
              </ul>
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
