import React from "react";
import style from "./Project.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  return (
    <div className={style.container}>
      <h3>Projects</h3>

      {/* ✅ Laptop/Desktop Mode: Normal Article Layout */}
      <article>
        <div className={style.project}>
          <h2>My-Portfolio</h2>
          <hr />
          <img src="./assets/Project1.png" alt="Project 1" />
          <div><a href="https://sonupal0840.github.io/My-Portfolio/">View</a></div>

        </div>

        <div className={style.project}>
          <h2>Tech.care</h2>
          <hr />
          <img src="./assets/Project2.png" alt="Project 2" />
          <div><a href="https://sonupal0840.github.io/Tech.care/">View</a></div>

        </div>

        <div className={style.project}>
          <h2>Reverse Complemented String</h2>
          <hr />
          <img src="./assets/Project3.png" alt="Project 3" />
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
            <h2>My-Portfolio</h2>
            <hr />
            <img src="./assets/Project1.png" alt="Project 1" /><hr />
            <div><a href="https://sonupal0840.github.io/My-Portfolio/">View</a></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>Tech.care</h2>
            <hr />
            <img src="./assets/Project2.png" alt="Project 2" />
            <div><a href="https://sonupal0840.github.io/Tech.care/">View</a></div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={style.project}>
            <h2>Reverse Complemented String</h2>
            <hr />
            <img src="./assets/Project3.png" alt="Project 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
