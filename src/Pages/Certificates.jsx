import React from 'react'
import style from "./certificates.module.css"

const Certificates = () => {
  return (
    <section className={style.container}>
        <h2 className={style.title}>Certificates</h2>
        <div>
            <img src="./assets/Python basic.png" alt="" className={style.Certificates}/>
            <img src="./assets/python Codechef.png" alt="" className={style.Certificates}/>
            <img src="./assets/sql1.png" alt="" className={style.Certificates}/>
            <img src="./assets/Sql2.png" alt="" className={style.Certificates}/>
            <img src="./assets/Html.png" alt="" className={style.Certificates}/>
            <img src="./assets/C++.png" alt="" className={style.Certificates}/>
            <img src="./assets/Robonatus.png" alt="" className={style.Certificates}/>
            <img src="./assets/Ain.png" alt="" className={style.Certificates}/>
            <img src="./assets/Manager.png" alt="" className={style.Certificates}/>
        </div>
        <button className={style.button}>
        <a href="./assets/Certificates.pdf" target="_blank">Download PDF</a>

        </button>
    </section>
   
  )
}

export default Certificates
