class ContactsListController{

    constructor($http, $log, ContactsService, $location){
        console.log("Constructing ContactsListController");
        this.$http = $http;
        this.ContactsService = ContactsService;
        this.$log = $log;
        this.$location = $location;
    }

    $onInit(){
        console.log("Initting ContactsListController");
        this.title = "Contacts List";

        this.contacts = [
            /*{
                name : {
                    first: 'Luke',
                    last: 'Skywalker'
                },
                email : 'luke@rebellion.com'
            },
            {
                name : {
                    first: 'Darth',
                    last: 'Vader'
                },
                email : 'vader@empire.com'
            },
            {
                name : {
                    first: 'Han',
                    last: 'Solo'
                },
                email : 'han@corellia.com'
            }*/
        ];

        this.showList = true;

        this.ContactsService.getContacts().then((result) => {
            this.contacts = result;
        });

        /*this.$http.get(`${this.apiUrl}?results=10&nat=nl`)
                  .then(
                        (response) => {
                            this.$log.debug(response.data);
                            this.contacts = response.data.results;
                        }
                  );*/
    }

    toggleList(){
        this.showList = !this.showList;
    }

    contactSelected(selectedContact){
        this.$log.debug(selectedContact);
        //this.$location.path(`/contacts/${selected}`)
    }
}

export var ContactsListComponent = {
    template : require('./contacts-list.html'),
    controller : ContactsListController
}
