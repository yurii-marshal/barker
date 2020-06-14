import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '../services/user.guard';
import { PaymentDetailsComponent } from './component/payment-details/payment-details.component';
import { PersonalDataComponent } from './component/personal-data/personal-data.component';
import { PaymentPageComponent } from './component/payment-page/payment-page.component';
import { PaymentRedirectorComponent } from './component/payment-redirector/payment-redirector.component';


const routes: Routes = [
    {
        path: '',
        component: PaymentRedirectorComponent
    },
    {
        path: ':petId',
        canActivate: [UserGuard],
        component: PaymentPageComponent,
        children: [
            {
                path: 'payment-details',
                component: PaymentDetailsComponent
            },
            {
                path: 'personal-data',
                component: PersonalDataComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'payment-details'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaymentRoutingModule { }
