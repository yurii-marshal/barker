import { Component } from '@angular/core';
import { LanguageOptionModel } from 'app/core/models';
import { LocalizationService } from 'app/core/services/localization.service';

@Component({
    selector: 'bar-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    public isLangListOpened: boolean;

    constructor(
        public localizationService: LocalizationService
    ) { }

    public switchLanguage(lang: LanguageOptionModel): void {
        this.localizationService.switchLanguage$.next(lang);
    }

    public logout() { }

}
