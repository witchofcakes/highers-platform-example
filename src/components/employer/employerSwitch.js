import React, {useState} from 'react';
import {PlusCircle, List, Info} from "react-feather"
import { Link } from 'react-router-dom';

export default function EmployerSwitch() {

    const [state, setState] = useState("create")

    return (
        <div className="gray-switch-background display-center">
            <a href="/create-vacancy">
                <div className="switch-second" onClick={() => setState("create")}>
                    <button
                        id="button-opp"
                        className={
                            state==="create" ? "active-switch" : "text-switch"
                        }
                    >
                        <PlusCircle
                            size={20}
                            color={
                                state==="create" ? "var(--orange)" : "var(--black)"
                            }
                            className={"trending-icon"}
                        />
                        Створити вакансію
                    </button>
                </div>
            </a>
            <a href="/employer-applies">
                <div className="switch-second" onClick={() => setState("vacanciesApplies")}>
                    <button
                        id="button-opp"
                        className={
                            state==="vacanciesApplies" ? "active-switch" : "text-switch"
                        }
                    >
                        <List
                            size={20}
                            color={
                                state==="vacanciesApplies" ? "var(--orange)" : "var(--black)"
                            }
                            className={"trending-icon"}
                        />
                        Вакансії і відгуки
                    </button>
                </div>
            </a>
            <a href="/employer-profile">
                <div className="padding-switch" onClick={() => setState("profile")}>
                    <button
                        id="button-profile"
                        className={
                            state==="profile" ? "active-switch" : "text-switch"
                        }
                    >
                        <Info
                            size={20}
                            color={
                                state==="profile" ? "var(--orange)" : "var(--black)"
                            }
                            className={"layers-icon"}
                        />
                        Профіль компанії
                    </button>
                </div>
            </a>
        </div>
    )
}