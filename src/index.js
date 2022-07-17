import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/javascript/App';
import '../src/stylesheets/index.css';
import '../src/stylesheets/landing.css';
import '../src/stylesheets/vacancies.css';
import '../src/stylesheets/vacancyPage.css';
import '../src/stylesheets/candidateProfile.css';
import '../src/stylesheets/employerLanding.css';
import '../src/stylesheets/employerCreateVacancy.css';
import '../src/stylesheets/employerAppliesVacancies.css';
import '../src/fonts/SF.css';
import reportWebVitals from '../src/javascript/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
