import React from 'react';

export default class UtilisateurAddPage extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Nom :</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Prenom :</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Téléphone :</label>

                    <div className="input-group">
                        <div className="input-group-addon">
                            <i className="fa fa-phone"> </i>
                        </div>
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email :</label>

                    <div className="input-group">
                        <div className="input-group-addon">
                            <i className="fa fa-envelope-o"> </i>
                        </div>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <label>Profil :</label>
                    <select className="form-control select2" >
                        <option selected="selected">Administrateur</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary"> Enregistrer </button>
                </div>
            </div>
        )
    }
}