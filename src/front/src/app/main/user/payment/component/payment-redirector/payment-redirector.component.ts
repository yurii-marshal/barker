import { Component, OnInit } from '@angular/core';
import { PetsService } from 'app/main/user/services/pets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bar-payment-redirector',
    template: ''
})
export class PaymentRedirectorComponent implements OnInit {

    constructor(
        private petsService: PetsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.petsService.getPets().subscribe(res => {
            const firstPet = res[0];
            this.router.navigate([firstPet.id], { relativeTo: this.route });
        });
    }

}
