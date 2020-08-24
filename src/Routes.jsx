import React from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Main from './Components/Main';
import SignIn from './Components/SignIn';
import Login from './Components/Login';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default Routes;