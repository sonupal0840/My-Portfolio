import React, { useEffect, useState, useRef } from "react";
import style from "./Tools.module.css";

const icons = [
  "python.svg",
  "react.svg",
  "sql.svg",
  "django.svg",
  "html.svg",
  "css-alt.svg",
  "javascript.svg",
  "canva.svg",
  "figma.svg",
  "git.svg",
  "Chart.js_logo.svg",
  "word.png",
];

const Tools = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;

      // Calculate available space
      const spaceAvailable = screenHeight - rect.top;
      const rowsToShow = Math.floor(spaceAvailable / 120); // Each row is ~120px
      const imagesToShow = rowsToShow * 3; // 3 images per row

      if (scrollingDown) {
        setVisibleCount((prev) => Math.min(icons.length, Math.max(prev, imagesToShow)));
      } else {
        setVisibleCount((prev) => Math.max(0, imagesToShow));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={style.container} ref={sectionRef}>
      <h2 className={style.title}>Tools</h2>
      <div className={style.grid}>
        {icons.map((icon, index) => {
          const row = Math.floor(index / 3);
          const col = index % 3;
          return (
            <img
              key={index}
              src={`./assets/${icon}`}
              alt=""
              className={`${style.Icon} ${index < visibleCount ? style.show : style.hide}`}
              style={{ transitionDelay: `${(row * 3 + col) * 200}ms` }} // Left-top to right-bottom
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
