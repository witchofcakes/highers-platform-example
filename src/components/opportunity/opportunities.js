import React from 'react';
import Switch from "../vacancy/switch";
import OpportunityCard from "./opportunityCard";
import opportunity1 from '../../images/startonline-min.png'
import opportunity2 from '../../images/BA_JAVA 1200x1200_3_ukr.png'
import fozzy from "../../images/img.png"
import {Sliders} from "react-feather"
import Filters from "../vacancy/filters";

export default function Opportunities() {

    const opportunities = [
        {id: 1, title: "Marketing&Finance Game", company: "Hashtag", image: opportunity1},
        {id: 2, title: 'EY Cyber Consulting Bootcamp', company: "Deloitte", image: opportunity2},
    ];

    return (
        <section className="container-vacancies">
            <Filters opportunitites={true}/>
            <div className="vacancies-column-width">
                <Switch/>
                {opportunities.map(function(vacancy, i){
                    return (
                        <OpportunityCard
                            key={i}
                            title={vacancy.title}
                            description={vacancy.description}
                            company={vacancy.company}
                            image={vacancy.image}
                        />
                    )
                })}
            </div>
            <div className="vacancies-empty-column"></div>
        </section>
    )
}