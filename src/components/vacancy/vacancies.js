import React, {useState, useEffect} from 'react';
import axios from "axios";
import Popover from '@mui/material/Popover';
import {X} from 'react-feather'
import { useMediaQuery } from 'react-responsive'
import Switch from "./switch";
import VacancyCard from "./vacancyCard";
import deloitte from "../../images/deloitte.png"
import procredit from "../../images/procredit.png"
import fozzy from "../../images/img.png"
import {Sliders, ChevronsDown} from "react-feather"
import Filters from "./filters";

export default function Vacancies() {

    const [state, setState] = useState({
        isFilterOpen: false,
    })

    const [vacancies, setVacancies] = useState([
        {id: 1, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: deloitte},
        {id: 2, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: procredit},
        {id: 3, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: fozzy},
        {id: 4, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: deloitte},
        {id: 5, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: procredit},
        {id: 6, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: fozzy},
        {id: 7, title: "Менеджер з комунікацій", description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: deloitte},
        {id: 8, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: procredit},
        {id: 9, title: 'Менеджер з комунікацій', description: " Задачі: встановлення партнерств, комунікація з клієнтами", company: "Deloitte", logo: fozzy},
    ]);

    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const loadVacancies = async () => {
            try {
                setIsLoading(true);
                // const response = await axios.get(
                //     `https://randomuser.me/api/?page=${page}&results=10`
                // );
                // setVacancies((vacancies) => [...vacancies, ...response.data.results]);
                setErrorMsg('');
            } catch (error) {
                setErrorMsg('Error while loading data. Try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        loadVacancies();
    }, [page]);

    const loadMore = () => {
        setPage((page) => page + 1);
    };

    const isBigScreen = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    const isDesktop = useMediaQuery({
        query: '(min-width: 992px)'
    })
    const isMobileOrTablet = useMediaQuery({
        query: '(max-width: 992px)'
    })
    const isMobile = useMediaQuery({
        query: '(max-width: 490px)'
    })

    function openFilterButton(){
        setState({ isFilterOpen: !state.isFilterOpen });
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <section className="container-vacancies">

            {
                isDesktop &&
                    <React.Fragment>
                        <Filters opportunitites={false}/>
                        <div className="vacancies-column-width">
                            <div className="employer-switch-container">
                                <Switch/>
                            </div>
                            {vacancies.map(function(vacancy, i){
                                return (
                                    <VacancyCard
                                        key={i}
                                        title={vacancy.title}
                                        description={vacancy.description}
                                        company={vacancy.company}
                                        logo={vacancy.logo}
                                    />
                                )
                            })}
                            {errorMsg && <p className="error-text">{errorMsg}</p>}
                            <div className="load-more-vacancies-div">
                                <button onClick={loadMore} className="load-more-vacancies-button">
                                    {isLoading ?
                                        'Завантаження...'
                                        :
                                        <div>
                                            <ChevronsDown size={20} color={"#fff"} className={"plus-icon-load-more"}/>
                                            Дивитись більше
                                        </div>
                                    }
                                </button>
                            </div>
                        </div>

                        <div className="vacancies-empty-column"></div>

                    </React.Fragment>
            }

            {
                isMobileOrTablet &&
                <React.Fragment>
                    <div className="vacancies-column-width">
                        <div className="employer-switch-container">
                            <Switch/>
                        </div>

                            {vacancies.map(function(vacancy, i){
                                return (
                                    <VacancyCard
                                        key={i}
                                        title={vacancy.title}
                                        description={vacancy.description}
                                        company={vacancy.company}
                                        logo={vacancy.logo}
                                    />
                                )
                            })}

                        {errorMsg && <p className="error-text">{errorMsg}</p>}
                        <div className="load-more-vacancies-div">
                            <button onClick={loadMore} className="load-more-vacancies-button">
                                {isLoading ?
                                    'Завантаження...'
                                    :
                                    <div>
                                        <ChevronsDown size={20} color={"#fff"} className={"plus-icon-load-more"}/>
                                        Дивитись більше
                                    </div>
                                }
                            </button>
                        </div>

                        <div className="filter-button-main-mobile">
                            <button aria-describedby={id} onClick={handleClick} className="filter-button-vacancies-sticky">
                                <Sliders size={22} color={"#ebebec"} className={"filter-icon-margin"}/>
                                Фільтри
                            </button>
                        </div>

                        {/*{*/}
                        {/*    state.isFilterOpen &&*/}
                        {/*        <div className="filters-div-vacancies-mobile">*/}
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <div className="filters-container-sticky">
                                            <div className="head-filter-popup">
                                                <p className="filters-title-text">
                                                    <Sliders size={22} color={"var(--gray)"} className={"filter-icon-margin"}/>
                                                    Фільтри
                                                </p>
                                                <div className="close-icon-div" onClick={handleClose}>
                                                    <X size={20} color={"#212529"}/>
                                                </div>
                                            </div>
                                            <Filters/>
                                        </div>
                                    </Popover>
                                    {/*<Filters/>*/}
                                    {/*<div>*/}
                                    {/*    <button>hello</button>*/}
                                    {/*</div>*/}
                        {/*        </div>*/}
                        {/*}*/}



                    </div>
                </React.Fragment>
            }

        </section>
    )
}