import { Component, OnInit } from '@angular/core';
import { FaqService } from 'app/main/user/services/faq.service';

@Component({
    selector: 'bar-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

    public questionsList = [];

    constructor(
        private faqService: FaqService
    ) { }

    ngOnInit(): void {
        this.questionsList = this.faqService.getQustionsList();
    }

}
