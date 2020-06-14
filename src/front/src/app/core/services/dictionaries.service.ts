import { Injectable } from '@angular/core';
import { Activity, Pathology, PetFood } from 'app/shared/models';

import { ActivityModel, BreedModel, PathologyModel, PreferModel, RecipeModel } from '../../main/registration/models';
import { Option } from 'app/shared/inputs/models/option.model';
import { ProductModel } from 'app/main/user/models';
import { SubscriptionTypeModel } from 'app/shared/models/subscription-type.model';

@Injectable({
    providedIn: 'root'
})
export class DictionariesService {

    public get breedList(): BreedModel[] {
        return [
            {
                id: 0,
                name: 'болонка'
            },
            {
                id: 1,
                name: 'ротвейлер'
            },
            {
                id: 3,
                name: 'колли'
            }
        ];
    }

    public get activityList(): ActivityModel[] {
        return [
            {
                id: Activity.Little,
                name: 'Немного ленивый',
                imgSrc: './../../../assets/images/activity-1.svg'
            },
            {
                id: Activity.Average,
                name: 'Довольно активный',
                imgSrc: './../../../assets/images/activity-2.svg'
            },
            {
                id: Activity.Highly,
                name: 'Очень активный',
                imgSrc: './../../../assets/images/activity-3.svg'
            }
        ];
    }

    public get pathologiesList(): PathologyModel[] {
        return [
            {
                id: Pathology.Allergy,
                name: 'аллергия',
                value: false
            },
            {
                id: Pathology.GastrointestinalDiseases,
                name: 'желудочно-кишечные заболевания',
                value: false
            },
            {
                id: Pathology.GastrointestinalDiseases,
                name: 'желудочно-кишечные заболевания1',
                value: false
            },
            {
                id: Pathology.Allergy,
                name: 'аллергия1',
                value: false
            },
        ];
    }

    public get prefersList(): PreferModel[] {
        return [
            {
                id: PetFood.DryFood,
                name: 'сухой корм',
                value: false
            },
            {
                id: PetFood.FreezedDryFood,
                name: 'замороженную сухую курицу',
                value: false
            },
            {
                id: PetFood.HomemadeFood,
                name: 'еду домашнего приготовления',
                value: false
            },
            {
                id: PetFood.WetFood,
                name: 'влажный корм',
                value: false
            },
        ];
    }

