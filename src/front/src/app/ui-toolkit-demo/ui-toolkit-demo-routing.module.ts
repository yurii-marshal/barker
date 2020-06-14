import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiDemoPageComponent } from './ui-demo-page/ui-demo-page.component';

const routes: Routes = [
    {
        path: '',
        component: UiDemoPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiToolkitDemoRoutingModule { }
