import React, {useEffect, useState} from "react"
import FormGroup from '@mui/material/FormGroup';
import {CheckCircle} from 'react-feather';
import FormControlLabel from '@mui/material/FormControlLabel';
import DropzoneResume from '../candidate/DropzoneResume';
import CheckboxGroup from "../helpers/checkboxGroup";

export default function ApplyVacancyForm(){

    const initialValues = {
        candidateName: '',
        candidateEmail: '',
        candidateResume: '',
        agree: false,
    };

    const [agree, setAgree] = useState(true);
    const [checked, setChecked] = useState(false);

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChangeInput = (event) => {
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // const {name, value} = target;
        setFormValues({...formValues, [name]: value});
        {console.log(formValues.agree)}
    }

    // function handleCheckboxChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //
    //     setState({
    //         [name]: value
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.candidateName){
            errors.candidateName = "?????????? ???????? ????'?? ???? ????????????????";
        }
        if(!values.candidateEmail){
            errors.candidateEmail = "?????????? ???????? ?????????????????? email-????????????";
        } else if (!regex.test(values.candidateEmail)){
            errors.candidateEmail = "?????? email ??????????????????????"
        }
        if(!values.candidateResume){
            errors.candidateResume = "?????????? ???????? ????????????";
        }
        return errors;
    }

    return(
        <React.Fragment>
            {!isSuccess ?
                <form onSubmit={handleSubmit}>
                    <div className="apply-vacancy-title-text">
                        <p className="apply-vacancy-title-popup">???????????? ???? ????????????????</p>
                        <p className="apply-vacancy-enter-popup">
                        <span className="span-popup-newline">
                            ?????? <a className="enter-popup-text" href="/login" target="_blank">????????????</a>
                        </span>
                            <span className="span-popup-newline">
                            ?????? ???????????????? ????????????
                        </span>
                        </p>
                    </div>
                    <div className="form-input-div">
                        <label className="label-form">????'?? ???? ????????????????</label>
                        <input
                            type="text"
                            placeholder="????'?? ????????????????"
                            value={formValues.candidateName}
                            onChange={handleChangeInput}
                            className={
                                (formErrors.candidateName && isSubmit) ?
                                    "input-field height-unset error-border" : "input-field height-unset"
                            }
                        />
                        <p className="error-text margin-bottom-0">{formErrors.candidateName}</p>
                    </div>
                    <div className="form-input-div">
                        <label className="label-form">Email</label>
                        <input
                            type="text"
                            className={
                                (formErrors.candidateEmail && isSubmit) ?
                                    "input-field height-unset error-border" : "input-field height-unset"
                            }
                            placeholder="email@email.com"
                            value={formValues.candidateEmail}
                            onChange={handleChangeInput}
                        />
                        <p className="error-text margin-bottom-0">{formErrors.candidateEmail}</p>
                    </div>
                    <div className="form-input-div">
                        <label className="label-form">????????????</label>
                        <p className="label-form-second-text">???????????? ???????????? ?????????????? ?????????????????? ????????????????. ???????????????? 1 ????????.</p>
                        <DropzoneResume
                            value={formValues.candidateResume}
                            formErrors={formErrors}
                            isSubmit={isSubmit}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="checkbox-apply-vacancies custom-control margin-bottom-5 custom-checkbox mr-sm-2">
                        <input
                            id={"agree"}
                            name={"agree"}
                            type="checkbox"
                            className="custom-control-input"
                            checked={formValues.agree}
                            onChange={handleChangeInput}
                        />
                        <label
                            className="custom-control-label"
                            htmlFor={"agree"}
                        >
                            ?? ???????????????????? ??{' '}
                            <a className="agree-apply-link" href="https://bit.ly/conditions-highers">
                                ?????????????????? ???? ?????????????? ????????????????????????
                            </a>
                            .
                        </label>
                    </div>
                    <div className="button-apply-form-div">
                        <button className="button-apply-form">??????????????????</button>
                    </div>
                </form>
                :
                <div className="container-success-apply">
                    <div className="col-12 col-md-10 col-lg-8 display-flex-success-apply">
                        <div>
                            <CheckCircle size={50} color={"var(--green)"} className={"icon-feather-check-success"}/>
                            {/*<div className="icon-check-success-apply"/>*/}
                        </div>
                        <div className="apply-success-form-text">
                            {/*<div className="title-form">*/}
                            {/*    ???????????????????? ?????? ???????????? ?????????????? ??????????????????*/}
                            {/*</div>*/}
                            <div className="apply-vacancy-title-popup">
                                ???????? ???????????? ?????????????????? ???? ????????????????
                            </div>
                            <div className="success-apply-form-secondary-text">
                                ???????? ???? ?????????????????? ???????? ????????????, ?? ?????????? ???????????????????? ?????????? ???????????????????????? ???????????????????????? ????????????????
                            </div>
                            <div className="success-button-apply-form">
                                <a href={"/all-vacancies"}>
                                    <button className="black-button">
                                        ?????????????????????? ???? ??????????????????????
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}