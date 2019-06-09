import React from 'react';
import LoginPage from "./Login/login.page";
import {ProtectedRoute} from "./utils/protected.route";
import HomePage from "./layout/home.page";
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import UtilisateurPage from "./Components/Utilisateur/utilisateur.page";

class AppRoute extends React.Component {
    render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <Route path='/' exact component={LoginPage}/>
                <Route path='/login' exact component={LoginPage}/>
                <ProtectedRoute path='/home' exact component={HomePage}/>
                <ProtectedRoute path='/utilisateur' exact component={UtilisateurPage}/>
            </Router>
        )
    }
}

export default AppRoute;