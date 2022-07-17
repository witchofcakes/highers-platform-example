import React, {useState} from 'react';
import {ChevronLeft, Download} from "react-feather"
import EmployerSwitch from "./employerSwitch"
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"
import AppliesTable from "./employerTableApplies"
import EmployerVacancyCard from "./employerVacancyCard"
import { useTable, useRowSelect } from 'react-table'

export default function EmployerApplies() {

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

    return(
        <div className="container padding-top-bottom-cabinet">
            <div className="row center-row">
                <div className="employer-switch-container">
                    <EmployerSwitch/>
                </div>
            </div>

            <div className="row center-row">
                <div className="col-12 col-md-10 col-lg-8 applies-col-display">
                    <div className="button-blue-div-employer-applies">
                        <button className="blue-link-button-applies">
                            <ChevronLeft size={20} color={"var(--blue"} className={"chevron-employer-applies"}/>
                            Назад до вакансій
                        </button>
                    </div>

                    <div className="employer-vacancies-applies-text">
                        <p className="title-of-page-applies">
                            Відгуки на вакансію
                        </p>
                        <p className="title-of-page-applies-vacancy">
                            Менеджер з комунікацій
                        </p>
                    </div>
                </div>
            </div>

            <div className="row center-row">
                <div className="applies-col-display">
                    <AppliesTable/>
                    {/*<Table columns={columns} data={data} />*/}
                </div>
            </div>

        </div>

    )
}