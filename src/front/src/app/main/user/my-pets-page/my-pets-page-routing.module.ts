import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from '../services/user.guard';
import { MyPetsPageComponent } from './components/my-pets-page/my-pets-page.component';
import { OrdersHistoryComponent } from './components/orders-history/orders-history.component';
import { PetProfileComponent } from './components/pet-profile/pet-profile.component';
import { PetRedirectorComponent } from './components/pet-redirector/pet-redirector.component';


const routes: Routes = [
    {
        path: '',
        component: PetRedirectorComponent
    },
    {
        path: ':petId',
        canActivate: [UserGuard],
        component: MyPetsPageComponent,
        children: [
            {
                path: 'orders-history',
                component: OrdersHistoryComponent
            },
            {
                path: 'pet-profile',
                component: PetProfileComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'orders-history'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyPetsPageRoutingModule { }
