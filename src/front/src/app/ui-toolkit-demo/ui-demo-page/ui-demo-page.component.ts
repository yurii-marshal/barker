import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { transitionEaseOut } from 'styles/animations';

export interface Order {
    id: number;
    name: string;
    selected: boolean;
}

@Component({
    selector: 'bar-ui-demo-page',
    templateUrl: './ui-demo-page.component.html',
    styleUrls: ['./ui-demo-page.component.scss'],
    animations: [transitionEaseOut()]
})
export class UiDemoPageComponent {
    public ordersData: Order[] = [
        { id: 1, name: '9:00 / 10:00', selected: false },
        { id: 2, name: '10:00 / 11:00', selected: false },
        { id: 3, name: '12:00 / 15:00', selected: true },
        { id: 4, name: '15:00 / 18:00', selected: false }
    ];

    public ordersForm: FormGroup;
    public inputsForm: FormGroup;

    public chosenListBoxItemes = [];
    public chosenCheckboxes = [];

    public ListBoxItem: boolean;

    public imgSrc1 = 'assets/images/veniamin.jpeg';
    public imgSrc2 = 'assets/images/persik.jpeg';
    public avatarName = 'Вениамин';

    public cartCount = 3;
    public cartPrice = 1520.44;
    public radioGroup: FormGroup = new FormGroup({
        gender: this.fb.control({ value: 'male', disabled: false })
    });

    public selectItems = Array.from({ length: 31 }).map((_, i) => ({
        value: i,
        label: `option ${i + 1}`
    }));

    public selectControl: FormControl = new FormControl(null);

    get orders(): AbstractControl[] {
        return (this.ordersForm.get('orders') as FormArray).controls;
    }

    constructor(private fb: FormBuilder) {
        this.ordersForm = this.fb.group({
            orders: this.buildOrders()
        });
        this.inputsForm = this.fb.group({
            inputValue: this.fb.control({ value: '', disabled: false }),
            textareaValue: this.fb.control({ value: '', disabled: false })
        });

        this.selectControl.valueChanges.subscribe(res => {
            console.log(res);
        });
    }

    private buildOrders(): FormArray {
        const arr = this.ordersData.map((order, index) => {
            return this.fb.control({
                value: order.selected,
                disabled: index === this.ordersData.length - 1
            });
        });
        return this.fb.array(arr);
    }

    public submitListBoxItemes(value: any): void {
        this.chosenListBoxItemes = value.orders;
    }

    public submitCheckboxes(value: any): void {
        this.chosenCheckboxes = value.orders
            .map((selected: boolean, i: number) => {
                if (selected) {
                    return {
                        name: this.ordersData[i].name,
                        id: this.ordersData[i].id
                    };
                }
            })
            .filter((item: object) => item);
    }

}
