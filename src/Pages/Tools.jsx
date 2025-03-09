import React from 'react';
import style from './Tools.module.css';


const Tools = () => {

  return (
    <section className={style.container}>
      <h2 className={style.title}>Tools</h2>
      <div>
        
          <img src="./assets/python.svg" alt=""  className={style.Icon}/>
          <img src="./assets/react.svg" alt="" className={style.Icon} />
          <img src="./assets/sql.svg" alt="" className={style.Icon} />
          <img src="./assets/django.svg" alt=""  className={style.Icon}/>
          <img src="./assets/html.svg" alt=""  className={style.Icon}/>
          <img src="./assets/css-alt.svg" alt=""  className={style.Icon}/>
          <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
          <img src="./assets/canva.svg" alt="" className={style.Icon}/>
          <img src="./assets/figma.svg" alt="" className={style.Icon}/>
          <img src="./assets/git.svg" alt="" className={style.Icon}/>
          <img src="./assets/Chart.js_logo.svg" alt="" className={style.Icon}/>
          <img src="./assets/word.png" alt="" className={style.Icon}/>
       
      </div>
        
    </section>
  );
};

export default Tools;
