import React from "react"

export default function LogIn() {
    return(
        <div className="login-div-container">
            <div className="login-div-text-box">
                <div className="sign-in-popup-title-text">
                    <p className="title-popup-signin color-text-main-signin">
                        Працюй із задоволенням
                    </p>
                    <p className="title-popup-signin color-text-signin">
                        та отримуй гідну зарплатню
                    </p>
                </div>
                <div className="popup-signin-google-button text-align-center">
                    {/*<div className="g-signin2" data-onsuccess="onSignIn"></div>*/}
                    <button className="google-button-signin">
                        Реєстрація через Google
                    </button>
                </div>
            </div>
        </div>
    )
}