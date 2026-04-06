import Aos from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";
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
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      delay: 0.2,
      disable: "mobile",
      once: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Animation on hover effect - uses event delegation via ref instead of querySelectorAll
  const handleHoverMove = useCallback((e: MouseEvent) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>(
      ".animationonhover"
    );
    if (card) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    }
  }, []);

  // Hobble effect - 3D tilt on hover using event delegation via ref
  const handleHobbleMove = useCallback((e: MouseEvent) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(".cs_hobble");
    if (!el) return;

    const halfW = el.clientWidth / 2;
    const halfH = el.clientHeight / 2;
    const coorX =
      halfW - (e.pageX - el.getBoundingClientRect().left - window.scrollX);
    const coorY =
      halfH - (e.pageY - el.getBoundingClientRect().top - window.scrollY);

    const degX1 = (coorY / halfH) * 8 + "deg";
    const degY1 = (coorX / halfW) * -8 + "deg";
    const degX3 = (coorY / halfH) * -10 + "px";
    const degY3 = (coorX / halfW) * 10 + "px";

    const layer1 = el.querySelector<HTMLElement>(".cs_hover_layer1");
    const layer3 = el.querySelector<HTMLElement>(".cs_hover_layer3");

    if (layer1) {
      layer1.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(${degX1}) rotateY(${degY1})`;
    }
    if (layer3) {
      layer3.style.transform = `perspective(800px) translateX(${degX3}) translateY(${degY3}) scale(1.02)`;
    }
  }, []);

  const handleHobbleOut = useCallback((e: MouseEvent) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(".cs_hobble");
    if (!el) return;
    const related = e.relatedTarget as HTMLElement | null;
    if (related && el.contains(related)) return;

    const layer1 = el.querySelector<HTMLElement>(".cs_hover_layer1");
    const layer3 = el.querySelector<HTMLElement>(".cs_hover_layer3");
    if (layer1) layer1.style.transform = "";
    if (layer3) layer3.style.transform = "";
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleHoverMove);
    container.addEventListener("mousemove", handleHobbleMove);
    container.addEventListener("mouseout", handleHobbleOut);

    return () => {
      container.removeEventListener("mousemove", handleHoverMove);
      container.removeEventListener("mousemove", handleHobbleMove);
      container.removeEventListener("mouseout", handleHobbleOut);
    };
  }, [handleHoverMove, handleHobbleMove, handleHobbleOut]);

  return (
    <div ref={containerRef}>
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
    </div>
  );
}

export default App;
