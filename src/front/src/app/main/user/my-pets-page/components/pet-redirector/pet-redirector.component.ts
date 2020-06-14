import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PetsService } from '../../../services/pets.service';

@Component({
    selector: 'bar-pet-redirector',
    template: ''
})
export class PetRedirectorComponent implements OnInit {

    constructor(private petsService: PetsService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.petsService.getPets().subscribe(res => {
            const firstPet = res[0];
            this.router.navigate([firstPet.id], { relativeTo: this.route });
        });
    }
}
