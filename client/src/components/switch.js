import React from 'react';
import {Layers, TrendingUp} from "react-feather"

export default function Switch() {
    return (
        <div className="gray-switch-background display-center">
            <div className="padding-switch">
                <button className="active-switch text-switch">
                    <Layers size={20} color={"var(--orange)"} className={"layers-icon"}/>
                    Junior-вакансії та стажування
                </button>
            </div>
            <div className="not-active-switch">
                <button className="not-active-switch text-switch">
                    <TrendingUp size={20} color={"var(--black)"} className={"trending-icon"}/>
                    Освітні можливості
                </button>
            </div>
        </div>
    )
}