    public get recipesList(): RecipeModel[] {
        return [
            {
                id: 1,
                name: 'Курица',
                description: [
                    'мясо курицы 65%',
                    'батат',
                    'цукини',
                    'шпинат'
                ],
                imgSrc: './../../../assets/images/beef.svg',
                value: false,

                nutritionList: [
                    { name: 'белки', value: '40 г' },
                    { name: 'жиры', value: '48 г' },
                    { name: 'углеводы', value: ' 12 г' },
                    { name: 'каллорийность', value: '280 ккал' }
                ],
                ingredientList: [
                    {
                        name: 'свинина',
                        imgSrc: './../../../assets/images/recipe/meat.svg',
                        description:
                            // tslint:disable-next-line: max-line-length
                            'богата высококачественным белком и органическим железом. К тому же говяжий жир нормализует энергетический баланс'
                    },
                    {
                        name: 'картофель',
                        imgSrc: './../../../assets/images/recipe/potato.svg',
                        description: 'крахмал'
                    },
                    {
                        name: 'спаржа',
                        imgSrc: './../../../assets/images/recipe/asparagus.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'зеленые яблоки',
                        imgSrc: './../../../assets/images/recipe/green-apple.svg',
                        description: 'витамины'
                    },
                    {
                        name: 'грибы',
                        imgSrc: './../../../assets/images/recipe/mushrooms.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'кале',
                        imgSrc: './../../../assets/images/recipe/kale.svg',
                        description: 'витамины'
                    }
                ]
            },
            {
                id: 5,
                name: 'Индейка',
                description: [
                    'мясо индейки 70%',
                    'коричневый рис',
                    'морковь',
                    'яблоко'
                ],
                imgSrc: './../../../assets/images/beef.svg',
                value: true,

                nutritionList: [
                    { name: 'белки', value: '40 г' },
                    { name: 'жиры', value: '48 г' },
                    { name: 'углеводы', value: ' 12 г' },
                    { name: 'каллорийность', value: '280 ккал' }
                ],
                ingredientList: [
                    {
                        name: 'свинина',
                        imgSrc: './../../../assets/images/recipe/meat.svg',
                        description:
                            // tslint:disable-next-line: max-line-length
                            'богата высококачественным белком и органическим железом. К тому же говяжий жир нормализует энергетический баланс'
                    },
                    {
                        name: 'картофель',
                        imgSrc: './../../../assets/images/recipe/potato.svg',
                        description: 'крахмал'
                    },
                    {
                        name: 'спаржа',
                        imgSrc: './../../../assets/images/recipe/asparagus.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'зеленые яблоки',
                        imgSrc: './../../../assets/images/recipe/green-apple.svg',
                        description: 'витамины'
                    },
                    {
                        name: 'грибы',
                        imgSrc: './../../../assets/images/recipe/mushrooms.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'кале',
                        imgSrc: './../../../assets/images/recipe/kale.svg',
                        description: 'витамины'
                    }
                ]
            },
            {
                id: 10,
                name: 'Говядина',
                description: [
                    'говяжье мясо 80%',
                    'картофель',
                    'яйцо',
                    'морковь',
                    'горох'
                ],
                imgSrc: './../../../assets/images/beef.svg',
                value: false,

                nutritionList: [
                    { name: 'белки', value: '40 г' },
                    { name: 'жиры', value: '48 г' },
                    { name: 'углеводы', value: ' 12 г' },
                    { name: 'каллорийность', value: '280 ккал' }
                ],
                ingredientList: [
                    {
                        name: 'свинина',
                        imgSrc: './../../../assets/images/recipe/meat.svg',
                        description:
                            // tslint:disable-next-line: max-line-length
                            'богата высококачественным белком и органическим железом. К тому же говяжий жир нормализует энергетический баланс'
                    },
                    {
                        name: 'картофель',
                        imgSrc: './../../../assets/images/recipe/potato.svg',
                        description: 'крахмал'
                    },
                    {
                        name: 'спаржа',
                        imgSrc: './../../../assets/images/recipe/asparagus.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'зеленые яблоки',
                        imgSrc: './../../../assets/images/recipe/green-apple.svg',
                        description: 'витамины'
                    },
                    {
                        name: 'грибы',
                        imgSrc: './../../../assets/images/recipe/mushrooms.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'кале',
                        imgSrc: './../../../assets/images/recipe/kale.svg',
                        description: 'витамины'
                    }
                ]
            },
            {
                id: 15,
                name: 'Свинина',
                description: [
                    'мясо свинины 68%',
                    'картофель',
                    'спаржа',
                    'зеленые яблоки',
                    'грибы',
                    'кале'
                ],
                imgSrc: './../../../assets/images/beef.svg',
                value: false,

                nutritionList: [
                    { name: 'белки', value: '40 г' },
                    { name: 'жиры', value: '48 г' },
                    { name: 'углеводы', value: ' 12 г' },
                    { name: 'каллорийность', value: '280 ккал' }
                ],
                ingredientList: [
                    {
                        name: 'свинина',
                        imgSrc: './../../../assets/images/recipe/meat.svg',
                        description:
                            // tslint:disable-next-line: max-line-length
                            'богата высококачественным белком и органическим железом. К тому же говяжий жир нормализует энергетический баланс'
                    },
                    {
                        name: 'картофель',
                        imgSrc: './../../../assets/images/recipe/potato.svg',
                        description: 'крахмал'
                    },
                    {
                        name: 'спаржа',
                        imgSrc: './../../../assets/images/recipe/asparagus.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'зеленые яблоки',
                        imgSrc: './../../../assets/images/recipe/green-apple.svg',
                        description: 'витамины'
                    },
                    {
                        name: 'грибы',
                        imgSrc: './../../../assets/images/recipe/mushrooms.svg',
                        description: 'клетчатка'
                    },
                    {
                        name: 'кале',
                        imgSrc: './../../../assets/images/recipe/kale.svg',
                        description: 'витамины'
                    }
                ]
            }
        ];
    }

