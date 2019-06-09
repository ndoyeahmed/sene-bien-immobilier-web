import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Menu extends Component {
    render() {
        const connectedUser = JSON.parse(sessionStorage.getItem('userData'));
        return (
            <div>
                <aside className="main-sidebar">

                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User"/>
                            </div>
                            <div className="pull-left info">
                                <p className="text-capitalize">{connectedUser.firstName} {connectedUser.lastName}</p>
                                <a href="index2.html"><i className="fa fa-circle text-success"></i> En ligne</a>
                            </div>
                        </div>
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                  <i className="fa fa-search"></i>
                </button>
              </span>
                            </div>
                        </form>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="treeview">
                                <NavLink to='/home'>
                                    <i className="fa fa-user-secret"> </i> <span>Administration</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"> </i>
            </span>
                                </NavLink>
                                <ul className="treeview-menu">
                                    <li><NavLink to='/utilisateur'><i className="fa fa-user-circle"> </i> Gestion users</NavLink>
                                    </li>
                                    <li className="active"><a href="index2.html"> <i
                                        className="fa fa-circle-o"> </i> Dashboard v2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </aside>
            </div>
        );
    }
}

export default Menu;