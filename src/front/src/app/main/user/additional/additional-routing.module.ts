import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalPageComponent } from './components/additional-page/additional-page.component';
import { UserGuard } from '../services/user.guard';
import { SnacksComponent } from './components/snacks/snacks.component';
import { MerchandiseComponent } from './components/merchandise/merchandise.component';


const routes: Routes = [
    {
        path: '',
        component: AdditionalPageComponent,
        canActivate: [UserGuard],
        canActivateChild: [UserGuard],
        children: [
            {
                path: 'snacks',
                component: SnacksComponent
            },
            {
                path: 'merchandise',
                component: MerchandiseComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdditionalRoutingModule { }
