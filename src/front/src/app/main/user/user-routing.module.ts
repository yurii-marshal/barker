import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UserGuard } from './services/user.guard';
import { UserComponent } from './user/user.component';
import { FaqComponent } from './faq/components/faq/faq.component';


const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        canActivate: [UserGuard],
        canActivateChild: [UserGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: ':subscriptionId/delivery',
                component: DeliveryComponent
            },
            {
                path: 'my-pets',
                loadChildren: () =>
                    import('./my-pets-page/my-pets-page.module').then(
                        m => m.MyPetsPageModule
                    )
            },
            {
                path: 'payment',
                loadChildren: () =>
                    import('./payment/payment.module').then(
                        m => m.PaymentModule
                    )
            },
            {
                path: 'additional',
                loadChildren: () =>
                    import('./additional/additional.module').then(
                        m => m.AdditionalModule
                    )
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'dashboard'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
