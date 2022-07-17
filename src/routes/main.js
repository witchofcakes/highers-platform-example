import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from "../components/landing/landing";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Vacancies from "../components/vacancy/vacancies";
import Opportunitites from "../components/opportunity/opportunities";
import VacancyPage from "../components/vacancy/vacancyPage";
import OpportunityPage from "../components/opportunity/opportunityPage";
import EmployerLanding from "../components/employer/employerLanding";
import CreateVacancy from "../components/employer/employerCreateVacancy";
import EmployerProfile from "../components/employer/employerProfile";
import EmployerAppliesVacancies from '../components/employer/employerAppliesVacancies'
import EmployerApplies from '../components/employer/employerApplies'
import CandidateProfile from "../components/candidate/candidateProfile";
import CandidateVacancies from "../components/candidate//candidateVacancies";
import LogIn from "../components/candidate/logIn"
import Test from '../components/helpers/tester'
import Contacts from "../components/landing/contacts";

const Main = () => (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                {/*<Route path="/employer-vacancies" component={EmployerContainer} />*/}
                {/*<Route path="/employer-candidates" component={EmployerContainer} />*/}
                {/*<Route path="/employer-vacancy" component={EmployerContainer} />*/}
                {/*<Route path="/create-vacancy" component={EmployerContainer} />*/}
                {/*<Route path="/test" component={EmployerContainer} />*/}
                {/*<Route component={DefaultContainer} />*/}
                <Route exact path="/" component={Landing} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/login" component={LogIn} />
                <Route path="/all-vacancies" component={Vacancies} />
                <Route path="/all-opportunities" component={Opportunitites} />
                <Route path="/vacancy/:id" component={VacancyPage} />
                <Route path="/opportunity/:id" component={OpportunityPage} />
                <Route path="/employer" component={EmployerLanding} />
                <Route path="/create-vacancy" component={CreateVacancy} />
                <Route path="/employer-profile" component={EmployerProfile} />
                <Route path="/employer-applies" component={EmployerAppliesVacancies} />
                <Route path="/employer-vacancy-apply/:id" component={EmployerApplies} />
                <Route path="/candidate-profile" component={CandidateProfile} />
                <Route path="/candidate-vacancies" component={CandidateVacancies} />
                <Route path="/test" component={Test} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
);

// const EmployerContainer = () => (
//     <Switch>
//         <Route path="/employer-vacancies/:id" component={Empl_Vac} />
//     </Switch>
// );

// const DefaultContainer = () => (
//     <div>
//         <Navbar/>
//         <Switch>
//             <Route exact path="/" component={Landing} />
//             <Route path="/contacts" component={Contacts} />
//             <Route path="/login" component={LogIn} />
//             <Route path="/all-vacancies" component={Vacancies} />
//             <Route path="/all-opportunities" component={Opportunitites} />
//             <Route path="/vacancy/:id" component={VacancyPage} />
//             <Route path="/employer" component={EmployerLanding} />
//             <Route path="/create-vacancy" component={CreateVacancy} />
//             <Route path="/employer-profile" component={EmployerProfile} />
//             <Route path="/employer-applies" component={EmployerAppliesVacancies} />
//             <Route path="/employer-vacancy-apply/:id" component={EmployerApplies} />
//             <Route path="/candidate-profile" component={CandidateProfile} />
//             <Route path="/candidate-vacancies" component={CandidateVacancies} />
//             <Route path="/test" component={Test} />
//         </Switch>
//         <Footer/>
//     </div>
// );

export default Main;
