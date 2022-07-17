import React from 'react';
import BlueLinkButton from "../helpers/blueLinkButton";
import { Link, Element } from 'react-scroll'

export default function CompaniesBlock() {
    return (
        <div className="container-fluid border-gray">
            <div className="row">
                <div className="col-12">
                    <div className="text-align-center padding-top-50">
                        <p className="main-landing-block-text">
                            Кар'єрні можливості від найкращих компаній
                        </p>
                        <p className="secondary-landing-block-text">
                            які забезпечують кар’єрне зростання, комфортні умови роботи та дружній колектив
                        </p>
                    </div>
                </div>
            </div>
            <div className="row center-row">
                <div className="col-12 col-lg-10 text-align-center">
                    <div className="row companies-logo center-row">
                        <div className="logo-company">
                            <div className="deloitte-full"/>
                        </div>
                        <div className="logo-company">
                            <div className="cola-full"/>
                        </div>
                        <div className="logo-company">
                            <div className="danone-full"/>
                        </div>
                        <div className="logo-company">
                            <div className="procredit-full"/>
                        </div>
                    </div>
                </div>
            </div>

            <BlueLinkButton
                text={"Перейти до можливостей"}
                right={true}
            />

        </div>
    )
}