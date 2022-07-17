import React from "react";
import {Download} from "react-feather"

const Users = [
    {
        id: 1,
        selected: false,
        name: "Анна Коноваленко",
        resume: "Resume_1.pdf",
        contact: "sincere@april.biz",
        date: "28.10"
    },
    {
        id: 2,
        selected: false,
        name: "Анна Коноваленко",
        resume: "Resume_1.pdf",
        contact: "sincere@april.biz",
        date: "28.10"
    },
    {
        id: 3,
        selected: false,
        name: "Анна Коноваленко",
        resume: "Resume_1.pdf",
        contact: "sincere@april.biz",
        date: "28.10"
    },
    {
        id: 5,
        selected: false,
        name: "Анна Коноваленко",
        resume: "Resume_1.pdf",
        contact: "sincere@april.biz",
        date: "28.10"
    },
];

export default class AppliesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: Users,
            MasterChecked: false,
            SelectedList: [],
        };
    }

    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempList = this.state.List;
        // Check/ UnCheck All Items
        tempList.map((user) => (user.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
        let tempList = this.state.List;
        tempList.map((user) => {
            if (user.id === item.id) {
                user.selected = e.target.checked;
            }
            return user;
        });

        //To Control Master Checkbox State
        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
    getSelectedRows() {
        this.setState({
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    render() {
        return (
            <div className="table-div-container">
                <table className="table-container">
                    <thead className="table-head-main">
                    <tr className="table-head-row">
                        <th scope="col" className="title-table-text title-table-text-padding-l">
                            <input
                                type="checkbox"
                                checked={this.state.MasterChecked}
                                id="mastercheck"
                                onChange={(e) => this.onMasterCheck(e)}
                            />
                        </th>
                        <th scope="col" className="title-table-text text-align-center">Прізвище та ім'я</th>
                        <th scope="col" className="title-table-text text-align-center">

                            {
                                this.state.SelectedList.length !==0 ?
                                    <button className="download-resumes-button" onClick={() => this.getSelectedRows()}>
                                        Завантажити обрані резюме {this.state.SelectedList.length}
                                    </button>
                                    :
                                    "Резюме"
                            }
                        </th>
                        <th scope="col" className="title-table-text text-align-center">Контакти</th>
                        <th scope="col" className="title-table-text title-table-text-padding-r">Дата подачі</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.List.map((user) => (
                        <tr key={user.id} className={user.selected ? "table-row-line selected" : "table-row-line"}>
                            <td className="title-table-text-padding-l">
                                <input
                                    type="checkbox"
                                    checked={user.selected}
                                    id="rowcheck{user.id}"
                                    onChange={(e) => this.onItemCheck(e, user)}
                                />
                            </td>
                            <td className="td-table-text">{user.name}</td>
                            <td className="td-table-text text-align-center">
                                <button className="resume-table-button">
                                    <Download size={18} color={"var(--black"} className={"download-employer-applies"}/>
                                    {user.resume}
                                </button>
                            </td>
                            <td className="td-table-text">{user.contact}</td>
                            <td className="td-table-text text-align-center title-table-text-padding-r">{user.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/*<div className="row">*/}
                {/*    <b>All Row Items:</b>*/}
                {/*    <code>{JSON.stringify(this.state.List)}</code>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*    <b>Selected Row Items(Click Button To Get):</b>*/}
                {/*    <code>{JSON.stringify(this.state.SelectedList)}</code>*/}
                {/*</div>*/}
            </div>
        );
    }
}