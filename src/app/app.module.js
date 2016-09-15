import 'angular';

import { appConfig } from './app.config';
import { ContactsListController } from './contacts-list/contacts-list.controller';

var appModule = angular.module('contactsApp', [])
         .config(appConfig)
         .constant("appVersion", "0.1.0")
         .run((appVersion) => {
            console.log("App Run");
            console.log(`Version: ${appVersion}`);
        })
        .controller('ContactsListController', ContactsListController);
export default appModule.name;
