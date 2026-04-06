import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface StatItem {
  target: number;
  suffix: string;
  title: string;
  subtitle: string;
}

const statsData: StatItem[] = [
  {
    target: 500,
    suffix: "+",
    title: "Happy Members",
    subtitle: "Our community is growing fast!",
  },
  {
    target: 30,
    suffix: "+",
    title: "Weekly Classes",
    subtitle: "Pick from various workouts",
  },
  {
    target: 10,
    suffix: "",
    title: "Certified Trainers",
    subtitle: "Guidance at every step.",
  },
  {
    target: 99,
    suffix: "%",
    title: "Customer Satisfaction",
    subtitle: "We ensure your progress satisfaction",
  },
];

export default function HeroSection() {
  return (
    <section
      className="cs_bg_filed cs_hero_style_1"
      style={{ backgroundImage: "url(/assets/img/Hero_BG.jpg)" }}
    >
      <div className="cs_height_150 cs_height_lg_80"></div>
      <div className="cs_height_25 cs_height_lg_25"></div>
      <div className="container">
        <div className="cs_section_heading_style_1">
          <h1
            className="cs_text_strock cs_fs_72 cs_bold cs_mb_28"
            data-aos="fade-down"
          >
            <span>ACHIEVE </span>MORE THAN JUST FITNESS
          </h1>
          <p className="cs_hero_heading_content cs_mb_42 cs_fs_18">
            Combine strength, flexibility, and endurance in a community that{" "}
            <br />
            values well-rounded health and supportive growth.
          </p>
          <div className="cs_hero_btns">
            <Link to="/contact" className="cs_btn_style_1 cs_heading_font">
              START NOW
            </Link>
            <Link to="/contact" className="cs_btn_style_1 cs_heading_font">
              JOIN FREE TRIAL
            </Link>
          </div>
        </div>
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="cs_hero_content">
          {statsData.map((stat, index) => (
            <div className="cs_hero_content_style_1" key={index}>
              <div className="cs_fs_42 cs_bold cs_heading_color cs_mb_5 cs_hero_content_heading">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <p className="cs_heading_color mb-0 cs_semibold">{stat.title}</p>
              <p className="mb-0">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
