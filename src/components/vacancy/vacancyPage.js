import React, {useEffect, useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import VacancyCard from "./vacancyCard";
import ApplyVacancyForm from "./applyVacancyForm";
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"

// import IconCheck from '../../../../images/check_icon.svg';

export default function VacancyPage(props) {

    const vacancies = [
        {id: 1, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: deloitte},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: procredit},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: fozzy}
    ];

    const [state, setState] = useState({
        vacancyID: props.match.params.id,
        jobName: null,

        delay: 750,
        redirect: null,
        isLoading: true,
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

    function openPopupbox() {

        const content = (
            <ApplyVacancyForm/>
        )
        PopupboxManager.open({

                content,
                config: {
                    titleBar: {
                        enable: true,
                    },
                    fadeIn: true,
                    fadeInSpeed: 500
                }

            })
    }

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
                                            <p className="vacancy-active-text"><div className="circle-active"/>Активна</p>
                                        </div>
                                    </div>
                                }

                                <div className="logo-block-display">
                                    <div className="logo-vacancy-page-div">
                                        <div className="logo-circle-vacancy">
                                            <img src={deloitte} className="logo-circle-vacancy-page" alt="logo-company"/>
                                        </div>
                                    </div>
                                    <div className="title-text-card-div">
                                        <p className="card-company-vacancy-text">Deloitte</p>
                                        <p className="vacancy-page-title-text">Менеджер з комунікацій</p>

                                        {
                                            isMobileDesktop &&
                                            <div className="short-info-vacancy-page">
                                                <p className="short-info-vacancy-page-text">Київ<span className="dot-short-info">•</span></p>
                                                <p className="short-info-vacancy-page-text">Гнучкий full-time<span className="dot-short-info">•</span></p>
                                                <p className="short-info-vacancy-page-text">₴ 15 000</p>
                                            </div>
                                        }

                                    </div>
                                </div>

                                {
                                    isMobileMini &&
                                    <div className="short-info-vacancy-page">
                                        <p className="short-info-vacancy-page-text">Київ<span className="dot-short-info">•</span></p>
                                        <p className="short-info-vacancy-page-text">Гнучкий full-time<span className="dot-short-info">•</span></p>
                                        <p className="short-info-vacancy-page-text">₴ 15 000</p>
                                    </div>
                                }

                            </div>

                            {
                                isDesktop &&
                                <div className="vacancy-active-text-div">
                                    <div className="vacancy-active-div">
                                        <p className="vacancy-active-text"><div className="circle-active"/>Активна</p>
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
                                            Задачі
                                        </p>
                                        <ul>
                                            <li className="description-li-text">Створювати контент для блогу Headway Media</li>
                                            <li className="description-li-text">Писати тексти для зовнішніх комунікаційних матеріалів: інфографіки, презентації, постери, розсилки.</li>
                                            <li className="description-li-text">Писати для внутрішніх комунікацій Headway.</li>
                                            <li className="description-li-text">Пропонувати ідеї для контенту та брати участь у їх втіленні.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            Вимоги
                                        </p>
                                        <ul>
                                            <li className="description-li-text">Досвід у створенні текстового контенту.</li>
                                            <li className="description-li-text">Англійська рівня C1 та вище.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            Умови
                                        </p>
                                        <ul>
                                            <li className="description-li-text">Гідну зарплатню, що виплачується 2 рази на місяць.</li>
                                            <li className="description-li-text">Офіційне працевлаштування; медичне страхування.</li>
                                            <li className="description-li-text">Доступ до навчальних програм, семінарів, тренінгів.</li>
                                        </ul>
                                    </div>
                                    <div className="description-block-text">
                                        <p className="vacancy-description-title">
                                            Чим займається Deloitte?
                                        </p>
                                        <p className="description-p-text">
                                            Deloitte - найбільша компанія у світі з надання професійних послуг у сфері аудиту, консалтингу, корпоративних фінансів, оцінки ризиків, податкових та юридичних консультацій.
                                        </p>
                                    </div>
                                </div>

                                {
                                    isMobileOrTablet &&
                                    <div className="col-12 apply-button-div">
                                        <div className="apply-button-inner-div">
                                            <button onClick={openPopupbox} className="apply-button-vacancy-page">
                                                Надіслати резюме
                                            </button>
                                            <PopupboxContainer/>
                                        </div>
                                        {/*<span className="apply-button-text">*/}
                                        {/*    Для подачі все готово!*/}
                                        {/*</span>*/}
                                    </div>
                                }

                                {
                                    isDesktop &&
                                    <div className="col-3 apply-button-div">
                                        <div className="apply-button-inner-div">
                                            <button onClick={openPopupbox} className="apply-button-vacancy-page">
                                                Надіслати резюме
                                            </button>
                                            <PopupboxContainer/>
                                        </div>
                                        {/*<span className="apply-button-text">*/}
                                        {/*    Для подачі все готово!*/}
                                        {/*</span>*/}
                                    </div>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid background-gray container-similar-vacancies">
                <p className="similar-vac-text">Схожі вакансії</p>
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
                <div className="similar-vacancies-button">
                    <a href="/all-vacancies">
                        <button className="black-button">
                            Дивитись всі вакансії
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
