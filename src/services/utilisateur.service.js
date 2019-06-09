class UtilisateurService {
    constructor() {
        this.BaseUrl = 'http://localhost:8080/senebiensimmobilier-1.0-SNAPSHOT/rest';
    }

    allUser() {
        return new Promise((resolve, reject) => {
            fetch(this.BaseUrl + '/user/all-user')
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default new UtilisateurService();