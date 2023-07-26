import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return <div>
            <BrowserRouter>
                <Switch>
                    <Route path="pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </div>;
}