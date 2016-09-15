import 'angular';
import 'angular-route';

import { appConfig } from './app.config';
import { ContactsListController } from './contacts-list/contacts-list.controller';
import { ContactsAddController } from './contacts-add/contacts-add.controller';

var appModule = angular.module('contactsApp', ['ngRoute'])
         .config(appConfig)
         .constant("appVersion", "0.1.0")
         .constant("apiUrl", "https://randomuser.me/api/")
         .run((appVersion) => {
            console.log("App Run");
            console.log(`Version: ${appVersion}`);
        })
        .controller('ContactsListController', ContactsListController)
        .controller('ContactsAddController', ContactsAddController);
export default appModule.name;
