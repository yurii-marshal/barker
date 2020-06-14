import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RegistrationStoreService } from 'app/main/registration/services/registration-store.service';

@Injectable({
    providedIn: 'root'
})
export class AppInitService {

    private readonly ICONS = [
        'apple-pay-icon',
        'arrow-grey',
        'arrow',
        'check-right',
        'check',
        'checker',
        'checkbox-inner',
        'close',
        'dislike-grey',
        'dislike',
        'hamburger-hover',
        'hamburger',
        'hamburger-top',
        'hamburger-middle',
        'hamburger-bottom',
        'like',
        'master-card',
        'plate',
        'radio-round',
        'success',
        'strict-arrow-down',
        'visa-card',
        'warning',
        'avatar-arrow-left',
        'verify-check',
        'fat-arrow-down'
    ];

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private storeService: RegistrationStoreService
    ) { }

    public async init(): Promise<void> {
        this.registerIcons(this.ICONS);
        this.storeService.checkExpire();
    }

    private registerIcons(icons: string[]): void {
        icons.forEach(icon => {
            this.registerIcon(icon);
        });
    }

    private registerIcon(name: string, path: string = 'assets/icons'): void {
        this.iconRegistry.addSvgIcon(
            name,
            this.sanitizer.bypassSecurityTrustResourceUrl(`${path}/${name}.svg`)
        );
    }
}
