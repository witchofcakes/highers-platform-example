import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Landing from "../components/landing/landing";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Vacancies from "../components/vacancies";

const Main = () => (
    <div>
        <BrowserRouter>
            <Switch>
                {/*<Route path="/employer-vacancies" component={EmployerContainer} />*/}
                {/*<Route path="/employer-candidates" component={EmployerContainer} />*/}
                {/*<Route path="/employer-vacancy" component={EmployerContainer} />*/}
                {/*<Route path="/create-vacancy" component={EmployerContainer} />*/}
                {/*<Route path="/test" component={EmployerContainer} />*/}
                <Route component={DefaultContainer} />
            </Switch>
        </BrowserRouter>
    </div>
);

// const EmployerContainer = () => (
//     <Switch>
//         <Route path="/employer-vacancies/:id" component={Empl_Vac} />
//     </Switch>
// );

const DefaultContainer = () => (
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/all-vacancies" component={Vacancies} />
        </Switch>
        <Footer/>
    </div>
);

export default Main;
