import React, {Component, useState} from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const Option = (props) => {
    return (
        <div className="custom-control custom-checkbox mr-sm-2">
            <components.Option {...props}>
                <input
                    className="custom-control-input"
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />
                <label
                    className="custom-control-label"
                >{props.value}</label>
            </components.Option>
        </div>
    );
};

export default function SelectForm(props) {

    const [optionSelected, setOptionSelected] = useState(null)

    return (
        <React.Fragment>
            <label className={props.isUsedInFilter ? "label-form" : "form-label"}>{props.title}</label>
            <span class="selectFormSpan">
                <ReactSelect
                    placeholder={props.placeholder}
                    options={props.options}
                    isMulti = {!!props.multiple}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={
                        props.multiple ? {Option} : false
                    }
                    onChange={(selected) => setOptionSelected(selected)}
                    allowSelectAll={false}
                    value={optionSelected}
                    className={"select-form"}
                    classNamePrefix="select-form"
                    // onChange={props.onChange}
                    // name={props.name}
                    // value={props.value}
                />
            </span>
        </React.Fragment>
    );

}
