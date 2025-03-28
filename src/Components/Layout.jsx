import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Layout.module.css"; // ✅ Module CSS Import
import { Link } from "react-router-dom";

import Portfolio from "./Portfolio";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Certificates from "../Pages/Certificates";
import Plateform from "../Pages/Plateform";
import Studies from "../Pages/Studies";
import TechnicalSkill from "../Pages/TechnicalSkill";
import Tools from "../Pages/Tools";
import Footer from "./Footer";
import Projects from "../Pages/Projects";

gsap.registerPlugin(ScrollTrigger);



const Layout = () => {
  const sectionsRef = useRef([]);
  const navigate= useNavigate();
  const location = useLocation(); // ✅ URL Change Detect करने के लिए

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.1,  // ✅ पहले 1 था, अब 0.5 किया (Speed Boost 🚀)
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
      setTimeout(()=>{
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },100);
  }
  }, [location]);

  return (
    <>
      <nav className={styles.footernav}>
        <ul >
          <li><Link to="/about">🏡</Link></li>
          <li><Link to="/studies">📔</Link></li>
          <li><Link to="/Project">🖥️</Link></li>
          <li><Link to="/certificate">🏆</Link></li>
          <li><Link to="/Plateform">💬</Link></li>
          {/* <li onClick={() => navigate("/about")}>🏡</li>
          <li onClick={() => navigate("/studies")}>📔</li>
          <li onClick={() => navigate("/Projects")}>🖥️</li>
          <li onClick={() => navigate("/certificate")}>🏆</li>
          <li onClick={() => navigate("/Platform")}>💬</li> */}
        </ul>
      </nav>
      <div className={styles.container1}>
        <section ref={(el) => (sectionsRef.current[0] = el)} className={styles.section1} id="navbar">
          <Portfolio />
        </section>
        <section ref={(el) => (sectionsRef.current[1] = el)} className={styles.section1} >
          <Home />
        </section>
        <section ref={(el) => (sectionsRef.current[2] = el)} className={styles.section1} id="about">
          <About />
        </section>
        <section ref={(el) => (sectionsRef.current[3] = el)} className={styles.section1} id="studies">
          <Studies />
        </section>
        <section ref={(el) => (sectionsRef.current[4] = el)} className={styles.section1} id="skill">
          <TechnicalSkill />
        </section>
        <section ref={(el) => (sectionsRef.current[5] = el)} className={styles.section1} id="Project">
          <Projects />
        </section>
        <section ref={(el) => (sectionsRef.current[6] = el)} className={styles.section1} id="Plateform">
          <Plateform />
        </section>
        <section ref={(el) => (sectionsRef.current[7] = el)} className={styles.section1} id="certificate">
          <Certificates />
        </section>
        <section ref={(el) => (sectionsRef.current[8] = el)} className={styles.section1} id="tools">
          <Tools />
        </section>
        <section ref={(el) => (sectionsRef.current[9] = el)}>
          <Footer />
        </section>
      </div>
    </>

  );
};

export default Layout;
