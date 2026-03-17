import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";
import PageHeading from "../../Components/PageHeading";
import CTASection from "../../Components/CTASection";

const DumbbellIcon = () => (
  <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 10.0994V6.899H1.57194L1.5717 10.0994H0ZM3.22523 13.701C2.98898 13.701 2.76688 13.6038 2.59983 13.4272C2.43278 13.2506 2.34082 13.0159 2.34083 12.7663L2.34101 10.5091C2.34101 10.508 2.34116 10.507 2.34116 10.5059C2.34116 10.5048 2.34101 10.5037 2.34101 10.5027L2.34148 4.23291C2.34155 3.7177 2.7383 3.29849 3.22588 3.29849H4.71346L4.71273 13.701L3.22523 13.701ZM7.83527 16.7263C7.66822 16.9028 7.44618 17 7.20999 17H7.20986L6.36617 16.9998C5.87859 16.9998 5.48192 16.5805 5.48192 16.0653L5.48284 2.89484C5.48285 2.89387 5.48297 2.89296 5.48297 2.89199C5.48297 2.89102 5.48284 2.8901 5.48284 2.88913L5.48297 0.934589C5.48297 0.684935 5.57499 0.450232 5.74206 0.273734C5.90911 0.0972364 6.13115 2.82985e-05 6.36737 2.82985e-05H6.36749L7.21096 0.000185464H7.21098C7.69859 0.000228262 8.09526 0.419532 8.09523 0.934803L8.09492 6.4907C8.09492 6.49145 8.0948 6.49222 8.0948 6.49302C8.0948 6.49382 8.09491 6.49458 8.09492 6.49537L8.09438 16.0655C8.09436 16.3151 8.00234 16.5498 7.83527 16.7263ZM8.86406 10.1L8.86424 6.8996L18.1359 6.9006L18.1361 10.101L8.86406 10.1ZM20.6339 16.9999L19.7903 16.9999C19.3027 17 18.9059 16.5807 18.9059 16.0654L18.9048 0.934717C18.9048 0.419404 19.3015 0.000156761 19.7892 9.96978e-05L20.6328 0C20.869 0 21.0911 0.0971507 21.2581 0.273663C21.4252 0.450218 21.5172 0.684864 21.5172 0.934575L21.5181 14.1074C21.5181 14.1075 21.5181 14.1075 21.5181 14.1076C21.5181 14.1077 21.5181 14.1078 21.5181 14.1079L21.5182 16.0652C21.5182 16.5806 21.1215 16.9998 20.6339 16.9999ZM23.7749 13.7009L22.2874 13.7011L22.2867 3.29857L23.7742 3.29844C24.0105 3.29844 24.2326 3.39559 24.3996 3.5721C24.5667 3.7486 24.6587 3.9833 24.6587 4.23296L24.6588 6.49402C24.6588 6.49425 24.6588 6.49446 24.6588 6.49469C24.6588 6.49492 24.6588 6.49515 24.6588 6.49536L24.6593 12.7663C24.6593 13.2816 24.2626 13.7009 23.7749 13.7009ZM27 10.1016H25.4284L25.4282 6.9012H27V10.1016Z" fill="currentColor" />
  </svg>
);

