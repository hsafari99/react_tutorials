import React from 'react';
// Using Routr instead of Browser Router because we don't need history (contains browsing history) all over the place.
// The only place we need it is in container. the rest (which are normally MFEs) need the currect url which is available in Router component
// Router using memory history not browser history. it will help keep browser history unique and integrated between all repos
import { Router, Route, Switch } from "react-router-dom";

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history }) => { console.warn("HISTORY: ", history);
    return <Router history={history} >
                <Switch>
                    <Route path="/pricing" element={ <Pricing /> } />
                    <Route path="/" element={ <Landing /> } />
                </Switch>
            </Router>;
}