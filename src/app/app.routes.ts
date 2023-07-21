import { Routes } from '@angular/router';
import { AuthService } from './infrastructure/services/auth.service';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import( './admin/routes' ),
    },
    {path: '', loadChildren: () => import('./front/routes')},
    // ...
  ];
