import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from './pages/login/login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LoginPage} />
        </BrowserRouter>
    );
}

export default Routes;