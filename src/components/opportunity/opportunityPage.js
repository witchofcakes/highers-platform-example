import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import OpportunityCard from "./opportunityCard";
import opportunity1 from '../../images/startonline-min.png'
import opportunity2 from '../../images/BA_JAVA 1200x1200_3_ukr.png'
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"

export default function OpportunityPage(props) {

    const opportunities = [
        {id: 1, title: "Marketing&Finance Game", company: "Hashtag", image: opportunity1},
        {id: 2, title: 'EY Cyber Consulting Bootcamp', company: "Deloitte", image: opportunity2},
    ];

    // fetchVacancyData() {
    //     axios
    //         .get(SHOW_VACANCY_BY_ID_API, {
    //             params: {
    //                 id: this.state.id,
    //             },
    //         })
    //         .then(response => response.data)
    //         .then(data => {
    //             this.setState({
    //                 city: data.vacancy.city,
    //                 street: data.vacancy.street,
    //                 duties: data.vacancy.duties,
    //                 salary: data.vacancy.uahSalary,
    //                 country: data.vacancy.country,
    //                 jobName: data.vacancy.jobName,
    //                 category: data.vacancy.category,
    //                 workingTime: data.vacancy.workingTime,
    //                 aboutCompany: data.vacancy.aboutCompany,
    //                 requirements: data.vacancy.requirements,
    //                 workingSchedule: data.vacancy.workingSchedule,
    //                 companyOffers: data.vacancy.companyOffers,
    //                 whoWeSearching: data.vacancy.whoWeSearching,
    //                 advantageCompany: data.vacancy.advantageCompany,
    //             });
    //             this.fetchSimilarVacancies(this.state.category);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    const [state, setState] = useState({
        opportunityID: props.match.params.id,

        active: false,
        city: '????????????',
        title: 'EY Cyber Consulting Bootcamp',
        image: opportunity2,
        company: 'Hashtag',
        price: '??????????????????????',

    });

    function handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setState({[name]: value});
    }

    const isBigScreen = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 992px)'
    })

    const isMobile = useMediaQuery({
        query: '(max-width: 490px)'
    })

    const isMobileMini = useMediaQuery({
        query: '(max-width: 480px)'
    })

    const isMobileDesktop = useMediaQuery({
        query: '(min-width: 480px)'
    })

    return(
        <div>
            <div className="container-fluid padding-container-vacancy">
                <div className="row center-row">
                    <div className="col-11 col-md-10 col-lg-9">
                        <div className="vacancy-short-header">
                            <div className="vacancy-div-title-logo">

                                {
                                    isMobileOrTablet &&
                                    <div className="vacancy-active-text-div">
                                        <div className="vacancy-active-div">
                                            <div className="vacancy-active-text">
                                                {
                                                    state.active ?
                                                        <React.Fragment>
                                                            <div className="circle-active"/>??????????????
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="circle-not-active"/>??????????????????
                                                        </React.Fragment>

                                                }
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div className="logo-block-display">
                                    <div className="logo-vacancy-page-div">
                                        <div className="logo-circle-opportunity">
                                            <img src={state.image} className="logo-circle-opportunity-page" alt="logo-company"/>
                                        </div>
                                    </div>
                                    <div className="title-text-card-div">
                                        <p className="card-company-vacancy-text">{state.company}</p>
                                        <p className="vacancy-page-title-text">{state.title}</p>

                                        {
                                            isMobileDesktop &&
                                            <div className="short-info-vacancy-page">
                                                <p className="short-info-vacancy-page-text">{state.city}</p>
                                                {
                                                    state.price === "??????????????????????" &&
                                                    <React.Fragment>
                                                        <span className="dot-short-info">???</span>
                                                        <p className="short-info-vacancy-page-text">{state.price}</p>
                                                    </React.Fragment>
                                                }
                                            </div>
                                        }

                                    </div>
                                </div>

                                {
                                    isMobileMini &&
                                    <div className="short-info-vacancy-page">
                                        <p className="short-info-vacancy-page-text">{state.city}</p>
                                        {
                                            state.price === "??????????????????????" &&
                                            <React.Fragment>
                                                <span className="dot-short-info">???</span>
                                                <p className="short-info-vacancy-page-text">{state.price}</p>
                                            </React.Fragment>
                                        }
                                    </div>
                                }

                            </div>

                            {
                                isDesktop &&
                                <div className="vacancy-active-text-div">
                                    <div className="vacancy-active-div">
                                        <p className="vacancy-active-text"><div className="circle-active"/>??????????????</p>
                                    </div>
                                </div>

                            }

                        </div>
                        <hr className="line-vacancy-page"/>
                        <div className="vacancy-body-description">
                            <div className="row">
                                <div className="col-12 col-md-11 col-lg-9 full-vacancy-description">
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            ????????????
                                        </p>
                                        <ul>
                                            <li className="description-li-text">???????????????????? ?????????????? ?????? ?????????? Headway Media</li>
                                            <li className="description-li-text">???????????? ???????????? ?????? ?????????????????? ???????????????????????????? ????????????????????: ??????????????????????, ??????????????????????, ??????????????, ????????????????.</li>
                                            <li className="description-li-text">???????????? ?????? ???????????????????? ?????????????????????? Headway.</li>
                                            <li className="description-li-text">?????????????????????? ???????? ?????? ???????????????? ???? ?????????? ???????????? ?? ???? ????????????????.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            ????????????
                                        </p>
                                        <ul>
                                            <li className="description-li-text">???????????? ?? ?????????????????? ???????????????????? ????????????????.</li>
                                            <li className="description-li-text">???????????????????? ?????????? C1 ???? ????????.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            ??????????
                                        </p>
                                        <ul>
                                            <li className="description-li-text">?????????? ??????????????????, ???? ???????????????????????? 2 ???????? ???? ????????????.</li>
                                            <li className="description-li-text">???????????????? ????????????????????????????????; ?????????????? ??????????????????????.</li>
                                            <li className="description-li-text">???????????? ???? ???????????????????? ??????????????, ??????????????????, ??????????????????.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            ?????? ???????????????????? Deloitte?
                                        </p>
                                        <p className="description-p-text">
                                            Deloitte - ?????????????????? ???????????????? ?? ?????????? ?? ?????????????? ?????????????????????? ???????????? ?? ?????????? ????????????, ??????????????????????, ?????????????????????????? ????????????????, ???????????? ??????????????, ???????????????????? ???? ?????????????????? ????????????????????????.
                                        </p>
                                    </div>
                                </div>

                                {
                                    isMobileOrTablet &&
                                    <div className="col-12 apply-button-div">
                                        <div className="apply-button-inner-div">
                                            <a target={"_blank"} href={"https://careers.bat.com/job/kyiv/global-graduate-programme-in-hr/27325/296769216?utm_source=telegram&utm_medium=post&utm_campaign=recruitment"}>
                                                <button className="apply-button-vacancy-page">
                                                    ?????????????????? ?????? ????????????
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                }

                                {
                                    isDesktop &&
                                    <div className="col-3 apply-button-div">
                                        <div className="apply-button-inner-div">
                                            <a target={"_blank"} href={"https://careers.bat.com/job/kyiv/global-graduate-programme-in-hr/27325/296769216?utm_source=telegram&utm_medium=post&utm_campaign=recruitment"}>
                                                <button className="apply-button-vacancy-page">
                                                    ?????????????????? ?????? ????????????
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid background-gray container-similar-vacancies">
                <p className="similar-vac-text">?????????? ?????????????? ????????????????????</p>
                {opportunities.map(function(opportunity, i){
                    return (
                        <OpportunityCard
                            key={i}
                            title={opportunity.title}
                            description={opportunity.description}
                            company={opportunity.company}
                            image={opportunity.image}
                        />
                    )
                })}
                <div className="similar-vacancies-button">
                    <a href="/all-opportunities">
                        <button className="black-button">
                            ???????????????? ?????? ????????????????????
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
