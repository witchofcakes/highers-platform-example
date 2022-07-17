import React, {Component, useState} from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Sliders, ChevronDown} from "react-feather";
import SelectForm from "../helpers/selectForm";
import CheckboxGroup from "../helpers/checkboxGroup";
import { useMediaQuery } from 'react-responsive'

export default function SelectCategories(props) {

    const categories = [
        {value: 'IT-розробка', label: "IT-розробка"},
        {value: 'Аналітика', label: "Аналітика"},
        {value: 'Дизайн', label: "Дизайн"},
        {value: 'Маркетинг', label: "Маркетинг"},
        {value: 'Фінанси', label: "Фінанси"},
        {value: 'Аудит', label: "Аудит"},
        {value: 'Право', label: "Право"},
        {value: 'Логістика', label: "Логістика"},
    ];

    return (
            <SelectForm
                name={"category"}
                multiple={true}
                title={"Категорія"}
                placeholder={"Оберіть категорію"}
                options={categories}
                isUsedInFilter={true}
                // value={category}
                // onChange={handleInputChange}
            />
    );
}