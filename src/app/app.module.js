import 'angular';
import 'angular-route';

import { appConfig } from './app.config';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsCollectionComponent } from './shared/contacts-collection/contacts-collection.component';
import { ContactsService } from './shared/contacts.service';


var appModule = angular.module('contactsApp', ['ngRoute'])
         .config(appConfig)
         .constant("appVersion", "0.1.0")
         .constant("apiUrl", "https://randomuser.me/api/")
         .run((appVersion) => {
            console.log("App Run");
            console.log(`Version: ${appVersion}`);
        })
        .component('contactsList', ContactsListComponent)
        .component('contactDetails', ContactsDetailsComponent)
        .component('contactsAdd', ContactsAddComponent)
        .service('ContactsService', ContactsService)
        .component('contactsCollection', ContactsCollectionComponent);

export default appModule.name;
