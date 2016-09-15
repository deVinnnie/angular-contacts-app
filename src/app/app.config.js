import { ContactsDetailsController } from './contacts-details/contacts-details.controller';

export function appConfig($routeProvider, $locationProvider){
    console.log("App Config");

    $locationProvider.html5Mode(true);

    $routeProvider.when("/contacts/add", {
        template: require('./contacts-add/contacts-add.html'),
        controller: "ContactsAddController",
        controllerAs: "ctrl"
    });

    $routeProvider.when("/contacts/:contactId", {
        template: require('./contacts-details/contacts-details.html'),
        controller: ContactsDetailsController,
        controllerAs: "ctrl"
    });



    $routeProvider.when("/contacts", {
        template: require('./contacts-list/contacts-list.html'),
        controller: "ContactsListController",
        controllerAs: "ctrl"
    });

    $routeProvider.otherwise({
        redirectTo: '/contacts'
    });
}
