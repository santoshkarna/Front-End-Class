import { Routes } from "@angular/router";

export const userRoutes: Routes = [
   {
        path: '',
        loadComponent: () => import('./user-list/user-list').then(m => m.UserList)
    },
     {
        path: 'new',
        loadComponent: () => import('./user-form/user-form').then(m => m.UserForm)
    },
     {
        path: 'edit/:id',
        loadComponent: () => import('./user-form/user-form').then(m => m.UserForm)
    }
];
 
