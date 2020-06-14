import { FormGroup } from '@angular/forms';
import { isoDateRegExp } from 'app/core/regexps';

export function notFutureDate(c: FormGroup) {
    const value = c.value;

    if (value == null && !isoDateRegExp.test(value)) {
        return null;
    }
    const today = new Date().setHours(0, 0, 0, 0);

    if (+today < +new Date(value)) {
        return { future: true };
    }

    return null;
}
