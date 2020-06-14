import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from 'app/main/user/services/mobile-menu.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'app/main/user/dialogs/login-dialog/components/login-dialog/login-dialog.component';

@Component({
    selector: 'bar-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
        private mobileMenuService: MobileMenuService
    ) {
    }

    ngOnInit(): void {
    }

    public openMobileMenu(): void {
        this.mobileMenuService.switchMenu$.next(true);
    }

    public openLoginDialog() {
        this.dialog.open(LoginDialogComponent, {
            panelClass: 'login-dialog-container'
        });
    }

}
