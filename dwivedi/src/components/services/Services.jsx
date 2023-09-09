import React, { useState } from 'react'
import "./services.css";
const Services = () => {
    const [toggleState, setToggleState]=useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="services section" id="services">
    <h2 className="section__title">Services</h2>
    <span className="section__subtitle">what i offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Product <br></br> Designer</h3>
            </div>
            <span className="services__button" onClick={() => toggleTab(1)}>View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 1 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i  onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Product Designer</h3>
                    <p className="services__modal-description">I create feasible products.</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Simple and modern products.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Graphical representation.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Simple and easy to use products.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Modern representation.
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Some knowledge of product development .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title"> UI/UX<br></br>Designer</h3>
            </div>
            <span onClick={() => toggleTab(2)} className="services__button">View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 2 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">UI/UX Designer</h3>
                    <p className="services__modal-description">I can provide good service to my clients.</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the user interface.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Web page development.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I can create interactive and attractive webpages.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create attractive logos.
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Some knowledge of UI/UX .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Graphical <br></br> Designer</h3>
            </div>
            <span onClick={() => toggleTab(3)} className="services__button">View more <i className="uil uil-arrow-right
            services__button-icon"></i>
            
            </span>

            <div className={toggleState === 3 ?"services__modal active-modal":"services__modal"}>
                <div className="services__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Graphical Designer</h3>
                    <p className="services__modal-description">I can provide good service to my clients.</p>


                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Social Media Graphics.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Web page design.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I can create interactive and attractive webpages.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I create attractive logos.
                    
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                            Illustration .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Services