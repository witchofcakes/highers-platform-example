import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ChevronRight, Document} from "react-feather"
import { useMediaQuery } from 'react-responsive'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CandidateSwitch from "./candidateSwitch"
import document from "../../images/document.svg"

export default function CandidateProfile() {

    const [state, setState] = useState({
        candidateName: null,
        candidateEmail: null,
        resume: null,
        resumeName: 'резюме_файл_1.pdf',
        resumeDate: '26 вересня',
    })

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    function handleChangeInput(event) {
        let errors = state.errors

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({[name]: value});
    }

    const handleFileUpload= (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const isTablet = useMediaQuery({
        query: '(min-width: 600px)'
    })

    useEffect(() => {

        // axios.get("https://jsonplaceholder.typicode.com/users") // where the api gets fetched from that API
        //     .then(res=>{
        //         console.log(res);
        //         setState({
        //             candidateName: res.data.name,
        //             candidateEmail: res.data.email,
        //             resume: res.data.resume,
        //         });
        //     })
    });

    function handleFormSubmit(event) {
        event.preventDefault();

        const user = {
            name: state.state.candidateName,
            contact: state.candidateEmail,
            resume: state.resume,
        }

        // axios.post('https://jsonplaceholder.typicode.com/users', { user })
        //     .then(res=>{
        //         console.log(res);
        //         console.log(res.data);
        //     })
    }

    return(
        <div className="container padding-top-bottom-cabinet">
            <div className="row center-row">
                <div className="employer-switch-container">
                    <CandidateSwitch/>
                </div>
            </div>
            <div className="row center-row">
                <div className="col-12 col-md-10 col-lg-8">
                    <form>
                        <div className="form-block-create">
                            <label className="form-label">
                                Твоє прізвище та ім'я
                            </label>
                            <input
                                name="candidateName"
                                className="input-field"
                                type="text"
                                value={state.candidateName}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Твій e-mail
                            </label>
                            <input
                                name="candidateEmail"
                                className="input-field"
                                type="text"
                                value={state.candidateEmail}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="form-block-create">
                            <label className="form-label">
                                Твоє резюме
                            </label>
                            <div className="container-box-resume">
                                <a href='/somefile.txt' download>
                                    <div className="box-resume">
                                        <div className="resume-image-candidate">
                                            <img src={document} className="document-candidate"/>
                                        </div>
                                        <div className="resume-info-candidate">
                                            <p className="resume-info-candidate-title">
                                                {state.resumeName}
                                            </p>
                                            <p className="resume-info-candidate-uploaded">
                                                Завантажено: {state.resumeDate}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <div className="candidate-choose-resume">
                                    <label htmlFor="file-upload" className="candidate-choose-resume-button">
                                        Обрати інше резюме
                                    </label>

                                    <input
                                        value={state.file}
                                        name="file"
                                        id="file-upload"
                                        type="file"
                                        onChange={handleFileUpload}
                                    />

                                    {isFilePicked &&
                                        <div className="check-icon-div-candidate">
                                            <div className="check-icon-small"/>
                                            <p className="selected-file-text-label">{selectedFile.name}</p>
                                        </div>
                                   }
                                </div>
                            </div>
                        </div>

                        <div className="button-div-create-vacancy">
                            <button className="black-button" onClick={handleFormSubmit}>
                                Зберегти зміни
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}