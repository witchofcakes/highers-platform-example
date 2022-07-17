import React from "react"
import phone from "../../images/phone.png"
import mail from "../../images/mail.png"

export default function Contacts() {
    return(
        <div className="login-div-container">
            <div className="login-div-text-box">
                <div className="sign-in-popup-title-text">
                    <p className="title-popup-signin color-text-main-signin our-contacts-margin">
                        Наші контакти
                    </p>
                    <p className="contact-us-secondary-text">
                        Звертайтесь у разі виникнення питаннь та пропозицій
                    </p>
                </div>
                <div className="contacts-div-text-body">
                    <div className="contact-us-div-icons">
                        <img src={phone} className="contact-us-icons"/>
                        <p className="contact-us-text">+38 (067) 220-08-73</p>
                    </div>
                    <div className="contact-us-div-icons">
                        <img src={mail} className="contact-us-icons"/>
                        <p className="contact-us-text">contact.us@highers.co</p>
                    </div>
                    <div className="contact-us-place-vacancy-div">
                        <p className="contact-us-place-vacancy-text contact-us-place-vacancy-bold">Бажаєте розмістити вакансію?</p>
                        <p className="c"><span className="contact-us-place-vacancy-text">Переходьте на&nbsp; </span><span className="contact-us-link-place">сторінку для працедавців</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}