const ScheduleCell = ({ data }) => {
  if (!data) return null;
  return (
    <div className="cs_schedule_wrapper">
      <span className="cs_schedule_icon cs_center cs_accent_color cs_mb_24">
        <DumbbellIcon />
      </span>
      <h2 className="cs_schedule_title cs_secondary_font cs_fs_16 cs_accent_color cs_semibold">
        {data.name}
      </h2>
      <p className="cs_schedule_time cs_heading_color">{data.timeRange}</p>
      <p className="cs_trainer_title">{data.trainer}</p>
    </div>
  );
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// ALL EVENTS schedule data
const allEventsData = [
  {
    time: "6:00 AM",
    classes: {
      Monday: { name: "FITFUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Alexandra Rodriguez" },
      Friday: { name: "FITFUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Alexandra Rodriguez" },
      Sunday: { name: "FITFUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Alexandra Rodriguez" },
    },
  },
  {
    time: "8:00 AM",
    classes: {
      Tuesday: { name: "YOGA HARMONY", timeRange: "8:00 AM - 9:00 AM", trainer: "David Chen" },
      Wednesday: { name: "DANCE CARDIO GROOVE", timeRange: "8:00 AM - 9:00 AM", trainer: "Sophie Nguyen" },
      Saturday: { name: "YOGA HARMONY", timeRange: "8:00 AM - 9:00 AM", trainer: "David Chen" },
    },
  },
  {
    time: "9:00 AM",
    classes: {
      Tuesday: { name: "FUNCTIONAL FITNESS", timeRange: "9:00 AM - 10:00 AM", trainer: "Dr. Maya Patel" },
      Thursday: { name: "MINDFUL PILATES", timeRange: "9:00 AM - 10:00 AM", trainer: "Sophie Nguyen" },
    },
  },
  {
    time: "10:00 AM",
    classes: {
      Wednesday: { name: "STRENGTH SCLUPT", timeRange: "10:00 AM - 11:00 AM", trainer: "Mark Johnson" },
      Friday: { name: "YOGA HARMONY", timeRange: "10:00 AM - 11:00 AM", trainer: "David Chen" },
      Saturday: { name: "STRENGTH SCLUPT", timeRange: "10:00 AM - 11:00 AM", trainer: "Mark Johnson" },
      Sunday: { name: "DANCE CARDIO GROOVE", timeRange: "10:00 AM - 11:00 AM", trainer: "Sophie Nguyen" },
    },
  },
  {
    time: "12:00 PM",
    classes: {
      Monday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
      Tuesday: { name: "CYCLE FUSION", timeRange: "12:00 PM - 1:00 PM", trainer: "Mark Johnson" },
      Thursday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
      Friday: { name: "CYCLE FUSION", timeRange: "12:00 PM - 1:00 PM", trainer: "Mark Johnson" },
      Sunday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
    },
  },
  {
    time: "1:00 PM",
    classes: {
      Thursday: { name: "FITFUSION", timeRange: "1:00 PM - 2:00 PM", trainer: "Mark Johnson" },
      Sunday: { name: "CYCLE FUSION", timeRange: "1:00 PM - 2:00 PM", trainer: "Mark Johnson" },
    },
  },
  {
    time: "6:00 PM",
    classes: {
      Sunday: { name: "ZEN STRETCH", timeRange: "6:00 PM - 7:00 PM", trainer: "Alexandra Rodriguez" },
    },
  },
  {
    time: "7:00 PM",
    classes: {
      Monday: { name: "YOGA HARMONY", timeRange: "7:00 PM - 8:00 PM", trainer: "David Chen" },
      Tuesday: { name: "STRENGTH SCLUPT", timeRange: "7:00 PM - 8:00 PM", trainer: "Mark Johnson" },
      Sunday: { name: "STRENGTH SCLUPT", timeRange: "7:00 PM - 8:00 PM", trainer: "Mark Johnson" },
    },
  },
];

// FITFUSION tab
const fitfusionData = [
  {
    time: "6:00 AM",
    classes: {
      Monday: { name: "FITFUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Alexandra Rodriguez" },
    },
  },
  {
    time: "1:00 PM",
    classes: {
      Thursday: { name: "FITFUSION", timeRange: "1:00 PM - 2:00 PM", trainer: "Alexandra Rodriguez" },
    },
  },
  {
    time: "6:00 PM",
    classes: {
      Monday: { name: "FITFUSION", timeRange: "6:00 PM - 7:00 PM", trainer: "Alexandra Rodriguez" },
      Wednesday: { name: "FITFUSION", timeRange: "6:00 PM - 7:00 PM", trainer: "Alexandra Rodriguez" },
      Friday: { name: "FITFUSION", timeRange: "6:00 PM - 7:00 PM", trainer: "Alexandra Rodriguez" },
    },
  },
  {
    time: "7:00 PM",
    classes: {
      Monday: { name: "FITFUSION", timeRange: "7:00 PM - 8:00 PM", trainer: "Alexandra Rodriguez" },
      Sunday: { name: "FITFUSION", timeRange: "7:00 PM - 8:00 PM", trainer: "Alexandra Rodriguez" },
    },
  },
];

// CYCLE FUSION tab
const cycleFusionData = [
  {
    time: "6:00 AM",
    classes: {
      Wednesday: { name: "CYCLE FUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Mark Johnson" },
      Saturday: { name: "CYCLE FUSION", timeRange: "6:00 AM - 7:00 AM", trainer: "Mark Johnson" },
    },
  },
  {
    time: "8:00 AM",
    classes: {
      Friday: { name: "CYCLE FUSION", timeRange: "8:00 AM - 9:00 AM", trainer: "Mark Johnson" },
    },
  },
  {
    time: "9:00 AM",
    classes: {
      Thursday: { name: "CYCLE FUSION", timeRange: "9:00 AM - 10:00 AM", trainer: "Mark Johnson" },
    },
  },
];

// CARDIO KICK tab
const cardioKickData = [
  {
    time: "6:00 AM",
    classes: {
      Tuesday: { name: "CARDIO KICK", timeRange: "6:00 AM - 7:00 AM", trainer: "Emily Turner" },
      Thursday: { name: "CARDIO KICK", timeRange: "6:00 AM - 7:00 AM", trainer: "Emily Turner" },
    },
  },
  {
    time: "12:00 PM",
    classes: {
      Monday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
      Wednesday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
      Friday: { name: "CARDIO KICK", timeRange: "12:00 PM - 1:00 PM", trainer: "Emily Turner" },
    },
  },
];

// FUNCTIONAL FITNESS tab
const functionalFitnessData = [
  {
    time: "9:00 AM",
    classes: {
      Tuesday: { name: "FUNCTIONAL FITNESS", timeRange: "9:00 AM - 10:00 AM", trainer: "Dr. Maya Patel" },
      Thursday: { name: "FUNCTIONAL FITNESS", timeRange: "9:00 AM - 10:00 AM", trainer: "Dr. Maya Patel" },
    },
  },
  {
    time: "6:00 PM",
    classes: {
      Wednesday: { name: "FUNCTIONAL FITNESS", timeRange: "6:00 PM - 7:00 PM", trainer: "Dr. Maya Patel" },
    },
  },
  {
    time: "7:00 PM",
    classes: {
      Monday: { name: "FUNCTIONAL FITNESS", timeRange: "7:00 PM - 8:00 PM", trainer: "Dr. Maya Patel" },
      Saturday: { name: "FUNCTIONAL FITNESS", timeRange: "7:00 PM - 8:00 PM", trainer: "Dr. Maya Patel" },
      Sunday: { name: "FUNCTIONAL FITNESS", timeRange: "7:00 PM - 8:00 PM", trainer: "Dr. Maya Patel" },
    },
  },
];

// NUTRITION tab (same structure, different schedule)
const nutritionData = [
  {
    time: "8:00 AM",
    classes: {
      Wednesday: { name: "NUTRITION", timeRange: "8:00 AM - 9:00 AM", trainer: "Sophie Nguyen" },
      Saturday: { name: "NUTRITION", timeRange: "8:00 AM - 9:00 AM", trainer: "Sophie Nguyen" },
    },
  },
  {
    time: "10:00 AM",
    classes: {
      Tuesday: { name: "NUTRITION", timeRange: "10:00 AM - 11:00 AM", trainer: "Sophie Nguyen" },
      Thursday: { name: "NUTRITION", timeRange: "10:00 AM - 11:00 AM", trainer: "Sophie Nguyen" },
    },
  },
];

const tabs = [
  { id: "allevents", label: "ALL EVENTS", data: allEventsData },
  { id: "fitfusion", label: "FITFUSION", data: fitfusionData },
  { id: "cyclefusion", label: "CYCLE FUSION", data: cycleFusionData },
  { id: "cardiokick", label: "CARDIO KICK", data: cardioKickData },
  { id: "functionalfitness", label: "FUNCTIONAL FITNESS", data: functionalFitnessData },
  { id: "allevents1", label: "NUTRITION", data: nutritionData },
];

const ScheduleTable = ({ scheduleData }) => (
  <div className="cs_timeline_wrapper">
    {scheduleData.map((slot, index) => (
      <div className="cs_content_row" key={index}>
        <div className="cs_content_col">
          <div className="cs_time cs_heading_color">{slot.time}</div>
        </div>
        {days.map((day) => (
          <div className="cs_content_col" key={day}>
            <ScheduleCell data={slot.classes[day]} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function TimetablePage() {
  pageTitle("Timetable");
  const [activeTab, setActiveTab] = useState("allevents");
  const tabListRef = useRef(null);

  const scrollTabs = (direction) => {
    if (tabListRef.current) {
      const scrollAmount = 200;
      tabListRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const activeTabData = tabs.find((t) => t.id === activeTab)?.data || allEventsData;

  return (
    <>
      <PageHeading
        data={{
          bgImage: "/assets/img/Hero_Timetable.jpg",
          title: 'YOUR DAILY <span>FITNESS JOURNEY </span>STARTS HERE',
          currentPage: "Timetable",
        }}
      />

      <section className="cs_schedule_section">
        <div className="cs_height_140 cs_height_lg_80"></div>
        <div className="container position-relative">
          <div className="cs_radial_gradiant"></div>
          <div className="cs_radial_gradiant_3"></div>
          <div className="cs_radial_gradiant_4"></div>
          <div className="cs_tabs cs_schedule_style_1">
            <div className="cs_slider cs_style_1 cs_slider_gap_36" data-aos="fade-down">
              <div className="cs_slider_container">
                <ul className="cs_slider_wrapper cs_tab_links" ref={tabListRef}>
                  {tabs.map((tab) => (
                    <li className={`cs_slide${activeTab === tab.id ? " active" : ""}`} key={tab.id}>
                      <a
                        href={`#${tab.id}`}
                        aria-label="Tab link"
                        className="cs_btn_style_1 cs_heading_font"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="cs_slider_arrows cs_style_1">
                  <div
                    className="cs_left_arrow cs_center"
                    onClick={() => scrollTabs("left")}
                  >
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0L9.4 1.575L3.8 7.875H20V10.125H3.8L9.4 16.425L8 18L0 9L8 0Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div
                    className="cs_right_arrow cs_center"
                    onClick={() => scrollTabs("right")}
                  >
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L10.6 1.575L16.2 7.875H0V10.125H16.2L10.6 16.425L12 18L20 9L12 0Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_70 cs_height_lg_50"></div>
            <div className="cs_timeline_wrapper_1">
              <div className="cs_days_row">
                <div className="cs_day_col cs_heading_font cs_semibold cs_heading_color">TIME</div>
                {days.map((day) => (
                  <div className="cs_day_col cs_heading_font cs_semibold cs_heading_color" key={day}>
                    {day.toUpperCase()}
                  </div>
                ))}
              </div>
              <div className="cs_tab_body">
                {tabs.map((tab) => (
                  <div
                    className={`cs_tab${activeTab === tab.id ? " active" : ""}`}
                    id={tab.id}
                    key={tab.id}
                  >
                    <ScheduleTable scheduleData={tab.data} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_140 cs_height_lg_80"></div>
      </section>

      <CTASection
        data={{
          bgImage: "/assets/img/CTA_Timetable.jpg",
          title: '<span>EXPLORE </span>OUR DIVERSE CLASS SCHEDULE',
          subtitle: "Join FitFlex today and enjoy a variety of classes throughout the day!",
          btnText: "VIEW FULL SCHEDULE",
          btnUrl: "/contact",
          style: "cs_cta_style_5",
          topSpacingClass: "cs_height_107 cs_height_lg_80",
          bottomSpacingClass: "cs_height_119 cs_height_lg_80",
        }}
      />
    </>
  );
}
