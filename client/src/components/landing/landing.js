import React from 'react';
import StartCareerEasyBlock from "./startCareerEasyBlock";
import CompaniesBlock from "./companiesBlock";
import OpportunitiesBlock from "./opportunitiesBlock";
import FinishBlock from "./finishBlock";
// import leftArrow from ""

export default function Landing() {
    return(

        <div>
            <StartCareerEasyBlock/>
            <CompaniesBlock/>
            <OpportunitiesBlock/>
            <FinishBlock/>
        </div>

    )
}