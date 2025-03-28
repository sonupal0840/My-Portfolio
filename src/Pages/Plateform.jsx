import React from 'react'
import style from "./Plateform.module.css"

const Plateform = () => {
  return (
    <section className={style.container}>
        <h3>Plateforms</h3>
        <article>

            <div className={style.plateform}>
                <h2>Soical Media Plateform's</h2>
                <ul>
                    <li>
                        <a href="mailto:sonupal0840@gmail.com">
                            <img src="./assets/Gmail.svg" alt="" />
                            <b>Email</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/7000454350">
                            <img src="./assets/WhatsApp.svg" alt="" />
                            <b>WhatsApp</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sonu-pal-800543262/">
                            <img src="./assets/Linkdin.svg" alt="" />
                            <b>LinkedIn</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jagdev0840/">
                            <img src="./assets/Instagram.svg" alt="" />
                            <b>Instagram</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100057346005069">
                            <img src="./assets/Facebook.svg" alt="" />
                            <b>Facebook</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/Sonupal0840">
                            <img src="./assets/Telegram.svg" alt="" />
                            <b>Telegram</b>
                        </a>
                    </li>

                </ul>
                
            </div>

            <div className={style.plateform}>
                <h3>Coding Plateform's</h3>
                <ul>
                    <li>
                        <a href="https://www.codechef.com/users/sonupal0840">
                            <img src="./assets/codechef (2).svg" alt="" />
                            <b>CodeChef</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.hackerrank.com/profile/sonupal0840">
                            <img src="./assets/hackerrank.svg" alt="" />
                            <b>HackerRank</b>
                        </a>
                    </li>
                    <li>
                        <a href="https://leetcode.com/u/sonupal/">
                            <img src="./assets/Leetcode.png" alt="" />
                            <b>LeetCode</b>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./assets/VScode.png" alt="" />
                            <b>Visual Studio code</b>
                        </a>
                    </li>
                </ul>
                
            </div>

            <div className={style.plateform}>
                <h3>Cloud Plateform's</h3>
                <ul>
                    <li>
                        <a href="https://github.com/sonupal0840/">
                            <img src="./assets/Github.svg" alt="" />
                            <b>GitHub</b>
                        </a>
                    </li>
                </ul>
            </div>

        </article>
      

    </section>
  )
}

export default Plateform
