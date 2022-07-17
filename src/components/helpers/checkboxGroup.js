import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function CheckboxGroup(props) {

    // const initialValues = {
    //     price: {},
    // };
    //
    // const [formValues, setFormValues] = useState(initialValues);

    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //
    //     setFormValues({...formValues, [name]: value});
    //     console.log(formValues)
    // }

    return (
        <div>
            {props.checkboxes.map(item => (
                <div className="custom-control margin-bottom-5 custom-checkbox mr-sm-2">
                    <input
                        id={item.key}
                        type={"checkbox"}
                        name={"prices"}
                        checked={props.value[item.name]}
                        onChange={props.onChange}
                        className="custom-control-input"
                    />
                    <label key={item.key} className="custom-control-label" for={item.key}>
                        {item.label}
                    </label>
                </div>
            ))}

        </div>
    );
};