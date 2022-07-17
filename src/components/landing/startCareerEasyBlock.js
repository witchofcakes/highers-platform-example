import React from 'react';
import { Link, Element } from 'react-scroll'

export default function StartCareerEasyBlock() {
    return (
        <div className="container container-landing">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <div>
                        <p className="main-landing-text">
                            Почати кар'єру <span className="main-text-gradient">легко</span>
                        </p>
                    </div>
                    <div>
                        <p className="secondary-landing-text">
                            Junior-вакансії та освітні можливості від гідних компаній для покоління Z
                        </p>
                    </div>
                    <div className="buttons-main-landing">
                        <a href={"/all-vacancies"}>
                            <button className="black-round-button">
                                Перейти до можливостей
                            </button>
                        </a>
                        <Link activeClass="active" className="test8" to="landing" spy={true} smooth={true} duration={500}>
                            <button className="know-more-landing">
                                Дізнатись більше
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <p className="secondary-landing-text">
                        Junior-вакансії та освітні можливості
                    </p>
                </div>
            </div>
        </div>
    )
}