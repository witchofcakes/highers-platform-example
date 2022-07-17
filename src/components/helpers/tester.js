// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
//
// export default function AppFunctional() {
//     const [users, setUsers] = useState([]);
//     const [page, setPage] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMsg, setErrorMsg] = useState('');
//
//     useEffect(() => {
//         const loadUsers = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await axios.get(
//                     `https://randomuser.me/api/?page=${page}&results=20`
//                 );
//
//                 setUsers((users) => [...users, ...response.data.results]);
//                 setErrorMsg('');
//             } catch (error) {
//                 setErrorMsg('Error while loading data. Try again later.');
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//
//         loadUsers();
//     }, [page]);
//
//     const loadMore = () => {
//         setPage((page) => page + 1);
//     };
//
//     return (
//         <div className="main-section">
//             <UsersList users={users} />
//             {errorMsg && <p className="errorMsg">{errorMsg}</p>}
//             <div className="load-more">
//                 <button onClick={loadMore} className="btn-grad">
//                     {isLoading ? 'Loading...' : 'Load More'}
//                 </button>
//             </div>
//         </div>
//     );
// };
//
//
// // import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// //
// // const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
// //     return (
// //         <input
// //             type={type}
// //             name={name}
// //             checked={checked}
// //             onChange={onChange}
// //             className="custom-control-input"
// //         />
// //     );
// // };
// //
// // export default function Test() {
// //     const [checkedItems, setCheckedItems] = useState({});
// //
// //     const handleChange = event => {
// //         setCheckedItems({
// //             ...checkedItems,
// //             [event.target.name]: event.target.checked
// //         });
// //     };
// //
// //     const prices = [
// //         {
// //             name: "free",
// //             key: "free",
// //             label: "Безкоштовно"
// //         },
// //         {
// //             name: "paid",
// //             key: "paid",
// //             label: "Платно"
// //         }
// //     ];
// //
// //     return (
// //         <div>
// //             {props.checkboxes.map(item => (
// //                 <div className="checkbox-apply-vacancies custom-control margin-bottom-5 custom-checkbox mr-sm-2">
// //                     <label key={item.key}>
// //                         {item.name}
// //                     </label>
// //                     <Checkbox
// //                         name={item.name}
// //                         checked={checkedItems[item.name]}
// //                         onChange={handleChange}
// //                     />
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // };
// //
// //
// //
// // // import { useState, useEffect } from "react";
// // // import { useForm } from "react-hook-form";
// // //
// // // export default function Test() {
// // //     const initialValues = {username: "", email: "", password: ""};
// // //     const [formValues, setFormValues] = useState(initialValues);
// // //     const [formErrors, setFormErrors] = useState({});
// // //     const [isSubmit, setIsSubmit] = useState(false);
// // //
// // //     const handleChange = (e) => {
// // //         const {name, value} = e.target;
// // //         setFormValues({...formValues, [name]: value});
// // //     }
// // //
// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         setFormErrors(validate(formValues));
// // //         setIsSubmit(true);
// // //     }
// // //
// // //     useEffect(() => {
// // //         if(Object.keys(formErrors).length === 0 && isSubmit){
// // //             console.log(formValues);
// // //         }
// // //     }, [formErrors]);
// // //
// // //     const validate = (values) =>{
// // //         const errors = {};
// // //         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// // //         if(!values.username){
// // //             errors.username = "username required";
// // //         }
// // //         if(!values.email){
// // //             errors.email = "email required";
// // //         } else if (!regex.test(values.email)){
// // //             errors.email = "Цей email некоректний"
// // //         }
// // //         if(!values.password){
// // //             errors.password = "password required";
// // //         } else if (values.password < 4){
// // //             errors.password = "Цей пароль занадто короткий";
// // //         }
// // //         else if (values.password > 10){
// // //             errors.password = "Цей пароль занадто довгий";
// // //         }
// // //         return errors;
// // //     }
// // //
// // //     return (
// // //         <div className="container">
// // //             <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
// // //             <form onSubmit={handleSubmit}>
// // //                 <h1>Registration Form</h1>
// // //                 <div className="ui divider"></div>
// // //                 <div className="ui form">
// // //                     <div className="field">
// // //                         <label>Username</label>
// // //                         <input
// // //                             type="text"
// // //                             name="username"
// // //                             className={
// // //                                 (formErrors.username && isSubmit) ?
// // //                                     "input-field height-unset error-border" : "input-field height-unset"
// // //                             }
// // //                             placeholder="Username"
// // //                             value={formValues.username}
// // //                             onChange={handleChange}
// // //                         />
// // //                     </div>
// // //                     <p>{formErrors.username}</p>
// // //                     <div className="field">
// // //                         <label>Email</label>
// // //                         <input
// // //                             type="email"
// // //                             name="email"
// // //                             className={
// // //                                 (formErrors.email && isSubmit) ?
// // //                                     "input-field height-unset error-border" : "input-field height-unset"
// // //                             }
// // //                             placeholder="Email"
// // //                             value={formValues.email}
// // //                             onChange={handleChange}
// // //                         />
// // //                     </div>
// // //                     <p>{formErrors.email}</p>
// // //                     <div className="field">
// // //                         <label>Password</label>
// // //                         <input
// // //                             type="password"
// // //                             name="password"
// // //                             placeholder="Password"
// // //                             className={
// // //                                 (formErrors.password && isSubmit) ?
// // //                                     "input-field height-unset error-border" : "input-field height-unset"
// // //                             }
// // //                             value={formValues.password}
// // //                             onChange={handleChange}
// // //                         />
// // //                     </div>
// // //                     <p>{formErrors.password}</p>
// // //                     <button className="fluid ui button blue">Submit</button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // }