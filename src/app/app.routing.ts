import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './_layout/admin/admin.component';
import { AccountComponent } from './_layout/account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: 'account', component: AccountComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }


]


export const routing = RouterModule.forRoot(routes);