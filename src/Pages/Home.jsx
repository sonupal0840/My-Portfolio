import React from 'react';
import style from "./home.module.css"
import myImg from "../Assets/myImg.jpg"

const Home = () => {
    return (
        <div>
            <div className={style.container}>
                <img src={myImg} alt="" />
                <div className={style.profile}>
                    <p> ||Python Developer||</p>
                    <p>||Frontend Developer||</p>
                    <p>||Backend Developer||</p>
                    <button className={style.CV}><a href="./src/Assets/SonuPal.pdf">Downlod CV</a></button>
                    <i>Sonu pal</i>
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;