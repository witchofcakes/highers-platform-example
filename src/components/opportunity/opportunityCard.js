import React from 'react';
import {Clock, MapPin, Calendar} from "react-feather"
import Salary from "../../images/Salary"

export default function OpportunityCard(props) {
    return (

        <div className="row center-row">
            <div className="col-12 margin-bottom-15 justify-content-center">
                <a href="/opportunity/1">
                <div className="card-opportunity">
                    <div className="opportunity-image-div">
                        <img src={props.image} className="opportunity-image" alt="opportunity-image"/>
                    </div>
                    <div className="oppurtunity-description-div">
                        <div className="title-text-card-div">
                            <p className="opportunity-title-text">{props.title}</p>
                            <p className="card-company-text margin-bottom-15-2">{props.company}</p>
                        </div>
                        <div className="chips-div display-center">
                            <div className="chip-background chip-experience">
                                Безкоштовно
                            </div>
                            {/*<div className="chip-background">*/}
                            {/*    Дедлайн 28 вересня*/}
                            {/*</div>*/}
                        </div>
                        <div className="bottom-line-text">
                            <hr/>
                            <div className="card-vacancy-main-info">
                                <div className="row">
                                    {/*<div className="col-6 display-center">*/}
                                    {/*    <Calendar size={20} color={"var(--orange)"} className={"icon-vacancy-info"}/>*/}
                                    {/*    <p className="short-info-vacancy-text">*/}
                                    {/*        14.10 - 15.10*/}
                                    {/*    </p>*/}
                                    {/*</div>*/}
                                    <div className="col-12 display-center">
                                        <MapPin size={20} color={"var(--orange)"} className={"icon-vacancy-info"}/>
                                        <p className="short-info-vacancy-text">
                                            Онлайн
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </div>
        </div>

    )
}