import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { WorkersComponent } from './pages/dashboard/workers/workers.component';
import { MaintenanceWorkerComponent } from './pages/dashboard/workers/maintenance/maintenance.component';

//sub router
import { DashboardRouterComponent } from './pages/dashboard/dashboard-router.component';

//guards
import { currentUserGuard } from './guards/current-user.guard';

export const routes: Routes = [
   {
      path:'auth',
      component: AuthComponent,
      children:[
         {
            path:'login',
            component: LoginComponent
        }]
   },
   {
      path:'home',
      component: DashboardRouterComponent,
      canActivate:[currentUserGuard],
      children:[
         {
            path:'',
            component: HomeComponent,
         },
         {
            path:'workers',
            component: WorkersComponent
         },
         {
            path:'maintenance',
            component: MaintenanceWorkerComponent
         }
      
      ]
   },
   {
      path:'',
      pathMatch:'full',
      redirectTo:'auth/login'
   }
];
