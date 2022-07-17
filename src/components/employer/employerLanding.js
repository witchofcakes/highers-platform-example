import React from 'react';
import {ChevronRight} from "react-feather"

export default function EmployerLanding() {
    return(
        <div className="container container-main-employer-landing">
            <div className="row">
                <div className="col-12 text-align-center">
                    <div className="landing-employer-main-text">
                        <p className="main-landing-text">Знаходьте молоді таланти легко</p>
                    </div>
                    <div className="landing-employer-main-button">
                        <a href="/create-vacancy">
                            <button className="employer-landing-button">
                                Розмістити вакансію<ChevronRight size={22} color={"white"} className={"chevron-employer"}/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}