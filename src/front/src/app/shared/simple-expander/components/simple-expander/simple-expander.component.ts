import { Component, OnInit, Input } from '@angular/core';
import { FaqModel } from 'app/shared/models/faq.model';
import { accordionEnterLeave } from 'styles/animations';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'bar-simple-expander',
    templateUrl: './simple-expander.component.html',
    styleUrls: ['./simple-expander.component.scss'],
    animations: [accordionEnterLeave]
})
export class SimpleExpanderComponent implements OnInit {

    @Input() item: FaqModel;

    public isActive: boolean;

    public header: SafeHtml;
    public body: SafeHtml;

    constructor(
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.header = this.domSanitizer.bypassSecurityTrustHtml(this.item?.question);
        this.body = this.domSanitizer.bypassSecurityTrustHtml(this.item?.answer);
    }

}
