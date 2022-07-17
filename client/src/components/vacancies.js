import React from 'react';
import Switch from "./switch";
import VacancyCard from "./vacancyCard";
import deloitte from "../images/deloitte.png"
import procredit from "../images/procredit.png"
import fozzy from "../images/img.png"
import {Sliders} from "react-feather"
import Filters from "./landing/filters";

export default function Vacancies() {

    const vacancies = [
        {id: 1, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", image: deloitte},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", image: procredit},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", image: fozzy}
    ];

    return (
        <div className="container-fluid container-vacancies">
            <Filters/>
            <div className="vacancies-column-width">
                    <Switch/>
                    {vacancies.map(function(vacancy, i){
                        return (
                            <VacancyCard
                                key={i}
                                title={vacancy.title}
                                description={vacancy.description}
                                company={vacancy.company}
                                image={vacancy.image}
                            />
                        )
                    })}
                </div>
                {/*<div className="col-3"/>*/}

        </div>
    )
}