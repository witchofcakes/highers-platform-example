import * as React from "react";

export default function RadioGroup(props) {
    return (
        <React.Fragment>
            <label className="label-form">
                {props.title}
            </label>
            {props.options.map(function(i){
                return (
                    <div className="custom-control margin-bottom-5 custom-checkbox mr-sm-2">
                        <input
                            type="radio"
                            className="custom-control-input"
                            id={i}
                            // checked={props.checked}
                            // onChange={props.onChange}
                        />
                        <label
                            className="custom-control-label"
                            for={i}
                        >
                            {i}
                        </label>
                    </div>
                )
            })}

        </React.Fragment>
    );
}
