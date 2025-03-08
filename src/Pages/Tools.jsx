import React from 'react';
import style from './Tools.module.css';


const Tools = () => {

  return (
    <section className={style.container}>
      <h2 className={style.title}>Tools</h2>
      <div>
        
          <img src="./src/Assets/python.svg" alt=""  className={style.Icon}/>
          <img src="./src/Assets/react.svg" alt="" className={style.Icon} />
          <img src="./src/Assets/sql.svg" alt="" className={style.Icon} />
          <img src="./src/Assets/django.svg" alt=""  className={style.Icon}/>
          <img src="./src/Assets/html.svg" alt=""  className={style.Icon}/>
          <img src="./src/Assets/css-alt.svg" alt=""  className={style.Icon}/>
          <img src="./src/Assets/javascript.svg" alt="" className={style.Icon}/>
          <img src="./src/Assets/canva.svg" alt="" className={style.Icon}/>
          <img src="./src/Assets/figma.svg" alt="" className={style.Icon}/>
          <img src="./src/Assets/git.svg" alt="" className={style.Icon}/>
          <img src="./src/Assets/chart.js_logo.svg" alt="" className={style.Icon}/>
          <img src="./src/Assets/word.png" alt="" className={style.Icon}/>
       
      </div>
        
    </section>
  );
};

export default Tools;
