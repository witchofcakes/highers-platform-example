import React, {useEffect, useRef, useState} from 'react';
import {ChevronRight} from "react-feather"
import EmployerSwitch from "./employerSwitch"
import TextEditor from "./textEditor"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UploadAvatar from './employerLogoChoose'
import SelectCategories from "../vacancy/SelectCategories";

export default function CreateVacancy() {

    const [showCity, setShowCity] = useState(false)

    const initialValues = {
        employerName: '',
        // employerLogo: '',
        employerDescription: '',
        position: '',
            employerName: '',
            employerLogo: '',
            employerDescription: '',
            position: '',
            category: '',
            salary: '',
            location: '',
            locationCity: '',
            vacancyDescription: '',
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChangeInput = (e) => {
        // const target = event.target;
        // const value = target.type === ('checkbox' || 'radio') ? target.checked : target.value;
        // const name = target.name;

        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

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
        if(!values.employerName){
            errors.employerName = "Як називається Ваша компанія?";
        }
        if(!values.employerDescription){
            errors.employerDescription = "Як можна коротко описати Вашу компанію?";
        } else if (values.password > 120){
            errors.employerDescription = "Цей пароль занадто довгий, max 120 символів";
        }
        if(!values.position){
            errors.position = "Як називається позиція?";
        } else if (values.password > 80){
            errors.employerDescription = "Назва позиції занадто довга, max 80 символів";
        }
        if(!values.category){
            errors.category = "Яка категорія вакансії?";
        }
        if(!values.salary){
            errors.salary = "Вкажіть приблизну зарплатню для позиції";
        }
        if(!values.location){
            errors.location = "Вкажіть місцезнаходження місця для роботи";
        }
        if(!values.locationCity){
            errors.locationCity = "Вкажіть локацію місця роботи (місто)";
        }
        if(!values.vacancyDescription){
            errors.vacancyDescription = "Додайте опис вакансії";
        }
        return errors;
    }

    return(
        <div className="container padding-top-bottom-cabinet">
            <div className="row center-row">
                <div className="employer-switch-container">
                    <EmployerSwitch/>
                </div>
            </div>
            <div className="row center-row">
                <div className="col-12 col-md-10 col-lg-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-block-create">
                            <label className="form-label">
                                Назва компанії
                            </label>
                            <input
                                className={
                                    (formErrors.employerName && isSubmit) ?
                                        "input-field height-unset error-border" : "input-field height-unset"
                                }
                                name="employerName"
                                type="text"
                                value={formValues.employerName}
                                onChange={handleChangeInput}
                            />
                            <p className="error-text">{formErrors.employerName}</p>
                        </div>
                        {/*<div className="form-block-create">*/}
                        {/*    <label className="form-label">*/}
                        {/*        Логотип компанії*/}
                        {/*    </label>*/}
                        {/*    <div className="upload-picture">*/}
                        {/*        /!*<UploadAvatar/>*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="form-block-create">
                            <label className="form-label">
                                Чим займається Ваша компанія?
                            </label>
                            <textarea
                                name="employerDescription"
                                rows="4"
                                className={
                                    (formErrors.employerDescription && isSubmit) ?
                                        "input-field height-unset error-border" : "input-field height-unset"
                                }
                                value={formValues.employerDescription}
                                onChange={handleChangeInput}
                            />
                            <p className="error-text">{formErrors.employerName}</p>
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Назва позиції
                            </label>
                            <input
                                name="position"
                                className={
                                    (formErrors.position && isSubmit) ?
                                        "input-field height-unset error-border" : "input-field height-unset"
                                }
                                type="text"
                                value={formValues.position}
                                onChange={handleChangeInput}
                            />
                            <p className="error-text">{formErrors.position}</p>
                        </div>
                        <div className="form-block-create">
                            {/*<input*/}
                            {/*    className="input-field"*/}
                            {/*    type="text"*/}
                            {/*    className={*/}
                            {/*        (formErrors.category && isSubmit) ?*/}
                            {/*            "input-field height-unset error-border" : "input-field height-unset"*/}
                            {/*    }*/}
                            {/*/>*/}
                            <SelectCategories isUsedInFilter={false}/>
                            <p className="error-text">{formErrors.category}</p>
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Зарплатня
                            </label>
                            <input
                                name="salary"
                                type="text"
                                placeholder="Приклад: 10 000 або 10 000-15 000"
                                value={formValues.salary}
                                onChange={handleChangeInput}
                                className={
                                    (formErrors.salary && isSubmit) ?
                                        "input-field height-unset error-border" : "input-field height-unset"
                                }
                            />
                            <p className="error-text">{formErrors.salary}</p>
                        </div>
                        <div className="form-block-create">
                            <label name="location" className="form-label">
                                Локація
                            </label>
                            <RadioGroup
                                aria-label="location"
                                name="location"
                                value={formValues.location}
                                onChange={handleChangeInput}
                            >
                                <div className="radio-button-div" onClick={()=>setShowCity(false)}>
                                    <FormControlLabel
                                        value="remote"
                                        control={<Radio />}
                                        label="Віддалено"
                                        onChange={handleChangeInput}
                                    />
                                </div>
                                <div className="radio-button-div" onClick={()=>setShowCity(true)}>
                                    <FormControlLabel
                                        value="office"
                                        control={<Radio />}
                                        label="В офісі"
                                        onChange={handleChangeInput}
                                    />
                                    {
                                        showCity &&
                                            <React.Fragment>
                                                <input
                                                    name="locationCity"
                                                    value={formValues.locationCity}
                                                    className={
                                                        ((formValues.location !== "office") && formErrors.locationCity && isSubmit) ?
                                                            "input-field height-unset error-border" : "input-field height-unset"
                                                    }
                                                    type="text"
                                                    onChange={handleChangeInput}
                                                />
                                            </React.Fragment>
                                    }
                                </div>
                            </RadioGroup>
                            {console.log("office? " + formValues.location)}
                            <p className="error-text">{formErrors.location}</p>
                            {
                                (formValues.location === "office") && <p className="error-text">{formErrors.locationCity}</p>
                            }
                        </div>

                        <div className="form-block-create">
                            <label className="form-label">
                                Опис вакансії: задачі, вимоги, умови
                            </label>
                            <TextEditor
                                className={
                                    (formErrors.vacancyDescription && isSubmit) ?
                                        "wrapper-class error-border" : "wrapper-class wrapper-class-border"
                                }
                            />
                            <p className="error-text">{formErrors.vacancyDescription}</p>
                        </div>
                        <div className="button-div-create-vacancy" onClick={handleSubmit}>
                            <button className="black-button">
                                Надіслати на модерацію
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}