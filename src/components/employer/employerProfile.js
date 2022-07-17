import React, {useState} from 'react';
import {ChevronRight} from "react-feather"
import EmployerSwitch from "./employerSwitch"
import TextEditor from "./textEditor"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UploadAvatar from './employerLogoChoose'

export default function EmployerProfile() {

    const [state, setState] = useState({
        employerName: null,
        employerLogo: null,
        employerDescription: null,
        errors: {
            employerName1: '',
            employerLogo1: '',
            employerDescription1: '',
        }
    })

    function handleChangeInput(event) {
        let errors = state.errors

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({[name]: value, errors});
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
                    <form>
                        <div className="form-block-create">
                            <label className="form-label">
                                Назва компанії
                            </label>
                            <input
                                name="employerName"
                                className="input-field"
                                type="text"
                                value={state.employerName}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Логотип компанії
                            </label>
                            <div className="upload-picture">
                                {/*<UploadAvatar/>*/}
                            </div>
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Чим займається Ваша компанія?
                            </label>
                            <textarea
                                name={"employerDescription"}
                                rows="4"
                                className="input-field height-unset"
                                value={state.employerDescription}
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>

                        <div className="button-div-create-vacancy">
                            <button className="black-button">
                                Зберегти зміни
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}