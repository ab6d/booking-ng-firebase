import { Route } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminSignInComponent } from "./admin-sign-in/admin-sign-in.component";
import { authGuard } from "./guard/auth.guard";
import { DbService } from "../infrastructure/services/db.service";

export default [
    { path: 'sign-in', component: AdminSignInComponent },
    {
        providers: [DbService],
        path: 'dashboard',
        canActivate: [ authGuard ],
        component: AdminDashboardComponent
    }
] as Route[];