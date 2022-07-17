import React, {useState} from 'react';
import {ChevronRight, Users, Edit, EyeOff, Eye} from "react-feather"

export default function EmployerVacancyCard(props){

    const [isVacancyActive, setVacancyActive] = useState(true);

    return(
        <div className="row center-row">
            <div className="col-12 margin-bottom-15 justify-content-center">
                <div className="card-vacancy-body-employer">
                    {
                        !isVacancyActive && <div className="card-vacancy-overflow"></div>
                    }
                    <div className="card-vacancy-body-content">
                        <a href="/vacancy/1">
                            <div className="header-card">
                                <div className="logo-vacancy-div">
                                    <img src={props.logo} className="logo-vacancy-img"/>
                                </div>
                                <div className="title-text-card-div">
                                    <p className="card-title-text">{props.title}</p>
                                    <p className="card-company-text">{props.company}</p>
                                </div>
                            </div>
                            <div className="employer-vacancy-card-body">
                                <div className="row">
                                    <div className="col-4">
                                        <ul className="employer-vacancy-ul">
                                            <li className="employer-vacancy-li">Графік: {props.schedule}</li>
                                            <li className="employer-vacancy-li">Місто: {props.city}</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul className="employer-vacancy-ul">
                                            <li className="employer-vacancy-li">Зарплатня: {props.salary}</li>
                                            <li className="employer-vacancy-li">Досвід: {props.experience}</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <ul className="employer-vacancy-ul">
                                            <li className="employer-vacancy-li">Курс: {props.course}</li>
                                            <li className="employer-vacancy-li">{props.language}: {props.languageLevel}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </a>
                        <div className="card-vacancy-main-info">
                            <div className="row">
                                <div className="col-4 no-padding-right">
                                    <a href="/employer-vacancy-apply/1">
                                        <button className="employer-button-applies">
                                            <Users size={20} color={"var(--orange)"} className={"icon-vacancy-info"}/>
                                            Відгуки
                                        </button>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a href="/edit-vacancy-employer/1">
                                        <button className="employer-button-applies">
                                            <Edit size={20} color={"var(--orange)"} className={"icon-vacancy-info"}/>
                                            Редагувати
                                        </button>
                                    </a>
                                </div>
                                <div className="col-4 no-padding-left activate-button-employer-vacancy">
                                    {
                                        isVacancyActive ?
                                            <button className="employer-button-applies" onClick={() => setVacancyActive(false)}>
                                                <EyeOff size={20} color={"var(--red)"} className={"icon-vacancy-info"}/>
                                                Деактивувати
                                            </button>
                                            :
                                            <button className="employer-button-applies activate-button-shadow" onClick={() => setVacancyActive(true)}>
                                                <Eye size={20} color={"var(--green)"} className={"icon-vacancy-info"}/>
                                                Активувати
                                            </button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}