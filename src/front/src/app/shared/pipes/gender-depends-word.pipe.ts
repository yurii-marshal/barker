import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '../models/gender.enum';

@Pipe({
    name: 'byGender',
    pure: true
})
export class GenderDependsWordPipe implements PipeTransform {
    transform(value: Gender, maleWord: string, femaleWord: string): string {
        return Number(value) === Gender.male ? maleWord : femaleWord;
    }
}
