import React from 'react';
import style from './Tools.module.css';


const Tools = () => {

  return (
    <section className={style.container}>
      <h2 className={style.title}>Tools</h2>
      <div>
        
          <img src="./Assets/python.svg" alt=""  className={style.Icon}/>
          <img src="./Assets/react.svg" alt="" className={style.Icon} />
          <img src="./Assets/sql.svg" alt="" className={style.Icon} />
          <img src="./Assets/django.svg" alt=""  className={style.Icon}/>
          <img src="./Assets/html.svg" alt=""  className={style.Icon}/>
          <img src="./Assets/css-alt.svg" alt=""  className={style.Icon}/>
          <img src="./Assets/javascript.svg" alt="" className={style.Icon}/>
          <img src="./Assets/canva.svg" alt="" className={style.Icon}/>
          <img src="./Assets/figma.svg" alt="" className={style.Icon}/>
          <img src="./Assets/git.svg" alt="" className={style.Icon}/>
          <img src="./Assets/Chart.js_logo.svg" alt="" className={style.Icon}/>
          <img src="./Assets/word.png" alt="" className={style.Icon}/>
       
      </div>
        
    </section>
  );
};

export default Tools;
