import React from 'react';
import style from "./home.module.css"

const Home = () => {
    return (
        <div>
            <div className={style.container}>
                <img src={`${process.env.PUBLIC_URL}/assets/myImg.jpg`} alt="Profile" />
                <div className={style.profile}>
                    <p> ||Python Developer||</p>
                    <p>||Frontend Developer||</p>
                    <p>||Backend Developer||</p>
                    <button className={style.CV}><a href="./assets/SonuPal.pdf">Downlod CV</a></button>
                    <i>Sonu pal</i>
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;