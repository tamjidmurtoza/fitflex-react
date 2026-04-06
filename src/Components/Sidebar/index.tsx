import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const categories: string[] = [
  "Fitness & Workouts",
  "Nutrition & Diet",
  "Mental Health & Wellness",
  "Weight Loss & Body Transformation",
  "Lifestyle & Motivation",
];

interface RecentPost {
  title: string;
  date: string;
  image: string;
  link: string;
}

const recentPosts: RecentPost[] = [
  {
    title: "Benefits of Daily Exercise for Mental Health",
    date: "25 Aug 2025",
    image: "/assets/img/Post_1.jpg",
    link: "/blog/benefits-of-daily-exercise",
  },
  {
    title: "Home Workout Routine for Beginners (No Equipment)",
    date: "20 Aug 2025",
    image: "/assets/img/Post_2.jpg",
    link: "/blog/home-workout-routine",
  },
  {
    title: "Nutrition for Fitness: What to Eat for Better Performance",
    date: "15 Aug 2025",
    image: "/assets/img/Post_3.jpg",
    link: "/blog/nutrition-for-fitness",
  },
];

const archives: string[] = [
  "Archives",
  "15 Aug 2026",
  "20 Sep 2025",
  "11 Dec 2024",
  "25 jun 2023",
];

const tags: string[] = [
  "Fitness Tips",
  "Home Workouts",
  "Healthy Eating",
  "Weight Loss",
  "Mental Wellness",
  "Beginner Fitness",
  "Daily Exercise",
];

export default function Sidebar() {
  return (
    <aside className="cs_sidebar cs_right_sidebar">
      {/* Search Widget */}
      <div className="cs_sidebar_item widget_search">
        <form className="cs_sidebar_search position-relative" action="#">
          <input type="text" name="search" placeholder="Search..." />
          <button className="cs_sidebar_search_btn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories Widget */}
      <div className="cs_sidebar_item widget_categories">
        <h3 className="cs_sidebar_widget_title cs_fs_20 cs_mb_30">
          Categories
        </h3>
        <ul className="cs_mp_0">
          {categories.map((cat, index) => (
            <li className="cat-item" key={index}>
              <a href="#" aria-label="Category link">
                <Icon
                  icon="fa-solid:link"
                  style={{ position: "absolute", left: 0, top: "5px" }}
                />
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="cs_sidebar_item">
        <h3 className="cs_sidebar_widget_title cs_fs_20 cs_mb_30">
          Recent Posts
        </h3>
        <ul className="cs_recent_posts cs_mp_0">
          {recentPosts.map((post, index) => (
            <li key={index}>
              <div className="cs_recent_post">
                <Link
                  to={post.link}
                  aria-label="Post details link"
                  className="cs_recent_post_thumb"
                >
                  <div className="cs_recent_post_thumb_in cs_bg_filed w-100 h-100">
                    <img src={post.image} alt="Title" />
                  </div>
                </Link>
                <div className="cs_recent_post_info">
                  <h4 className="cs_recent_post_title cs_fs_18 cs_mb_8">
                    <Link to={post.link} aria-label="Post details link">
                      {post.title}
                    </Link>
                  </h4>
                  <div className="cs_recent_post_date cs_primary_40_color">
                    {post.date}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Archives Widget */}
      <div className="cs_sidebar_item widget_archive">
        <h3 className="cs_sidebar_widget_title cs_fs_20 cs_mb_30">Archives</h3>
        <ul className="cs_mp_0">
          {archives.map((archive, index) => (
            <li key={index}>
              <a href="#" aria-label="Archived link">
                <Icon
                  icon="fa-solid:link"
                  style={{ position: "absolute", left: 0, top: "5px" }}
                />
                {archive}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags Widget */}
      <div className="cs_sidebar_item widget_tag_cloud">
        <h4 className="cs_sidebar_widget_title cs_fs_20 cs_mb_30">Tags</h4>
        <div className="tagcloud">
          {tags.map((tag, index) => (
            <a
              href="#"
              aria-label="Post tag"
              className="tag-cloud-link"
              key={index}
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
