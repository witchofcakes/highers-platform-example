import React, {useState} from 'react';
import {Layers, TrendingUp} from "react-feather"
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import layersBlack from "../../images/layers_black.png"
import layersOrange from "../../images/layers_orange.png"

export default function Switch() {

    const [state, setState] = useState("vacancies")

    const isMobile = useMediaQuery({
        query: '(max-width: 490px)'
    })

    // function handleClick(value){
    //     return(
    //         setState(value)
    //     )
    // }

    // const [isToggled, setToggled] = useState(false);
    //
    // const toggleTrueFalse = () => setToggled(!isToggled);
    // function handleSwitchChange() {
    //     if (window.location.href === "/all-vacancies") {
    //         document.getElementById("button-vacancies").className += " active-switch";
    //         document.getElementById("button-opp").className += " not-active-switch";
    //     } else if (window.location.href === "/all-opportunities") {
    //         // let button = document.getElementById("button-opp");
    //         // button.setAttribute('class', "active-switch");
    //         // let button1 = document.getElementById("button-vacancies");
    //         // button1.setAttribute('class', "not-active-switch");
    //
    //         document.getElementById("button-opp").className += " active-switch";
    //         document.getElementById("button-vacancies").className += " not-active-switch";
    //     }
    // }

    // function toggleVacancies(){
    //     document.getElementById("button-vacancies").classList.remove('not-active-switch');
    //     document.getElementById("button-vacancies").classList.add('active-switch');
    //     document.getElementById("button-opp").classList.remove('active-switch');
    //     document.getElementById("button-opp").classList.add('not-active-switch');
    // }
    //
    // function toggleOpportunitites(){
    //     document.getElementById("button-opp").classList.remove('not-active-switch');
    //     document.getElementById("button-opp").classList.add('active-switch');
    //     document.getElementById("button-vacancies").classList.remove('active-switch');
    //     document.getElementById("button-vacancies").classList.add('not-active-switch');
    // }

    return (
        <div className="gray-switch-background display-center">
            <a href="/all-vacancies">
                <div className="padding-switch" onClick={() => setState("vacancies")}>
                    <button
                        id="button-vacancies"
                        className={
                            state==="vacancies" ? "active-switch" : "text-switch"
                        }
                    >
                        <div className="button-switch-div-container">
                            <div className="icon-button-switch-mobile">
                                {
                                    (state==="vacancies") ?
                                        <img src={layersOrange} className="layers-black-icon"/>
                                        :
                                        <img src={layersBlack} className="layers-black-icon"/>
                                }
                            </div>
                            {
                                isMobile ?
                                    <div className="button-switch-mobile-text">
                                        Вакансії
                                    </div>
                                    :
                                    <div className="button-switch-mobile-text">
                                        Вакансії та стажування
                                    </div>
                            }
                        </div>
                    </button>
                </div>
            </a>
            <a href="/all-opportunities">
                <div className="switch-second" onClick={() => setState("opportunities")}>
                    <button
                        id="button-opp"
                        className={
                            state==="opportunities" ? "active-switch" : "text-switch"
                        }
                    >

                        <div className="button-switch-div-container">
                            <div className="icon-button-switch-mobile">
                                <TrendingUp
                                    size={20}
                                    color={
                                        state==="opportunities" ? "var(--orange)" : "var(--black)"
                                    }
                                    className={"trending-icon"}
                                />
                            </div>
                            {
                                isMobile ?
                                    <div className="button-switch-mobile-text">
                                        Можливості
                                    </div>
                                    :
                                    <div className="button-switch-mobile-text">
                                        Освітні можливості
                                    </div>
                            }

                        </div>
                    </button>
                </div>
            </a>
        </div>
    )
}