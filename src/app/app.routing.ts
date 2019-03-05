import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './_layout/admin/admin.component';
import { AccountComponent } from './_layout/account/account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { InstructorComponent } from './instructor/instructor.component';
import { CreateComponent } from './instructor/create/create.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            {
                path: 'dashboard', component: HomeComponent
            },
            {
                path: 'instructor', component: InstructorComponent, children:
                    [
                        { path: 'create', component: CreateComponent }
                    ]
            }
        ]
    },
    {
        path: 'admin/account', component: AccountComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }


]


export const routing = RouterModule.forRoot(routes);