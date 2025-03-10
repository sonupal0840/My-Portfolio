import React from 'react';
import style from "./home.module.css"

const Home = () => {
    return (
        <div>
            <div className={style.container}>
                <img src={`${import.meta.env.BASE_URL}/assets/myImg.jpg`} alt="Profile" />
                <div className={style.profile}>
                    <i>Sonu pal</i>
                    <p> ||Python Developer||</p>
                    <p>||Frontend Developer||</p>
                    <p>||Backend Developer||</p>
                    <button className={style.CV}><a href="./assets/SonuPal.pdf">Downlod CV</a></button>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;