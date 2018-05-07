import { Component } from '@angular/core';
import { Address } from '../interfaces/address.interface'


@Component({
    selector: 'qs-user',
    template: '< h2 > 大家好，我是{{ name }}</h2>< p > 我来自 < strong > {{address.province}}</strong>省,< strong > {{address.city}}</strong>市 < /p>< p > {{ address | json }}</p>'
})

export class UserComponent {
    name: string;
    address: Address;
    constructor() {
        this.name = 'test2';
        this.address = {
            province: '福建',
            city: '厦门'
        };
    }
}