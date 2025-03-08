import React from 'react'
import style from "./certificates.module.css"

const Certificates = () => {
  return (
    <section className={style.container}>
        <h2 className={style.title}>Certificates</h2>
        <div>
            <img src="./Assets/Python basic.png" alt="" className={style.Certificates}/>
            <img src="./Assets/python Codechef.png" alt="" className={style.Certificates}/>
            <img src="./Assets/sql1.png" alt="" className={style.Certificates}/>
            <img src="./Assets/Sql2.png" alt="" className={style.Certificates}/>
            <img src="./Assets/Html.png" alt="" className={style.Certificates}/>
            <img src="./Assets/C++.png" alt="" className={style.Certificates}/>
            <img src="./Assets/Robonatus.png" alt="" className={style.Certificates}/>
            <img src="./Assets/Ain.png" alt="" className={style.Certificates}/>
            <img src="./Assets/Manager.png" alt="" className={style.Certificates}/>
        </div>
        <button className={style.button}>
        <a href="./Assets/Certificates.pdf" target="_blank">Download PDF</a>

        </button>
    </section>
   
  )
}

export default Certificates
