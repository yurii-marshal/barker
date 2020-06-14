import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsSwitcherComponent } from './components/pets-switcher/pets-switcher.component';



@NgModule({
    declarations: [PetsSwitcherComponent],
    imports: [
        CommonModule
    ],
    exports: [PetsSwitcherComponent]
})
export class PetsSwitcherModule { }
