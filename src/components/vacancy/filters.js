import React, {Component, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import SelectCategories from '../vacancy/SelectCategories';
import Checkbox from '@mui/material/Checkbox';
import {Sliders, ChevronDown} from "react-feather";
import SelectForm from "../helpers/selectForm";
import CheckboxGroup from "../helpers/checkboxGroup";
import { useMediaQuery } from 'react-responsive'

export default function Filters(props) {

    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })

    const initialValues = {
        city: '',
        remote: '',
        category: '',
        schedule: '',
        type: '',
        price: {},
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        // setIsSubmit(true);
    }

    const handleChangeInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // const {name, value} = target;
        setFormValues({...formValues, [name]: value});
        console.log("items " + formValues.price)
    }

    const cities = [
        {value: 'Київ', label: "Київ"},
        {value: 'Одеса', label: "Одеса"},
        {value: 'Львів', label: "Львів"},
    ]

    const schedules = [
        {
            name: "full-time",
            key: "full-time",
            label: "Full-time"
        },
        {
            name: "part-time",
            key: "part-time",
            label: "Part-time"
        },
        {
            name: "flexbile-full-time",
            key: "flexbile-full-time",
            label: "Гнучкий full-time"
        },
    ];

    const opportunities = [
        {
            name: "internship",
            key: "internship",
            label: "Стажування"
        },
        {
            name: "vacancy",
            key: "vacancy",
            label: "Junior-вакансії"
        }
    ];

    const prices = [
        {
            name: "free",
            key: "free",
            label: "Безкоштовно"
        },
        {
            name: "paid",
            key: "paid",
            label: "Платно"
        }
    ];

    return (
        <form className="filter-padding" onSubmit={handleSubmit}>
            {
                isDesktop &&
                <p className="filters-title-text">
                    <Sliders size={18} color={"var(--gray)"} className={"filter-icon-margin"}/>
                    Фільтри
                </p>
            }

            <SelectForm
                name={"city"}
                multiple={false}
                title={"Місто"}
                placeholder={"Оберіть місто"}
                options={cities}
                isUsedInFilter={true}
                // value={formValues.city}
                // onChange={handleChangeInput}
            />

            <div className="checkbox-apply-vacancies custom-control margin-bottom-5 custom-checkbox mr-sm-2">
                <input
                    id={"remote"}
                    name={"remote"}
                    type="checkbox"
                    className="custom-control-input"
                    checked={formValues.remote}
                    onChange={handleChangeInput}
                />
                <label
                    className="custom-control-label"
                    htmlFor={"remote"}
                >
                    Тільки віддалено
                </label>
            </div>

            <SelectCategories
                isUsedInFilter={true}
            />

            {
                props.opportunitites ? (
                    <React.Fragment>
                        <label className={"label-form label-filter-margin-vacancies"}>Вартість</label>
                        <CheckboxGroup
                            checkboxes={prices}
                            onChange={handleChangeInput}
                            value={formValues.price}
                            name={"price"}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <label className={"label-form label-filter-margin-vacancies"}>Графік</label>
                        <CheckboxGroup
                            checkboxes={schedules}
                            onChange={handleChangeInput}
                            value={formValues.schedule}
                            name={"schedule"}
                        />

                        <label className={"form-label label-filter-margin-vacancies"}>Вид можливості</label>
                        <CheckboxGroup
                            checkboxes={opportunities}
                            onChange={handleChangeInput}
                            value={formValues.type}
                            name={"type"}
                        />
                    </React.Fragment>
                )

            }

            <buttton className="round-button-border round-button-filter" onClick={handleSubmit}>
                Показати
            </buttton>
        </form>
    );
}