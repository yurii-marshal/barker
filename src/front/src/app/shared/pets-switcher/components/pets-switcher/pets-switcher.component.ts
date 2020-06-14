import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pet } from 'app/shared/models';

@Component({
    selector: 'bar-pets-switcher',
    templateUrl: './pets-switcher.component.html',
    styleUrls: ['./pets-switcher.component.scss']
})
export class PetsSwitcherComponent {
    @Input()
    public pets: Pet[];
    @Input()
    public selected: Pet;

    @Output()
    public selectedChange: EventEmitter<Pet> = new EventEmitter();

    constructor() { }

    public select(pet: Pet): void {
        this.selected = pet;
        this.selectedChange.emit(pet);
    }

}
