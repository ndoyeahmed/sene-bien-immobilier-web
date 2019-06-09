import React, {Component} from 'react';
import auth from '../services/auth';
import {NavLink, Redirect} from "react-router-dom";

class Header extends Component {

    state = {
        redirectToRefferer: false
    };

    logout = () => {
        auth.signOut(() => {
            this.setState({redirectToRefferer: true});
        });
    };

    render() {
        const { redirectToRefferer } = this.state;
        const connectedUser = JSON.parse(sessionStorage.getItem('userData'));
        console.log(connectedUser);
        if (redirectToRefferer === true) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <header className="main-header">
                    <NavLink to='/home' className="logo">
                        <span className="logo-mini"><b>A</b>LT</span>
                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </NavLink>
                    <nav className="navbar navbar-static-top">
                        <a href="index2.html" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="index2.html" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User "/>
                                        <span
                                            className="hidden-xs text-capitalize">{connectedUser.firstName} {connectedUser.lastName}</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle"
                                                 alt="User "/>
                                            <p>
                                                <b className="text-capitalize">{connectedUser.firstName} {connectedUser.lastName}</b>
                                                <br/>
                                                {connectedUser.profil.libelle}
                                            </p>
                                        </li>

                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="index2.html" className="btn btn-default btn-flat">Mon
                                                    Compte</a>
                                            </div>
                                            <div className="pull-right">
                                                <button onClick={this.logout}
                                                        className="btn btn-default btn-flat">Deconnexion
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index2.html" data-toggle="control-sidebar"><i className="fa fa-gears"/></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>

        );
    }
}

export default Header;