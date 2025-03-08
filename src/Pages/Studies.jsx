import React from "react";
import style from "./studies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faPercent, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Certificates from "./Certificates";

const Studies = () => {
  const studiesData = [
    {
      id: 1,
      title: "Graduation",
      institution: "Technocrats Institute of Technology - CSE (2024)",
      course: "B.Tech (CSE - AIML)",
      percentage: "87.30 (In CGPA 8.73)",
      marksheet:"./Assets/final semester marksheet.png"
    },
    {
      id: 2,
      title: "Higher Secondary",
      institution: "Gyan Bharti Convent Higher Secondary School (2020)",
      course: "PCM",
      percentage: "72.80",
      marksheet:"./Assets/02.jpg"

    },
    {
      id: 3,
      title: "High School",
      institution: " Gyan Bharti Convent Higher Secondary School (2018)",
      course: "General",
      percentage: "89.80",
      marksheet:"./Assets/01 (2).jpg"

    },
  ];

  return (
    <div className={style.container}>
      <h2>Studies</h2>
      <br />
      {studiesData.map((study) => (
        <article key={study.id} className={style.graduation}>
          <h3>{study.title}</h3>
          <br />
          <section>
            <h5>
              <FontAwesomeIcon icon={faUserGraduate} size="2x" /> : {"  "}
              <b> {study.institution}</b>
            </h5>
            <p>
              <FontAwesomeIcon icon={faGraduationCap} size="1x" /> : {study.course}
            </p>
            <p>
              <FontAwesomeIcon icon={faPercent} size="1x" /> : <strong>{study.percentage}</strong>
            </p>
            <button className={style.marksheet}>
              <a href={study.marksheet}>Marksheet</a>
            </button>
          </section>
        </article>
      ))}
    </div>
  );
};

export default Studies;
