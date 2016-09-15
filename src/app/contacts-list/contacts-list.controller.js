export class ContactsListController{

    constructor(){
        console.log("Constructing ContactsListController");
        this.init();
    }

    init(){
        console.log("Initting ContactsListController");
        this.title = "Contacts List";

        this.contacts = [
            {
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
            }
        ];


        this.showList = true;
    }

    toggleList(){
        this.showList = !this.showList;
    }

    addContact(newContact){
        var contact = {
            name : {
                first : newContact.firstName,
                last : newContact.lastName
            },
            email: newContact.email
        };
        this.contacts.push(contact);
        newContact.firstName = '';
        newContact.lastName = '';
        newContact.email = '';
    }
}
