import React from 'react';
import logoSmall from '../images/logo_small.png'
import logoInst from '../images/instagram.svg'
import logoTg from '../images/telegram.png'

export default function Footer() {
    return(
        <footer>

                <div className="footer-div display-center">
                    <div className="logo-footer-div display-center">
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
                    <div className="links-footer-div display-center">
                        <p className="footer-link-text">
                            Контакти
                        </p>
                        <p className="footer-link-text">
                            Junior-вакансії
                        </p>
                        <p className="footer-link-text">
                            Освітні можливості
                        </p>
                        <p className="footer-link-text">
                            Працедавцю
                        </p>
                    </div>
                    <div className="icons-footer-div display-center ml-auto">
                        <img src={logoInst} className="logo-inst"/>
                        <img src={logoTg} className="logo-tg"/>
                    </div>
                </div>

        </footer>
    )
}