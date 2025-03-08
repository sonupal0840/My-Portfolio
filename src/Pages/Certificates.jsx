import React from 'react'
import style from "./certificates.module.css"

const Certificates = () => {
  return (
    <section className={style.container}>
        <h2 className={style.title}>Certificates</h2>
        <div>
            <img src="./src/Assets/Python basic.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/python Codechef.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/sql1.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/Sql2.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/Html.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/C++.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/Robonatus.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/Ain.png" alt="" className={style.Certificates}/>
            <img src="./src/Assets/Manager.png" alt="" className={style.Certificates}/>
        </div>
        <button className={style.button}>
        <a href="./src/Assets/Certificates.pdf" target="_blank">Download PDF</a>

        </button>
    </section>
   
  )
}

export default Certificates
