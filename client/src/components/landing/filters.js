import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {Sliders, ChevronDown} from "react-feather";

const categories = [
    'IT-розробка',
    'Аналітика',
    'Дизайн',
    'Маркетинг',
    'Фінанси',
    'Аудит',
    'Право',
    'Логістика',
    'Продажі',
    'Офіс-менеджмент',
];

export default function Filters() {
    const [categoryName, setCategoryName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setCategoryName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div className="filter-padding">
            <p className="filters-title-text">
                <Sliders size={22} color={"var(--gray)"} className={"filter-icon-margin"}/>
                Фільтри
            </p>
            <div className="input-group">
                <label className="input-label">Місто</label>
                <input className="input-field"/>
            </div>
            <div>
                <FormControl className="form-select">
                    <InputLabel id="categories-select-label">Категорія</InputLabel>
                    <Select
                        labelId="categories-select-label"
                        id="categories-select"
                        multiple
                        value={categoryName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Категорія" />}
                        renderValue={(selected) => selected.join(', ')}
                        IconComponent={() => (
                            <ChevronDown size={22} color={"var(--gray)"} className="dropdown-icon"/>
                        )}
                    >
                        {categories.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={categoryName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}