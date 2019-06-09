import React from 'react';
import UtilisateurService from '../../services/utilisateur.service';
import auth from "../../services/auth";

export default class UtilisateurListPage extends React.Component {
    constructor(props) {
        super(props);
        this.allUser();
        this.listUser = [];
    }

    allUser = () => {
        UtilisateurService.allUser().then((result) => {
            let responseJSON = result;
            if (responseJSON) {
                this.listUser = JSON.parse(JSON.stringify(responseJSON));
                // console.log(this.listUser);
            } else {
                this.setState({error: 'Login ou password incorrect'});
                // console.log("Login ou password incorrect");
            }
        });
    };

    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr className="success">
                        <th>id</th>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Profil</th>
                        <th>Date création</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.listUser &&
                    this.listUser.slice(1).map(row => {
                        return (
                            <tr>
                                {row.value.map(data => {
                                    return (
                                        <td>
                                            {data}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }

}