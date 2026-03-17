import Aos from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ClassesPage from "./Pages/ClassesPage";
import ClassDetailsPage from "./Pages/ClassDetailsPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import ContactPage from "./Pages/ContactPage";
import TimetablePage from "./Pages/TimetablePage";
import TestimonialPage from "./Pages/TestimonialPage";
import Error404 from "./Pages/Error404";

function App() {
  Aos.init({
    duration: 1200,
    delay: 0.2,
    disable: "mobile",
    once: true,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Animation on hover effect - tracks mouse position for radial gradient border
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    const initHoverCards = () => {
      const cards = document.querySelectorAll(".animationonhover");
      cards.forEach((card) => {
        card.style.setProperty("--x", "-1px");
        card.style.setProperty("--y", "-1px");
        card.addEventListener("mousemove", handleMouseMove);
      });
    };

    const timer = setTimeout(initHoverCards, 500);

    return () => {
      clearTimeout(timer);
      const cards = document.querySelectorAll(".animationonhover");
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, [pathname]);

  // Hobble effect - 3D tilt on hover for cards
  useEffect(() => {
    const handleHobbleMove = (e) => {
      const el = e.currentTarget;
      const halfW = el.clientWidth / 2;
      const halfH = el.clientHeight / 2;
      const coorX = halfW - (e.pageX - el.getBoundingClientRect().left - window.scrollX);
      const coorY = halfH - (e.pageY - el.getBoundingClientRect().top - window.scrollY);

      const degX1 = (coorY / halfH) * 8 + "deg";
      const degY1 = (coorX / halfW) * -8 + "deg";
      const degX3 = (coorY / halfH) * -10 + "px";
      const degY3 = (coorX / halfW) * 10 + "px";

      const layer1 = el.querySelector(".cs_hover_layer1");
      const layer3 = el.querySelector(".cs_hover_layer3");

      if (layer1) {
        layer1.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(${degX1}) rotateY(${degY1})`;
      }
      if (layer3) {
        layer3.style.transform = `perspective(800px) translateX(${degX3}) translateY(${degY3}) scale(1.02)`;
      }
    };

    const handleHobbleOut = (e) => {
      const el = e.currentTarget;
      const layer1 = el.querySelector(".cs_hover_layer1");
      const layer3 = el.querySelector(".cs_hover_layer3");
      if (layer1) layer1.style.transform = "";
      if (layer3) layer3.style.transform = "";
    };

    const initHobble = () => {
      const hobbles = document.querySelectorAll(".cs_hobble");
      hobbles.forEach((el) => {
        el.addEventListener("mousemove", handleHobbleMove);
        el.addEventListener("mouseleave", handleHobbleOut);
      });
    };

    const timer = setTimeout(initHobble, 500);

    return () => {
      clearTimeout(timer);
      const hobbles = document.querySelectorAll(".cs_hobble");
      hobbles.forEach((el) => {
        el.removeEventListener("mousemove", handleHobbleMove);
        el.removeEventListener("mouseleave", handleHobbleOut);
      });
    };
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:classId" element={<ClassDetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
