import { Injectable } from '@angular/core';
import { removeArrayItem } from 'ionic-angular/umd/util/util';


/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {


  items = [
    {
      name: "Apples",
      quantity: 2,
      price: 2.99
    }, {
      name: "Bananas",
      quantity: 1,
      price: 1.49
    }, {
      name: "Cantelope",
      quantity: 1,
      price: 1.99
    }, {
      name: "Dragon Fruit",
      quantity: 1,
      price: 3.00
    },
  ];

  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems() {
    return this.items;
  }
  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;
  }

}
