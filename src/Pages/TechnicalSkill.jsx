import React from 'react'
import style from"./Technical.module.css"

const TechnicalSkill = () => {
  return (
    <div className={style.container}>
        <h2 className={style.title}>Technical Skills</h2>
        <section>
            <div className={style.programming}>
                <h3 className={style.stack}> <b>Programming</b></h3>
                <main>
                    <img src="./assets/python.svg" alt=""  className={style.Icon}/><br />
                    <font>Python</font>
                </main>
                <main>
                    <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                    <font>JavaScript</font>
                </main>
                
            </div>
            <div>
                <div className={style.framework}>
                    <h3 > <b>Framework</b></h3>
                    <main>
                        <img src="./assets/django.svg" alt="" className={style.Icon}/>
                        <font>Django</font>
                    </main>
                </div>
                <div className={style.framework}>
                    <h3> <b>DataBase</b></h3>
                    <main>
                        <img src="./assets/sql.svg" alt="" className={style.Icon}/>
                        <font>SQL</font>
                    </main>
                </div>
            </div>
            <div className={style.web}>
                <h3 className={style.stack}> <b>Web Technology</b></h3>
                <section className={style.frontendSection}>
                    <div>
                        <main>
                            <img src="./assets/html.svg" alt="" className={style.Icon}/>
                            <font>HTML</font>
                        </main>
                        <main>
                            <img src="./assets/css-alt.svg" alt="" className={style.Icon}/>
                            <font>CSS</font>
                        </main>
                    </div>
                    <div>
                        <main>
                            <img src="./assets/javascript.svg" alt="" className={style.Icon}/>
                            <font>JavaScript</font>
                        </main>
                        <main>
                            <img src="./assets/react.svg" alt="" className={style.Icon}/>
                            <font>React</font>
                        </main>
                    </div>
                </section>
            </div>

        </section> 
    </div>

  )
}

export default TechnicalSkill
