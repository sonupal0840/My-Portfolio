import React from "react";
import style from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Experience = () => {
  return (
    <div className={style.container}>
      <h3>Experience</h3>

      {/* ✅ Laptop/Desktop Mode: Normal Article Layout */}
      <article>
        <div className={style.project}>
          <h2>Sherlock's Life</h2><hr />
          <div>
            <p>Position:Python Developer/Backend Developer</p>
            <p>Duration:start from 5 May-Present</p>
            <p>Skill-sets: Python, Html,css,Django,DRF, WhatsApp Meta Api</p>
          </div>
          

        </div>

        <div className={style.project}>
          <h2>D.Dolphin Pvt.Ltd</h2><hr />
          <div>
            <p>Position: Senior intern (Python Developer)</p>
            <p>Duration:5 Month (March 2025- july 2025)</p>
            <p>Skill-sets: Python, Html,css, React, Django,DRF</p>
          </div>
          

        </div>

        <div className={style.project}>
          <h2>Q-spider</h2><hr />
          <div>
            <p>Position: Python Full Stack Developer</p>
            <p>Duration:10 Month (june 2024- March 2025)</p>
            <p>Skill-sets: Python, Html,css, React, Django, SQL, Javascript</p>
          </div>
          
        </div>
      </article>

      {/* ✅ Mobile Mode: Swiper Slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiperContainer}
      >
        <SwiperSlide>
          <div className={style.project}>
            <h2>D.Dolphin Pvt.Ltd</h2><hr />
            <div>
                <p>Position: Senior intern (Python Developer)</p>
                <p>Duration:5 Month (March 2025- july 2025)</p>
                <p>Skill-sets: Python, Html,css, React, Django,DRF</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>D.Dolphin Pvt.Ltd</h2><hr />
            <div>
                <p>Position: Senior intern (Python Developer)</p>
                <p>Duration:5 Month (March 2025- july 2025)</p>
                <p>Skill-sets: Python, Html,css, React, Django,DRF</p>
            </div>
            

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>Q-spider</h2><hr />
            <div>
                <p>Position: Python Full Stack Developer</p>
                <p>Duration:10 Month (june 2024- March 2025)</p>
                <p>Skill-sets: Python, Html,css, React, Django, SQL, Javascript</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Experience;
