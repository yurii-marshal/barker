import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Pet } from 'app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class PetsService {

    private petProfiles: Pet[] = [
        { id: 1, name: 'Венамин', image: 'assets/images/veniamin.jpeg', recipeId: 1, subscriptionId: 1 },
        { id: 2, name: 'Персик', image: 'assets/images/persik.jpeg', recipeId: 2, subscriptionId: 2 }
    ];

    constructor() { }

    // temporarty API mock
    public getPets(): Observable<Pet[]> {
        return of(this.petProfiles).pipe(delay(500));
    }

    // temporarty API mock
    public getPetById(id: number): Observable<Pet> {
        const profile = this.petProfiles.find((pet: Pet) => pet.id === id) || {} as Pet;

        return of(profile).pipe(delay(500));
    }

    // temporarty API mock
    public updatePetProfile(data: Pet): Observable<Pet> {
        let profile = this.petProfiles.find((pet: Pet) => pet.id === data.id);
        profile = { ...profile, ...data };

        return of(profile).pipe(delay(500));
    }

    public savePetAvatar(data: Pet): Observable<string> {
        return of('').pipe(delay(500));
    }

    public uploadPhoto(petId: number, photo: any): Observable<any> {
        // return this.api.post(`pet/${petId}/photo`, photo);
        return of('').pipe(delay(500));
    }

    // TODO: Example uploading to AWS
    public uploadPictureToAWS(image: File): Observable<string> {
        // return this.api
        //     .get<{ fileUrl: string; uploadUrl: string }>('storage/upload-url', {
        //         params: {
        //             type: 'business_picture',
        //             contentType: image.type,
        //         },
        //     })
        //     .pipe(
        //         switchMap(({ fileUrl, uploadUrl }) => {
        //             return this.http
        //                 .put(uploadUrl, image, {
        //                     headers: {
        //                         'Content-Type': image.type,
        //                     },
        //                 })
        //                 .pipe(map(r => fileUrl));
        //         }),
        //     );
        return of('').pipe(delay(500));
    }

    public removePetAccount(petId: number): Observable<any> {
        return of('').pipe(delay(500));
    }
}
