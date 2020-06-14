import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { APP_INITIALIZER, Injectable, LOCALE_ID, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppInitService } from './core/services/app-init.service';

registerLocaleData(localeRu, 'ru');

export function initializeApp(appInitService: AppInitService) {
    return (): Promise<any> => appInitService.init();
}

@Injectable({
    providedIn: 'root'
})
export class CustomHammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: { direction: Hammer.DIRECTION_ALL }
    };
}

@NgModule({
    declarations: [AppComponent, NotFoundComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,

        // Material modules
        MatIconModule,
        MatDialogModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializeApp,
            deps: [AppInitService],
            multi: true
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
        { provide: LOCALE_ID, useValue: 'ru' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
