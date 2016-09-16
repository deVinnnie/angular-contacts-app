/* No export, the component will be exported, not the class */
class ContactsCollectionController{
    constructor(){}

    selected(person){
        this.onSelected({ selectedContact : person });
    }
}

export var ContactsCollectionComponent = {
    template : require('./contacts-collection.html'),
    controller : ContactsCollectionController,
    bindings : {
        contacts : "<",
        onSelected : "&" // Becomes a property of the controller.
    }
};
