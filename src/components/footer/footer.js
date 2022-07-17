import React from 'react';
import { useMediaQuery } from 'react-responsive'
import logoSmall from '../../images/logo_small.png'
import logoInst from '../../images/instagram.svg'
import logoTg from '../../images/telegram.png'

export default function Footer() {

    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 992px)'
    })

    return(
        <footer className="footer-background-mobile">
                <div
                    className={
                        isDesktop ?
                            "footer-div display-center"
                            :
                            "mobile-footer-div"
                    }
                >

                    {
                        isMobileOrTablet &&
                        <div
                            className={
                                isDesktop ?
                                    "links-footer-div display-center"
                                    :
                                    "mobile-links-footer-div"
                            }
                        >
                            <a href={"/contacts"}>
                                <p className="footer-link-text">
                                    Контакти
                                </p>
                            </a>

                            <a href={"/all-vacancies"}>
                                <p className="footer-link-text">
                                    Junior-вакансії
                                </p>
                            </a>

                            <a href={"/all-opportunities"}>
                                <p className="footer-link-text">
                                    Освітні можливості
                                </p>
                            </a>

                            <a href={"/employer"}>
                                <p className="footer-link-text">
                                    Працедавцю
                                </p>
                            </a>
                        </div>
                    }

                    <div
                        className={
                            isDesktop ?
                                "logo-footer-div display-center"
                                :
                                "logo-footer-div display-center"
                        }
                    >
                        <div className="logo-text-footer-display">
                            <img src={logoSmall} className="logo-small-footer"/>
                            <div className="logo-side-text-div">
                                <p className="logo-footer-text">
                                    HIGHERS <span>кар'єра для покоління Z</span>
                                </p>
                                {/*<p className="logo-footer-text small-text-footer">*/}
                                {/*    кар'єра для покоління Z*/}
                                {/*</p>*/}
                            </div>
                        </div>

                    {
                        isMobileOrTablet &&
                        <div className="icons-footer-div display-center ml-auto">
                            <a href="https://bit.ly/3pqHClN">
                                <img src={logoInst} className="logo-inst"/>
                            </a>
                            <a href="http://bit.ly/2xtBQsf">
                                <img src={logoTg} className="logo-tg"/>
                            </a>
                        </div>
                    }
                    </div>

                    {
                        isDesktop &&
                            <React.Fragment>
                                <div
                                    className={
                                        isDesktop ?
                                            "links-footer-div display-center"
                                            :
                                            "mobile-links-footer-div"
                                    }
                                >

                                    <a href={"/contacts"}>
                                        <p className="footer-link-text">
                                            Контакти
                                        </p>
                                    </a>

                                    <a href={"/all-vacancies"}>
                                        <p className="footer-link-text">
                                            Junior-вакансії
                                        </p>
                                    </a>

                                    <a href={"/all-opportunities"}>
                                        <p className="footer-link-text">
                                            Освітні можливості
                                        </p>
                                    </a>

                                    <a href={"/employer"}>
                                        <p className="footer-link-text">
                                            Працедавцю
                                        </p>
                                    </a>
                                </div>
                                <div className="icons-footer-div display-center ml-auto">
                                    <a href="https://bit.ly/3pqHClN">
                                        <img src={logoInst} className="logo-inst"/>
                                    </a>
                                    <a href="http://bit.ly/2xtBQsf">
                                        <img src={logoTg} className="logo-tg"/>
                                    </a>
                                </div>
                            </React.Fragment>
                    }

                </div>

        </footer>
    )
}