import React from 'react';
import logo from '../images/logo_full.png'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src={logo} className="logo-full" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                {/*<div className="white-background">*/}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/all-vacancies">
                                Junior-вакансії
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/education-opportunities">
                                Освітні можливості
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employer">
                                Працедавцю
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <button className="enter-button enter-margin">
                            Вхід
                        </button>
                        <button className="round-button-border">
                            Створити акаунт
                        </button>
                    </ul>
                {/*</div>*/}
            </div>
        </nav>
    )
}