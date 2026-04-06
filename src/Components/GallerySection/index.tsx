import { useEffect, useRef } from "react";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";

interface GalleryImage {
  thumb: string;
  full: string;
}

const galleryData: GalleryImage[] = [
  { thumb: "/assets/img/Gallery_1_Service_Details.jpg", full: "/assets/img/Gallery_1_lg_Service_Details.jpg" },
  { thumb: "/assets/img/Gallery_2_Service_Details.jpg", full: "/assets/img/Gallery_2_lg_Service_Details.jpg" },
  { thumb: "/assets/img/Gallery_3_Service_Details.jpg", full: "/assets/img/Gallery_3_lg_Service_Details.jpg" },
  { thumb: "/assets/img/Gallery_4_Service_Details.jpg", full: "/assets/img/Gallery_4_lg_Service_Details.jpg" },
  { thumb: "/assets/img/Gallery_5_Service_Details.jpg", full: "/assets/img/Gallery_5_lg_Service_Details.jpg" },
  { thumb: "/assets/img/Gallery_6_Service_Details.jpg", full: "/assets/img/Gallery_6_lg_Service_Details.jpg" },
];

export default function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lg = lightGallery(galleryRef.current, {
        selector: ".cs_gallery_item",
        subHtmlSelectorRelative: false,
        thumbnail: false,
        mousewheel: true,
      });
      return () => {
        lg.destroy();
      };
    }
  }, []);

  return (
    <div className="cs_gallery">
      <div className="cs_height_140 cs_height_lg_80"></div>
      <div className="container position-relative">
        <div
          className="cs_gallery_style_1 cs_lightgallery"
          ref={galleryRef}
        >
          {galleryData.map((image, index) => (
            <a
              href={image.full}
              aria-label="Gallery link"
              className="cs_gallery_item"
              key={index}
            >
              <img src={image.thumb} alt="Gallery image" />
            </a>
          ))}
        </div>
        <div className="cs_radial_gradiant_2"></div>
      </div>
      <div className="cs_height_140 cs_height_lg_80"></div>
    </div>
  );
}
