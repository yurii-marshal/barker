import { Component, OnInit } from '@angular/core';
import { ActivityModel, PreferModel, PathologyModel } from 'app/main/registration/models';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Option } from 'app/shared/inputs/models/option.model';
import { notFutureDate } from 'app/shared/inputs/components/date-selector/not-future-date.validator';
import { Pet } from 'app/shared/models';
import { transitionEaseOut } from 'styles/animations';
import { PetsService } from 'app/main/user/services/pets.service';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import {
    AvatarSelectorDialogComponent
} from 'app/shared/avatar-selector/components/avatar-selector-dialog/avatar-selector-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'bar-pet-profile',
    templateUrl: './pet-profile.component.html',
    styleUrls: ['./pet-profile.component.scss'],
    animations: [transitionEaseOut()]
})
export class PetProfileComponent implements OnInit {

    public petProfileForm: FormGroup;

    public breedList: Option[] = [];
    public prefersList: PreferModel[] = [];
    public activityList: ActivityModel[] = [];
    public pathologiesList: PathologyModel[] = [];

    public savedData: Pet;

    public hasPathology = false;

    public showNotification = false;

    private petId = 2;

    constructor(
        private fb: FormBuilder,
        private dialog: MatDialog,
        private dictionaries: DictionariesService,
        private petsService: PetsService
    ) { }

    ngOnInit(): void {
        this.petsService.getPetById(this.petId).subscribe((data: Pet) => {
            this.savedData = data;
        });

        this.breedList = this.dictionaries.breedList.map(breed => ({ value: breed.id, label: breed.name }));
        this.activityList = this.dictionaries.activityList;
        this.pathologiesList = this.dictionaries.pathologiesList;
        this.prefersList = this.dictionaries.prefersList;

        this.prefersList.forEach((prefer: PreferModel) => {
            prefer.value = (this.savedData?.petFood || []).includes(prefer.id);
        });
        this.pathologiesList.forEach((pathology: PathologyModel) => {
            pathology.value = (this.savedData?.pathologies || []).includes(pathology.id);
        });

        this.petProfileForm = this.fb.group({
            name: this.fb.control(this.savedData?.name, Validators.required),
            breedId: this.fb.control(this.savedData?.breedId, Validators.required),
            dateOfBirth: new FormControl(this.savedData?.dateOfBirth, [Validators.required, notFutureDate]),
            weight: this.fb.control(this.savedData?.weight || 0, Validators.required),
            perfectWeight: this.fb.control(this.savedData?.perfectWeight || 0, Validators.required),
            activity: this.fb.control(this.savedData?.activity),

            hasPathology: this.fb.control(this.savedData?.pathologies?.length || true),
            prefers: this.fb.array(this.prefersList.map(item => item.value)),
            pathologies: this.fb.array(this.pathologiesList.map(item => item.value))
        });
    }

    public changePhoto(): void {
        const dialogRef = this.dialog.open(AvatarSelectorDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.savedData.image = result?.src;
        });
    }

    public savePetProfile(form: FormGroup): void {
        this.showNotification = true;

        let pathologies;

        if (this.hasPathology) {
            pathologies = this.pathologiesList.filter(pathology => pathology.value).map(pathology => pathology.id);
        } else {
            pathologies = null;
        }

        delete form.value.hasPathology;
        delete form.value.prefers;

        this.petsService.updatePetProfile(form.value);

        this.petsService.updatePetProfile({
            petFood: this.prefersList.filter(p => p.value).map(p => p.id)
        });
        this.petsService.updatePetProfile({ pathologies });

        setTimeout((() => {
            this.showNotification = false;
        }), 2000);
    }

}
