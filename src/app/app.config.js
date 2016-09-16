export function appConfig($routeProvider, $locationProvider){
    console.log("App Config");

    $locationProvider.html5Mode(true);

    $routeProvider.when("/contacts/add", {
        template: "<contacts-add></contacts-add>"
    });

    $routeProvider.when("/contacts/:contactId", {
        template: "<contact-details></contact-details>"
    });

    $routeProvider.when("/contacts", {
        template: '<contacts-list></contacts-list>',
    });

    $routeProvider.otherwise({
        redirectTo: '/contacts'
    });
}
