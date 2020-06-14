import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'app/shared/footer/footer.module';
import { HeaderModule } from 'app/shared/header/header.module';

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
    declarations: [LandingPageComponent],
    imports: [
        CommonModule,
        LandingRoutingModule,

        HeaderModule,
        FooterModule
    ]
})
export class LandingModule { }
