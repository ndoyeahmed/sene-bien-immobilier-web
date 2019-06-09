import React from 'react';
import Header from "../../layout/Header";
import Menu from "../../layout/Menu";
import Footer from "../../layout/Footer";
import Content from "../../layout/Content";
import {NavLink} from "react-router-dom";
import UtilisateurListPage from "./utilisateur.liste.page";
import UtilisateurAddPage from "./utilisateur.add.page";

export default class UtilisateurPage extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                           Gestion des utilisateurs
                        </h1>
                        <ol className="breadcrumb">
                            <li><NavLink to='/home'><i className="fa fa-dashboard"> </i> Accueil</NavLink></li>
                            <li><NavLink to='/utilisateur'>Utilisateur</NavLink></li>
                        </ol>
                    </section>
                    <section className="content">
                    <div className="modal fade" id="addModal" role="dialog" aria-hidden="true" aria-labelledby="addModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title text-center">Ajouter un utilisateur</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <UtilisateurAddPage/>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="box box-success">
                            <div className="box-header with-border">
                                <div className="row">
                                    <div className="col-md-1">
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addModal"><i className="fa fa-plus"> </i></button>
                                    </div>
                                    <div className="col-md-11 text-center">
                                        <h3 className="box-title">Listes Utilisateurs</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body">
                                <UtilisateurListPage />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}