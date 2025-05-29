import style from "./Experience.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCalendarAlt, faTools,faLocationDot,faGears} from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";


const Experience = () => {
  const experienceData = [
    {
      id: 1,
      Company: "Sherlock's Life",
      position:"On job trainee",
      role: "Python Developer/Backend Developer",
      duration: "Start from 5 May - Present",
      skills: "Python, Html, CSS, Django, DRF, WhatsApp Meta API",
      location: "Remote"
    },
    {
      id: 2,
      Company: "D.Dolphin Pvt.Ltd",
      position:"Senior intern",
      role: "Python Developer",
      duration: "5 Month (March 2025 - July 2025)",
      skills: "Python, Html, CSS, React, Django, DRF",
      location: "Remote"
    },
    {
      id: 3,
      Company: "Q-spider",
      position:"Trainee",
      role: "Python Full Stack Developer",
      duration: "10 Month (June 2024 - March 2025)",
      skills: "Python, Html, CSS, React, Django, SQL, JavaScript",
      location: "On site (Noida)"
    },
  ];

  return (
    <div className={style.container}>
      <h3>Experience</h3>
      <br />
      {experienceData.map((exp) => (
        <article key={exp.id} className={style.experience}>
          <h2>{exp.Company}</h2>
          
          <section>
            <p>
              <FontAwesomeIcon icon={faBriefcase} size="1x" /> : {exp.position}
            </p>
            <p>
              <FontAwesomeIcon icon={faGear} size="1x" /> : {exp.role}
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} size="1x" /> : {exp.location}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} size="1x" /> : {exp.duration}
            </p>
            <p>
              <FontAwesomeIcon icon={faTools} size="1x" /> : {exp.skills}
            </p>
          </section>
          
        </article>
      ))}
    </div>
  );
};

export default Experience;
