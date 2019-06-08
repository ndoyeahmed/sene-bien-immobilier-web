import React, {Component} from 'react';
import auth from '../services/auth';
import {Link, Redirect} from "react-router-dom";

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
        if (redirectToRefferer === true) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <header className="main-header">
                    <Link to='/home'  className="logo">
                        <span className="logo-mini"><b>A</b>LT</span>
                        <span className="logo-lg"><b>Admin</b>LTE</span>
                    </Link>
                    <nav className="navbar navbar-static-top">
                        <a href="index2.html" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">
                                <li className="dropdown user user-menu">
                                    <a href="index2.html" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User "/>
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle"
                                                 alt="User "/>
                                            <p>
                                                Alexander Pierce - Web Developer
                                                <small>Member since Nov. 2012</small>
                                            </p>
                                        </li>
                                        <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                    <a href="index2.html">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="index2.html">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="index2.html">Friends</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="index2.html" className="btn btn-default btn-flat">Profile</a>
                                            </div>
                                            <div className="pull-right">
                                                <button onClick={this.logout} className="btn btn-default btn-flat">Sign out</button>
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