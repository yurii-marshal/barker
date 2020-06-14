import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./main/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./main/registration/registration.module').then(
                m => m.RegistrationModule
            )
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./main/user/user.module').then(
                m => m.UserModule
            )
    }
];

if (!environment.production) {
    routes.push({
        path: 'ui-toolkit-demo',
        loadChildren: () =>
            import('./ui-toolkit-demo/ui-toolkit-demo.module').then(
                m => m.UiToolkitDemoModule
            )
    });
}

routes.push({ path: '**', component: NotFoundComponent });

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
