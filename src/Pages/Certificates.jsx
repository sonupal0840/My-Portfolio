import React, { useEffect, useState, useRef } from "react";
import style from "./certificates.module.css";

const certificatesData = [
  { src: "./assets/sherlockscertificate.png", alt: "On Job Training" },
  { src: "./assets/Python basic.png", alt: "Python Basic" },
  { src: "./assets/python Codechef.png", alt: "Python CodeChef" },
  { src: "./assets/sql1.png", alt: "SQL Level 1" },
  { src: "./assets/Sql2.png", alt: "SQL Level 2" },
  { src: "./assets/Html.png", alt: "HTML" },
  { src: "./assets/C++.png", alt: "C++" },
  { src: "./assets/Robonatus.png", alt: "Robonatus" },
  { src: "./assets/Ain.png", alt: "AIN" },
  { src: "./assets/Manager.png", alt: "Manager" },
];

const Certificates = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      const spaceAvailable = screenHeight - rect.top;
      const imagesToShow = Math.floor(spaceAvailable / 300) * 3;
      setVisibleCount(Math.max(imagesToShow, 0)); // ✅ Prevent negative count
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={style.container} ref={sectionRef}>
      <h2 className={style.title}>Certificates</h2>
      <div className={style.grid}>
        {certificatesData.map((certificate, index) => (
          <img
            loading="lazy"
            key={index}
            src={certificate.src}
            alt={
              certificate.alt.toLowerCase().includes("certificate")
                ? certificate.alt
                : `${certificate.alt} certificate`
            }
            className={`${style.Certificates} ${
              index < visibleCount ? style.show : style.hide
            }`}
            style={{ transitionDelay: `${(index % 3) * 200}ms` }}
          />
        ))}
      </div>
      <a
        href="./assets/Certificates.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={style.button}
      >
        Download PDF
      </a>
    </section>
  );
};

export default Certificates;
