import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductModel } from '../models';
import { RecipeModel } from 'app/main/registration/models';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { PetsService } from '../services/pets.service';
import { Pet, SubscriptionDetails } from 'app/shared/models';
import { DictionariesService } from 'app/core/services/dictionaries.service';
import { SubscriptionService } from '../services/subscription.service';
import { ActivatedRoute } from '@angular/router';
import {
    OrdersHistoryDialogComponent
} from '../dialogs/orders-history-dialog/components/orders-history-dialog/orders-history-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
    ChangeSubscriptionDialogComponent
} from '../dialogs/change-subscription-dialog/components/change-subscription-dialog/change-subscription-dialog.component';

@Component({
    selector: 'bar-delivery',
    templateUrl: './delivery.component.html',
    styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
    public currentPet: Pet;

    public subscription: SubscriptionDetails = {
        delivery: {
            address: 'Киев, пр. Голосеевский 61, кв. 115',
            date: new Date(),
            timeFrom: '18:00',
            timeTo: '20:00',
            disposalDate: new Date(),
            disposalTimeFrom: '12:00',
            disposalTimeTo: '16:00',
            totalAmount: 2000,
            mainRationPrice: 1400,
            additionalRationPrice: 600,
            productsAddedTimeFrom: '16:00',
            productsAddedWeekdayFrom: 'четверга'
        },
        productsList: [],
        paused: false
    };

    public recipe: RecipeModel = {
        id: 1,
        name: 'Курица',
        imgSrc: '../../../../../assets/images/dry-food-chicken.svg',
        price: 2000,
        portionCount: 5,
        portionWeight: 250,
        pauseTimeTo: '16:00',
        pauseWeekdayTo: 'четверга'
    };

    public goodsList: ProductModel[] = [
        {
            id: 0,
            name: 'Куриные сердечки сушеные со вкусом туалетной бумаги',
            price: 500,
            imgSrc: '../../../../../assets/images/chicken-food-package.svg',
            count: 1
        },
        {
            id: 3,
            name: 'Футболка Love eats, размер XXXL',
            price: 2000,
            imgSrc: '../../../../../assets/images/tshort-love.svg',
            count: 4
        },
        {
            id: 7689,
            name: 'Термо ланч-бокс с лого',
            price: 1000,
            imgSrc: '../../../../../assets/images/lunch-box.svg',
            count: 8
        },
        {
            id: 23,
            name: 'Куриные сердечки сушеные со вкусом карантина',
            price: 20,
            imgSrc: '../../../../../assets/images/chicken-food-package.svg',
            count: 2
        },
        {
            id: 6577,
            name: 'Куриные сердечки сушеные со вкусом анабиоза',
            price: 200,
            imgSrc: '../../../../../assets/images/merch.svg',
            count: 1
        }
    ];

    public suggestionList: ProductModel[] = [];

    @ViewChild('availableProductsSlider') availableProductsSlider: NguCarousel<any>;

    public carouselConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        load: this.suggestionList.length,
        loop: false,
        touch: true,
        velocity: 0.2
    };

    constructor(
        private route: ActivatedRoute,
        private petsService: PetsService,
        private subscriptionService: SubscriptionService,
        private dialog: MatDialog,
        public dictionariesService: DictionariesService
    ) { }

    ngOnInit(): void {
        const snapshot = this.route.snapshot.params;

        this.suggestionList = this.dictionariesService.suggestionList;

        this.petsService.getPets().subscribe((pets: Pet[]) => {
            this.currentPet = pets[0];
        });

        this.subscriptionService.getSubscriptionDetails(snapshot?.subscriptionId)
            .subscribe((data: SubscriptionDetails) => {
                // this.subscription = data;
            });
    }

    public addToGoodsList(item: ProductModel) {
        this.goodsList.push(item);
    }

    public removeFromGoodsList(id: number) {
        this.goodsList.splice(this.goodsList.findIndex(item => item.id === id), 1);
    }

    public deliveryHistory(): void {
        this.dialog.open(OrdersHistoryDialogComponent, {
            data: {
                petId: 1
            },
            panelClass: 'orders-history-dialog-container'
        });
    }

    public editDeliveryAddress(): void {
        this.dialog.open(ChangeSubscriptionDialogComponent, {
            panelClass: 'change-subscription-dialog-container'
        });
    }
}
