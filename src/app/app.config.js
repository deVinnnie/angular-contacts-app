export function appConfig($routeProvider){
    console.log("App Config");

    $routeProvider.when("/contacts/add", {
        template: require('./contacts-add/contacts-add.html')
    });

    $routeProvider.when("/contacts", {
        template: require('./contacts-list/contacts-list.html')
    });

    $routeProvider.otherwise({
        redirectTo: '/contacts'
    });
}
