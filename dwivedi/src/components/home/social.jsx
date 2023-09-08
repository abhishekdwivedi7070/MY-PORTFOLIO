import React from 'react'
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/mr.abhi___shek/?next=%2F" className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i>
        </a>


        <a href="https://www.linkedin.com/in/abhishek-dwivedi-0b8ab4214" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin"></i>
        </a>


        <a href="https://github.com/" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social;