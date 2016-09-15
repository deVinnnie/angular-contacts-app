export class ContactsAddController{

    constructor($log, $location){
        this.$log = $log;
        this.$location = $location;
        this.init();
    }

    init(){
    }

    addContact(newContact){
        var contact = {
            name : {
                first : newContact.firstName,
                last : newContact.lastName
            },
            email: newContact.email
        };
        //this.contacts.push(contact);
        this.$log.debug(contact);

        newContact.firstName = '';
        newContact.lastName = '';
        newContact.email = '';

        // Redirect to another view
        this.$location.path("/contacts");
    }
}
