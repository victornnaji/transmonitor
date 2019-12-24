import React from 'react';
import App from "../App";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
