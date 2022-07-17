import React from 'react';
import BlueLinkButton from "../blueLinkButton";

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
            <div className="row">
                <div className="col-12 text-align-center">
                    <div className="companies-logo"></div>
                </div>
            </div>

            <BlueLinkButton
                text={"Перейти до можливостей"}
                right={true}
            />

        </div>
    )
}