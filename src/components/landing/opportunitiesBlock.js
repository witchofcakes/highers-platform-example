import React from 'react';
import BlueLinkButton from "../helpers/blueLinkButton";

export default function OpportunitiesBlock() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-align-center padding-top-50">
                        <p className="main-landing-block-text">
                            На HighersCareer ти знайдеш:
                        </p>
                        {/*<p className="secondary-landing-block-text">*/}
                        {/*    які забезпечують кар’єрне зростання, комфортні умови роботи та дружній колектив*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>
            <div className="row padding-top-bottom">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="line-gradient-card"/>
                    <p className="card-landing-text">
                        Вакансії з гідною зарплатнею, що не вимагають досвіду роботи
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="line-gradient-card"/>
                    <p className="card-landing-text">
                        Оплачувані стажування для практичного досвіду
                    </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="line-gradient-card"/>
                    <p className="card-landing-text">
                        Освітні можливості, щоб професійно розвиватись
                    </p>
                </div>
            </div>
            <BlueLinkButton
                text={"Перейти до можливостей"}
                right={true}
            />
        </div>

    )
}