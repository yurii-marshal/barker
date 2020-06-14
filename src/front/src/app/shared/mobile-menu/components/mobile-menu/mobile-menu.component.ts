import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'app/main/user/services/mobile-menu.service';
import { transitionToRight, transitionEaseOut } from 'styles/animations';
import { LocalizationService } from 'app/core/services/localization.service';
import { LanguageOptionModel } from 'app/core/models';
import { BucketService } from 'app/main/user/services/bucket.service';

@Component({
    selector: 'bar-mobile-menu',
    templateUrl: './mobile-menu.component.html',
    styleUrls: ['./mobile-menu.component.scss'],
    animations: [transitionToRight, transitionEaseOut()]
})
export class MobileMenuComponent {
    public isLangListOpened: boolean;

    constructor(
        public localizationService: LocalizationService,
        public mobileMenuService: MobileMenuService,
        public bucketService: BucketService
    ) { }

    public switchLanguage(lang: LanguageOptionModel): void {
        this.localizationService.switchLanguage$.next(lang);
    }

    public logout() {
        this.close();
    }

    public close(): void {
        this.mobileMenuService.switchMenu$.next(false);
    }

}
