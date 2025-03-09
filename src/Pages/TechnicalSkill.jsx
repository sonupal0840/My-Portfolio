import React from 'react'
import style from"./Technical.module.css"

const TechnicalSkill = () => {
  return (
    <div className={style.container}>
        <h2 className={style.title}>Technical Skills</h2>
        <section>
            <div className={style.programming}>
                <h3> <b>Programming</b></h3>
                <main>
                    <img src="./assets/python.svg" alt=""  className={style.Icon}/><br />
                    <font>Python</font>
                </main>
                <main>
                    <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                    <font>JavaScript</font>
                </main>
                
            </div>
            <div className={style.programming}>
                <h3> <b>Web Technology</b></h3>
                <main>
                    <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                    <font>JavaScript</font>
                </main>
            </div>
            <div className={style.programming}>
                <h3> <b>DataBase</b></h3>
            </div>
            <div className={style.programming}>
                <h3> <b>frameWork</b></h3>
            </div>
        </section> 
    </div>

  )
}

export default TechnicalSkill