    public get subscribesList(): SubscriptionTypeModel[] {
        return [
            {
                id: 1,
                name: 'Каждую неделю',
                description:
                    `Еду можно хранить в холодильнике до 5 дней.
                     Не нужно ничего разогревать или размораживать.`,
                priceCount: 'от 600 грн/неделя',
                imgSrc: './../../../assets/images/subscribe-img-1.svg',
                durationTimeTo: '16:00',
                durationWeekdayTo: 'четверга',
                value: false
            },
            {
                id: 343,
                name: 'Каждые две недели',
                description:
                    `Часть рациона вы храните в холодильнике, а вторую в морозильной камере,
                      чтоб еда на вторую неделю сохранила все полезные свойства`,
                priceCount: '1200 грн/две недели',
                imgSrc: './../../../assets/images/subscribe-img-2.svg',
                durationTimeTo: '16:00',
                durationWeekdayTo: 'четверга',
                value: false
            },
            {
                id: 898999,
                name: 'Каждый месяц',
                description:
                    `Несколько упаковок на первую неделю питания можно хранить в холодильнике.
                     Остальную часть рациона — в морозильной камере.`,
                priceCount: '3200 грн/месяц',
                imgSrc: './../../../assets/images/shape-heart.svg',
                durationTimeTo: '16:00',
                durationWeekdayTo: 'четверга',
                value: true
            }
        ];
    }

    public get suggestionList(): ProductModel[] {
        return [
            {
                id: 0,
                name: 'Куриные сердечки сушеные со вкусом свинины',
                description: '120г штука',
                details: [
                    'Размер М',
                    'Состав: 100% хлопок'
                ],
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            },
            {
                id: 54,
                name: 'Куриные сердечки сушеные со вкусом говядины',
                description: '300г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            },
            {
                id: 657,
                name: 'Куриные сердечки сушеные со вкусом индюшатины',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            },
            {
                id: 658,
                name: 'Куриные сердечки сушеные со вкусом индюшатины',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            },
            {
                id: 659,
                name: 'Куриные сердечки сушеные со вкусом индюшатины',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            },
            {
                id: 700,
                name: 'Куриные сердечки сушеные со вкусом индюшатины',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/chicken-food-package.svg',
                count: 1
            }
        ];
    }

    public get merchandiseList(): ProductModel[] {
        return [
            {
                id: 0,
                name: 'Кепка с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/cap.svg',
                count: 1
            },
            {
                id: 1,
                name: 'Брелок с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/key-fob.svg',
                count: 1
            },
            {
                id: 2,
                name: 'Кепка с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/lunch-box.svg',
                count: 1
            },
            {
                id: 3,
                name: 'Кепка с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/tshort-love.svg',
                count: 1
            },
            {
                id: 4,
                name: 'Кепка с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/cap.svg',
                count: 1
            },
            {
                id: 5,
                name: 'Кепка с логотипом компании',
                description: '120г штука',
                price: 500,
                imgSrc: '../../../../../assets/images/plate-with-logo.svg',
                count: 1
            },
        ];
    }

    public get citiesList(): Option[] {
        return [
            { value: 0, label: 'Kyiv' },
            { value: 1, label: 'Dnipro' },
            { value: 2, label: 'Odessa' },
            { value: 3, label: 'Kharkov' },
            { value: 4, label: 'Lviv' }
        ];
    }

    public get daysList(): Option[] {
        return [
            { value: 0, label: 'по понедельникам' },
            { value: 1, label: 'по вторникам' },
            { value: 2, label: 'по средам' },
            { value: 3, label: 'по четвергам' },
            { value: 4, label: 'по пятницам' },
            { value: 5, label: 'по субботам' },
            { value: 6, label: 'по воскресеньям' }
        ];
    }

    public get weekDaysBy(): string[] {
        return [
            'в воскресенье',
            'в понедельник',
            'во вторник',
            'в среду',
            'в четверг',
            'в пятницу',
            'в субботу'
        ];
    }

    public get timeList(): Option[] {
        return [
            { value: 0, label: '07:00 / 11:00' },
            { value: 1, label: '11:00 / 15:00' },
            { value: 2, label: '15:00 / 18:00' },
            { value: 3, label: '18:00 / 21:00' }
        ];
    }

    constructor() { }

    public getBreedById(id: number): BreedModel {
        return this.breedList.find((breed: BreedModel) => breed.id === id);
    }

    public getActivityById(id: Activity): ActivityModel {
        return this.activityList.find((activity: ActivityModel) => activity.id === id);
    }

    public getPathologyById(id: Pathology): PathologyModel {
        return this.pathologiesList.find((pathology: PathologyModel) => pathology.id === id);
    }

    public getPreferById(id: PetFood): PreferModel {
        return this.prefersList.find((prefer: PreferModel) => prefer.id === id);
    }

    public getSubscriptionById(id: number): SubscriptionTypeModel {
        return this.subscribesList.find((subscribe: SubscriptionTypeModel) => subscribe.id === id);
    }
}
