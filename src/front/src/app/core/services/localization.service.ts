import { Injectable } from '@angular/core';
import { LanguageOptionModel } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {

    public switchLanguage$: BehaviorSubject<LanguageOptionModel> =
        new BehaviorSubject<LanguageOptionModel>(
            {
                label: 'Рус',
                value: 'RU'
            } as LanguageOptionModel
        );

    public languageState$: Observable<LanguageOptionModel> = this.switchLanguage$.asObservable();

    public langList: LanguageOptionModel[] = [
        {
            label: 'Рус',
            value: 'RU'
        },
        {
            label: 'Eng',
            value: 'EN'
        }
    ];

    constructor() { }
}
