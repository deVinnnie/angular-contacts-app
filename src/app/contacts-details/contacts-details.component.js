class ContactsDetailsController{

    constructor($routeParams){
        this.contactId = $routeParams.contactId;
    }
}

export var ContactsDetailsComponent = {
    template : require("./contacts-details.html"),
    controller : ContactsDetailsController
}
