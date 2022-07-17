import React, {useState} from 'react';
import {Layers, TrendingUp, Zap} from "react-feather"
import { Link } from 'react-router-dom';
import vacancies from "../../images/list.svg"
import vacanciesOrange from "../../images/listOrange.svg"
import profile from "../../images/zap.svg"
import profileOrange from "../../images/zapOrange.svg"

export default function CandidateSwitch() {

    const [state, setState] = useState("vacancies")

    return (
        <div className="gray-switch-background display-center">
            <a href="/candidate-profile">
                <div className="padding-switch" onClick={() => setState("profile")}>
                    <button
                        id="button-vacancies"
                        className={
                            state==="profile" ? "active-switch" : "text-switch"
                        }
                    >

                        {
                            state==="profile" ? <img src={profileOrange} className={"profile-candidate-icon"}/>
                                : <img src={profile} className={"profile-candidate-icon"}/>
                        }Профіль для миттєвої подачі
                    </button>
                </div>
            </a>
            <a href="/candidate-vacancies">
                <div className="switch-second" onClick={() => setState("vacancies")}>
                    <button
                        id="button-opp"
                        className={
                            state==="vacancies" ? "active-switch" : "text-switch"
                        }
                    >
                        {
                            state==="vacancies" ? <img src={vacanciesOrange} className={"vacancies-candidate-icon"}/>
                                : <img src={vacancies} className={"vacancies-candidate-icon"}/>
                        }
                        Мої вакансії
                    </button>
                </div>
            </a>
        </div>
    )
}