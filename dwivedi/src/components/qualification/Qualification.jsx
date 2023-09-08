

import React, { useState } from 'react'
import "./qualification.css"
const Qualification = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            } onClick={()=> toggleTab(1)}
            >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" :
            "qualification__button button--flex"
            }onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Project Development
                </div>
            </div>


            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">HIGHER SECONDARY</h3>
                            <span className="qualification__subtitle">USCD DAV PUBLIC SCHOOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">SENIOR SECONDARY</h3>
                            <span className="qualification__subtitle">DAV CENTENARY PUBLIC SCHOOL</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 
                            </div>
                        </div>

                     

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.TECH(CSE)</h3>
                            <span className="qualification__subtitle">RKGIT</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020-2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">FULLSTACK WEB DEVELOPMENT</h3>
                            <span className="qualification__subtitle">UDEMY</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                     

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">COMPETITIVE PROGRAMMING</h3>
                            <span className="qualification__subtitle">LEETCODE AND CODECHEF</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020-Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
            "qualification__content "
            }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Backend Developer</h3>
                            <span className="qualification__subtitle">Portfolio</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Signatory</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022
                            </div>
                        </div>

                     
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">UI/UX DESIGNER</h3>
                            <span className="qualification__subtitle"></span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    

                    


                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification