import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Port.module.css";

const Portfolio = () => {
    return (
        <div className={style.Navbar}>
            <aside>Portfolio</aside>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/studies">Studies</Link></li>
                <li><Link to="/skill">Skills</Link></li>
                <li><Link to="/tools">Projects</Link></li>
                <li><Link to="/certificate">Certificates</Link></li>
            </ul>
        </div>
    );
};

export default Portfolio;
