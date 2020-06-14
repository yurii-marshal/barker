import { Injectable } from '@angular/core';

import { RegistrationSteps, RegistrationStore } from '../models';

@Injectable({
    providedIn: 'root'
})
export class RegistrationStoreService {
    private readonly EXPIRES_OFFSET = 3600000; // 1 hour
    private readonly STORE_KEY = 'registration_steps';

    private get newExpire(): number {
        return +new Date() + this.EXPIRES_OFFSET;
    }

    constructor() { }

    public checkExpire(): void {
        const store = this.getStore();

        if (+new Date() > store.expires) {
            this.removeStore();
        }
    }

    public getStoreValue(entity: 'pet' | 'subscription'): any {
        return this.getStore() ? this.getStore()[entity] : null;
    }

    public patchStoreValue(entity: 'pet' | 'subscription', value: any): void {
        const expires = this.newExpire;

        const currentState = this.getStore();

        currentState[entity] = { ...(currentState[entity] || {}), ...value };
        currentState.expires = expires;

        localStorage.setItem(this.STORE_KEY, this.encode(currentState));
    }

    public get petName(): string {
        return this.getStoreValue('pet')?.name;
    }

    public removeStore(): void {
        localStorage.removeItem(this.STORE_KEY);
    }

    public getActiveStep(): RegistrationSteps {
        return this.getStore().activeStep;
    }

    public setActiveStep(step: RegistrationSteps): void {
        const store = this.getStore();
        store.activeStep = step;
        localStorage.setItem(this.STORE_KEY, this.encode(store));
    }

    private initStore() {
        const store: RegistrationStore = {
            expires: this.newExpire,
            activeStep: RegistrationSteps.Intro,
            pet: null,
            subscription: null
        };
        localStorage.setItem(this.STORE_KEY, this.encode(store));
    }

    private getStore(): RegistrationStore {
        let encoded = localStorage.getItem(this.STORE_KEY);

        if (!encoded) {
            this.initStore();
            encoded = localStorage.getItem(this.STORE_KEY);
        }

        return this.decode(encoded);
    }

    private toBinary(value: string): string {
        const codeUnits = new Uint16Array(value.length);
        for (let i = 0; i < codeUnits.length; i++) {
            codeUnits[i] = value.charCodeAt(i);
        }
        return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
    }

    private fromBinary(binary) {
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < bytes.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return String.fromCharCode(...new Uint16Array(bytes.buffer));
    }

    private encode(value: any): string {
        const stringValue = JSON.stringify(value);
        const converted = this.toBinary(stringValue);

        return btoa(converted);
    }

    private decode(encoded: string): RegistrationStore {
        const decoded = atob(encoded);
        const original = this.fromBinary(decoded);

        return JSON.parse(original);
    }
}
