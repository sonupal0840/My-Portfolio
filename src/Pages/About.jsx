import React from "react";
import style from "./About.module.css"

const About = () => {
    return (
        <div className={style.container}>
            <h2>About Me</h2><br /><br />

            <p>
                I am Sonu Pal, a Software Developer skilled in Python,Django, SQL, postgreSQL, JavaScript, React.js, and HTML & CSS. I recently completed an internship at <i><b>D.Dolphin Pvt. Ltd</b></i> and on-job training at <b><i>Sherlocks Life</i></b> as a Python/Backend Developer.

                I hold a B.Tech in Computer Science (AIML) from Technocrats Institute of Technology, Bhopal (CGPA: 8.73), with hands-on experience in building AI-powered Virtual Assistants and React-based web applications. I’m certified in Python (Pro) and SQL (Intermediate) by HackerRank and passionate about backend development, DBMS, OOP, and problem-solving.

                Beyond coding, I enjoy sewing, cooking, and running. Always eager to learn, grow, and collaborate on innovative projects!
            </p>

        </div>
    )
}
export default About;