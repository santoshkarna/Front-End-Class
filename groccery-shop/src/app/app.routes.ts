import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/login/login').then(m => m.Login)
    },
    {
        path: 'app',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'users',
                loadChildren: () => import('./features/user/user.routes').then(m => m.userRoutes)
            },
            {
                path: 'products',
                loadChildren: () => import('./features/product/product.routes').then(m => m.productRoutes)
            }

        ]
    }
];
