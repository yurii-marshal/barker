import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { transitionEaseOut } from 'styles/animations';
import { FaqModel } from 'app/shared/models/faq.model';

@Component({
    selector: 'bar-faq-dialog',
    templateUrl: './faq-dialog.component.html',
    styleUrls: ['./faq-dialog.component.scss'],
    animations: [transitionEaseOut()]
})
export class FaqDialogComponent {

    public questionsList: FaqModel[] = [
        {
            question: 'Сколько это стоит?',
            // tslint:disable-next-line: max-line-length
            answer: `Наши поставки осуществляются по средам, четвергам, пятницам или субботам в зависимости от того, где вы живете. На данный момент мы, к сожалению, не можем позволить вам самим выбирать день доставки. Однако, как только вы введете свой адрес во время регистрации на нашем сайте, вы сможете увидеть, какой будет ваш обычный день доставки и точная дата вашей первой доставки. Наши обычные сроки для новых заказов - либо каждый четверг до 12:00, либо каждое воскресенье до 12:00.`
        },
        {
            question: 'Могу ли я получить несколько рецептов в одном заказе?',
            // tslint:disable-next-line: max-line-length
            answer: `<p>Наши поставки осуществляются по средам, четвергам, пятницам или субботам в зависимости от того, где вы живете. На данный момент мы, к сожалению, не можем позволить вам самим выбирать день доставки. Однако, как только вы введете свой адрес во время регистрации на нашем сайте, вы сможете увидеть, какой будет ваш обычный день доставки и точная дата вашей первой доставки. Наши обычные сроки для новых заказов - либо каждый четверг до 12:00, либо каждое воскресенье до 12:00.</p> <p>Поскольку мы закупаем все ингредиенты в свежем виде и готовим их специально для вашего заказа, любые заказы, размещенные после указанного срока, будут приготовлены на следующей неделе или в выходные дни, а доставка будет выполнена не позднее, чем через 13 дней после размещения вашего заказа. Этот процесс позволяет нам предоставлять вашему питомцу индивидуальные блюда, приготовленные только для них, которые всегда свежие и никогда не замораживаются.</p>`
        },
        {
            question: 'Как вы разрабатываете свои рецепты?',
            // tslint:disable-next-line: max-line-length
            answer: `Поскольку мы закупаем все ингредиенты в свежем виде и готовим их специально для вашего заказа, любые заказы, размещенные после указанного срока, будут приготовлены на следующей неделе или в выходные дни, а доставка будет выполнена не позднее, чем через 13 дней после размещения вашего заказа. Этот процесс позволяет нам предоставлять вашему питомцу индивидуальные блюда, приготовленные только для них, которые всегда свежие и никогда не замораживаются.`
        }
    ];

    constructor(
        public dialogRef: MatDialogRef<FaqDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    public close(): void {
        this.dialogRef.close();
    }

}
