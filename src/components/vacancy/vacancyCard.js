import React from 'react';
import {Clock, MapPin} from "react-feather"
import Salary from "../../images/Salary"
import { useMediaQuery } from 'react-responsive'

export default function VacancyCard(props) {

    const is600px = useMediaQuery({
        query: '(max-width: 600px)'
    })

    return (
            <div className="card-vacancy-main-container">
                <div className="card-vacancy-container margin-bottom-15 justify-content-center">
                    <a href="/vacancy/1" className="card-vacancy-body">
                        <div className="header-card">
                            <div className="logo-vacancy-div">
                                <img src={props.logo} className="logo-vacancy-img"/>
                            </div>
                            <div className="title-text-card-div">
                                <p className="card-title-text">{props.title}</p>
                                <p className="card-company-text">{props.company}</p>
                            </div>
                        </div>
                        <div className="card-body-text">
                            <p className="card-body-text-p">
                                {props.description}
                            </p>
                        </div>
                        <div className="chips-div display-center">
                            <div className="chip-background chip-experience">
                                Без досвіду
                            </div>
                            <div className="chip-background">
                                Стажування
                            </div>
                            <div className="chip-background">
                                4+ курс
                            </div>
                            {/*<div className="chip-background">*/}
                            {/*    Англійська рівня В1*/}
                            {/*</div>*/}
                        </div>
                        <hr/>
                        <div className="card-vacancy-main-info">
                            <div className="row">
                                <div className="col-4 display-center">

                                    <Clock size={
                                        is600px ? "18px" : "20px"
                                    } color={"var(--orange)"} className={"icon-vacancy-info"}/>

                                    <p className="short-info-vacancy-text">
                                        full-time
                                    </p>
                                </div>
                                <div className="col-4 display-center">
                                    {
                                        is600px ?
                                            <Salary width={"23px"} height={"23px"}/>
                                            :
                                            <Salary width={"25px"} height={"25px"}/>
                                    }

                                    <p className="short-info-vacancy-text">
                                        15 000
                                    </p>
                                </div>
                                <div className="col-4 display-center">
                                    <MapPin size={
                                        is600px ? "18px" : "20px"
                                    } color={"var(--orange)"} className={"icon-vacancy-info"}/>
                                    <p className="short-info-vacancy-text">
                                        Віддалено
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

    )
}