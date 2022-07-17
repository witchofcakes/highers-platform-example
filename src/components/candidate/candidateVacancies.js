import React, {useState} from 'react';
import EmployerSwitch from "../employer/employerSwitch"
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"
import EmployerVacancyCard from "../employer/employerVacancyCard";
import CandidateSwitch from "./candidateSwitch"
import VacancyCard from "../vacancy/vacancyCard";

export default function CandidateVacancies() {

    const vacancies = [
        {id: 1, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: deloitte},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: procredit},
    ];

    return(
        <div className="container padding-top-bottom-cabinet">
            <div className="row center-row">
                <div className="employer-switch-container">
                    <CandidateSwitch/>
                </div>
            </div>
            {vacancies.map(function(vacancy, i){
                return (
                    <VacancyCard
                        key={i}
                        title={vacancy.title}
                        description={vacancy.description}
                        company={vacancy.company}
                        logo={vacancy.logo}
                    />
                )
            })}
            <div className="row center-row">
                <div className="candidate-more-vacancies-container">
                    <button className="black-button candidate-more-vacancies">
                        Дивитись більше вакансій
                    </button>
                </div>
            </div>
        </div>

    )
}