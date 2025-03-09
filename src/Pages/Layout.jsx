import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Layout.module.css"; // ✅ Module CSS Import

gsap.registerPlugin(ScrollTrigger);

import Home from "./Home";
import About from "./About";
import Studies from "./Studies";
import Portfolio from "./Portfolio";
import Certificates from "./Certificates";
import Tools from "./Tools";
import TechnicalSkill from "./TechnicalSkill";
import Footer from "./Footer";

const Layout = () => {
  const sectionsRef = useRef([]);
  const location = useLocation(); // ✅ URL Change Detect करने के लिए

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,  // ✅ पहले 1 था, अब 0.5 किया (Speed Boost 🚀)
          ease: "power2.out",
          delay: index * 0.1, // ✅ Stagger Effect (हर section 0.1s बाद animate होगा)
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // ✅ URL Change होने पर Section को Scroll करें
  useEffect(() => {
    const sectionId = location.pathname.replace("/", "");
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className={styles.container1}>
      <section ref={(el) => (sectionsRef.current[0] = el)} className={styles.section1}>
        <Portfolio />
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)} className={styles.section1}>
        <Home />
      </section>
      <section ref={(el) => (sectionsRef.current[2] = el)} className={styles.section1}>
        <About />
      </section>
      <section ref={(el) => (sectionsRef.current[3] = el)} className={styles.section1}>
        <Studies />
      </section>
      <section ref={(el) => (sectionsRef.current[4] = el)} className={styles.section1}>
        <TechnicalSkill />
      </section>
      <section ref={(el) => (sectionsRef.current[5] = el)} className={styles.section1}>
        <Certificates />
      </section>
      <section ref={(el) => (sectionsRef.current[6] = el)} className={styles.section1}>
        <Tools />
      </section>
      <section ref={(el) => (sectionsRef.current[7] = el)}>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
