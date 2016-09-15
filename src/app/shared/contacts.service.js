export class ContactsService{
    constructor($http, apiUrl){
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    getContacts(){
        return this.$http.get(`${this.apiUrl}?results=10&nat=dk`)
                        .then(
            (response) => {
                return response.data.results;
            }
        );

    }

}
