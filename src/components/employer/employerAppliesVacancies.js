import React, {useState} from 'react';
import EmployerSwitch from "./employerSwitch"
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"
import EmployerVacancyCard from "./employerVacancyCard"

export default function EmployerAppliesVacancies() {

    const [state, setState] = useState({
        employerName: null,
        employerLogo: null,
        employerDescription: null,
        position: null,
        category: null,
        salary: null,
        location: null,
        vacancyDescription: null,
    })

    const vacancies = [
        {
            id: 1,
            title: "Менеджер з комунікацій",
            description: " Задачі: встановлення партнерств, комунікація з клієнтами",
            company: "Deloitte",
            logo: deloitte,
            schedule: 'Гнучкий full-time',
            city: "Київ",
            salary: "10 000",
            experience: "Без досвіду",
            course: "3+",
            language: "Англійська",
            languageLevel: "B1",
        },
    ];

    return(
        <div className="container padding-top-bottom-cabinet">
            <div className="row center-row">
                <div className="employer-switch-container">
                    <EmployerSwitch/>
                </div>
            </div>
            {vacancies.map(function(vacancy, i){
                return (
                    <EmployerVacancyCard
                        key={i}
                        date={vacancy.date}
                        title={vacancy.title}
                        company={vacancy.company}
                        logo={vacancy.logo}
                        schedule={vacancy.schedule}
                        city={vacancy.city}
                        salary={vacancy.salary}
                        experience={vacancy.experience}
                        course={vacancy.course}
                        language={vacancy.language}
                        languageLevel={vacancy.languageLevel}
                    />
                )
            })}
        </div>

    )
}