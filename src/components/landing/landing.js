import React from 'react';
import StartCareerEasyBlock from "./startCareerEasyBlock";
import CompaniesBlock from "./companiesBlock";
import OpportunitiesBlock from "./opportunitiesBlock";
import FinishBlock from "./finishBlock";
import { Link, Element } from 'react-scroll'
// import leftArrow from ""

export default function Landing() {
    return(

        <div>
            <StartCareerEasyBlock/>
            <Element name="landing" className="element" >
                <CompaniesBlock/>
            </Element>
            <OpportunitiesBlock/>
            <FinishBlock/>
        </div>

    )
}