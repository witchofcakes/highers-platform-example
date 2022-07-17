import React from 'react';
import {ChevronRight, ChevronLeft} from "react-feather";

export default function BlueLinkButton(props) {
    return (
        <div className="row">
            <div className="col-12 text-align-center">
                <button className="blue-link-button">
                    {props.text}
                    {
                        props.right ?
                            <ChevronRight color={"var(--blue)"} size={20} className={"margin-left-icon"}/>
                            :
                            <ChevronLeft color={"var(--blue)"} size={20} className={"margin-left-icon"}/>
                    }
                </button>
            </div>
        </div>
    )
}